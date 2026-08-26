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
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    id: "intermediate",
    title: "Mục tiêu 600 - 700+",
    desc: "Cấu trúc câu phức tạp, bẫy từ vựng thông dụng",
    min: 551,
    max: 700,
    icon: TrendingUp,
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
  },
  {
    id: "advanced",
    title: "Mục tiêu 750 - 990",
    desc: "Từ vựng chuyên ngành khó, ngữ pháp nâng cao",
    min: 701,
    max: 990,
    icon: Award,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800",
  },
];

export default function LevelView() {
  const { state, dispatch } = useContext(AppContext);

  const startLevelPractice = (min, max) => {
    playSound("click", state.settings.sfxEnabled);
    dispatch({
      type: "START_PRACTICE",
      payload: { mode: "level", min, max },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Luyện tập theo Level</h2>
        <p className="text-gray-500">
          Chọn mốc điểm TOEIC mục tiêu để luyện tập các câu hỏi phù hợp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {LEVEL_TIERS.map((tier) => {
          const Icon = tier.icon;
          // Đếm số câu hỏi có trong Bank phù hợp với Level này
          const availableQuestions = QUESTION_BANK.filter(
            (q) => q.toeicLevel >= tier.min && q.toeicLevel <= tier.max,
          ).length;

          return (
            <div
              key={tier.id}
              className={`flex flex-col bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border ${tier.borderColor} hover:shadow-md transition-shadow relative overflow-hidden group`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${tier.bg} ${tier.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1">
                {tier.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-medium text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                  {availableQuestions} câu hỏi
                </span>
                <button
                  onClick={() => startLevelPractice(tier.min, tier.max)}
                  disabled={availableQuestions === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-transform ${
                    availableQuestions > 0
                      ? "bg-blue-600 hover:bg-blue-700 text-white group-hover:-translate-y-1"
                      : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <Play size={16} />{" "}
                  {availableQuestions > 0 ? "Bắt đầu" : "Chưa có data"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
