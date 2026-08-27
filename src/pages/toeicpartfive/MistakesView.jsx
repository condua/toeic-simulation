import React, { useContext } from "react";
import { RotateCcw, Trophy, AlertCircle, ChevronRight } from "lucide-react";

import { AppContext } from "../../context/AppContext";
import { QUESTION_BANK } from "../../data/questions";
import EmptyState from "../../components/EmptyState";

export default function MistakesView() {
  const { state, dispatch } = useContext(AppContext);

  const isDark = state.settings.darkMode;

  const mistakesList = Object.entries(state.mistakes)
    .sort((a, b) => b[1] - a[1])
    .map(([id, count]) => ({
      q: QUESTION_BANK.find((q) => q.id === id),
      count,
    }))
    .filter((item) => item.q !== undefined);

  const startMistakePractice = () => {
    dispatch({
      type: "START_PRACTICE",
      payload: { mode: "mistakes" },
    });
  };

  /* =========================================================
     EMPTY STATE
  ========================================================= */

  if (mistakesList.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <EmptyState
          icon={
            <div
              className="
                flex h-20 w-20
                items-center justify-center
                rounded-3xl

                bg-yellow-50
                text-yellow-500

                dark:bg-yellow-500/[0.08]
                dark:text-yellow-400

                ring-1
                ring-yellow-200
                dark:ring-yellow-400/10
              "
            >
              <Trophy className="h-10 w-10" />
            </div>
          }
          title="No mistakes yet!"
          description="Great job! Keep practicing, and any questions you get wrong will appear here for review."
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
          flex flex-col
          gap-5
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

                bg-red-50
                text-red-500

                dark:bg-red-500/[0.10]
                dark:text-red-400
              "
            >
              <AlertCircle size={18} />
            </div>

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]

                text-red-500
                dark:text-red-400
              "
            >
              Review
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
            My Mistakes
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
            Review the questions you found difficult.
          </p>
        </div>

        {/* Practice button */}

        <button
          onClick={startMistakePractice}
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
            from-red-500
            to-rose-600

            shadow-lg
            shadow-red-500/20

            transition-all
            duration-200

            hover:-translate-y-0.5
            hover:from-red-500
            hover:to-pink-600
            hover:shadow-red-500/30

            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-red-500
            focus-visible:ring-offset-2

            dark:focus-visible:ring-offset-[#101216]
          "
        >
          <RotateCcw
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:-rotate-90
            "
          />
          Practice Mistakes
          <ChevronRight
            size={16}
            className="
              opacity-70
              transition-transform
              duration-200
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

          border-gray-200
          bg-white

          dark:border-white/[0.07]
          dark:bg-[#15171c]
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl

              bg-red-50
              text-red-500

              dark:bg-red-500/[0.10]
              dark:text-red-400
            "
          >
            <AlertCircle size={19} />
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
              Questions to review
            </p>

            <p
              className="
                text-xs
                text-gray-500
                dark:text-zinc-500
              "
            >
              Sorted by how often you answered incorrectly
            </p>
          </div>
        </div>

        <div
          className="
            rounded-full
            px-3
            py-1.5
            text-xs
            font-bold

            bg-red-50
            text-red-600
            ring-1
            ring-red-200

            dark:bg-red-500/[0.10]
            dark:text-red-300
            dark:ring-red-400/15
          "
        >
          {mistakesList.length} questions
        </div>
      </div>

      {/* =====================================================
          MISTAKES LIST
      ====================================================== */}

      <div className="grid gap-4">
        {mistakesList.map(({ q, count }) => (
          <div
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
            {/* subtle hover glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full
                bg-red-500/[0.05]
                blur-3xl
                opacity-0
                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-5

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              {/* =================================================
                  QUESTION
              ================================================== */}

              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {/* Failed count */}

                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      px-2.5
                      py-1
                      text-[11px]
                      font-bold

                      bg-red-50
                      text-red-600
                      ring-1
                      ring-red-200

                      dark:bg-red-500/[0.10]
                      dark:text-red-300
                      dark:ring-red-400/15
                    "
                  >
                    Failed {count} {count === 1 ? "time" : "times"}
                  </span>

                  {/* Category */}

                  <span
                    className="
                      rounded-full
                      px-2.5
                      py-1
                      text-[11px]
                      font-medium

                      bg-gray-100
                      text-gray-500

                      dark:bg-white/[0.05]
                      dark:text-zinc-400
                    "
                  >
                    {q.category}
                  </span>

                  {/* Difficulty */}

                  {q.difficulty && (
                    <span
                      className="
                        rounded-full
                        px-2.5
                        py-1
                        text-[11px]
                        font-medium

                        bg-indigo-50
                        text-indigo-600

                        dark:bg-indigo-500/[0.08]
                        dark:text-indigo-300
                      "
                    >
                      {q.difficulty.charAt(0).toUpperCase() +
                        q.difficulty.slice(1)}
                    </span>
                  )}
                </div>

                <p
                  className="
                    pr-2
                    text-base
                    font-semibold
                    leading-7

                    text-gray-900
                    dark:text-zinc-100
                  "
                >
                  {q.sentence.replace("______", "_____")}
                </p>
              </div>

              {/* =================================================
                  CORRECT ANSWER
              ================================================== */}

              <div
                className="
                  w-full
                  lg:w-[260px]
                  lg:shrink-0
                "
              >
                <div
                  className="
                    rounded-xl
                    border
                    px-4
                    py-3

                    bg-emerald-50/70
                    border-emerald-100

                    dark:bg-emerald-500/[0.06]
                    dark:border-emerald-500/15
                  "
                >
                  <p
                    className="
                      mb-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]

                      text-emerald-600

                      dark:text-emerald-400
                    "
                  >
                    Correct answer
                  </p>

                  <p
                    className="
                      text-sm
                      font-semibold
                      leading-5

                      text-emerald-800

                      dark:text-emerald-300
                    "
                  >
                    {q.options[q.correctAnswer]}
                  </p>
                </div>
              </div>
            </div>

            {/* bottom accent */}

            <div
              className="
                absolute
                bottom-0
                left-5
                right-5
                h-px

                bg-gradient-to-r
                from-transparent
                via-red-500/0
                to-transparent

                transition-all
                duration-300

                group-hover:via-red-500/30

                dark:group-hover:via-red-400/20
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
