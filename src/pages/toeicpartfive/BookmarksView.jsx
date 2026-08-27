import React, { useContext } from "react";
import {
  Bookmark,
  BookmarkX,
  Play,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

import { AppContext } from "../../context/AppContext";
import { QUESTION_BANK } from "../../data/questions";
import EmptyState from "../../components/EmptyState";

export default function BookmarksView() {
  const { state, dispatch } = useContext(AppContext);

  const isDark = state.settings.darkMode;

  const bookmarkedQuestions = QUESTION_BANK.filter((q) =>
    state.bookmarks.includes(q.id),
  );

  const removeBookmark = (questionId) => {
    dispatch({
      type: "TOGGLE_BOOKMARK",
      payload: questionId,
    });
  };

  const startBookmarkPractice = () => {
    dispatch({
      type: "START_PRACTICE",
      payload: {
        mode: "bookmarks",
      },
    });
  };

  const difficultyStyles = {
    beginner: `
      bg-emerald-50 text-emerald-600
      dark:bg-emerald-500/[0.08] dark:text-emerald-300
    `,
    elementary: `
      bg-emerald-50 text-emerald-600
      dark:bg-emerald-500/[0.08] dark:text-emerald-300
    `,
    intermediate: `
      bg-amber-50 text-amber-600
      dark:bg-amber-500/[0.08] dark:text-amber-300
    `,
    advanced: `
      bg-rose-50 text-rose-600
      dark:bg-rose-500/[0.08] dark:text-rose-300
    `,
  };

  const getDifficultyStyle = (difficulty) =>
    difficultyStyles[difficulty] ||
    `
      bg-slate-100 text-slate-500
      dark:bg-white/[0.05] dark:text-zinc-400
    `;

  const formatDifficulty = (difficulty) => {
    if (!difficulty) return "Unknown";

    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  /* =========================================================
     EMPTY STATE
  ========================================================= */

  if (bookmarkedQuestions.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <EmptyState
          icon={
            <div
              className="
                flex h-20 w-20
                items-center justify-center
                rounded-3xl

                bg-blue-50
                text-blue-500

                dark:bg-blue-500/[0.08]
                dark:text-blue-400

                ring-1
                ring-blue-200
                dark:ring-blue-400/10
              "
            >
              <Bookmark className="h-10 w-10" />
            </div>
          }
          title="No bookmarks yet"
          description="Save questions you want to review later by clicking the bookmark icon."
        />
      </div>
    );
  }

  return (
    <div className="space-y-7 pb-10">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          flex flex-col gap-5
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl

                bg-blue-50
                text-blue-500

                dark:bg-blue-500/[0.10]
                dark:text-blue-400
              "
            >
              <Bookmark size={18} />
            </div>

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]

                text-blue-500
                dark:text-blue-400
              "
            >
              Library
            </span>
          </div>

          <h2
            className="
              text-2xl
              font-bold
              tracking-tight

              text-gray-900
              dark:text-zinc-100
            "
          >
            Bookmarks
          </h2>

          <p
            className="
              mt-1.5
              text-sm
              leading-6

              text-gray-500
              dark:text-zinc-400
            "
          >
            Your saved questions for quick review.
          </p>
        </div>

        {/* Practice button */}

        <button
          onClick={startBookmarkPractice}
          className="
            group
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            px-5
            py-3
            text-sm
            font-bold
            text-white

            bg-gradient-to-r
            from-blue-600
            to-indigo-600

            shadow-lg
            shadow-blue-600/20

            transition-all
            duration-200

            hover:-translate-y-0.5
            hover:from-blue-500
            hover:to-indigo-500
            hover:shadow-blue-500/30

            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
          "
        >
          <Play size={16} fill="currentColor" />
          Practice Bookmarks
          <ChevronRight
            size={16}
            className="
              opacity-70
              transition-transform
              group-hover:translate-x-0.5
            "
          />
        </button>
      </div>

      {/* =====================================================
          SUMMARY
      ====================================================== */}

      <div
        className="
          flex items-center justify-between
          rounded-2xl
          border
          px-5 py-4

          bg-white
          border-gray-200

          dark:bg-[#15171c]
          dark:border-white/[0.07]
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl

              bg-blue-50
              text-blue-500

              dark:bg-blue-500/[0.10]
              dark:text-blue-400
            "
          >
            <Bookmark size={19} />
          </div>

          <div>
            <p
              className="
                text-sm
                font-semibold

                text-gray-800
                dark:text-zinc-200
              "
            >
              Saved questions
            </p>

            <p
              className="
                text-xs
                text-gray-500
                dark:text-zinc-500
              "
            >
              Questions you've marked for later review
            </p>
          </div>
        </div>

        <span
          className="
            rounded-full
            px-3
            py-1.5
            text-xs
            font-bold

            bg-blue-50
            text-blue-600
            ring-1
            ring-blue-200

            dark:bg-blue-500/[0.10]
            dark:text-blue-300
            dark:ring-blue-400/15
          "
        >
          {bookmarkedQuestions.length} saved
        </span>
      </div>

      {/* =====================================================
          BOOKMARK LIST
      ====================================================== */}

      <div className="grid gap-4">
        {bookmarkedQuestions.map((q, index) => (
          <article
            key={q.id}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              p-5

              bg-white
              border-gray-200
              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-gray-300
              hover:shadow-lg

              dark:bg-[#15171c]
              dark:border-white/[0.07]
              dark:shadow-black/10

              dark:hover:bg-[#181a20]
              dark:hover:border-white/[0.12]
              dark:hover:shadow-xl
            "
          >
            {/* Hover glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full

                bg-blue-500/[0.04]
                blur-3xl

                opacity-0
                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            <div className="relative">
              {/* =================================================
                  TOP META
              ================================================== */}

              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Category */}

                  <span
                    className="
                      rounded-full
                      px-2.5
                      py-1
                      text-[11px]
                      font-semibold

                      bg-indigo-50
                      text-indigo-600

                      dark:bg-indigo-500/[0.08]
                      dark:text-indigo-300
                    "
                  >
                    {q.category}
                  </span>

                  {/* Difficulty */}

                  <span
                    className={`
                      rounded-full
                      px-2.5
                      py-1
                      text-[11px]
                      font-semibold

                      ${getDifficultyStyle(q.difficulty)}
                    `}
                  >
                    {formatDifficulty(q.difficulty)}
                  </span>
                </div>

                {/* Remove bookmark */}

                <button
                  type="button"
                  onClick={() => removeBookmark(q.id)}
                  title="Remove bookmark"
                  aria-label="Remove bookmark"
                  className="
                    rounded-xl
                    p-2

                    text-gray-400

                    transition-all
                    duration-200

                    hover:bg-red-50
                    hover:text-red-500

                    dark:text-zinc-500
                    dark:hover:bg-red-500/[0.08]
                    dark:hover:text-red-400
                  "
                >
                  <BookmarkX size={18} />
                </button>
              </div>

              {/* =================================================
                  QUESTION
              ================================================== */}

              <div className="mb-5">
                <div
                  className="
                    mb-2
                    flex items-center gap-2
                    text-[11px]
                    font-medium

                    text-gray-400
                    dark:text-zinc-500
                  "
                >
                  <span>Question {index + 1}</span>

                  <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-zinc-700" />

                  <span>Saved</span>
                </div>

                <p
                  className="
                    text-lg
                    font-semibold
                    leading-8

                    text-gray-900
                    dark:text-zinc-100
                  "
                >
                  {q.sentence.replace("______", "_____")}
                </p>
              </div>

              {/* =================================================
                  ANSWER / EXPLANATION
              ================================================== */}

              <div
                className="
                  grid gap-3
                  md:grid-cols-2
                "
              >
                {/* Correct Answer */}

                <div
                  className="
                    rounded-xl
                    border
                    p-4

                    bg-emerald-50/70
                    border-emerald-100

                    dark:bg-emerald-500/[0.06]
                    dark:border-emerald-500/15
                  "
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <CheckCircle
                      size={15}
                      className="
                        text-emerald-500
                        dark:text-emerald-400
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]

                        text-emerald-600
                        dark:text-emerald-400
                      "
                    >
                      Correct Answer
                    </span>
                  </div>

                  <p
                    className="
                      text-sm
                      font-bold
                      leading-5

                      text-emerald-800
                      dark:text-emerald-300
                    "
                  >
                    {q.options[q.correctAnswer]}
                  </p>
                </div>

                {/* Grammar Rule */}

                <div
                  className="
                    rounded-xl
                    border
                    p-4

                    bg-slate-50
                    border-slate-100

                    dark:bg-white/[0.025]
                    dark:border-white/[0.06]
                  "
                >
                  <p
                    className="
                      mb-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]

                      text-slate-500
                      dark:text-zinc-500
                    "
                  >
                    Grammar Rule
                  </p>

                  <p
                    className="
                      line-clamp-2
                      text-sm
                      leading-5

                      text-gray-700
                      dark:text-zinc-300
                    "
                  >
                    {q.explanation.grammarRule}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom accent */}

            <div
              className="
                absolute
                bottom-0
                left-5
                right-5
                h-px

                bg-gradient-to-r
                from-transparent
                via-blue-500/0
                to-transparent

                transition-all
                duration-300

                group-hover:via-blue-500/30
                dark:group-hover:via-blue-400/20
              "
            />
          </article>
        ))}
      </div>
    </div>
  );
}
