import React, { useContext } from "react";
import { Target, TrendingUp, Award, Play } from "lucide-react";
import { AppContext } from "../../context/AppContext";
import { QUESTION_BANK } from "../../data/questions";
import { playSound } from "../../utils/sound";

const LEVEL_TIERS = [
  {
    id: "beginner",
    title: "Mục tiêu 450 - 550+",
    desc: "Nắm vững ngữ pháp cơ bản, từ vựng nền tảng",
    min: 0,
    max: 550,
    icon: Target,

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
    id: "intermediate",
    title: "Mục tiêu 600 - 700+",
    desc: "Cấu trúc câu phức tạp, bẫy từ vựng thông dụng",
    min: 551,
    max: 700,
    icon: TrendingUp,

    color: `
      text-amber-600
      dark:text-amber-400
    `,

    bg: `
      bg-amber-50
      dark:bg-amber-500/[0.10]
    `,

    borderColor: `
      border-amber-200
      dark:border-amber-400/15
    `,

    glow: `
      dark:group-hover:shadow-amber-500/10
    `,
  },

  {
    id: "advanced",
    title: "Mục tiêu 750 - 990",
    desc: "Từ vựng chuyên ngành khó, ngữ pháp nâng cao",
    min: 701,
    max: 990,
    icon: Award,

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

export default function LevelView() {
  const { state, dispatch } = useContext(AppContext);

  const startLevelPractice = (min, max) => {
    playSound("click", state.settings.sfxEnabled);

    dispatch({
      type: "START_PRACTICE",
      payload: {
        mode: "level",
        min,
        max,
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* =====================================================
          HEADER
      ====================================================== */}

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
          Luyện tập theo Level
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
          Chọn mốc điểm TOEIC mục tiêu để luyện tập các câu hỏi phù hợp.
        </p>
      </div>

      {/* =====================================================
          LEVEL CARDS
      ====================================================== */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {LEVEL_TIERS.map((tier) => {
          const Icon = tier.icon;

          const availableQuestions = QUESTION_BANK.filter(
            (q) => q.toeicLevel >= tier.min && q.toeicLevel <= tier.max,
          ).length;

          return (
            <div
              key={tier.id}
              className={`
                group relative
                flex flex-col
                overflow-hidden
                rounded-3xl
                p-6

                bg-white
                border
                ${tier.borderColor}

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

                ${tier.glow}
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

                  ${tier.bg}
                `}
              />

              {/* =================================================
                  ICON
              ================================================== */}

              <div
                className={`
                  relative
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl

                  ${tier.bg}
                  ${tier.color}

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

              {/* =================================================
                  TITLE
              ================================================== */}

              <h3
                className="
                  relative
                  mb-2
                  text-xl
                  font-bold
                  tracking-tight

                  text-gray-900
                  dark:text-zinc-100
                "
              >
                {tier.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className="
                  relative
                  mb-7
                  flex-1
                  text-sm
                  leading-6

                  text-gray-500
                  dark:text-zinc-400
                "
              >
                {tier.desc}
              </p>

              {/* =================================================
                  FOOTER
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                  gap-3
                  border-t
                  border-gray-100
                  pt-4

                  dark:border-white/[0.07]
                "
              >
                {/* Question count */}

                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    px-3
                    py-1.5
                    text-xs
                    font-semibold

                    bg-gray-100
                    text-gray-500

                    dark:bg-white/[0.06]
                    dark:text-zinc-400
                    dark:ring-1
                    dark:ring-white/[0.05]
                  "
                >
                  {availableQuestions} câu hỏi
                </span>

                {/* Start button -----*/}

                <button
                  onClick={() => startLevelPractice(tier.min, tier.max)}
                  disabled={availableQuestions === 0}
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    px-4
                    py-2.5
                    text-sm
                    font-bold

                    transition-all
                    duration-200

                    ${
                      availableQuestions > 0
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

                  {availableQuestions > 0 ? "Bắt đầu" : "Chưa có data"}
                </button>
              </div>

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
                    tier.id === "beginner"
                      ? "bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                      : tier.id === "intermediate"
                        ? "bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
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
