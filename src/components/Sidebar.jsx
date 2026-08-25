import React, { useContext } from "react";
import {
  Home,
  BookOpen,
  XCircle,
  Bookmark,
  Settings,
  Target,
} from "lucide-react";
import { AppContext } from "../context/AppContext";

export default function Sidebar({ isOpen, setOpen, currentView }) {
  const { dispatch, state } = useContext(AppContext);
  const isDark = state.settings.darkMode;

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "practice", label: "Practice", icon: BookOpen },
    { id: "mistakes", label: "My Mistakes", icon: XCircle },
    { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-r flex flex-col
      `}
      >
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-6 shadow-lg shadow-blue-600/20">
            <Target className="text-white" size={24} />
          </div>
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    dispatch({ type: "SET_VIEW", payload: item.id });
                    if (window.innerWidth < 1024) setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200"
                    }`}
                >
                  <Icon
                    size={20}
                    className={
                      isActive ? "text-blue-600 dark:text-blue-400" : ""
                    }
                  />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-auto p-6">
          <div
            className={`p-4 rounded-xl ${isDark ? "bg-gray-700/50" : "bg-blue-50"} border ${isDark ? "border-gray-600" : "border-blue-100"}`}
          >
            <h4 className="font-semibold text-sm mb-2">Daily Goal</h4>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-1">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, (state.stats.totalAnswered / state.settings.dailyGoal) * 100)}%`,
                }}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {state.stats.totalAnswered} / {state.settings.dailyGoal} questions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
