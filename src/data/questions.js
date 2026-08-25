export const QUESTION_BANK = [
  {
    id: "q1",
    sentence:
      "The marketing department ______ a new advertising campaign next month.",
    options: ["launch", "launched", "will launch", "launching"],
    correctAnswer: 2,
    translation:
      "Phòng marketing sẽ triển khai một chiến dịch quảng cáo mới vào tháng tới.",
    explanation: {
      correctAnswer: "will launch",
      grammarRule: "Future Simple Tense",
      sentenceStructure: "Subject + will + base verb + object",
      whyCorrect:
        "The time marker 'next month' clearly indicates an action that will happen in the future.",
      whyOthersWrong: [
        "A. launch: Present tense, doesn't match 'next month'.",
        "B. launched: Past tense.",
        "D. launching: Present participle/gerund, needs an auxiliary verb (e.g., 'is launching').",
      ],
      toeicTip:
        "Always scan the sentence for time indicators (next, tomorrow, last, yesterday, currently) before choosing a verb tense.",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "launch",
        ipa: "/lɔːntʃ/",
        pos: "verb",
        meaning: "ra mắt, khởi động",
        example: "We will launch the product soon.",
      },
      {
        word: "campaign",
        ipa: "/kæmˈpeɪn/",
        pos: "noun",
        meaning: "chiến dịch",
        example: "An advertising campaign.",
      },
    ],
    tags: ["verbs", "future"],
  },
  // ... Paste toàn bộ các object câu hỏi còn lại của bạn vào đây ...
];
