import React, { createContext, useReducer } from "react";

export const initialState = {
  view: "dashboard",
  stats: {
    totalAnswered: 0,
    correct: 0,
    incorrect: 0,
    currentStreak: 0,
    lastStudyDate: null,
    xp: 0,
    categoryStats: {},
  },
  bookmarks: [],
  mistakes: {},
  settings: {
    darkMode: false,
    showTranslationDefault: false,
    autoPronunciation: false,
    dailyGoal: 20,
  },
  currentPracticeParams: null,
};

// Hàm này chạy MỘT LẦN duy nhất khi ứng dụng vừa bật lên
export function init(initialState) {
  try {
    const saved = localStorage.getItem("toeicMasterState");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Gộp state mặc định với dữ liệu đã lưu để không bị lỗi nếu thiếu field mới
      return {
        ...initialState,
        stats: parsed.stats || initialState.stats,
        bookmarks: parsed.bookmarks || initialState.bookmarks,
        mistakes: parsed.mistakes || initialState.mistakes,
        settings: parsed.settings || initialState.settings,
      };
    }
  } catch (e) {
    console.error("Lỗi khi tải dữ liệu từ localStorage:", e);
  }
  return initialState;
}

export function appReducer(state, action) {
  switch (action.type) {
    case "SET_VIEW":
      return { ...state, view: action.payload };
    case "START_PRACTICE":
      return {
        ...state,
        view: "practice",
        currentPracticeParams: action.payload,
      };
    case "UPDATE_SETTINGS":
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case "TOGGLE_BOOKMARK": {
      const isBookmarked = state.bookmarks.includes(action.payload);
      return {
        ...state,
        bookmarks: isBookmarked
          ? state.bookmarks.filter((id) => id !== action.payload)
          : [...state.bookmarks, action.payload],
      };
    }
    case "ANSWER_QUESTION": {
      const { question, isCorrect } = action.payload;
      const today = new Date().toDateString();

      let newStreak = state.stats.currentStreak;
      if (state.stats.lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (state.stats.lastStudyDate === yesterday.toDateString()) {
          newStreak++;
        } else {
          newStreak = 1;
        }
      }

      const cat = question.category;
      const currentCatStats = state.stats.categoryStats[cat] || {
        total: 0,
        correct: 0,
      };

      const newMistakes = { ...state.mistakes };
      if (!isCorrect) {
        newMistakes[question.id] = (newMistakes[question.id] || 0) + 1;
      }

      return {
        ...state,
        stats: {
          ...state.stats,
          totalAnswered: state.stats.totalAnswered + 1,
          correct: state.stats.correct + (isCorrect ? 1 : 0),
          incorrect: state.stats.incorrect + (isCorrect ? 0 : 1),
          currentStreak: newStreak,
          lastStudyDate: today,
          xp: state.stats.xp + (isCorrect ? 10 : 2),
          categoryStats: {
            ...state.stats.categoryStats,
            [cat]: {
              total: currentCatStats.total + 1,
              correct: currentCatStats.correct + (isCorrect ? 1 : 0),
            },
          },
        },
        mistakes: newMistakes,
      };
    }
    case "RESET_DATA":
      return { ...initialState, settings: state.settings };
    default:
      return state;
  }
}

export const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});
