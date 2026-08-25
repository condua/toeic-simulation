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
import { AppContext } from "../context/AppContext";
import { QUESTION_BANK } from "../data/questions";

export default function PracticeMode() {
  const { state, dispatch } = useContext(AppContext);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showTranslation, setShowTranslation] = useState(
    state.settings.showTranslationDefault,
  );
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    let pool = [...QUESTION_BANK];
    if (state.currentPracticeParams?.mode === "mistakes") {
      const mistakeIds = Object.keys(state.mistakes);
      pool = pool.filter((q) => mistakeIds.includes(q.id));
    }
    pool.sort(() => Math.random() - 0.5);
    setQuestions(pool);
    setCurrentIndex(0);
    resetQuestionState();
  }, [state.currentPracticeParams]);

  const currentQuestion = questions[currentIndex];

  const resetQuestionState = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowTranslation(state.settings.showTranslationDefault);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionState();
    } else {
      dispatch({ type: "SET_VIEW", payload: "dashboard" });
    }
  };

  const handleSelectAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setShowExplanation(true);

    const isCorrect = index === currentQuestion.correctAnswer;
    setSessionStats((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    dispatch({
      type: "ANSWER_QUESTION",
      payload: { question: currentQuestion, isCorrect },
    });

    if (state.settings.autoPronunciation) {
      speakText(
        currentQuestion.sentence.replace(
          "______",
          currentQuestion.correctAnswer.toString(),
        ),
      );
    }
  };

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
          <BookOpen className="text-gray-400 w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold mb-2">No questions found</h2>
        <p className="text-gray-500 mb-6">
          Try changing your practice mode or reviewing later.
        </p>
        <button
          onClick={() => dispatch({ type: "SET_VIEW", payload: "dashboard" })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const isBookmarked = state.bookmarks.includes(currentQuestion?.id);

  return (
    <div className="max-w-3xl mx-auto pb-20">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => dispatch({ type: "SET_VIEW", payload: "dashboard" })}
          className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ChevronLeft size={20} /> Back
        </button>
        <div className="text-sm font-medium text-gray-500">
          Question {currentIndex + 1} of {questions.length}
        </div>
        <div className="text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
          Session Score: {sessionStats.correct}/{sessionStats.total}
        </div>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="bg-blue-600 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${(currentIndex / questions.length) * 100}%` }}
        />
      </div>

      {currentQuestion && (
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-start">
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                {currentQuestion.category} • {currentQuestion.subcategory}
              </span>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full 
                ${
                  currentQuestion.difficulty === "beginner" ||
                  currentQuestion.difficulty === "elementary"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : currentQuestion.difficulty === "intermediate"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {currentQuestion.difficulty.charAt(0).toUpperCase() +
                  currentQuestion.difficulty.slice(1)}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => speakText(currentQuestion.sentence)}
                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-full transition-colors"
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
                className={`p-2 rounded-full transition-colors ${isBookmarked ? "text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20" : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                title="Bookmark"
              >
                <Bookmark
                  size={20}
                  className={isBookmarked ? "fill-current" : ""}
                />
              </button>
            </div>
          </div>

          {/* Question Body */}
          <div className="p-6 lg:p-8">
            <h3 className="text-2xl font-medium leading-relaxed mb-8">
              {currentQuestion.sentence.split("______").map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span
                      className={`inline-block border-b-2 font-bold px-4 mx-1 transition-all
                      ${
                        selectedAnswer === null
                          ? "border-gray-400 min-w-[100px]"
                          : selectedAnswer === currentQuestion.correctAnswer
                            ? "border-green-500 text-green-600 dark:text-green-400"
                            : "border-red-500 text-red-600 dark:text-red-400"
                      }`}
                    >
                      {selectedAnswer !== null
                        ? currentQuestion.options[selectedAnswer]
                        : "        "}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showStatus = selectedAnswer !== null;

                let buttonClass =
                  "flex items-center p-4 border-2 rounded-xl text-left transition-all text-lg font-medium ";

                if (!showStatus) {
                  buttonClass +=
                    "border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600";
                } else if (isCorrect) {
                  buttonClass +=
                    "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400";
                } else if (isSelected && !isCorrect) {
                  buttonClass +=
                    "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400";
                } else {
                  buttonClass +=
                    "border-gray-200 dark:border-gray-700 opacity-50";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={buttonClass}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 shadow-sm font-bold mr-4 shrink-0 text-gray-500">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showStatus && isCorrect && (
                      <CheckCircle className="text-green-500 ml-2 shrink-0" />
                    )}
                    {showStatus && isSelected && !isCorrect && (
                      <XCircle className="text-red-500 ml-2 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation Panel */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
              >
                <div className="p-6 lg:p-8 space-y-6">
                  {/* Result Header */}
                  <div
                    className={`flex items-start gap-4 p-4 rounded-xl ${selectedAnswer === currentQuestion.correctAnswer ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"}`}
                  >
                    {selectedAnswer === currentQuestion.correctAnswer ? (
                      <CheckCircle size={28} className="shrink-0 mt-1" />
                    ) : (
                      <XCircle size={28} className="shrink-0 mt-1" />
                    )}
                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        {selectedAnswer === currentQuestion.correctAnswer
                          ? "Correct!"
                          : "Incorrect"}
                      </h4>
                      <p>
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

                  {/* Core Explanation */}
                  <div>
                    <h4 className="font-bold flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                      <Lightbulb size={20} /> Why is this correct?
                    </h4>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          Rule:
                        </span>{" "}
                        {currentQuestion.explanation.grammarRule}
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          Structure:
                        </span>{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm text-pink-600 dark:text-pink-400">
                          {currentQuestion.explanation.sentenceStructure}
                        </code>
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {currentQuestion.explanation.whyCorrect}
                      </p>
                    </div>
                  </div>

                  {/* Why others wrong */}
                  <div>
                    <h4 className="font-bold mb-3">
                      Why other options are wrong:
                    </h4>
                    <ul className="space-y-2">
                      {currentQuestion.explanation.whyOthersWrong.map(
                        (reason, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-gray-600 dark:text-gray-400"
                          >
                            <X
                              size={18}
                              className="text-red-400 shrink-0 mt-0.5"
                            />
                            <span>{reason}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* Translation Toggle */}
                  <div>
                    <button
                      onClick={() => setShowTranslation(!showTranslation)}
                      className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold mb-2 hover:underline"
                    >
                      <Languages size={18} />
                      {showTranslation
                        ? "Hide Translation"
                        : "Show Vietnamese Translation"}
                    </button>
                    <AnimatePresence>
                      {showTranslation && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="p-4 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-900 dark:text-indigo-200 rounded-xl italic"
                        >
                          "{currentQuestion.translation}"
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Vocabulary Section */}
                  {currentQuestion.vocabulary.length > 0 && (
                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <BookOpen size={18} /> Important Vocabulary
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentQuestion.vocabulary.map((vocab, i) => (
                          <div
                            key={i}
                            className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex items-start justify-between group cursor-pointer hover:border-blue-300 transition-colors"
                          >
                            <div>
                              <div className="flex items-baseline gap-2">
                                <span className="font-bold text-lg text-blue-600 dark:text-blue-400">
                                  {vocab.word}
                                </span>
                                <span className="text-xs text-gray-500 italic">
                                  {vocab.pos}
                                </span>
                              </div>
                              <span className="text-sm text-gray-500 block mb-1">
                                {vocab.ipa}
                              </span>
                              <span className="text-sm font-medium">
                                {vocab.meaning}
                              </span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                speakText(vocab.word);
                              }}
                              className="text-gray-400 hover:text-blue-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Volume2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TOEIC Tip */}
                  <div className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-yellow-900/30 dark:to-amber-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800/50 flex gap-4 items-start">
                    <div className="bg-yellow-400 text-yellow-900 p-2 rounded-lg shrink-0">
                      <Star size={20} className="fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 dark:text-yellow-400 mb-1">
                        PRO TIP
                      </h4>
                      <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                        {currentQuestion.explanation.toeicTip}
                      </p>
                    </div>
                  </div>

                  {/* Next Button */}
                  <div className="pt-6 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-105"
                    >
                      {currentIndex < questions.length - 1
                        ? "Next Question"
                        : "Finish Session"}{" "}
                      <ChevronRight />
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
