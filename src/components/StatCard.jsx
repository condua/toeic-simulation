import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function StatCard({ title, value, icon, color = "blue" }) {
  const { state } = useContext(AppContext);
  const isDark = state.settings.darkMode;

  const colorMap = {
    blue: {
      icon: "bg-blue-50 text-blue-600 dark:bg-blue-500/[0.10] dark:text-blue-400",
      glow: "dark:group-hover:bg-blue-500/[0.04]",
    },

    green: {
      icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/[0.10] dark:text-emerald-400",
      glow: "dark:group-hover:bg-emerald-500/[0.04]",
    },

    orange: {
      icon: "bg-orange-50 text-orange-600 dark:bg-orange-500/[0.10] dark:text-orange-400",
      glow: "dark:group-hover:bg-orange-500/[0.04]",
    },

    red: {
      icon: "bg-rose-50 text-rose-600 dark:bg-rose-500/[0.10] dark:text-rose-400",
      glow: "dark:group-hover:bg-rose-500/[0.04]",
    },

    purple: {
      icon: "bg-purple-50 text-purple-600 dark:bg-purple-500/[0.10] dark:text-purple-400",
      glow: "dark:group-hover:bg-purple-500/[0.04]",
    },

    yellow: {
      icon: "bg-amber-50 text-amber-600 dark:bg-amber-500/[0.10] dark:text-amber-400",
      glow: "dark:group-hover:bg-amber-500/[0.04]",
    },
  };

  /*
   * Hỗ trợ cả:
   * color="blue"
   *
   * và cách cũ:
   * color="bg-blue-50 dark:bg-blue-900/20"
   */
  const normalizedColor =
    typeof color === "string" && colorMap[color] ? color : "blue";

  const theme = colorMap[normalizedColor];

  return (
    <div
      className={`
        group relative
        overflow-hidden
        flex items-center gap-4

        rounded-2xl
        p-5

        border
        shadow-sm

        transition-all
        duration-300

        ${
          isDark
            ? `
              bg-[#15171c]
              border-white/[0.07]
              shadow-black/10
              hover:bg-[#181a20]
              hover:border-white/[0.11]
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-black/20
            `
            : `
              bg-white
              border-slate-200
              hover:border-slate-300
              hover:-translate-y-0.5
              hover:shadow-lg
              hover:shadow-slate-200/60
            `
        }
      `}
    >
      {/* Subtle hover glow */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-28
          w-28
          rounded-full
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100

          ${theme.glow}
        `}
      />

      {/* Icon */}
      <div
        className={`
          relative
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center

          rounded-2xl

          ${theme.icon}

          ring-1
          ring-inset
          ring-black/[0.03]

          dark:ring-white/[0.05]

          transition-transform
          duration-300

          group-hover:scale-105
        `}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="relative min-w-0">
        <p
          className={`
            truncate
            text-xs
            font-semibold
            tracking-wide
            uppercase

            ${isDark ? "text-zinc-400" : "text-slate-500"}
          `}
        >
          {title}
        </p>

        <h3
          className={`
            mt-1
            text-2xl
            font-bold
            leading-none
            tracking-tight

            ${isDark ? "text-zinc-100" : "text-slate-900"}
          `}
        >
          {value}
        </h3>
      </div>

      {/* Small accent line */}
      <div
        className={`
          absolute
          bottom-0
          left-5
          right-5
          h-px

          opacity-0
          transition-opacity
          duration-300

          group-hover:opacity-100

          ${
            normalizedColor === "green"
              ? "bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
              : normalizedColor === "orange"
                ? "bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"
                : normalizedColor === "red"
                  ? "bg-gradient-to-r from-transparent via-rose-400/40 to-transparent"
                  : normalizedColor === "purple"
                    ? "bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
                    : normalizedColor === "yellow"
                      ? "bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
                      : "bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
          }
        `}
      />
    </div>
  );
}
