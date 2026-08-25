import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function SettingsView() {
  const { state, dispatch } = useContext(AppContext);
  const s = state.settings;

  const Toggle = ({ label, desc, checked, onChange }) => (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div>
        <h4 className="font-medium">{label}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`w-12 h-6 rounded-full transition-colors relative ${checked ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"}`}
      >
        <span
          className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${checked ? "translate-x-6" : "translate-x-0"}`}
        />
      </button>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-1">Settings</h2>
        <p className="text-gray-500">Customize your learning experience.</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300 uppercase tracking-wider text-sm mb-4">
          Preferences
        </h3>
        <Toggle
          label="Dark Mode"
          desc="Easier on the eyes in low light"
          checked={s.darkMode}
          onChange={(v) =>
            dispatch({ type: "UPDATE_SETTINGS", payload: { darkMode: v } })
          }
        />
        <Toggle
          label="Auto-show Translation"
          desc="Show Vietnamese translation immediately when explanation appears"
          checked={s.showTranslationDefault}
          onChange={(v) =>
            dispatch({
              type: "UPDATE_SETTINGS",
              payload: { showTranslationDefault: v },
            })
          }
        />
        <Toggle
          label="Auto Pronunciation"
          desc="Automatically read the full sentence after answering correctly"
          checked={s.autoPronunciation}
          onChange={(v) =>
            dispatch({
              type: "UPDATE_SETTINGS",
              payload: { autoPronunciation: v },
            })
          }
        />

        <Toggle
          label="Sound Effects (SFX)"
          desc="Play sounds for clicks, correct, and incorrect answers"
          checked={s.sfxEnabled}
          onChange={(v) =>
            dispatch({ type: "UPDATE_SETTINGS", payload: { sfxEnabled: v } })
          }
        />
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="mb-4">
            <h4 className="font-medium">Daily Goal</h4>
            <p className="text-sm text-gray-500">
              Number of questions to practice daily
            </p>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            value={s.dailyGoal}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SETTINGS",
                payload: { dailyGoal: parseInt(e.target.value) },
              })
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600"
          />
          <div className="text-center font-bold text-blue-600 mt-2">
            {s.dailyGoal} Questions
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg text-red-500 uppercase tracking-wider text-sm mb-4">
          Danger Zone
        </h3>
        <button
          onClick={() => {
            if (
              window.confirm(
                "Are you sure? This will delete all your progress, streaks, and bookmarks.",
              )
            ) {
              dispatch({ type: "RESET_DATA" });
            }
          }}
          className="w-full p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold rounded-xl border border-red-200 dark:border-red-900/50 hover:bg-red-100 transition-colors"
        >
          Reset All Progress
        </button>
      </div>
    </div>
  );
}
