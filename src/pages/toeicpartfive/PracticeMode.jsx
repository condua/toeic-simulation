import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  Bookmark,
  CheckCircle,
  XCircle,
  Lightbulb,
  X,
  Languages,
  BookOpen,
  Star,
} from "lucide-react";
import { AppContext } from "../../context/AppContext";
import { QUESTION_BANK } from "../../data/questions";
import { playSound } from "../../utils/sound";

export default function PracticeMode() {
  const { state, dispatch } = useContext(AppContext);

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showTranslation, setShowTranslation] = useState(
    state.settings.showTranslationDefault,
  );

  const [sessionStats, setSessionStats] = useState({
    correct: 0,
    total: 0,
  });

  const currentQuestion = questions[currentIndex];

  const isDark = state.settings.darkMode;

  const resetQuestionState = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowTranslation(state.settings.showTranslationDefault);
  };

  useEffect(() => {
    let pool = [...QUESTION_BANK];

    if (state.currentPracticeParams?.mode === "mistakes") {
      const mistakeIds = Object.keys(state.mistakes);

      pool = pool.filter((q) => mistakeIds.includes(q.id));
    } else if (state.currentPracticeParams?.mode === "level") {
      const { min, max } = state.currentPracticeParams;

      pool = pool.filter((q) => q.toeicLevel >= min && q.toeicLevel <= max);
    }

    pool.sort(() => Math.random() - 0.5);

    setQuestions(pool);
    setCurrentIndex(0);
    resetQuestionState();
  }, [state.currentPracticeParams]);

  const handleNext = () => {
    playSound("click", state.settings.sfxEnabled);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionState();
    } else {
      dispatch({
        type: "SET_VIEW",
        payload: "dashboard",
      });
    }
  };

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectAnswer = (index) => {
    if (selectedAnswer !== null) return;

    playSound("click", state.settings.sfxEnabled);

    setSelectedAnswer(index);
    setShowExplanation(true);

    const isCorrect = index === currentQuestion.correctAnswer;

    setSessionStats((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    dispatch({
      type: "ANSWER_QUESTION",
      payload: {
        question: currentQuestion,
        isCorrect,
      },
    });

    setTimeout(() => {
      playSound(isCorrect ? "correct" : "incorrect", state.settings.sfxEnabled);
    }, 100);

    if (state.settings.autoPronunciation) {
      speakText(
        currentQuestion.sentence.replace(
          "______",
          currentQuestion.correctAnswer.toString(),
        ),
      );
    }
  };

  if (questions.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div
          className="
            mb-6 flex h-24 w-24 items-center justify-center rounded-3xl
            bg-gray-100 text-gray-400
            dark:bg-white/[0.06] dark:text-zinc-500
            ring-1 ring-gray-200 dark:ring-white/[0.08]
          "
        >
          <BookOpen className="h-12 w-12" />
        </div>

        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-zinc-100">
          No questions found
        </h2>

        <p className="mb-6 text-gray-500 dark:text-zinc-400">
          Try changing your practice mode or reviewing later.
        </p>

        <button
          onClick={() =>
            dispatch({
              type: "SET_VIEW",
              payload: "dashboard",
            })
          }
          className="
            rounded-xl bg-blue-600 px-6 py-2.5
            font-semibold text-white
            shadow-lg shadow-blue-600/20
            transition-all
            hover:bg-blue-500
            hover:shadow-blue-500/30
          "
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const isBookmarked = state.bookmarks.includes(currentQuestion?.id);

  return (
    <div className="mx-auto max-w-3xl pb-20">
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() =>
            dispatch({
              type: "SET_VIEW",
              payload: "dashboard",
            })
          }
          className="
            group flex items-center gap-1.5
            text-sm font-medium
            text-gray-500
            transition-colors
            hover:text-gray-900
            dark:text-zinc-400
            dark:hover:text-white
          "
        >
          <ChevronLeft
            size={19}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back
        </button>

        <div className="text-sm font-medium text-gray-500 dark:text-zinc-400">
          Question{" "}
          <span className="font-semibold text-gray-800 dark:text-zinc-200">
            {currentIndex + 1}
          </span>{" "}
          of {questions.length}
        </div>

        <div
          className="
            rounded-full px-3.5 py-1.5
            text-xs font-bold
            bg-blue-50 text-blue-600
            ring-1 ring-blue-200
            dark:bg-blue-500/[0.12]
            dark:text-blue-300
            dark:ring-blue-400/20
          "
        >
          Score {sessionStats.correct}/{sessionStats.total}
        </div>
      </div>

      {/* =====================================================
          PROGRESS
      ====================================================== */}

      <div
        className="
          mb-8 h-1.5 w-full overflow-hidden rounded-full
          bg-gray-200
          dark:bg-white/[0.08]
        "
      >
        <motion.div
          className="
            h-full rounded-full
            bg-gradient-to-r from-blue-500 to-indigo-500
            shadow-[0_0_12px_rgba(59,130,246,0.45)]
          "
          initial={{ width: 0 }}
          animate={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* =====================================================
          QUESTION CARD
      ====================================================== */}

      {currentQuestion && (
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="
            overflow-hidden rounded-3xl

            bg-white
            border border-gray-200
            shadow-sm

            dark:bg-[#15171c]
            dark:border-white/[0.08]
            dark:shadow-2xl
            dark:shadow-black/20
          "
        >
          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              flex items-start justify-between
              border-b border-gray-100
              p-6

              dark:border-white/[0.07]
            "
          >
            <div className="flex flex-wrap gap-2">
              {/* Category */}

              <span
                className="
                  rounded-full px-3 py-1
                  text-xs font-bold

                  bg-indigo-50
                  text-indigo-600
                  ring-1 ring-indigo-200

                  dark:bg-indigo-500/[0.12]
                  dark:text-indigo-300
                  dark:ring-indigo-400/20
                "
              >
                {currentQuestion.category} • {currentQuestion.subcategory}
              </span>

              {/* Difficulty */}

              <span
                className={`
                  rounded-full px-3 py-1
                  text-xs font-bold
                  ring-1

                  ${
                    currentQuestion.difficulty === "beginner" ||
                    currentQuestion.difficulty === "elementary"
                      ? `
                        bg-green-50 text-green-600 ring-green-200
                        dark:bg-emerald-500/[0.10]
                        dark:text-emerald-300
                        dark:ring-emerald-400/20
                      `
                      : currentQuestion.difficulty === "intermediate"
                        ? `
                          bg-yellow-50 text-yellow-600 ring-yellow-200
                          dark:bg-amber-500/[0.10]
                          dark:text-amber-300
                          dark:ring-amber-400/20
                        `
                        : `
                          bg-red-50 text-red-600 ring-red-200
                          dark:bg-red-500/[0.10]
                          dark:text-red-300
                          dark:ring-red-400/20
                        `
                  }
                `}
              >
                {currentQuestion.difficulty.charAt(0).toUpperCase() +
                  currentQuestion.difficulty.slice(1)}
              </span>
            </div>

            {/* Actions */}

            <div className="flex gap-1">
              <button
                onClick={() => speakText(currentQuestion.sentence)}
                className="
                  rounded-xl p-2.5
                  text-gray-400
                  transition-all

                  hover:bg-blue-50
                  hover:text-blue-600

                  dark:text-zinc-500
                  dark:hover:bg-white/[0.06]
                  dark:hover:text-blue-400
                "
                title="Listen"
              >
                <Volume2 size={20} />
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_BOOKMARK",
                    payload: currentQuestion.id,
                  })
                }
                className={`
                  rounded-xl p-2.5
                  transition-all

                  ${
                    isBookmarked
                      ? `
                        bg-yellow-50
                        text-yellow-500

                        dark:bg-yellow-500/[0.12]
                        dark:text-yellow-400
                      `
                      : `
                        text-gray-400
                        hover:bg-gray-100
                        hover:text-gray-700

                        dark:text-zinc-500
                        dark:hover:bg-white/[0.06]
                        dark:hover:text-zinc-200
                      `
                  }
                `}
                title="Bookmark"
              >
                <Bookmark
                  size={20}
                  className={isBookmarked ? "fill-current" : ""}
                />
              </button>
            </div>
          </div>

          {/* =================================================
              QUESTION BODY
          ================================================== */}

          <div className="p-6 lg:p-8">
            <h3
              className="
                mb-8
                text-2xl
                font-semibold
                leading-[1.8]

                text-gray-900
                dark:text-zinc-100
              "
            >
              {currentQuestion.sentence.split("______").map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}

                  {i < arr.length - 1 && (
                    <span
                      className={`
                          mx-1 inline-block
                          min-w-[100px]
                          border-b-2
                          px-4
                          font-bold
                          transition-all

                          ${
                            selectedAnswer === null
                              ? `
                                border-gray-300
                                dark:border-zinc-600
                              `
                              : selectedAnswer === currentQuestion.correctAnswer
                                ? `
                                  border-emerald-500
                                  text-emerald-600
                                  dark:text-emerald-400
                                `
                                : `
                                  border-red-500
                                  text-red-600
                                  dark:text-red-400
                                `
                          }
                        `}
                    >
                      {selectedAnswer !== null
                        ? currentQuestion.options[selectedAnswer]
                        : "\u00A0\u00A0\u00A0\u00A0"}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </h3>

            {/* =================================================
                ANSWERS
            ================================================== */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;

                const showStatus = selectedAnswer !== null;

                let buttonClass = `
                  group
                  flex items-center
                  rounded-2xl
                  border
                  p-4
                  text-left
                  text-lg
                  font-medium
                  transition-all
                `;

                if (!showStatus) {
                  buttonClass += `
                    border-gray-200
                    bg-white
                    text-gray-800

                    hover:border-blue-400
                    hover:bg-blue-50
                    hover:text-blue-700

                    dark:border-white/[0.09]
                    dark:bg-white/[0.025]
                    dark:text-zinc-200

                    dark:hover:border-blue-500/50
                    dark:hover:bg-blue-500/[0.07]
                    dark:hover:text-blue-300
                  `;
                } else if (isCorrect) {
                  buttonClass += `
                    border-emerald-500
                    bg-emerald-50
                    text-emerald-700

                    dark:border-emerald-500/50
                    dark:bg-emerald-500/[0.10]
                    dark:text-emerald-300
                  `;
                } else if (isSelected && !isCorrect) {
                  buttonClass += `
                    border-red-500
                    bg-red-50
                    text-red-700

                    dark:border-red-500/50
                    dark:bg-red-500/[0.10]
                    dark:text-red-300
                  `;
                } else {
                  buttonClass += `
                    border-gray-200
                    bg-gray-50
                    text-gray-400
                    opacity-50

                    dark:border-white/[0.06]
                    dark:bg-white/[0.02]
                    dark:text-zinc-500
                  `;
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={buttonClass}
                  >
                    <span
                      className="
                        mr-4 flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-xl
                        text-sm
                        font-bold

                        bg-gray-100
                        text-gray-500

                        dark:bg-white/[0.07]
                        dark:text-zinc-400
                      "
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="flex-1">{option}</span>

                    {showStatus && isCorrect && (
                      <CheckCircle className="ml-2 shrink-0 text-emerald-500" />
                    )}

                    {showStatus && isSelected && !isCorrect && (
                      <XCircle className="ml-2 shrink-0 text-red-500" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              EXPLANATION
          ================================================== */}

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                className="
                  border-t

                  border-gray-200
                  bg-gray-50

                  dark:border-white/[0.07]
                  dark:bg-[#101216]
                "
              >
                <div className="space-y-7 p-6 lg:p-8">
                  {/* RESULT */}

                  <div
                    className={`
                      flex items-start gap-4
                      rounded-2xl
                      border
                      p-5

                      ${
                        selectedAnswer === currentQuestion.correctAnswer
                          ? `
                            border-emerald-200
                            bg-emerald-50
                            text-emerald-800

                            dark:border-emerald-500/20
                            dark:bg-emerald-500/[0.08]
                            dark:text-emerald-300
                          `
                          : `
                            border-red-200
                            bg-red-50
                            text-red-800

                            dark:border-red-500/20
                            dark:bg-red-500/[0.08]
                            dark:text-red-300
                          `
                      }
                    `}
                  >
                    {selectedAnswer === currentQuestion.correctAnswer ? (
                      <CheckCircle size={28} className="mt-0.5 shrink-0" />
                    ) : (
                      <XCircle size={28} className="mt-0.5 shrink-0" />
                    )}

                    <div>
                      <h4 className="mb-1 text-lg font-bold">
                        {selectedAnswer === currentQuestion.correctAnswer
                          ? "Correct!"
                          : "Incorrect"}
                      </h4>

                      <p className="text-sm">
                        The correct answer is{" "}
                        <strong>
                          {String.fromCharCode(
                            65 + currentQuestion.correctAnswer,
                          )}
                          .{" "}
                          {
                            currentQuestion.options[
                              currentQuestion.correctAnswer
                            ]
                          }
                        </strong>
                      </p>
                    </div>
                  </div>

                  {/* WHY CORRECT */}

                  <div>
                    <h4
                      className="
                        mb-3 flex items-center gap-2
                        font-bold
                        text-blue-600
                        dark:text-blue-400
                      "
                    >
                      <Lightbulb size={20} />
                      Why is this correct?
                    </h4>

                    <div
                      className="
                        space-y-3
                        rounded-2xl
                        border
                        p-5

                        bg-white
                        border-gray-200

                        dark:bg-[#181a20]
                        dark:border-white/[0.07]
                      "
                    >
                      <p className="text-gray-700 dark:text-zinc-200">
                        <span className="font-bold text-gray-900 dark:text-zinc-100">
                          Rule:
                        </span>{" "}
                        {currentQuestion.explanation.grammarRule}
                      </p>

                      <p className="text-gray-700 dark:text-zinc-200">
                        <span className="font-bold text-gray-900 dark:text-zinc-100">
                          Structure:
                        </span>{" "}
                        <code
                          className="
                            rounded-lg
                            bg-gray-100
                            px-2.5
                            py-1
                            text-sm
                            text-pink-600

                            dark:bg-pink-500/[0.10]
                            dark:text-pink-300
                          "
                        >
                          {currentQuestion.explanation.sentenceStructure}
                        </code>
                      </p>

                      <p className="leading-7 text-gray-700 dark:text-zinc-300">
                        {currentQuestion.explanation.whyCorrect}
                      </p>
                    </div>
                  </div>

                  {/* WRONG OPTIONS */}

                  <div>
                    <h4 className="mb-3 font-bold text-gray-900 dark:text-zinc-100">
                      Why other options are wrong:
                    </h4>

                    <ul className="space-y-2.5">
                      {currentQuestion.explanation.whyOthersWrong.map(
                        (reason, i) => (
                          <li
                            key={i}
                            className="
                              flex gap-2
                              text-gray-600
                              dark:text-zinc-300
                            "
                          >
                            <X
                              size={18}
                              className="
                                mt-0.5
                                shrink-0
                                text-red-400
                              "
                            />

                            <span>{reason}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* TRANSLATION */}

                  <div>
                    <button
                      onClick={() => setShowTranslation(!showTranslation)}
                      className="
                        flex items-center gap-2
                        font-semibold
                        text-indigo-600

                        dark:text-indigo-300
                        hover:underline
                      "
                    >
                      <Languages size={18} />

                      {showTranslation
                        ? "Hide Translation"
                        : "Show Vietnamese Translation"}
                    </button>

                    <AnimatePresence>
                      {showTranslation && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          className="
                            mt-3
                            rounded-2xl
                            border
                            p-4
                            italic

                            bg-indigo-50
                            border-indigo-100
                            text-indigo-900

                            dark:bg-indigo-500/[0.08]
                            dark:border-indigo-400/10
                            dark:text-indigo-200
                          "
                        >
                          "{currentQuestion.translation}"
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* VOCABULARY */}

                  {currentQuestion.vocabulary.length > 0 && (
                    <div>
                      <h4
                        className="
                          mb-3
                          flex items-center gap-2
                          font-bold
                          text-gray-900
                          dark:text-zinc-100
                        "
                      >
                        <BookOpen size={18} />
                        Important Vocabulary
                      </h4>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {currentQuestion.vocabulary.map((vocab, i) => (
                          <div
                            key={i}
                            className="
                                group
                                flex items-start justify-between
                                rounded-2xl
                                border
                                p-4
                                transition-all

                                bg-white
                                border-gray-200

                                hover:border-blue-300

                                dark:bg-[#181a20]
                                dark:border-white/[0.07]

                                dark:hover:border-blue-500/30
                                dark:hover:bg-blue-500/[0.03]
                              "
                          >
                            <div>
                              <div className="flex items-baseline gap-2">
                                <span
                                  className="
                                      text-lg
                                      font-bold
                                      text-blue-600
                                      dark:text-blue-400
                                    "
                                >
                                  {vocab.word}
                                </span>

                                <span className="text-xs italic text-gray-400 dark:text-zinc-500">
                                  {vocab.pos}
                                </span>
                              </div>

                              <span className="mb-1 block text-sm text-gray-500 dark:text-zinc-500">
                                {vocab.ipa}
                              </span>

                              <span className="text-sm font-semibold text-gray-700 dark:text-zinc-200">
                                {vocab.meaning}
                              </span>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                speakText(vocab.word);
                              }}
                              className="
                                  rounded-lg
                                  p-1.5

                                  text-gray-400

                                  opacity-0
                                  transition-all

                                  group-hover:opacity-100

                                  hover:text-blue-500

                                  dark:text-zinc-500
                                  dark:hover:text-blue-400
                                "
                            >
                              <Volume2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TOEIC TIP */}

                  <div
                    className="
                      flex items-start gap-4
                      rounded-2xl
                      border
                      p-5

                      bg-gradient-to-r
                      from-amber-50
                      to-yellow-50
                      border-yellow-200

                      dark:from-amber-500/[0.08]
                      dark:to-yellow-500/[0.04]
                      dark:border-yellow-500/15
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-xl

                        bg-yellow-400
                        text-yellow-900

                        dark:bg-yellow-400
                        dark:text-yellow-950
                      "
                    >
                      <Star size={20} className="fill-current" />
                    </div>

                    <div>
                      <h4
                        className="
                          mb-1
                          font-bold
                          text-yellow-800

                          dark:text-yellow-300
                        "
                      >
                        PRO TIP
                      </h4>

                      <p
                        className="
                          text-sm leading-6
                          text-yellow-800

                          dark:text-yellow-200/90
                        "
                      >
                        {currentQuestion.explanation.toeicTip}
                      </p>
                    </div>
                  </div>

                  {/* NEXT */}

                  <div className="flex justify-end border-t border-gray-200 pt-6 dark:border-white/[0.07]">
                    <button
                      onClick={handleNext}
                      className="
                        flex items-center gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        px-7
                        py-3.5
                        text-lg
                        font-bold
                        text-white

                        shadow-lg
                        shadow-blue-600/20

                        transition-all

                        hover:-translate-y-0.5
                        hover:from-blue-500
                        hover:to-indigo-500
                        hover:shadow-blue-500/30
                      "
                    >
                      {currentIndex < questions.length - 1
                        ? "Next Question"
                        : "Finish Session"}

                      <ChevronRight size={21} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
