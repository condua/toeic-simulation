import React, { useContext } from "react";
import {
  Moon,
  Languages,
  Volume2,
  VolumeX,
  Target,
  RotateCcw,
  Settings,
} from "lucide-react";
import { AppContext } from "../../context/AppContext";

export default function SettingsView() {
  const { state, dispatch } = useContext(AppContext);
  const s = state.settings;
  const isDark = s.darkMode;

  const updateSetting = (key, value) => {
    dispatch({
      type: "UPDATE_SETTINGS",
      payload: {
        [key]: value,
      },
    });
  };

  const Toggle = ({ icon: Icon, label, desc, checked, onChange }) => {
    return (
      <div
        className={`
          group flex items-center justify-between gap-4
          p-4 rounded-2xl
          border
          transition-all duration-200

          ${
            isDark
              ? "bg-slate-900/60 border-slate-700/70 hover:bg-slate-900 hover:border-slate-600"
              : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
          }
        `}
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Icon */}
          <div
            className={`
              flex-shrink-0
              flex items-center justify-center
              w-10 h-10 rounded-xl
              transition-colors

              ${
                checked
                  ? isDark
                    ? "bg-blue-500/15 text-blue-400"
                    : "bg-blue-50 text-blue-600"
                  : isDark
                    ? "bg-slate-800 text-slate-400"
                    : "bg-slate-100 text-slate-500"
              }
            `}
          >
            <Icon size={19} />
          </div>

          {/* Text */}
          <div className="min-w-0">
            <h4
              className={`
                font-semibold text-sm
                ${isDark ? "text-slate-100" : "text-slate-800"}
              `}
            >
              {label}
            </h4>

            <p
              className={`
                text-xs sm:text-sm mt-0.5
                leading-relaxed
                ${isDark ? "text-slate-400" : "text-slate-500"}
              `}
            >
              {desc}
            </p>
          </div>
        </div>

        {/* Toggle */}
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={label}
          onClick={() => onChange(!checked)}
          className={`
            relative flex-shrink-0
            w-12 h-7
            rounded-full
            transition-all duration-300
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-2

            ${
              checked
                ? "bg-blue-600 shadow-lg shadow-blue-500/20"
                : isDark
                  ? "bg-slate-700"
                  : "bg-slate-200"
            }
          `}
        >
          <span
            className={`
              absolute top-1 left-1
              w-5 h-5
              rounded-full
              bg-white
              shadow-sm
              transition-transform duration-300
              ${checked ? "translate-x-5" : "translate-x-0"}
            `}
          />
        </button>
      </div>
    );
  };

  return (
    <div
      className={`
        max-w-3xl mx-auto
        pb-10
        ${isDark ? "text-slate-100" : "text-slate-900"}
      `}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`
              flex items-center justify-center
              w-10 h-10 rounded-xl

              ${
                isDark
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }
            `}
          >
            <Settings size={20} />
          </div>

          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        </div>

        <p
          className={`
            text-sm
            ${isDark ? "text-slate-400" : "text-slate-500"}
          `}
        >
          Customize your learning experience.
        </p>
      </div>

      {/* =====================================================
          PREFERENCES
      ====================================================== */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <h3
            className={`
              text-xs font-bold
              uppercase tracking-[0.15em]
              ${isDark ? "text-slate-300" : "text-slate-600"}
            `}
          >
            Preferences
          </h3>

          <div
            className={`
              flex-1 h-px
              ${isDark ? "bg-slate-800" : "bg-slate-200"}
            `}
          />
        </div>

        <div className="space-y-3">
          {/* Dark Mode */}
          <Toggle
            icon={Moon}
            label="Dark Mode"
            desc="Use a darker interface that's easier on the eyes."
            checked={s.darkMode}
            onChange={(value) => updateSetting("darkMode", value)}
          />

          {/* Translation */}
          <Toggle
            icon={Languages}
            label="Auto-show Translation"
            desc="Show Vietnamese translation automatically after an explanation."
            checked={s.showTranslationDefault}
            onChange={(value) => updateSetting("showTranslationDefault", value)}
          />

          {/* Pronunciation */}
          <Toggle
            icon={Volume2}
            label="Auto Pronunciation"
            desc="Automatically read the full sentence after answering correctly."
            checked={s.autoPronunciation}
            onChange={(value) => updateSetting("autoPronunciation", value)}
          />

          {/* Sound Effects */}
          <Toggle
            icon={VolumeX}
            label="Sound Effects"
            desc="Play sounds for clicks, correct answers, and incorrect answers."
            checked={s.sfxEnabled}
            onChange={(value) => updateSetting("sfxEnabled", value)}
          />
        </div>
      </section>

      {/* =====================================================
          DAILY GOAL
      ====================================================== */}
      <section className="mt-8">
        <div className="flex items-center gap-3 mb-4">
          <h3
            className={`
              text-xs font-bold
              uppercase tracking-[0.15em]
              ${isDark ? "text-slate-300" : "text-slate-600"}
            `}
          >
            Daily Goal
          </h3>

          <div
            className={`
              flex-1 h-px
              ${isDark ? "bg-slate-800" : "bg-slate-200"}
            `}
          />
        </div>

        <div
          className={`
            relative overflow-hidden
            p-5 rounded-2xl
            border

            ${
              isDark
                ? "bg-gradient-to-br from-slate-900 to-slate-800/60 border-slate-700/70"
                : "bg-gradient-to-br from-white to-blue-50/50 border-slate-200"
            }
          `}
        >
          {/* Decorative glow */}
          <div
            className={`
              absolute -top-16 -right-16
              w-36 h-36
              rounded-full
              blur-3xl
              pointer-events-none

              ${isDark ? "bg-blue-500/10" : "bg-blue-400/10"}
            `}
          />

          <div className="relative">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className={`
                    flex items-center justify-center
                    w-10 h-10 rounded-xl

                    ${
                      isDark
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                    }
                  `}
                >
                  <Target size={19} />
                </div>

                <div>
                  <h4
                    className={`
                      font-semibold text-sm
                      ${isDark ? "text-slate-100" : "text-slate-800"}
                    `}
                  >
                    Questions per day
                  </h4>

                  <p
                    className={`
                      text-xs mt-0.5
                      ${isDark ? "text-slate-400" : "text-slate-500"}
                    `}
                  >
                    Set your daily practice target
                  </p>
                </div>
              </div>

              <div
                className={`
                  text-lg font-bold
                  ${isDark ? "text-blue-400" : "text-blue-600"}
                `}
              >
                {s.dailyGoal}
              </div>
            </div>

            {/* Range */}
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={s.dailyGoal}
              onChange={(e) =>
                updateSetting("dailyGoal", Number(e.target.value))
              }
              className={`
                w-full h-2
                rounded-full
                appearance-none
                cursor-pointer
                accent-blue-600

                ${isDark ? "bg-slate-700" : "bg-slate-200"}
              `}
            />

            {/* Range labels */}
            <div
              className={`
                flex justify-between
                mt-2
                text-[11px]
                ${isDark ? "text-slate-500" : "text-slate-400"}
              `}
            >
              <span>5</span>
              <span>25</span>
              <span>50</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DANGER ZONE
      ====================================================== */}
      <section
        className={`
          mt-10 pt-8
          border-t
          ${isDark ? "border-slate-800" : "border-slate-200"}
        `}
      >
        <div className="flex items-center gap-3 mb-4">
          <h3
            className="
              text-xs font-bold
              uppercase tracking-[0.15em]
              text-red-500
            "
          >
            Danger Zone
          </h3>

          <div
            className={`
              flex-1 h-px
              ${isDark ? "bg-slate-800" : "bg-slate-200"}
            `}
          />
        </div>

        <div
          className={`
            p-4 rounded-2xl
            border

            ${
              isDark
                ? "bg-red-500/[0.04] border-red-500/20"
                : "bg-red-50 border-red-100"
            }
          `}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="
                flex items-center justify-center
                w-10 h-10
                rounded-xl
                bg-red-500/10
                text-red-500
              "
            >
              <RotateCcw size={18} />
            </div>

            <div>
              <h4
                className={`
                  font-semibold text-sm
                  ${isDark ? "text-slate-100" : "text-slate-800"}
                `}
              >
                Reset your progress
              </h4>

              <p
                className={`
                  text-xs mt-0.5
                  ${isDark ? "text-slate-400" : "text-slate-500"}
                `}
              >
                Delete your answers, streaks, and bookmarks.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const confirmed = window.confirm(
                "Are you sure? This will delete all your progress, streaks, and bookmarks.",
              );

              if (confirmed) {
                dispatch({
                  type: "RESET_DATA",
                });
              }
            }}
            className={`
              w-full
              py-3
              rounded-xl
              font-semibold text-sm
              border
              transition-all duration-200

              ${
                isDark
                  ? "bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/15 hover:border-red-500/30"
                  : "bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
              }
            `}
          >
            Reset All Progress
          </button>
        </div>
      </section>
    </div>
  );
}
