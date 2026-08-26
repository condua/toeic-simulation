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

import { AppContext } from "../../context/AppContext";
import StatCard from "../../components/StatCard";

export default function Dashboard() {
  const { state, dispatch } = useContext(AppContext);

  const stats = state.stats;
  const isDark = state.settings.darkMode;

  const mistakesCount = Object.keys(state.mistakes).length;

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
    .filter((item) => item.total > 0);

  /* =========================================================
     DESIGN SYSTEM
  ========================================================= */

  const cardClass = `
    rounded-2xl
    border
    transition-all duration-200
    ${
      isDark
        ? "bg-slate-900/70 border-slate-700/70 hover:border-slate-600"
        : "bg-white border-slate-200 hover:border-slate-300"
    }
  `;

  const headingClass = `
    text-lg font-bold
    ${isDark ? "text-slate-100" : "text-slate-800"}
  `;

  const secondaryTextClass = `
    ${isDark ? "text-slate-400" : "text-slate-500"}
  `;

  /* =========================================================
     ACTIONS
  ========================================================= */

  const startPractice = (mode) => {
    dispatch({
      type: "START_PRACTICE",
      payload: { mode },
    });
  };

  return (
    <div className="space-y-7 pb-10">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div>
        <h2
          className={`
            text-2xl font-bold tracking-tight
            ${isDark ? "text-white" : "text-slate-900"}
          `}
        >
          Welcome back! 👋
        </h2>

        <p className={`mt-1 text-sm ${secondaryTextClass}`}>
          Ready to master TOEIC Part 5?
        </p>
      </div>

      {/* =====================================================
          STAT CARDS
      ====================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Questions Answered"
          value={stats.totalAnswered.toString()}
          icon={<BookOpen className="text-blue-500" />}
          color={isDark ? "bg-blue-500/10" : "bg-blue-50"}
        />

        <StatCard
          title="Average Accuracy"
          value={`${accuracy}%`}
          icon={<Target className="text-emerald-500" />}
          color={isDark ? "bg-emerald-500/10" : "bg-emerald-50"}
        />

        <StatCard
          title="Current Streak"
          value={`${stats.currentStreak} Days`}
          icon={<Flame className="text-orange-500" />}
          color={isDark ? "bg-orange-500/10" : "bg-orange-50"}
        />

        <StatCard
          title="Mistakes to Review"
          value={mistakesCount.toString()}
          icon={<AlertCircle className="text-red-500" />}
          color={isDark ? "bg-red-500/10" : "bg-red-50"}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ===================================================
            LEFT COLUMN
        ==================================================== */}
        <div className="lg:col-span-2 space-y-6">
          {/* =================================================
              SMART PRACTICE
          ================================================== */}
          <section className={`${cardClass} p-6`}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className={headingClass}>Smart Practice</h3>

                <p
                  className={`
                    text-xs mt-1
                    ${secondaryTextClass}
                  `}
                >
                  Choose how you want to practice today.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Quick Practice */}
              <button
                type="button"
                onClick={() => startPractice("random")}
                className="
                  group relative
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-500
                  via-blue-600
                  to-indigo-700
                  p-6
                  text-left
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-blue-500/20
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    -right-10
                    -bottom-10
                    w-32 h-32
                    rounded-full
                    bg-white/10
                    blur-3xl
                    transition-transform duration-500
                    group-hover:scale-125
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex items-center justify-center
                    w-11 h-11
                    rounded-xl
                    bg-white/10
                    backdrop-blur-sm
                    mb-5
                  "
                >
                  <Brain
                    className="
                      text-white
                      w-6 h-6
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="relative">
                  <h4 className="text-white font-bold text-lg">
                    Quick Practice
                  </h4>

                  <p className="text-blue-100 text-sm mt-1">
                    Mixed TOEIC Part 5 questions
                  </p>
                </div>

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    text-white/50
                    text-xl
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </div>
              </button>

              {/* Review Mistakes */}
              <button
                type="button"
                onClick={() => startPractice("mistakes")}
                disabled={mistakesCount === 0}
                className={`
                  group relative
                  overflow-hidden
                  rounded-2xl
                  p-6
                  text-left
                  transition-all duration-300

                  ${
                    mistakesCount === 0
                      ? isDark
                        ? "bg-slate-800/50 opacity-50 cursor-not-allowed"
                        : "bg-slate-100 opacity-60 cursor-not-allowed"
                      : `
                        bg-gradient-to-br
                        from-rose-500
                        via-red-500
                        to-pink-600
                        hover:-translate-y-0.5
                        hover:shadow-xl
                        hover:shadow-red-500/20
                      `
                  }

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-red-500
                `}
              >
                {mistakesCount > 0 && (
                  <div
                    className="
                      absolute
                      -right-10
                      -bottom-10
                      w-32 h-32
                      rounded-full
                      bg-white/10
                      blur-3xl
                      transition-transform duration-500
                      group-hover:scale-125
                    "
                  />
                )}

                <div
                  className={`
                    relative
                    flex items-center justify-center
                    w-11 h-11
                    rounded-xl
                    mb-5

                    ${
                      mistakesCount === 0
                        ? isDark
                          ? "bg-slate-700 text-slate-500"
                          : "bg-slate-200 text-slate-400"
                        : "bg-white/10 text-white"
                    }
                  `}
                >
                  <RotateCcw
                    className={`
                      w-6 h-6
                      transition-transform duration-500
                      ${mistakesCount > 0 ? "group-hover:-rotate-90" : ""}
                    `}
                  />
                </div>

                <div className="relative">
                  <h4
                    className={`
                      font-bold text-lg
                      ${
                        mistakesCount === 0
                          ? isDark
                            ? "text-slate-400"
                            : "text-slate-500"
                          : "text-white"
                      }
                    `}
                  >
                    Review Mistakes
                  </h4>

                  <p
                    className={`
                      text-sm mt-1
                      ${
                        mistakesCount === 0
                          ? isDark
                            ? "text-slate-500"
                            : "text-slate-400"
                          : "text-red-100"
                      }
                    `}
                  >
                    {mistakesCount === 0
                      ? "No mistakes yet!"
                      : `Practice ${mistakesCount} difficult questions`}
                  </p>
                </div>

                {mistakesCount > 0 && (
                  <div
                    className="
                      absolute
                      bottom-5
                      right-5
                      text-white/50
                      text-xl
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </div>
                )}
              </button>
            </div>
          </section>

          {/* =================================================
              PERFORMANCE CHART
          ================================================== */}
          <section className={`${cardClass} p-6`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className={headingClass}>Performance by Category</h3>

                <p
                  className={`
                    text-xs mt-1
                    ${secondaryTextClass}
                  `}
                >
                  Track your accuracy across different topics.
                </p>
              </div>

              <div
                className={`
                  flex items-center justify-center
                  w-9 h-9 rounded-xl
                  ${
                    isDark
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }
                `}
              >
                <BarChart3 size={18} />
              </div>
            </div>

            {chartData.length > 0 ? (
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{
                      top: 10,
                      right: 10,
                      left: -20,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke={isDark ? "#334155" : "#e2e8f0"}
                    />

                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: isDark ? "#cbd5e1" : "#64748b",
                        fontSize: 12,
                      }}
                    />

                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: isDark ? "#cbd5e1" : "#64748b",
                        fontSize: 12,
                      }}
                      domain={[0, 100]}
                    />

                    <RechartsTooltip
                      cursor={{
                        fill: isDark ? "rgba(59,130,246,0.08)" : "#f8fafc",
                      }}
                      contentStyle={{
                        backgroundColor: isDark ? "#0f172a" : "#ffffff",
                        border: isDark
                          ? "1px solid #334155"
                          : "1px solid #e2e8f0",
                        borderRadius: "12px",
                        color: isDark ? "#f1f5f9" : "#0f172a",
                        boxShadow: isDark
                          ? "0 10px 30px rgba(0,0,0,0.35)"
                          : "0 10px 30px rgba(15,23,42,0.08)",
                      }}
                      labelStyle={{
                        color: isDark ? "#f1f5f9" : "#0f172a",
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                      itemStyle={{
                        color: isDark ? "#60a5fa" : "#2563eb",
                      }}
                    />

                    <Bar
                      dataKey="accuracy"
                      radius={[6, 6, 0, 0]}
                      maxBarSize={42}
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.accuracy >= 80
                              ? "#10b981"
                              : entry.accuracy >= 50
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
              <div
                className={`
                  h-64
                  flex flex-col
                  items-center justify-center
                  text-center
                  ${isDark ? "text-slate-500" : "text-slate-400"}
                `}
              >
                <div
                  className={`
                    flex items-center justify-center
                    w-16 h-16
                    rounded-2xl
                    mb-4
                    ${
                      isDark
                        ? "bg-slate-800 text-slate-600"
                        : "bg-slate-100 text-slate-400"
                    }
                  `}
                >
                  <BarChart3 size={30} />
                </div>

                <p className="text-sm">
                  Answer more questions to see your statistics.
                </p>
              </div>
            )}
          </section>
        </div>

        {/* ===================================================
            RIGHT COLUMN
        ==================================================== */}
        <div className="space-y-6">
          {/* =================================================
              BADGES
          ================================================== */}
          <section className={`${cardClass} p-6`}>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="
                  flex items-center justify-center
                  w-9 h-9
                  rounded-xl
                  bg-yellow-500/10
                  text-yellow-500
                "
              >
                <Trophy size={18} />
              </div>

              <div>
                <h3 className={headingClass}>Recent Badges</h3>

                <p
                  className={`
                    text-xs mt-0.5
                    ${secondaryTextClass}
                  `}
                >
                  Your latest achievements
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {/* Getting Started */}
              {stats.totalAnswered >= 10 ? (
                <div
                  className={`
                    flex items-center gap-3
                    p-3.5
                    rounded-xl
                    border

                    ${
                      isDark
                        ? "bg-yellow-500/[0.06] border-yellow-500/15"
                        : "bg-yellow-50 border-yellow-100"
                    }
                  `}
                >
                  <div
                    className={`
                      flex items-center justify-center
                      w-10 h-10
                      rounded-xl
                      text-lg
                      ${isDark ? "bg-yellow-500/10" : "bg-yellow-100"}
                    `}
                  >
                    🚀
                  </div>

                  <div>
                    <h4
                      className={`
                        font-semibold text-sm
                        ${isDark ? "text-slate-100" : "text-slate-800"}
                      `}
                    >
                      Getting Started
                    </h4>

                    <p
                      className={`
                        text-xs mt-0.5
                        ${secondaryTextClass}
                      `}
                    >
                      Answered 10 questions
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className={`
                    py-8
                    text-center
                    ${isDark ? "text-slate-500" : "text-slate-400"}
                  `}
                >
                  <Trophy size={30} className="mx-auto mb-3 opacity-40" />

                  <p className="text-sm">Keep practicing to earn badges!</p>
                </div>
              )}

              {/* Sharp Shooter */}
              {accuracy >= 80 && stats.totalAnswered >= 20 && (
                <div
                  className={`
                      flex items-center gap-3
                      p-3.5
                      rounded-xl
                      border

                      ${
                        isDark
                          ? "bg-emerald-500/[0.06] border-emerald-500/15"
                          : "bg-emerald-50 border-emerald-100"
                      }
                    `}
                >
                  <div
                    className={`
                        flex items-center justify-center
                        w-10 h-10
                        rounded-xl
                        text-lg
                        ${isDark ? "bg-emerald-500/10" : "bg-emerald-100"}
                      `}
                  >
                    🎯
                  </div>

                  <div>
                    <h4
                      className={`
                          font-semibold text-sm
                          ${isDark ? "text-slate-100" : "text-slate-800"}
                        `}
                    >
                      Sharp Shooter
                    </h4>

                    <p
                      className={`
                          text-xs mt-0.5
                          ${secondaryTextClass}
                        `}
                    >
                      Maintain 80%+ accuracy
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
