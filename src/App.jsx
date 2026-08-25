import React, { useState, useEffect, useReducer } from "react";
import { Menu, Flame, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { AppContext, initialState, appReducer } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/toeicpartfive/Dashboard";
import PracticeMode from "./pages/toeicpartfive/PracticeMode";
import MistakesView from "./pages/toeicpartfive/MistakesView";
import BookmarksView from "./pages/toeicpartfive/BookmarksView";
import SettingsView from "./pages/toeicpartfive/SettingsView";

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("toeicMasterState");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        dispatch({ type: "LOAD_STATE", payload: parsed });
      } catch (e) {
        console.error("Failed to parse local storage", e);
      }
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "toeicMasterState",
      JSON.stringify({
        stats: state.stats,
        bookmarks: state.bookmarks,
        mistakes: state.mistakes,
        settings: state.settings,
      }),
    );

    // Apply dark mode class to HTML body
    if (state.settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.stats, state.bookmarks, state.mistakes, state.settings]);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div
        className={`min-h-screen font-sans ${state.settings.darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}
      >
        <div className="flex h-screen overflow-hidden">
          <Sidebar
            isOpen={isSidebarOpen}
            setOpen={setSidebarOpen}
            currentView={state.view}
          />

          <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
            <header
              className={`h-16 flex items-center justify-between px-4 sm:px-6 z-10 
              ${state.settings.darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-b`}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 lg:hidden"
                >
                  <Menu size={20} />
                </button>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  TOEIC Master
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-full font-medium text-sm">
                  <Flame size={16} className="fill-current" />
                  {state.stats.currentStreak} Day Streak
                </div>
                <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full font-medium text-sm">
                  <Star size={16} className="fill-current" />
                  {state.stats.xp} XP
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar">
              <AnimatePresence mode="wait">
                <motion.div
                  key={state.view}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-6xl mx-auto h-full"
                >
                  {state.view === "dashboard" && <Dashboard />}
                  {state.view === "practice" && <PracticeMode />}
                  {state.view === "mistakes" && <MistakesView />}
                  {state.view === "bookmarks" && <BookmarksView />}
                  {state.view === "settings" && <SettingsView />}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
