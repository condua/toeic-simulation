import React, { useContext } from "react";
import { Bookmark } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { QUESTION_BANK } from "../data/questions";
import EmptyState from "../components/EmptyState";

export default function BookmarksView() {
  const { state } = useContext(AppContext);
  const bookmarkedQuestions = QUESTION_BANK.filter((q) =>
    state.bookmarks.includes(q.id),
  );

  if (bookmarkedQuestions.length === 0) {
    return (
      <EmptyState
        icon={<Bookmark className="text-blue-300 w-16 h-16" />}
        title="No bookmarks yet"
        description="Click the bookmark icon on any question to save it here for later review."
      />
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Bookmarks</h2>
        <p className="text-gray-500">
          Your saved questions for quick reference.
        </p>
      </div>
      <div className="grid gap-4">
        {bookmarkedQuestions.map((q) => (
          <div
            key={q.id}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400 px-2 py-1 rounded font-medium">
                {q.category}
              </span>
            </div>
            <p className="font-medium text-lg mb-3">
              {q.sentence.replace("______", "_____")}
            </p>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <p className="text-sm">
                <span className="font-semibold text-green-600">Answer:</span>{" "}
                {q.options[q.correctAnswer]}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {q.explanation.grammarRule}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
