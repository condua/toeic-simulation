import React, { useContext } from "react";
import {
  BookOpen,
  Target,
  Flame,
  AlertCircle,
  RotateCcw,
  Brain,
  Trophy,
  BarChart3,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { AppContext } from "../context/AppContext";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const { state, dispatch } = useContext(AppContext);
  const stats = state.stats;

  const accuracy =
    stats.totalAnswered === 0
      ? 0
      : Math.round((stats.correct / stats.totalAnswered) * 100);

  const chartData = Object.keys(stats.categoryStats)
    .map((cat) => ({
      name: cat,
      accuracy: Math.round(
        (stats.categoryStats[cat].correct / stats.categoryStats[cat].total) *
          100,
      ),
      total: stats.categoryStats[cat].total,
    }))
    .filter((d) => d.total > 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Welcome back! 👋</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Ready to master TOEIC Part 5?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Questions Answered"
          value={stats.totalAnswered.toString()}
          icon={<BookOpen className="text-blue-500" />}
          color="bg-blue-50 dark:bg-blue-900/20"
        />
        <StatCard
          title="Average Accuracy"
          value={`${accuracy}%`}
          icon={<Target className="text-green-500" />}
          color="bg-green-50 dark:bg-green-900/20"
        />
        <StatCard
          title="Current Streak"
          value={`${stats.currentStreak} Days`}
          icon={<Flame className="text-orange-500" />}
          color="bg-orange-50 dark:bg-orange-900/20"
        />
        <StatCard
          title="Mistakes to Review"
          value={Object.keys(state.mistakes).length.toString()}
          icon={<AlertCircle className="text-red-500" />}
          color="bg-red-50 dark:bg-red-900/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4">Smart Practice</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() =>
                  dispatch({
                    type: "START_PRACTICE",
                    payload: { mode: "random" },
                  })
                }
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-left hover:shadow-lg transition-all"
              >
                <Brain className="text-white/80 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-lg">Quick Practice</h4>
                <p className="text-blue-100 text-sm mt-1">
                  Mixed TOEIC Part 5 questions
                </p>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "START_PRACTICE",
                    payload: { mode: "mistakes" },
                  })
                }
                disabled={Object.keys(state.mistakes).length === 0}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500 to-pink-600 p-6 text-left hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCcw className="text-white/80 w-8 h-8 mb-4 group-hover:-rotate-90 transition-transform" />
                <h4 className="text-white font-bold text-lg">
                  Review Mistakes
                </h4>
                <p className="text-red-100 text-sm mt-1">
                  {Object.keys(state.mistakes).length === 0
                    ? "No mistakes yet!"
                    : `Practice ${Object.keys(state.mistakes).length} difficult questions`}
                </p>
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-6">Performance by Category</h3>
            {chartData.length > 0 ? (
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke={state.settings.darkMode ? "#374151" : "#e5e7eb"}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: state.settings.darkMode ? "#9ca3af" : "#6b7280",
                        fontSize: 12,
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: state.settings.darkMode ? "#9ca3af" : "#6b7280",
                        fontSize: 12,
                      }}
                      domain={[0, 100]}
                    />
                    <RechartsTooltip
                      cursor={{
                        fill: state.settings.darkMode ? "#374151" : "#f3f4f6",
                      }}
                      contentStyle={{
                        backgroundColor: state.settings.darkMode
                          ? "#1f2937"
                          : "#fff",
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Bar dataKey="accuracy" radius={[4, 4, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.accuracy > 70
                              ? "#10b981"
                              : entry.accuracy > 40
                                ? "#f59e0b"
                                : "#ef4444"
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-gray-400">
                <BarChart3 size={48} className="mb-4 opacity-50" />
                <p>Answer more questions to see your statistics.</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Trophy className="text-yellow-500" /> Recent Badges
            </h3>
            <div className="space-y-4">
              {stats.totalAnswered >= 10 ? (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-800 flex items-center justify-center text-xl">
                    🚀
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Getting Started</h4>
                    <p className="text-xs text-gray-500">
                      Answered 10 questions
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">
                  Keep practicing to earn badges!
                </p>
              )}
              {accuracy >= 80 && stats.totalAnswered >= 20 && (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-xl">
                    🎯
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Sharp Shooter</h4>
                    <p className="text-xs text-gray-500">
                      Maintain 80%+ accuracy
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
