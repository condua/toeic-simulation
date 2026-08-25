import React, { useContext } from "react";
import { RotateCcw, Trophy } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { QUESTION_BANK } from "../data/questions";
import EmptyState from "../components/EmptyState";

export default function MistakesView() {
  const { state, dispatch } = useContext(AppContext);
  const mistakesList = Object.entries(state.mistakes)
    .sort((a, b) => b[1] - a[1]) // Sort by frequency
    .map(([id, count]) => ({
      q: QUESTION_BANK.find((q) => q.id === id),
      count,
    }))
    .filter((item) => item.q !== undefined);

  if (mistakesList.length === 0) {
    return (
      <EmptyState
        icon={<Trophy className="text-yellow-500 w-16 h-16" />}
        title="No mistakes yet!"
        description="Great job! Keep practicing, and any questions you get wrong will appear here for review."
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">My Mistakes</h2>
          <p className="text-gray-500">
            Review the questions you found difficult.
          </p>
        </div>
        <button
          onClick={() =>
            dispatch({ type: "START_PRACTICE", payload: { mode: "mistakes" } })
          }
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm"
        >
          <RotateCcw size={18} /> Practice Mistakes
        </button>
      </div>

      <div className="grid gap-4">
        {mistakesList.map(({ q, count }) => (
          <div
            key={q.id}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
          >
            <div className="flex-1">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-xs font-bold px-2 py-1 rounded bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                  Failed {count} times
                </span>
                <span className="text-xs text-gray-500">{q.category}</span>
              </div>
              <p className="font-medium text-lg">
                {q.sentence.replace("______", "_____")}
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <p className="text-sm text-green-600 dark:text-green-400 font-semibold mb-1">
                Answer: {q.options[q.correctAnswer]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
