import React, { useContext } from "react";
import {
  Home,
  BookOpen,
  XCircle,
  Bookmark,
  Settings,
  Target,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { AppContext } from "../context/AppContext";

export default function Sidebar({ isOpen, setOpen, currentView }) {
  const { dispatch, state } = useContext(AppContext);
  const isDark = state.settings.darkMode;

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "levels", label: "By Level", icon: TrendingUp },
    { id: "practice", label: "Practice", icon: BookOpen },
    { id: "mistakes", label: "My Mistakes", icon: XCircle },
    { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const progress = Math.min(
    100,
    (state.stats.totalAnswered / state.settings.dailyGoal) * 100,
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-[270px]
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}

          flex flex-col
          border-r

          ${
            isDark
              ? "bg-[#0b1120] border-slate-800/80 text-slate-100"
              : "bg-white border-slate-200 text-slate-800"
          }
        `}
      >
        {/* ================= HEADER ================= */}
        <div className="px-5 pt-6 pb-5">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div
              className={`
                relative flex items-center justify-center
                w-11 h-11 rounded-2xl
                bg-gradient-to-br from-blue-500 to-indigo-600
                shadow-lg shadow-blue-500/20
              `}
            >
              <Target size={22} className="text-white" />

              <div className="absolute inset-0 rounded-2xl bg-white/10" />
            </div>

            {/* App name */}
            <div>
              <h1
                className={`
                  text-[15px] font-bold tracking-tight
                  ${isDark ? "text-white" : "text-slate-900"}
                `}
              >
                English Master
              </h1>

              <p
                className={`
                  text-xs mt-0.5
                  ${isDark ? "text-slate-500" : "text-slate-400"}
                `}
              >
                Learn smarter
              </p>
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="px-3 flex-1 overflow-y-auto">
          <p
            className={`
              px-3 mb-2 text-[10px] font-bold
              uppercase tracking-[0.15em]
              ${isDark ? "text-slate-600" : "text-slate-400"}
            `}
          >
            Menu
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    dispatch({
                      type: "SET_VIEW",
                      payload: item.id,
                    });

                    if (window.innerWidth < 1024) {
                      setOpen(false);
                    }
                  }}
                  className={`
                    group relative w-full
                    flex items-center gap-3
                    px-3 py-2.5
                    rounded-xl
                    transition-all duration-200
                    font-medium text-sm

                    ${
                      isActive
                        ? isDark
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-blue-50 text-blue-700"
                        : isDark
                          ? "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <span
                      className="
                        absolute left-0
                        w-1 h-6
                        rounded-r-full
                        bg-gradient-to-b
                        from-blue-400
                        to-indigo-500
                        shadow-lg shadow-blue-500/40
                      "
                    />
                  )}

                  {/* Icon container */}
                  <span
                    className={`
                      flex items-center justify-center
                      w-9 h-9 rounded-lg
                      transition-all duration-200

                      ${
                        isActive
                          ? isDark
                            ? "bg-blue-500/15"
                            : "bg-blue-100"
                          : isDark
                            ? "bg-white/[0.03] group-hover:bg-white/[0.06]"
                            : "bg-slate-100/70 group-hover:bg-slate-100"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2.3 : 2}
                      className={`
                        transition-colors
                        ${
                          isActive
                            ? isDark
                              ? "text-blue-400"
                              : "text-blue-600"
                            : isDark
                              ? "text-slate-500 group-hover:text-slate-300"
                              : "text-slate-400 group-hover:text-slate-600"
                        }
                      `}
                    />
                  </span>

                  <span className="flex-1 text-left">{item.label}</span>

                  {/* Arrow */}
                  <ChevronRight
                    size={15}
                    className={`
                      transition-all duration-200
                      ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                      }
                    `}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* ================= DAILY GOAL ================= */}
        <div className="px-4 pb-5">
          <div
            className={`
              relative overflow-hidden
              p-4 rounded-2xl
              border

              ${
                isDark
                  ? "bg-gradient-to-br from-slate-900 to-slate-800/70 border-slate-700/60"
                  : "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100"
              }
            `}
          >
            {/* Decorative glow */}
            <div
              className={`
                absolute -top-10 -right-10
                w-24 h-24
                rounded-full
                blur-2xl
                ${isDark ? "bg-blue-500/10" : "bg-blue-400/20"}
              `}
            />

            <div className="relative">
              {/* Title */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`
                      flex items-center justify-center
                      w-8 h-8 rounded-lg
                      ${isDark ? "bg-blue-500/10" : "bg-blue-100"}
                    `}
                  >
                    <Target
                      size={16}
                      className={isDark ? "text-blue-400" : "text-blue-600"}
                    />
                  </div>

                  <div>
                    <p
                      className={`
                        text-xs font-bold
                        ${isDark ? "text-slate-200" : "text-slate-800"}
                      `}
                    >
                      Daily Goal
                    </p>

                    <p
                      className={`
                        text-[10px]
                        ${isDark ? "text-slate-500" : "text-slate-400"}
                      `}
                    >
                      Keep learning
                    </p>
                  </div>
                </div>

                <span
                  className={`
                    text-xs font-bold
                    ${isDark ? "text-blue-400" : "text-blue-600"}
                  `}
                >
                  {Math.round(progress)}%
                </span>
              </div>

              {/* Progress bar */}
              <div
                className={`
                  w-full h-2
                  rounded-full overflow-hidden
                  ${isDark ? "bg-slate-700" : "bg-blue-100"}
                `}
              >
                <div
                  className="
                    h-full rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    to-indigo-500
                    transition-all duration-700
                    shadow-sm shadow-blue-500/30
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mt-2">
                <p
                  className={`
                    text-[11px]
                    ${isDark ? "text-slate-500" : "text-slate-500"}
                  `}
                >
                  {state.stats.totalAnswered} / {state.settings.dailyGoal}{" "}
                  questions
                </p>

                {progress >= 100 && (
                  <span className="text-[10px] font-semibold text-emerald-500">
                    Completed ✓
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
