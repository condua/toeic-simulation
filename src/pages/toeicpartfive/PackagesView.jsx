import React, { useContext } from "react";
import {
  Layers,
  Play,
  Clock,
  Target,
  Zap,
  Crown,
  CheckCircle2,
} from "lucide-react";

import { AppContext } from "../../context/AppContext";
import { QUESTION_BANK } from "../../data/questions";
import { playSound } from "../../utils/sound";

/**
 * ============================================================
 * PACKAGE CONFIG
 * ============================================================
 */

const PACKAGES = [
  {
    id: "package-30",
    size: 30,
    title: "Gói 30 câu",
    subtitle: "Khởi động nhanh",
    description:
      "Phù hợp để luyện tập hằng ngày, kiểm tra nhanh kiến thức và duy trì thói quen học TOEIC.",

    distribution: {
      basic: 18,
      advanced: 9,
      expert: 3,
    },

    icon: Zap,

    badge: "Nhanh",

    color: `
      text-emerald-600
      dark:text-emerald-400
    `,

    bg: `
      bg-emerald-50
      dark:bg-emerald-500/[0.10]
    `,

    borderColor: `
      border-emerald-200
      dark:border-emerald-400/15
    `,

    glow: `
      dark:group-hover:shadow-emerald-500/10
    `,
  },

  {
    id: "package-50",
    size: 50,
    title: "Gói 50 câu",
    subtitle: "Luyện tập tiêu chuẩn",
    description:
      "Cân bằng giữa thời gian học và độ bao phủ kiến thức. Phù hợp cho một buổi luyện TOEIC hoàn chỉnh.",

    distribution: {
      basic: 30,
      advanced: 15,
      expert: 5,
    },

    icon: Target,

    badge: "Phổ biến",

    color: `
      text-blue-600
      dark:text-blue-400
    `,

    bg: `
      bg-blue-50
      dark:bg-blue-500/[0.10]
    `,

    borderColor: `
      border-blue-200
      dark:border-blue-400/15
    `,

    glow: `
      dark:group-hover:shadow-blue-500/10
    `,
  },

  {
    id: "package-100",
    size: 100,
    title: "Gói 100 câu",
    subtitle: "Thử thách toàn diện",
    description:
      "Khối lượng lớn câu hỏi giúp bạn rèn sức bền, độ chính xác và khả năng xử lý câu hỏi khó.",

    distribution: {
      basic: 60,
      advanced: 30,
      expert: 10,
    },

    icon: Crown,

    badge: "Thử thách",

    color: `
      text-rose-600
      dark:text-rose-400
    `,

    bg: `
      bg-rose-50
      dark:bg-rose-500/[0.10]
    `,

    borderColor: `
      border-rose-200
      dark:border-rose-400/15
    `,

    glow: `
      dark:group-hover:shadow-rose-500/10
    `,
  },
];

/**
 * ============================================================
 * LEVEL RANGES
 * ============================================================
 *
 * 450–699  → 60%
 * 700–899  → 30%
 * 900–990  → 10%
 */

const LEVEL_RANGES = {
  basic: {
    min: 0,
    max: 699,
  },

  advanced: {
    min: 700,
    max: 799,
  },

  expert: {
    min: 800,
    max: 990,
  },
};

/**
 * ============================================================
 * HELPERS
 * ============================================================
 */

/**
 * Lấy câu hỏi theo khoảng TOEIC level.
 */
const getQuestionsByRange = (questions, min, max) => {
  return questions.filter(
    (question) => question.toeicLevel >= min && question.toeicLevel <= max,
  );
};

/**
 * Lấy N câu và sắp xếp từ dễ → khó.
 *
 * Lưu ý:
 * - Không random ở bước này vì yêu cầu là easy → hard.
 * - slice() để không mutate QUESTION_BANK.
 */
const getSortedQuestions = (questions, count) => {
  return [...questions]
    .sort((a, b) => a.toeicLevel - b.toeicLevel)
    .slice(0, count);
};

/**
 * Tạo package theo đúng tỷ lệ:
 *
 * 60% : 450–699
 * 30% : 700–899
 * 10% : 900–990
 *
 * Cuối cùng tiếp tục sort toàn bộ package:
 * easy → medium → hard
 */
const buildPackageQuestions = (size) => {
  const basicQuestions = getQuestionsByRange(
    QUESTION_BANK,
    LEVEL_RANGES.basic.min,
    LEVEL_RANGES.basic.max,
  );

  const advancedQuestions = getQuestionsByRange(
    QUESTION_BANK,
    LEVEL_RANGES.advanced.min,
    LEVEL_RANGES.advanced.max,
  );

  const expertQuestions = getQuestionsByRange(
    QUESTION_BANK,
    LEVEL_RANGES.expert.min,
    LEVEL_RANGES.expert.max,
  );

  const basicCount = Math.round(size * 0.6);
  const advancedCount = Math.round(size * 0.3);

  // Đảm bảo tổng số câu luôn chính xác bằng `size`
  const expertCount = size - basicCount - advancedCount;

  const selectedBasic = getSortedQuestions(basicQuestions, basicCount);

  const selectedAdvanced = getSortedQuestions(advancedQuestions, advancedCount);

  const selectedExpert = getSortedQuestions(expertQuestions, expertCount);

  return [...selectedBasic, ...selectedAdvanced, ...selectedExpert].sort(
    (a, b) => a.toeicLevel - b.toeicLevel,
  );
};

/**
 * Kiểm tra package có đủ câu hỏi hay không.
 */
const getPackageAvailability = (size) => {
  const questions = buildPackageQuestions(size);

  return {
    available: questions.length,
    required: size,
    isEnough: questions.length >= size,
  };
};

/**
 * ============================================================
 * COMPONENT
 * ============================================================
 */

export default function PackagesView() {
  const { state, dispatch } = useContext(AppContext);

  /**
   * ----------------------------------------------------------
   * START PACKAGE
   * ----------------------------------------------------------
   */
  const startPackagePractice = (packageInfo) => {
    const { size } = packageInfo;

    const questions = buildPackageQuestions(size);

    if (questions.length < size) {
      playSound("click", state.settings.sfxEnabled);
      return;
    }

    playSound("click", state.settings.sfxEnabled);

    /**
     * Gửi toàn bộ câu hỏi đã được chọn vào practice.
     *
     * `questions` đã:
     * - đúng tỷ lệ 60 / 30 / 10
     * - sắp xếp từ dễ → khó
     */
    dispatch({
      type: "START_PRACTICE",
      payload: {
        mode: "package",

        packageSize: size,

        questions,

        distribution: {
          basic: Math.round(size * 0.6),
          advanced: Math.round(size * 0.3),
          expert: size - Math.round(size * 0.6) - Math.round(size * 0.3),
        },
      },
    });
  };

  /**
   * ----------------------------------------------------------
   * AVAILABLE QUESTIONS
   * ----------------------------------------------------------
   */

  const basicTotal = getQuestionsByRange(
    QUESTION_BANK,
    LEVEL_RANGES.basic.min,
    LEVEL_RANGES.basic.max,
  ).length;

  const advancedTotal = getQuestionsByRange(
    QUESTION_BANK,
    LEVEL_RANGES.advanced.min,
    LEVEL_RANGES.advanced.max,
  ).length;

  const expertTotal = getQuestionsByRange(
    QUESTION_BANK,
    LEVEL_RANGES.expert.min,
    LEVEL_RANGES.expert.max,
  ).length;

  return (
    <div className="space-y-8">
      {/* ======================================================
          HEADER
      ====================================================== */}

      <div>
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl

              bg-blue-50
              text-blue-600

              dark:bg-blue-500/[0.10]
              dark:text-blue-400
            "
          >
            <Layers size={22} />
          </div>

          <div>
            <h2
              className="
                text-2xl
                font-bold
                tracking-tight

                text-gray-900
                dark:text-zinc-100
              "
            >
              Luyện tập theo gói
            </h2>

            <p
              className="
                mt-1.5
                text-sm
                leading-6

                text-gray-500
                dark:text-zinc-400
              "
            >
              Chọn số lượng câu hỏi phù hợp với thời gian học của bạn.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================
          DISTRIBUTION INFO
      ====================================================== */}

      <div
        className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm

          dark:border-white/[0.08]
          dark:bg-[#15171c]
        "
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3
              className="
                text-sm
                font-bold
                text-gray-900
                dark:text-zinc-100
              "
            >
              Phân bổ câu hỏi
            </h3>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-gray-500
                dark:text-zinc-400
              "
            >
              Các gói đều được sắp xếp từ dễ đến nâng cao.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* 60% */}
          <div
            className="
              rounded-xl
              bg-emerald-50
              p-4

              dark:bg-emerald-500/[0.08]
            "
          >
            <div className="flex items-center justify-between">
              <span
                className="
                  text-xs
                  font-semibold
                  text-emerald-700
                  dark:text-emerald-400
                "
              >
                Cơ bản
              </span>

              <span
                className="
                  text-lg
                  font-black
                  text-emerald-700
                  dark:text-emerald-400
                "
              >
                60%
              </span>
            </div>

            <p
              className="
                mt-1
                text-xs
                text-emerald-600/80
                dark:text-emerald-400/70
              "
            >
              TOEIC 450 – 699
            </p>

            <p
              className="
                mt-2
                text-xs
                text-gray-500
                dark:text-zinc-500
              "
            >
              {basicTotal} câu có sẵn
            </p>
          </div>

          {/* 30% */}
          <div
            className="
              rounded-xl
              bg-blue-50
              p-4

              dark:bg-blue-500/[0.08]
            "
          >
            <div className="flex items-center justify-between">
              <span
                className="
                  text-xs
                  font-semibold
                  text-blue-700
                  dark:text-blue-400
                "
              >
                Nâng cao
              </span>

              <span
                className="
                  text-lg
                  font-black
                  text-blue-700
                  dark:text-blue-400
                "
              >
                30%
              </span>
            </div>

            <p
              className="
                mt-1
                text-xs
                text-blue-600/80
                dark:text-blue-400/70
              "
            >
              TOEIC 700 – 899
            </p>

            <p
              className="
                mt-2
                text-xs
                text-gray-500
                dark:text-zinc-500
              "
            >
              {advancedTotal} câu có sẵn
            </p>
          </div>

          {/* 10% */}
          <div
            className="
              rounded-xl
              bg-rose-50
              p-4

              dark:bg-rose-500/[0.08]
            "
          >
            <div className="flex items-center justify-between">
              <span
                className="
                  text-xs
                  font-semibold
                  text-rose-700
                  dark:text-rose-400
                "
              >
                Chuyên gia
              </span>

              <span
                className="
                  text-lg
                  font-black
                  text-rose-700
                  dark:text-rose-400
                "
              >
                10%
              </span>
            </div>

            <p
              className="
                mt-1
                text-xs
                text-rose-600/80
                dark:text-rose-400/70
              "
            >
              TOEIC 900 – 990
            </p>

            <p
              className="
                mt-2
                text-xs
                text-gray-500
                dark:text-zinc-500
              "
            >
              {expertTotal} câu có sẵn
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================
          PACKAGE CARDS
      ====================================================== */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {PACKAGES.map((pkg) => {
          const Icon = pkg.icon;

          const availability = getPackageAvailability(pkg.size);

          const isAvailable = availability.isEnough;

          return (
            <div
              key={pkg.id}
              className={`
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                border
                p-6

                bg-white
                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl

                dark:bg-[#15171c]
                dark:border-white/[0.08]
                dark:shadow-black/10

                dark:hover:border-white/[0.14]
                dark:hover:bg-[#181a20]
                dark:hover:shadow-2xl

                ${pkg.borderColor}
                ${pkg.glow}
              `}
            >
              {/* =================================================
                  DECORATIVE GLOW
              ================================================== */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  blur-3xl
                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-100

                  ${pkg.bg}
                `}
              />

              {/* =================================================
                  ICON
              ================================================== */}

              <div className="flex items-start justify-between">
                <div
                  className={`
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl

                    ${pkg.bg}
                    ${pkg.color}

                    ring-1
                    ring-inset
                    ring-black/[0.04]

                    dark:ring-white/[0.06]

                    transition-transform
                    duration-300

                    group-hover:scale-105
                  `}
                >
                  <Icon size={27} strokeWidth={2} />
                </div>

                <span
                  className={`
                    inline-flex
                    items-center
                    rounded-full
                    px-3
                    py-1.5
                    text-[11px]
                    font-bold

                    ${pkg.bg}
                    ${pkg.color}
                  `}
                >
                  {pkg.badge}
                </span>
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}

              <div className="relative mt-5">
                <h3
                  className="
                    text-xl
                    font-bold
                    tracking-tight

                    text-gray-900
                    dark:text-zinc-100
                  "
                >
                  {pkg.title}
                </h3>

                <p
                  className={`
                    mt-1
                    text-xs
                    font-semibold

                    ${pkg.color}
                  `}
                >
                  {pkg.subtitle}
                </p>
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className="
                  relative
                  mt-4
                  min-h-[72px]

                  text-sm
                  leading-6

                  text-gray-500
                  dark:text-zinc-400
                "
              >
                {pkg.description}
              </p>

              {/* =================================================
                  DISTRIBUTION
              ================================================== */}

              <div className="relative mt-6 space-y-2.5">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    text-xs
                  "
                >
                  <span className="text-gray-500 dark:text-zinc-500">
                    450 – 699
                  </span>

                  <span
                    className="
                      font-bold
                      text-gray-700
                      dark:text-zinc-300
                    "
                  >
                    {pkg.distribution.basic} câu
                  </span>
                </div>

                <div
                  className="
                    h-1.5
                    overflow-hidden
                    rounded-full
                    bg-gray-100

                    dark:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-emerald-500
                    "
                    style={{
                      width: "60%",
                    }}
                  />
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    text-xs
                  "
                >
                  <span className="text-gray-500 dark:text-zinc-500">
                    700 – 899
                  </span>

                  <span
                    className="
                      font-bold
                      text-gray-700
                      dark:text-zinc-300
                    "
                  >
                    {pkg.distribution.advanced} câu
                  </span>
                </div>

                <div
                  className="
                    h-1.5
                    overflow-hidden
                    rounded-full
                    bg-gray-100

                    dark:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-blue-500
                    "
                    style={{
                      width: "30%",
                    }}
                  />
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    text-xs
                  "
                >
                  <span className="text-gray-500 dark:text-zinc-500">
                    900 – 990
                  </span>

                  <span
                    className="
                      font-bold
                      text-gray-700
                      dark:text-zinc-300
                    "
                  >
                    {pkg.distribution.expert} câu
                  </span>
                </div>

                <div
                  className="
                    h-1.5
                    overflow-hidden
                    rounded-full
                    bg-gray-100

                    dark:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-rose-500
                    "
                    style={{
                      width: "10%",
                    }}
                  />
                </div>
              </div>

              {/* =================================================
                  TOTAL / STATUS
              ================================================== */}

              <div
                className="
                  relative
                  mt-6
                  flex
                  items-center
                  gap-2
                  border-t
                  border-gray-100
                  pt-4

                  dark:border-white/[0.07]
                "
              >
                {isAvailable ? (
                  <>
                    <CheckCircle2
                      size={15}
                      className="
                        text-emerald-500
                        dark:text-emerald-400
                      "
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        text-gray-500
                        dark:text-zinc-400
                      "
                    >
                      Đủ {pkg.size} câu hỏi
                    </span>
                  </>
                ) : (
                  <>
                    <Clock
                      size={15}
                      className="
                        text-amber-500
                        dark:text-amber-400
                      "
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        text-gray-500
                        dark:text-zinc-400
                      "
                    >
                      Có {availability.available}/{pkg.size} câu
                    </span>
                  </>
                )}
              </div>

              {/* =================================================
                  BUTTON
              ================================================== */}

              <button
                onClick={() => startPackagePractice(pkg)}
                disabled={!isAvailable}
                className={`
                  relative
                  mt-5
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  px-4
                  py-3

                  text-sm
                  font-bold

                  transition-all
                  duration-200

                  ${
                    isAvailable
                      ? `
                        bg-blue-600
                        text-white
                        shadow-lg
                        shadow-blue-600/20

                        hover:bg-blue-500
                        hover:shadow-blue-500/30

                        group-hover:-translate-y-0.5
                      `
                      : `
                        cursor-not-allowed
                        bg-gray-100
                        text-gray-400

                        dark:bg-white/[0.05]
                        dark:text-zinc-600
                      `
                  }
                `}
              >
                <Play size={15} fill="currentColor" />

                {isAvailable ? `Bắt đầu ${pkg.size} câu` : "Chưa đủ dữ liệu"}
              </button>

              {/* =================================================
                  BOTTOM ACCENT
              ================================================== */}

              <div
                className={`
                  absolute
                  bottom-0
                  left-6
                  right-6
                  h-px
                  opacity-0

                  transition-opacity
                  duration-300

                  group-hover:opacity-100

                  ${
                    pkg.id === "package-30"
                      ? "bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                      : pkg.id === "package-50"
                        ? "bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                        : "bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"
                  }
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
