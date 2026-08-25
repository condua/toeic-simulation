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
        "D. launching: Present participle/gerund, needs an auxiliary verb.",
      ],
      toeicTip:
        "Always scan the sentence for time indicators (next, tomorrow, last, yesterday) before choosing a verb tense.",
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
    ],
    tags: ["verbs", "future"],
  },
  {
    id: "q2",
    sentence:
      "All employees are required to submit their expense reports ______ Friday.",
    options: ["in", "on", "by", "at"],
    correctAnswer: 2,
    translation:
      "Tất cả nhân viên được yêu cầu nộp báo cáo chi phí của họ trước thứ Sáu.",
    explanation: {
      correctAnswer: "by",
      grammarRule: "Prepositions of Time",
      sentenceStructure: "Action + by + deadline",
      whyCorrect:
        "'By' means 'no later than' and is used to indicate a deadline.",
      whyOthersWrong: [
        "A. in: Used for months, years, or durations.",
        "B. on: Used for days, but means exactly on that day, not as a deadline.",
        "D. at: Used for specific times (e.g., at 5 PM).",
      ],
      toeicTip:
        "When you see verbs related to completing a task (submit, finish, complete) with a time, 'by' is highly likely.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "submit",
        ipa: "/səbˈmɪt/",
        pos: "verb",
        meaning: "nộp, đệ trình",
        example: "Please submit your application online.",
      },
    ],
    tags: ["prepositions", "deadline"],
  },
  {
    id: "q3",
    sentence: "The CEO was very ______ with the quarterly sales figures.",
    options: ["impress", "impression", "impressive", "impressed"],
    correctAnswer: 3,
    translation:
      "Giám đốc điều hành rất ấn tượng với số liệu doanh số hàng quý.",
    explanation: {
      correctAnswer: "impressed",
      grammarRule: "Adjectives ending in -ed vs -ing",
      sentenceStructure: "Subject + be + adverb + adjective",
      whyCorrect:
        "Use '-ed' adjectives to describe a person's feelings or reactions.",
      whyOthersWrong: [
        "A. impress: Base verb.",
        "B. impression: Noun.",
        "C. impressive: Describes the thing causing the feeling (e.g., the sales figures were impressive).",
      ],
      toeicTip: "Feelings = -ed. Causes of feelings = -ing / -ive.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "quarterly",
        ipa: "/ˈkwɔːrtərli/",
        pos: "adj/adv",
        meaning: "hàng quý",
        example: "The company publishes a quarterly report.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q4",
    sentence: "Because of the heavy rain, the outdoor concert was ______.",
    options: ["cancel", "canceling", "canceled", "cancellation"],
    correctAnswer: 2,
    translation: "Bởi vì trời mưa to, buổi hòa nhạc ngoài trời đã bị hủy.",
    explanation: {
      correctAnswer: "canceled",
      grammarRule: "Passive Voice",
      sentenceStructure: "Subject + be + past participle",
      whyCorrect:
        "The concert cannot cancel itself; it receives the action, so passive voice (was + V3/ed) is needed.",
      whyOthersWrong: [
        "A. cancel: Base verb.",
        "B. canceling: Active continuous form.",
        "D. cancellation: Noun.",
      ],
      toeicTip:
        "If the subject is an inanimate object (like 'concert', 'meeting'), look for a passive verb form.",
    },
    category: "Grammar",
    subcategory: "Passive Voice",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "cancel",
        ipa: "/ˈkænsəl/",
        pos: "verb",
        meaning: "hủy bỏ",
        example: "They had to cancel the flight.",
      },
    ],
    tags: ["passive voice", "verbs"],
  },
  {
    id: "q5",
    sentence:
      "Mr. Johnson, ______ has been with the company for 10 years, is retiring next month.",
    options: ["who", "whom", "which", "whose"],
    correctAnswer: 0,
    translation:
      "Ông Johnson, người đã làm việc cho công ty được 10 năm, sẽ nghỉ hưu vào tháng tới.",
    explanation: {
      correctAnswer: "who",
      grammarRule: "Relative Pronouns",
      sentenceStructure: "Noun (Person) + who + verb",
      whyCorrect:
        "'who' is used as the subject of the relative clause modifying a person (Mr. Johnson).",
      whyOthersWrong: [
        "B. whom: Used as the object of a relative clause.",
        "C. which: Used for things, not people.",
        "D. whose: Indicates possession (needs a noun after it).",
      ],
      toeicTip:
        "Look at what follows the blank. If it's a verb (has been), use 'who' for people or 'which' for things.",
    },
    category: "Grammar",
    subcategory: "Relative Clauses",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "retire",
        ipa: "/rɪˈtaɪər/",
        pos: "verb",
        meaning: "nghỉ hưu",
        example: "He plans to retire at age 65.",
      },
    ],
    tags: ["relative pronouns"],
  },
  {
    id: "q6",
    sentence:
      "The new software update processes data much more ______ than the previous version.",
    options: ["quick", "quickly", "quickness", "quicker"],
    correctAnswer: 1,
    translation:
      "Bản cập nhật phần mềm mới xử lý dữ liệu nhanh hơn nhiều so với phiên bản trước.",
    explanation: {
      correctAnswer: "quickly",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb + object + adverb",
      whyCorrect: "An adverb is needed to modify the action verb 'processes'.",
      whyOthersWrong: [
        "A. quick: Adjective.",
        "C. quickness: Noun.",
        "D. quicker: Comparative adjective (would need to modify a noun).",
      ],
      toeicTip:
        "When a word describes HOW an action is done, choose the -ly adverb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "process",
        ipa: "/ˈprɑːses/",
        pos: "verb",
        meaning: "xử lý",
        example: "It takes time to process the application.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q7",
    sentence: "______ the bad weather, the delivery arrived on time.",
    options: ["Although", "Because", "Despite", "However"],
    correctAnswer: 2,
    translation: "Bất chấp thời tiết xấu, chuyến giao hàng đã đến đúng giờ.",
    explanation: {
      correctAnswer: "Despite",
      grammarRule: "Prepositions of Concession",
      sentenceStructure: "Despite + Noun Phrase, Clause",
      whyCorrect:
        "'Despite' is followed by a noun phrase ('the bad weather') to show contrast.",
      whyOthersWrong: [
        "A. Although: Must be followed by a full clause (S + V).",
        "B. Because: Shows cause, not contrast.",
        "D. However: An adverb usually used with a comma to start a new sentence.",
      ],
      toeicTip:
        "Despite / In spite of + Noun/V-ing. Although / Even though + S + V.",
    },
    category: "Grammar",
    subcategory: "Conjunctions & Prepositions",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "delivery",
        ipa: "/dɪˈlɪvəri/",
        pos: "noun",
        meaning: "sự giao hàng",
        example: "We offer free delivery on orders over $50.",
      },
    ],
    tags: ["conjunctions", "contrast"],
  },
  {
    id: "q8",
    sentence:
      "Please read the instructions carefully before ______ the equipment.",
    options: ["operate", "operated", "operates", "operating"],
    correctAnswer: 3,
    translation: "Vui lòng đọc kỹ hướng dẫn trước khi vận hành thiết bị.",
    explanation: {
      correctAnswer: "operating",
      grammarRule: "Prepositions followed by Gerunds",
      sentenceStructure: "Preposition (before) + V-ing",
      whyCorrect:
        "After prepositions like before, after, by, or without, verbs must take the -ing form (gerund).",
      whyOthersWrong: [
        "A. operate: Base verb.",
        "B. operated: Past tense / participle.",
        "C. operates: Third-person singular verb.",
      ],
      toeicTip:
        "Before / After / By / Without + V-ing is a very common pattern in TOEIC.",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "operate",
        ipa: "/ˈɑːpəreɪt/",
        pos: "verb",
        meaning: "vận hành, hoạt động",
        example: "Do you know how to operate this machine?",
      },
    ],
    tags: ["gerunds", "prepositions"],
  },
  {
    id: "q9",
    sentence:
      "The board of directors is considering several ______ for the new office location.",
    options: ["propose", "proposes", "proposals", "proposed"],
    correctAnswer: 2,
    translation:
      "Hội đồng quản trị đang xem xét một vài đề xuất cho địa điểm văn phòng mới.",
    explanation: {
      correctAnswer: "proposals",
      grammarRule: "Noun placement",
      sentenceStructure: "Adjective (several) + Plural Noun",
      whyCorrect:
        "The word 'several' must be followed by a plural countable noun.",
      whyOthersWrong: [
        "A. propose: Verb.",
        "B. proposes: Verb (singular).",
        "D. proposed: Past participle / Adjective.",
      ],
      toeicTip:
        "Words like 'several', 'many', 'various', 'a few' always require a plural noun.",
    },
    category: "Vocabulary",
    subcategory: "Word Form",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "proposal",
        ipa: "/prəˈpoʊzl/",
        pos: "noun",
        meaning: "bản đề xuất",
        example: "They rejected the business proposal.",
      },
    ],
    tags: ["nouns", "quantifiers"],
  },
  {
    id: "q10",
    sentence:
      "If we had more time, we ______ the design to make it more user-friendly.",
    options: ["will modify", "would modify", "modify", "modified"],
    correctAnswer: 1,
    translation:
      "Nếu chúng ta có nhiều thời gian hơn, chúng ta sẽ sửa đổi thiết kế để nó thân thiện với người dùng hơn.",
    explanation: {
      correctAnswer: "would modify",
      grammarRule: "Conditional Type 2",
      sentenceStructure: "If + S + V(past), S + would + base verb",
      whyCorrect:
        "The 'If' clause uses the past tense ('had'), making this a Type 2 conditional (unreal present).",
      whyOthersWrong: [
        "A. will modify: Used for Type 1 conditionals (If + present).",
        "C. modify: Present tense.",
        "D. modified: Past tense.",
      ],
      toeicTip:
        "Memorize the conditional pairings: If V(present) -> will V. If V(past) -> would V.",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "modify",
        ipa: "/ˈmɑːdɪfaɪ/",
        pos: "verb",
        meaning: "sửa đổi, điều chỉnh",
        example: "We need to modify the current system.",
      },
    ],
    tags: ["conditionals"],
  },
  {
    id: "q11",
    sentence:
      "The new policy ______ affects all part-time and full-time staff members.",
    options: ["direct", "directs", "directly", "direction"],
    correctAnswer: 2,
    translation:
      "Chính sách mới ảnh hưởng trực tiếp đến tất cả nhân viên bán thời gian và toàn thời gian.",
    explanation: {
      correctAnswer: "directly",
      grammarRule: "Adverb placement",
      sentenceStructure: "Subject + Adverb + Verb",
      whyCorrect:
        "The blank is between the subject 'policy' and the verb 'affects', so an adverb is needed.",
      whyOthersWrong: [
        "A. direct: Adjective or verb.",
        "B. directs: Verb.",
        "D. direction: Noun.",
      ],
      toeicTip:
        "A blank directly before a main verb is almost always an adverb (-ly).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "affect",
        ipa: "/əˈfekt/",
        pos: "verb",
        meaning: "ảnh hưởng",
        example: "The weather will affect our plans.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q12",
    sentence:
      "We apologize for any ______ caused by the construction in the lobby.",
    options: [
      "inconvenient",
      "inconvenience",
      "inconveniently",
      "inconveniences",
    ],
    correctAnswer: 1,
    translation:
      "Chúng tôi xin lỗi vì bất kỳ sự bất tiện nào do việc thi công ở sảnh gây ra.",
    explanation: {
      correctAnswer: "inconvenience",
      grammarRule: "Noun placement",
      sentenceStructure: "Adjective (any) + Noun",
      whyCorrect:
        "'Any' must be followed by a noun. In this standard phrase, the uncountable noun 'inconvenience' is used.",
      whyOthersWrong: [
        "A. inconvenient: Adjective.",
        "C. inconveniently: Adverb.",
        "D. inconveniences: Plural (less common in this set phrase).",
      ],
      toeicTip:
        "'We apologize for any inconvenience' is a highly standard phrase in TOEIC business contexts.",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "inconvenience",
        ipa: "/ˌɪnkənˈviːniəns/",
        pos: "noun",
        meaning: "sự bất tiện",
        example: "We regret the inconvenience.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q13",
    sentence:
      "Applicants must have a ______ degree in business administration or a related field.",
    options: ["master", "master's", "masters", "mastering"],
    correctAnswer: 1,
    translation:
      "Ứng viên phải có bằng thạc sĩ về quản trị kinh doanh hoặc lĩnh vực liên quan.",
    explanation: {
      correctAnswer: "master's",
      grammarRule: "Possessive nouns / Standard terms",
      sentenceStructure: "Noun possessive + Noun",
      whyCorrect:
        "The correct term for the degree is a 'master's degree' (or bachelor's degree), using the possessive form.",
      whyOthersWrong: [
        "A. master: Incorrect form for the degree.",
        "C. masters: Plural, not possessive.",
        "D. mastering: Verb/Gerund.",
      ],
      toeicTip:
        "Academic degrees usually take possessives: bachelor's degree, master's degree.",
    },
    category: "Vocabulary",
    subcategory: "Fixed Phrases",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "applicant",
        ipa: "/ˈæplɪkənt/",
        pos: "noun",
        meaning: "người nộp đơn, ứng viên",
        example: "There were 50 applicants for the job.",
      },
    ],
    tags: ["vocabulary", "education"],
  },
  {
    id: "q14",
    sentence:
      "The project manager decided to ______ the task to the most experienced team member.",
    options: ["delegate", "relocate", "negotiate", "celebrate"],
    correctAnswer: 0,
    translation:
      "Quản lý dự án quyết định giao phó nhiệm vụ cho thành viên nhóm giàu kinh nghiệm nhất.",
    explanation: {
      correctAnswer: "delegate",
      grammarRule: "Vocabulary - Verbs",
      sentenceStructure: "Verb + object (task) + to + person",
      whyCorrect:
        "'Delegate' means to assign a task or responsibility to someone else.",
      whyOthersWrong: [
        "B. relocate: To move to a new place.",
        "C. negotiate: To discuss to reach an agreement.",
        "D. celebrate: To party or acknowledge an event.",
      ],
      toeicTip:
        "The collocation 'delegate a task to someone' is very common in workplace contexts.",
    },
    category: "Vocabulary",
    subcategory: "Word Choice",
    type: "vocabulary",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "delegate",
        ipa: "/ˈdelɪɡeɪt/",
        pos: "verb",
        meaning: "giao phó, ủy quyền",
        example: "A good manager knows how to delegate.",
      },
    ],
    tags: ["verbs", "business"],
  },
  {
    id: "q15",
    sentence:
      "Employees are not allowed to use company vehicles for personal ______.",
    options: ["reason", "reasons", "reasonable", "reasonably"],
    correctAnswer: 1,
    translation:
      "Nhân viên không được phép sử dụng xe của công ty vì lý do cá nhân.",
    explanation: {
      correctAnswer: "reasons",
      grammarRule: "Noun Number",
      sentenceStructure: "Adjective (personal) + Noun (plural)",
      whyCorrect:
        "The phrase 'for personal reasons' is a standard plural expression indicating general purposes.",
      whyOthersWrong: [
        "A. reason: Singular, usually requires an article (a personal reason).",
        "C. reasonable: Adjective.",
        "D. reasonably: Adverb.",
      ],
      toeicTip: "Memorize the phrase 'for personal reasons'.",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "vehicle",
        ipa: "/ˈviːəkl/",
        pos: "noun",
        meaning: "phương tiện, xe cộ",
        example: "Are you the driver of this vehicle?",
      },
    ],
    tags: ["nouns", "workplace"],
  },
  {
    id: "q16",
    sentence:
      "The factory ______ 5,000 units per day if it operates at full capacity.",
    options: ["produce", "produces", "produced", "producing"],
    correctAnswer: 1,
    translation:
      "Nhà máy sản xuất 5.000 đơn vị mỗi ngày nếu nó hoạt động hết công suất.",
    explanation: {
      correctAnswer: "produces",
      grammarRule: "Subject-Verb Agreement",
      sentenceStructure: "Singular Subject + Singular Verb",
      whyCorrect:
        "'The factory' is a singular subject, so it needs a singular verb ending in -s (produces) for a general truth (Conditional type 0/1).",
      whyOthersWrong: [
        "A. produce: Plural verb.",
        "C. produced: Past tense (doesn't match the 'if it operates' present condition).",
        "D. producing: V-ing.",
      ],
      toeicTip:
        "Always check if the subject is singular or plural before selecting a present tense verb.",
    },
    category: "Grammar",
    subcategory: "Subject-Verb Agreement",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "capacity",
        ipa: "/kəˈpæsəti/",
        pos: "noun",
        meaning: "công suất, sức chứa",
        example: "The stadium has a seating capacity of 50,000.",
      },
    ],
    tags: ["verbs", "agreement"],
  },
  {
    id: "q17",
    sentence:
      "Please assure the client that the error will be corrected ______.",
    options: (prompt) => ["prompt", "prompts", "promptly", "promptness"],
    correctAnswer: 2,
    translation:
      "Vui lòng đảm bảo với khách hàng rằng lỗi sẽ được sửa chữa ngay lập tức.",
    explanation: {
      correctAnswer: "promptly",
      grammarRule: "Adverb modifying a verb",
      sentenceStructure: "Passive Verb (will be corrected) + Adverb",
      whyCorrect:
        "An adverb is needed to describe HOW the action 'corrected' will be done.",
      whyOthersWrong: [
        "A. prompt: Adjective.",
        "B. prompts: Verb/Noun plural.",
        "D. promptness: Noun.",
      ],
      toeicTip:
        "Words ending in -ly are highly tested at the end of sentences to modify the preceding verb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "assure",
        ipa: "/əˈʃʊr/",
        pos: "verb",
        meaning: "cam đoan, đảm bảo",
        example: "I assure you that it will be fine.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q18",
    sentence:
      "Mr. Lee is the only candidate ______ qualifications match all of our requirements.",
    options: ["who", "whom", "which", "whose"],
    correctAnswer: 3,
    translation:
      "Ông Lee là ứng viên duy nhất có bằng cấp phù hợp với tất cả các yêu cầu của chúng tôi.",
    explanation: {
      correctAnswer: "whose",
      grammarRule: "Relative Pronouns - Possession",
      sentenceStructure: "Noun (candidate) + whose + Noun (qualifications)",
      whyCorrect:
        "'whose' indicates possession (the candidate's qualifications). It sits between two nouns.",
      whyOthersWrong: [
        "A. who: Followed by a verb.",
        "B. whom: Followed by a pronoun/subject.",
        "C. which: For things, not people.",
      ],
      toeicTip:
        "If there is a blank between two nouns (Candidate ___ qualifications), 'whose' is usually correct.",
    },
    category: "Grammar",
    subcategory: "Relative Clauses",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "qualification",
        ipa: "/ˌkwɑːlɪfɪˈkeɪʃn/",
        pos: "noun",
        meaning: "trình độ, bằng cấp",
        example: "What are your qualifications for this job?",
      },
    ],
    tags: ["relative pronouns", "possession"],
  },
  {
    id: "q19",
    sentence:
      "The financial report was much ______ than the investors had anticipated.",
    options: ["good", "better", "best", "well"],
    correctAnswer: 1,
    translation:
      "Báo cáo tài chính tốt hơn nhiều so với những gì các nhà đầu tư đã dự đoán.",
    explanation: {
      correctAnswer: "better",
      grammarRule: "Comparative Adjectives",
      sentenceStructure: "much + Comparative Adjective + than",
      whyCorrect:
        "The word 'than' requires a comparative form. 'Much' is used to emphasize the comparative.",
      whyOthersWrong: [
        "A. good: Base adjective.",
        "C. best: Superlative.",
        "D. well: Adverb.",
      ],
      toeicTip:
        "Key indicators for comparatives are 'than' and modifiers like 'much', 'even', 'far', 'slightly'.",
    },
    category: "Grammar",
    subcategory: "Comparisons",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "anticipate",
        ipa: "/ænˈtɪsɪpeɪt/",
        pos: "verb",
        meaning: "dự đoán, mong đợi",
        example: "We don't anticipate any problems.",
      },
    ],
    tags: ["comparisons", "adjectives"],
  },
  {
    id: "q20",
    sentence:
      "Neither the manager ______ the employees were aware of the schedule change.",
    options: ["or", "and", "nor", "but"],
    correctAnswer: 2,
    translation:
      "Cả quản lý lẫn nhân viên đều không biết về sự thay đổi lịch trình.",
    explanation: {
      correctAnswer: "nor",
      grammarRule: "Correlative Conjunctions",
      sentenceStructure: "Neither X nor Y",
      whyCorrect: "'Neither' is always paired with 'nor'.",
      whyOthersWrong: [
        "A. or: Pairs with 'either'.",
        "B. and: Pairs with 'both'.",
        "D. but: Pairs with 'not only... but also'.",
      ],
      toeicTip:
        "Memorize the pairs: Both...and, Either...or, Neither...nor, Not only...but also.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "aware",
        ipa: "/əˈwer/",
        pos: "adj",
        meaning: "nhận thức, biết",
        example: "Are you aware of the risks?",
      },
    ],
    tags: ["conjunctions", "pairs"],
  },
  {
    id: "q21",
    sentence:
      "You can find the extra printer ink ______ the bottom drawer of the supply cabinet.",
    options: ["in", "on", "at", "to"],
    correctAnswer: 0,
    translation:
      "Bạn có thể tìm thấy mực máy in dự phòng ở trong ngăn kéo dưới cùng của tủ vật tư.",
    explanation: {
      correctAnswer: "in",
      grammarRule: "Prepositions of Place",
      sentenceStructure: "in + enclosed space",
      whyCorrect:
        "'In' is used for enclosed spaces or containers like a drawer or a box.",
      whyOthersWrong: [
        "B. on: Used for surfaces (on the desk).",
        "C. at: Used for specific points/locations (at the door).",
        "D. to: Indicates movement/direction.",
      ],
      toeicTip: "For 3D spaces, rooms, and containers, always use 'in'.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "drawer",
        ipa: "/drɔːr/",
        pos: "noun",
        meaning: "ngăn kéo",
        example: "The knives are in the top drawer.",
      },
    ],
    tags: ["prepositions", "place"],
  },
  {
    id: "q22",
    sentence:
      "Customer satisfaction has increased significantly ______ the new return policy was introduced.",
    options: ["while", "during", "since", "because"],
    correctAnswer: 2,
    translation:
      "Sự hài lòng của khách hàng đã tăng lên đáng kể từ khi chính sách hoàn trả mới được giới thiệu.",
    explanation: {
      correctAnswer: "since",
      grammarRule: "Prepositions/Conjunctions of Time",
      sentenceStructure: "Present Perfect + since + Past Simple Clause",
      whyCorrect:
        "'Since' connects a present perfect verb ('has increased') to a specific point in the past ('was introduced').",
      whyOthersWrong: [
        "A. while: Means 'at the same time' (Present Continuous / Past Continuous).",
        "B. during: Followed by a noun, not a clause.",
        "D. because: Shows reason, but doesn't pair structurally with the present perfect time frame here.",
      ],
      toeicTip:
        "If you see 'has/have + V3' in the main clause, look for 'since' or 'for'.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "significantly",
        ipa: "/sɪɡˈnɪfɪkəntli/",
        pos: "adv",
        meaning: "đáng kể",
        example: "Profits have increased significantly.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q23",
    sentence:
      "The maintenance crew will inspect the elevators tomorrow to ensure they are functioning ______.",
    options: ["proper", "properly", "property", "properties"],
    correctAnswer: 1,
    translation:
      "Đội bảo trì sẽ kiểm tra các thang máy vào ngày mai để đảm bảo chúng đang hoạt động bình thường.",
    explanation: {
      correctAnswer: "properly",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (functioning) + Adverb",
      whyCorrect:
        "The adverb 'properly' is needed to describe how the elevators are functioning.",
      whyOthersWrong: [
        "A. proper: Adjective.",
        "C. property: Noun (asset/estate).",
        "D. properties: Plural noun.",
      ],
      toeicTip:
        "Words describing 'how' an action is performed are adverbs ending in -ly.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "inspect",
        ipa: "/ɪnˈspekt/",
        pos: "verb",
        meaning: "kiểm tra",
        example: "The teacher will inspect our homework.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q24",
    sentence:
      "The store offers a full refund ______ the item is returned within 30 days with a receipt.",
    options: ["unless", "provided that", "so that", "therefore"],
    correctAnswer: 1,
    translation:
      "Cửa hàng hoàn tiền toàn bộ với điều kiện là món hàng được trả lại trong vòng 30 ngày cùng với biên lai.",
    explanation: {
      correctAnswer: "provided that",
      grammarRule: "Conditional Conjunctions",
      sentenceStructure: "Clause + provided that + Condition Clause",
      whyCorrect:
        "'Provided that' means 'on the condition that' or 'if', which fits perfectly logically.",
      whyOthersWrong: [
        "A. unless: Means 'if not' (illogical here).",
        "C. so that: Indicates purpose.",
        "D. therefore: Adverb indicating result, cannot connect two clauses in this way.",
      ],
      toeicTip:
        "'Provided that', 'providing that', and 'as long as' are formal synonyms for 'if'.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "refund",
        ipa: "/ˈriːfʌnd/",
        pos: "noun",
        meaning: "sự hoàn tiền",
        example: "I would like a full refund.",
      },
    ],
    tags: ["conjunctions", "conditionals"],
  },
  {
    id: "q25",
    sentence:
      "Many participants found the training session to be highly ______ and informative.",
    options: ["motivate", "motivation", "motivational", "motivator"],
    correctAnswer: 2,
    translation:
      "Nhiều người tham gia thấy buổi đào tạo rất truyền cảm hứng và hữu ích.",
    explanation: {
      correctAnswer: "motivational",
      grammarRule: "Parallel Structure",
      sentenceStructure: "Adverb + Adjective and Adjective",
      whyCorrect:
        "The conjunction 'and' connects two parallel items. 'Informative' is an adjective, so the blank must also be an adjective.",
      whyOthersWrong: [
        "A. motivate: Verb.",
        "B. motivation: Noun.",
        "D. motivator: Noun (person or thing).",
      ],
      toeicTip:
        "Always look at the words around 'and' or 'or'. They must be the same part of speech.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "informative",
        ipa: "/ɪnˈfɔːrmətɪv/",
        pos: "adj",
        meaning: "cung cấp nhiều thông tin, hữu ích",
        example: "The documentary was very informative.",
      },
    ],
    tags: ["adjectives", "parallel structure"],
  },
  {
    id: "q26",
    sentence:
      "The director is out of the office today, so please leave a message with ______ assistant.",
    options: ["he", "him", "his", "himself"],
    correctAnswer: 2,
    translation:
      "Giám đốc hôm nay không có ở văn phòng, vì vậy vui lòng để lại tin nhắn cho trợ lý của ông ấy.",
    explanation: {
      correctAnswer: "his",
      grammarRule: "Possessive Adjectives",
      sentenceStructure: "Possessive Adjective + Noun",
      whyCorrect:
        "'his' shows possession, indicating the assistant belongs to the director.",
      whyOthersWrong: [
        "A. he: Subject pronoun.",
        "B. him: Object pronoun.",
        "D. himself: Reflexive pronoun.",
      ],
      toeicTip:
        "If there is a noun (assistant) right after the blank, you need a possessive adjective (my, your, his, her, their, our, its).",
    },
    category: "Grammar",
    subcategory: "Pronouns",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 350,
    vocabulary: [
      {
        word: "assistant",
        ipa: "/əˈsɪstənt/",
        pos: "noun",
        meaning: "trợ lý",
        example: "She is the manager's assistant.",
      },
    ],
    tags: ["pronouns", "possession"],
  },
  {
    id: "q27",
    sentence:
      "If the printer runs ______ of paper, there are extra reams in the supply closet.",
    options: ["out", "off", "away", "down"],
    correctAnswer: 0,
    translation:
      "Nếu máy in hết giấy, có các ram giấy dự phòng trong tủ vật tư.",
    explanation: {
      correctAnswer: "out",
      grammarRule: "Phrasal Verbs",
      sentenceStructure: "run out of + noun",
      whyCorrect:
        "'Run out of' is a phrasal verb meaning to use up all of a supply.",
      whyOthersWrong: [
        "B. run off: To quickly print copies, or to flee.",
        "C. run away: To escape.",
        "D. run down: To lose power (battery) or hit with a vehicle.",
      ],
      toeicTip:
        "'Run out of' (supplies, ink, paper, time) is a very common office vocabulary phrase.",
    },
    category: "Vocabulary",
    subcategory: "Phrasal Verbs",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "ream",
        ipa: "/riːm/",
        pos: "noun",
        meaning: "ram (đơn vị đếm giấy, 500 tờ)",
        example: "We need to order more reams of paper.",
      },
    ],
    tags: ["phrasal verbs", "office"],
  },
  {
    id: "q28",
    sentence:
      "To enter the secure facility, visitors must display their ID badges ______ at all times.",
    options: ["visible", "visibly", "visibility", "vision"],
    correctAnswer: 1,
    translation:
      "Để vào cơ sở an ninh, du khách phải đeo thẻ ID sao cho có thể nhìn thấy rõ vào mọi lúc.",
    explanation: {
      correctAnswer: "visibly",
      grammarRule: "Adverbs",
      sentenceStructure: "Verb + Object + Adverb",
      whyCorrect:
        "The adverb 'visibly' modifies the verb 'display', describing how the badge should be displayed.",
      whyOthersWrong: [
        "A. visible: Adjective.",
        "C. visibility: Noun.",
        "D. vision: Noun.",
      ],
      toeicTip:
        "When a sentence has a complete Subject + Verb + Object structure, an adverb is often placed at the end to describe the verb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "facility",
        ipa: "/fəˈsɪləti/",
        pos: "noun",
        meaning: "cơ sở",
        example: "The sports facility is very modern.",
      },
    ],
    tags: ["adverbs", "security"],
  },
  {
    id: "q29",
    sentence:
      "The committee has decided to ______ the deadline for proposals by two weeks.",
    options: ["extend", "attend", "intend", "pretend"],
    correctAnswer: 0,
    translation:
      "Ủy ban đã quyết định gia hạn thời hạn nộp đề xuất thêm hai tuần.",
    explanation: {
      correctAnswer: "extend",
      grammarRule: "Vocabulary - Verbs",
      sentenceStructure: "extend + deadline/time",
      whyCorrect:
        "'Extend' means to make something last longer, which logically pairs with 'deadline'.",
      whyOthersWrong: [
        "B. attend: To be present at an event.",
        "C. intend: To plan to do something.",
        "D. pretend: To act as if something is true when it is not.",
      ],
      toeicTip:
        "Common collocations with deadlines: meet a deadline, extend a deadline, miss a deadline.",
    },
    category: "Vocabulary",
    subcategory: "Word Choice",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "extend",
        ipa: "/ɪkˈstend/",
        pos: "verb",
        meaning: "gia hạn, kéo dài",
        example: "Can you extend the deadline?",
      },
    ],
    tags: ["verbs", "collocation"],
  },
  {
    id: "q30",
    sentence:
      "The local government is investing heavily in infrastructure; ______, traffic conditions should improve soon.",
    options: ["however", "instead", "therefore", "otherwise"],
    correctAnswer: 2,
    translation:
      "Chính quyền địa phương đang đầu tư mạnh vào cơ sở hạ tầng; do đó, tình trạng giao thông sẽ sớm được cải thiện.",
    explanation: {
      correctAnswer: "therefore",
      grammarRule: "Conjunctive Adverbs",
      sentenceStructure: "Clause 1; therefore, Clause 2 (Result)",
      whyCorrect:
        "'Therefore' shows a cause-and-effect relationship. Investing in infrastructure leads to better traffic.",
      whyOthersWrong: [
        "A. however: Shows contrast.",
        "B. instead: Shows substitution.",
        "D. otherwise: Means 'if not' (usually for warnings).",
      ],
      toeicTip:
        "When linking two independent clauses with a semicolon and a comma (; ____, ), look for logical flow: Result (therefore), Contrast (however), Addition (moreover).",
    },
    category: "Grammar",
    subcategory: "Transitions",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "infrastructure",
        ipa: "/ˈɪnfrəstrʌktʃər/",
        pos: "noun",
        meaning: "cơ sở hạ tầng",
        example: "The country needs better infrastructure.",
      },
    ],
    tags: ["transitions", "logic"],
  },
  {
    id: "q31",
    sentence:
      "By the time the manager arrived, the team ______ the presentation.",
    options: ["finishes", "has finished", "will finish", "had finished"],
    correctAnswer: 3,
    translation:
      "Vào thời điểm quản lý đến, nhóm đã hoàn thành bài thuyết trình.",
    explanation: {
      correctAnswer: "had finished",
      grammarRule: "Past Perfect Tense",
      sentenceStructure: "By the time + Past Simple, Past Perfect",
      whyCorrect:
        "The Past Perfect (had + V3) is used for an action completed before another action in the past ('arrived').",
      whyOthersWrong: [
        "A. finishes: Present tense.",
        "B. has finished: Present perfect.",
        "C. will finish: Future tense.",
      ],
      toeicTip:
        "Structure 'By the time + S + V(past), S + had + V3' is a classic TOEIC formula.",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "presentation",
        ipa: "/ˌpreznˈteɪʃn/",
        pos: "noun",
        meaning: "bài thuyết trình",
        example: "Her presentation was very persuasive.",
      },
    ],
    tags: ["verbs", "past perfect"],
  },
  {
    id: "q32",
    sentence:
      "Employees are reminded to keep their passwords ______ and not share them with anyone.",
    options: ["confidential", "confidentially", "confidence", "confident"],
    correctAnswer: 0,
    translation:
      "Nhân viên được nhắc nhở giữ mật khẩu bảo mật và không chia sẻ với bất kỳ ai.",
    explanation: {
      correctAnswer: "confidential",
      grammarRule: "Adjective after Keep/Make/Find",
      sentenceStructure: "keep + object + adjective",
      whyCorrect:
        "The verb 'keep' takes an object ('passwords') followed by an adjective.",
      whyOthersWrong: [
        "B. confidentially: Adverb.",
        "C. confidence: Noun.",
        "D. confident: Adjective (but applies to people feeling sure, not data privacy).",
      ],
      toeicTip:
        "Verbs like make, find, keep, consider are followed by Object + Adjective.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "confidential",
        ipa: "/ˌkɑːnfɪˈdenʃl/",
        pos: "adj",
        meaning: "kín, bí mật",
        example: "These documents are strictly confidential.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q33",
    sentence:
      "The ______ of the new branch in Tokyo will double the company's market reach in Asia.",
    options: ["open", "opened", "opening", "openly"],
    correctAnswer: 2,
    translation:
      "Việc mở chi nhánh mới tại Tokyo sẽ nhân đôi phạm vi tiếp cận thị trường của công ty tại Châu Á.",
    explanation: {
      correctAnswer: "opening",
      grammarRule: "Nouns/Gerunds",
      sentenceStructure: "The + Noun + of",
      whyCorrect:
        "'The opening' acts as a noun phrase referring to the event of starting the new branch.",
      whyOthersWrong: [
        "A. open: Base verb / Adjective.",
        "B. opened: Past tense.",
        "D. openly: Adverb.",
      ],
      toeicTip:
        "The pattern 'The + [Noun/Gerund] + of' requires a noun form in the blank.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "branch",
        ipa: "/bræntʃ/",
        pos: "noun",
        meaning: "chi nhánh",
        example: "The bank has branches all over the city.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q34",
    sentence:
      "Passengers are advised to remain seated ______ the aircraft has come to a complete stop.",
    options: ["until", "during", "within", "since"],
    correctAnswer: 0,
    translation:
      "Hành khách được khuyên nên ngồi yên cho đến khi máy bay dừng hẳn.",
    explanation: {
      correctAnswer: "until",
      grammarRule: "Prepositions/Conjunctions of Time",
      whyCorrect:
        "'Until' indicates that an action (remaining seated) continues up to a specific point in time (the aircraft stopping).",
      whyOthersWrong: [
        "B. during: Followed by a noun (during the flight).",
        "C. within: Used for durations (within 3 days).",
        "D. since: Indicates a starting point in the past.",
      ],
      toeicTip:
        "'Until' can be a conjunction (followed by a clause) or a preposition (followed by a time). It perfectly fits 'wait/remain until...'",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "aircraft",
        ipa: "/ˈerkræft/",
        pos: "noun",
        meaning: "máy bay, phi cơ",
        example: "The aircraft is ready for takeoff.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q35",
    sentence:
      "The consultant suggested ______ a new strategy to attract younger consumers.",
    options: ["implement", "to implement", "implementing", "implemented"],
    correctAnswer: 2,
    translation:
      "Nhà tư vấn đề nghị thực hiện một chiến lược mới để thu hút người tiêu dùng trẻ tuổi hơn.",
    explanation: {
      correctAnswer: "implementing",
      grammarRule: "Verbs followed by Gerunds",
      sentenceStructure: "Suggest + V-ing",
      whyCorrect:
        "The verb 'suggest' is always followed by a gerund (V-ing) when there is no object/clause.",
      whyOthersWrong: [
        "A. implement: Base verb.",
        "B. to implement: 'Suggest' does not take a 'to-infinitive'.",
        "D. implemented: Past participle.",
      ],
      toeicTip:
        "Memorize verbs that take V-ing: suggest, recommend, consider, enjoy, avoid, mind.",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "implement",
        ipa: "/ˈɪmplɪment/",
        pos: "verb",
        meaning: "thi hành, thực hiện",
        example: "We need to implement these changes.",
      },
    ],
    tags: ["gerunds", "verbs"],
  },
  {
    id: "q36",
    sentence:
      "Due to a scheduling conflict, Ms. Davis will be ______ to attend the seminar.",
    options: ["unable", "incapable", "impossible", "disabled"],
    correctAnswer: 0,
    translation: "Do trùng lịch, cô Davis sẽ không thể tham dự hội thảo.",
    explanation: {
      correctAnswer: "unable",
      grammarRule: "Vocabulary - Adjectives",
      sentenceStructure: "be unable + to + verb",
      whyCorrect:
        "'Unable to do something' is the correct phrase for a person lacking the ability or time.",
      whyOthersWrong: [
        "B. incapable: Takes 'of + V-ing' (incapable of attending).",
        "C. impossible: Usually used for situations/things (It is impossible for her to attend).",
        "D. disabled: Refers to physical/mental impairment.",
      ],
      toeicTip:
        "Person + be unable to + Verb. Situation + be impossible to + Verb.",
    },
    category: "Vocabulary",
    subcategory: "Word Choice",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "seminar",
        ipa: "/ˈsemɪnɑːr/",
        pos: "noun",
        meaning: "hội thảo",
        example: "I attended a seminar on marketing.",
      },
    ],
    tags: ["adjectives", "vocabulary"],
  },
  {
    id: "q37",
    sentence:
      "Any employee who works ______ than 40 hours a week is eligible for overtime pay.",
    options: ["more", "most", "much", "many"],
    correctAnswer: 0,
    translation:
      "Bất kỳ nhân viên nào làm việc nhiều hơn 40 giờ một tuần đều đủ điều kiện nhận lương làm thêm giờ.",
    explanation: {
      correctAnswer: "more",
      grammarRule: "Comparatives",
      sentenceStructure: "Comparative (more) + than",
      whyCorrect: "The presence of 'than' requires a comparative form.",
      whyOthersWrong: [
        "B. most: Superlative.",
        "C. much: Base modifier (cannot precede 'than' directly without 'more').",
        "D. many: Base modifier.",
      ],
      toeicTip:
        "The word 'than' is the biggest giveaway. Always pair it with 'more', 'less', 'fewer', or a word ending in '-er'.",
    },
    category: "Grammar",
    subcategory: "Comparisons",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "eligible",
        ipa: "/ˈelɪdʒəbl/",
        pos: "adj",
        meaning: "đủ điều kiện, tư cách",
        example: "You are eligible for a promotion.",
      },
    ],
    tags: ["comparisons", "quantifiers"],
  },
  {
    id: "q38",
    sentence:
      "The architect presented a highly ______ design for the new library.",
    options: ["innovate", "innovation", "innovative", "innovatively"],
    correctAnswer: 2,
    translation:
      "Kiến trúc sư đã trình bày một thiết kế mang tính đổi mới cao cho thư viện mới.",
    explanation: {
      correctAnswer: "innovative",
      grammarRule: "Adjective modifying a noun",
      sentenceStructure: "Adverb (highly) + Adjective + Noun (design)",
      whyCorrect: "We need an adjective to modify the noun 'design'.",
      whyOthersWrong: [
        "A. innovate: Verb.",
        "B. innovation: Noun.",
        "D. innovatively: Adverb.",
      ],
      toeicTip:
        "The pattern 'a/an + Adverb + ______ + Noun' ALWAYS requires an adjective in the blank.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "architect",
        ipa: "/ˈɑːrkɪtekt/",
        pos: "noun",
        meaning: "kiến trúc sư",
        example: "The architect designed a beautiful house.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q39",
    sentence:
      "Please review the attached contract and sign it ______ the bottom of page 3.",
    options: ["in", "on", "at", "to"],
    correctAnswer: 2,
    translation: "Vui lòng xem lại hợp đồng đính kèm và ký vào cuối trang 3.",
    explanation: {
      correctAnswer: "at",
      grammarRule: "Prepositions of Place",
      sentenceStructure: "at + specific point (the bottom, the top)",
      whyCorrect:
        "'At' is used for a specific point on a page or document (at the top, at the bottom).",
      whyOthersWrong: [
        "A. in: For enclosed spaces.",
        "B. on: For surfaces (on page 3 is correct, but 'on the bottom' is less standard than 'at the bottom').",
        "D. to: Direction.",
      ],
      toeicTip:
        "Memorize fixed phrases: at the top, at the bottom, at the beginning, at the end.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "attached",
        ipa: "/əˈtætʃt/",
        pos: "adj",
        meaning: "đính kèm",
        example: "Please see the attached document.",
      },
    ],
    tags: ["prepositions", "place"],
  },
  {
    id: "q40",
    sentence:
      "The new software is not only faster ______ easier to use than the old system.",
    options: ["or", "and", "but also", "as well as"],
    correctAnswer: 2,
    translation:
      "Phần mềm mới không chỉ nhanh hơn mà còn dễ sử dụng hơn so với hệ thống cũ.",
    explanation: {
      correctAnswer: "but also",
      grammarRule: "Correlative Conjunctions",
      sentenceStructure: "not only X but also Y",
      whyCorrect: "'Not only' must be paired with 'but also'.",
      whyOthersWrong: [
        "A. or: Pairs with 'either'.",
        "B. and: Pairs with 'both'.",
        "D. as well as: Meaning is similar, but grammatically incorrect with 'not only'.",
      ],
      toeicTip:
        "Look for the first half of the pair. If you see 'not only', immediately look for 'but also'.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "software",
        ipa: "/ˈsɔːftwer/",
        pos: "noun",
        meaning: "phần mềm",
        example: "You need to update your software.",
      },
    ],
    tags: ["conjunctions", "pairs"],
  },
  {
    id: "q41",
    sentence:
      "Sales figures for this quarter have been ______, surpassing all expectations.",
    options: ["impressive", "impressively", "impression", "impresses"],
    correctAnswer: 0,
    translation: "Doanh số cho quý này rất ấn tượng, vượt qua mọi kỳ vọng.",
    explanation: {
      correctAnswer: "impressive",
      grammarRule: "Adjective after linking verb",
      sentenceStructure: "Subject + have been + Adjective",
      whyCorrect:
        "The verb 'have been' is a linking verb (to be) and requires an adjective to describe the subject ('Sales figures').",
      whyOthersWrong: [
        "B. impressively: Adverb.",
        "C. impression: Noun.",
        "D. impresses: Verb.",
      ],
      toeicTip:
        "Linking verbs (be, seem, become, remain, appear) are always followed by adjectives, not adverbs.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "surpass",
        ipa: "/sərˈpæs/",
        pos: "verb",
        meaning: "vượt qua",
        example: "The results surpassed our expectations.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q42",
    sentence:
      "The committee will ______ the proposal tomorrow and make a final decision.",
    options: ["review", "reviews", "reviewed", "reviewing"],
    correctAnswer: 0,
    translation:
      "Ủy ban sẽ xem xét bản đề xuất vào ngày mai và đưa ra quyết định cuối cùng.",
    explanation: {
      correctAnswer: "review",
      grammarRule: "Future Tense / Modal Verbs",
      sentenceStructure: "will + base verb",
      whyCorrect:
        "The modal verb 'will' must be followed by a verb in its base (infinitive) form.",
      whyOthersWrong: [
        "B. reviews: 3rd person singular.",
        "C. reviewed: Past tense.",
        "D. reviewing: V-ing.",
      ],
      toeicTip:
        "Will, can, could, should, must, might are ALWAYS followed by a base verb without 'to'.",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 350,
    vocabulary: [
      {
        word: "review",
        ipa: "/rɪˈvjuː/",
        pos: "verb",
        meaning: "xem xét, đánh giá",
        example: "Let's review the document together.",
      },
    ],
    tags: ["verbs", "modals"],
  },
  {
    id: "q43",
    sentence:
      "______ you need further assistance, please do not hesitate to contact our support team.",
    options: ["If", "Should", "When", "Unless"],
    correctAnswer: 1,
    translation:
      "Nếu bạn cần thêm sự hỗ trợ, xin đừng ngần ngại liên hệ với nhóm hỗ trợ của chúng tôi.",
    explanation: {
      correctAnswer: "Should",
      grammarRule: "Inversion in Conditionals (Type 1)",
      sentenceStructure: "Should + Subject + Base Verb",
      whyCorrect:
        "'Should' can replace 'If' in formal conditionals. 'Should you need' is the same as 'If you need'.",
      whyOthersWrong: [
        "A. If: Correct logically, but 'If you need' is standard. However, in formal TOEIC business letters, 'Should' is frequently tested in this exact phrasing.",
        "C. When: Doesn't fit the conditional tone.",
        "D. Unless: Means 'if not', making the sentence illogical.",
      ],
      toeicTip:
        "Memorize the phrase: 'Should you have any questions...' or 'Should you need...'",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "hesitate",
        ipa: "/ˈhezɪteɪt/",
        pos: "verb",
        meaning: "ngập ngừng, do dự",
        example: "Please do not hesitate to call me.",
      },
    ],
    tags: ["conditionals", "inversion"],
  },
  {
    id: "q44",
    sentence:
      "We must finish painting the office ______ the new furniture arrives.",
    options: ["before", "during", "until", "since"],
    correctAnswer: 0,
    translation:
      "Chúng ta phải hoàn thành việc sơn văn phòng trước khi nội thất mới đến.",
    explanation: {
      correctAnswer: "before",
      grammarRule: "Time Clauses",
      sentenceStructure: "Action 1 + before + Action 2",
      whyCorrect:
        "'Before' logically links two actions, indicating one must precede the other.",
      whyOthersWrong: [
        "B. during: Followed by a noun, not a clause (S+V).",
        "C. until: Means up to a point, doesn't fit the 'finish' context well.",
        "D. since: Means from a past time to now.",
      ],
      toeicTip:
        "If followed by Subject + Verb, choose a conjunction (before, after, when) rather than a preposition (during, despite).",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "furniture",
        ipa: "/ˈfɜːrnɪtʃər/",
        pos: "noun",
        meaning: "đồ nội thất",
        example: "We bought some new furniture.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q45",
    sentence:
      "Our competitors are offering a similar product at a ______ lower price.",
    options: ["considerable", "considerably", "consideration", "considering"],
    correctAnswer: 1,
    translation:
      "Các đối thủ cạnh tranh của chúng ta đang cung cấp một sản phẩm tương tự với mức giá thấp hơn đáng kể.",
    explanation: {
      correctAnswer: "considerably",
      grammarRule: "Adverb modifying an adjective",
      sentenceStructure: "Adverb + Comparative Adjective (lower)",
      whyCorrect:
        "An adverb is needed to modify the adjective 'lower' (how much lower? considerably lower).",
      whyOthersWrong: [
        "A. considerable: Adjective.",
        "C. consideration: Noun.",
        "D. considering: Present participle/Preposition.",
      ],
      toeicTip:
        "Adverbs like significantly, considerably, slightly, much are often used to modify comparative adjectives (-er).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "competitor",
        ipa: "/kəmˈpetɪtər/",
        pos: "noun",
        meaning: "đối thủ cạnh tranh",
        example: "Our main competitor lowered their prices.",
      },
    ],
    tags: ["adverbs", "comparatives"],
  },
  {
    id: "q46",
    sentence:
      "A fee will be charged for any ______ made to a flight reservation after purchase.",
    options: ["modify", "modifies", "modifying", "modifications"],
    correctAnswer: 3,
    translation:
      "Một khoản phí sẽ được tính cho bất kỳ sửa đổi nào đối với đặt chỗ chuyến bay sau khi mua.",
    explanation: {
      correctAnswer: "modifications",
      grammarRule: "Noun Form",
      sentenceStructure: "Adjective (any) + Noun",
      whyCorrect:
        "After 'any', a noun is required. 'Modifications' fits both grammatically and logically.",
      whyOthersWrong: [
        "A. modify: Verb.",
        "B. modifies: Verb (3rd person singular).",
        "C. modifying: Gerund (doesn't fit well passively with 'made to').",
      ],
      toeicTip:
        "The collocation 'make modifications' (noun) is heavily used in business and travel contexts.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "reservation",
        ipa: "/ˌrezərˈveɪʃn/",
        pos: "noun",
        meaning: "sự đặt chỗ",
        example: "I have a reservation under the name Smith.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q47",
    sentence:
      "The CEO ______ announced that the company had achieved record profits.",
    options: ["proud", "proudly", "pride", "prouder"],
    correctAnswer: 1,
    translation:
      "Giám đốc điều hành tự hào thông báo rằng công ty đã đạt mức lợi nhuận kỷ lục.",
    explanation: {
      correctAnswer: "proudly",
      grammarRule: "Adverb Placement",
      sentenceStructure: "Subject + Adverb + Main Verb",
      whyCorrect:
        "An adverb is needed between the subject (CEO) and the verb (announced) to describe how the action was done.",
      whyOthersWrong: [
        "A. proud: Adjective.",
        "C. pride: Noun.",
        "D. prouder: Comparative adjective.",
      ],
      toeicTip:
        "A blank directly between the Subject and the Main Verb is always an adverb ending in -ly.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "profit",
        ipa: "/ˈprɑːfɪt/",
        pos: "noun",
        meaning: "lợi nhuận",
        example: "The company made a huge profit.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q48",
    sentence:
      "______ the packaging was damaged, the item inside was in perfect condition.",
    options: ["Because", "Even though", "Moreover", "As a result"],
    correctAnswer: 1,
    translation:
      "Mặc dù bao bì đã bị hỏng, món hàng bên trong vẫn ở tình trạng hoàn hảo.",
    explanation: {
      correctAnswer: "Even though",
      grammarRule: "Conjunctions of Contrast",
      sentenceStructure: "Even though + Clause 1, Clause 2",
      whyCorrect:
        "'Even though' introduces a contrasting idea (damaged packaging vs. perfect item).",
      whyOthersWrong: [
        "A. Because: Shows reason, illogical here.",
        "C. Moreover: Adverb for adding info, usually takes a semicolon/comma.",
        "D. As a result: Adverb showing effect.",
      ],
      toeicTip:
        "When a sentence starts with a blank followed by two contrasting clauses separated by a comma, look for Although / Even though.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "packaging",
        ipa: "/ˈpækɪdʒɪŋ/",
        pos: "noun",
        meaning: "bao bì, sự đóng gói",
        example: "The packaging protects the product.",
      },
    ],
    tags: ["conjunctions", "contrast"],
  },
  {
    id: "q49",
    sentence:
      "Employees are required to give two weeks' notice ______ they intend to resign.",
    options: ["if", "so that", "unless", "but"],
    correctAnswer: 0,
    translation:
      "Nhân viên được yêu cầu báo trước hai tuần nếu họ có ý định từ chức.",
    explanation: {
      correctAnswer: "if",
      grammarRule: "Conditional Conjunctions",
      sentenceStructure: "Main Clause + if + Condition Clause",
      whyCorrect:
        "'If' sets a condition for when the action (giving notice) is required.",
      whyOthersWrong: [
        "B. so that: Indicates purpose.",
        "C. unless: Means 'if not' (illogical: you give notice if you DON'T resign?).",
        "D. but: Conjunction of contrast.",
      ],
      toeicTip:
        "In corporate policies, 'if', 'when', and 'in the event that' are extremely common for stating conditions.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "resign",
        ipa: "/rɪˈzaɪn/",
        pos: "verb",
        meaning: "từ chức",
        example: "He resigned from his position as CEO.",
      },
    ],
    tags: ["conjunctions", "conditionals"],
  },
  {
    id: "q50",
    sentence:
      "The new branch is located ______ the intersection of Elm Street and 5th Avenue.",
    options: ["on", "at", "in", "by"],
    correctAnswer: 1,
    translation: "Chi nhánh mới nằm ở giao lộ của Phố Elm và Đại lộ số 5.",
    explanation: {
      correctAnswer: "at",
      grammarRule: "Prepositions of Place",
      sentenceStructure: "at + specific location/intersection",
      whyCorrect:
        "'At' is used to refer to a specific point on a map, such as an intersection.",
      whyOthersWrong: [
        "A. on: Used for a single street (on Elm Street).",
        "C. in: Used for cities or enclosed spaces (in New York).",
        "D. by: Means next to, but 'at' is the standard for intersections.",
      ],
      toeicTip:
        "For exact addresses (at 123 Main St) or intersections (at the corner of), always use 'at'.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "intersection",
        ipa: "/ˌɪntərˈsekʃn/",
        pos: "noun",
        meaning: "giao lộ, ngã tư",
        example: "Turn left at the next intersection.",
      },
    ],
    tags: ["prepositions", "place"],
  },
  {
    id: "q51",
    sentence:
      "The new safety regulations will take ______ on the first of January.",
    options: ["affect", "effect", "effort", "afford"],
    correctAnswer: 1,
    translation:
      "Các quy định an toàn mới sẽ có hiệu lực vào ngày mùng 1 tháng Giêng.",
    explanation: {
      correctAnswer: "effect",
      grammarRule: "Collocations / Idioms",
      sentenceStructure: "take + effect",
      whyCorrect:
        "The phrase 'take effect' means to become valid or start to apply.",
      whyOthersWrong: [
        "A. affect: Verb meaning to influence.",
        "C. effort: Noun meaning physical or mental exertion.",
        "D. afford: Verb meaning to have enough money to buy.",
      ],
      toeicTip:
        "Memorize the highly tested phrase 'take effect' (có hiệu lực).",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "regulation",
        ipa: "/ˌreɡjuˈleɪʃn/",
        pos: "noun",
        meaning: "quy định",
        example: "The new regulations are very strict.",
      },
    ],
    tags: ["collocations", "law"],
  },
  {
    id: "q52",
    sentence:
      "Mr. Smith, ______ resume we reviewed yesterday, will come in for an interview tomorrow.",
    options: ["who", "whom", "whose", "which"],
    correctAnswer: 2,
    translation:
      "Ông Smith, người mà chúng ta đã xem xét sơ yếu lý lịch hôm qua, sẽ đến phỏng vấn vào ngày mai.",
    explanation: {
      correctAnswer: "whose",
      grammarRule: "Relative Pronouns - Possession",
      sentenceStructure: "Noun (Person) + whose + Noun (resume)",
      whyCorrect:
        "'Whose' indicates possession, linking Mr. Smith to his resume.",
      whyOthersWrong: [
        "A. who: Followed by a verb.",
        "B. whom: Followed by a subject, but doesn't show possession.",
        "D. which: Used for things.",
      ],
      toeicTip:
        "If you see a blank surrounded by two nouns (Mr. Smith ___ resume), 'whose' is almost always the answer.",
    },
    category: "Grammar",
    subcategory: "Relative Clauses",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "resume",
        ipa: "/ˈrezəmeɪ/",
        pos: "noun",
        meaning: "sơ yếu lý lịch",
        example: "Please submit your resume online.",
      },
    ],
    tags: ["relative pronouns", "possession"],
  },
  {
    id: "q53",
    sentence:
      "The human resources department is looking for a ______ replacement for the retiring manager.",
    options: ["suit", "suitably", "suitable", "suitability"],
    correctAnswer: 2,
    translation:
      "Phòng nhân sự đang tìm kiếm một người thay thế phù hợp cho vị trí quản lý sắp nghỉ hưu.",
    explanation: {
      correctAnswer: "suitable",
      grammarRule: "Adjective modifying a noun",
      sentenceStructure: "Article (a) + Adjective + Noun (replacement)",
      whyCorrect:
        "An adjective is needed between the article 'a' and the noun 'replacement' to describe it.",
      whyOthersWrong: [
        "A. suit: Noun or Verb.",
        "B. suitably: Adverb.",
        "D. suitability: Noun.",
      ],
      toeicTip:
        "The pattern 'a/an + ______ + Noun' typically requires an adjective.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "replacement",
        ipa: "/rɪˈpleɪsmənt/",
        pos: "noun",
        meaning: "người/vật thay thế",
        example: "We need to find a replacement for him.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q54",
    sentence: "All laboratory ______ must wear protective gear at all times.",
    options: ["person", "personal", "personality", "personnel"],
    correctAnswer: 3,
    translation:
      "Tất cả nhân viên phòng thí nghiệm phải mặc đồ bảo hộ mọi lúc.",
    explanation: {
      correctAnswer: "personnel",
      grammarRule: "Vocabulary - Nouns",
      sentenceStructure: "Adjective (laboratory) + Noun",
      whyCorrect:
        "'Personnel' refers to the people working in an organization or a specific department.",
      whyOthersWrong: [
        "A. person: Singular (doesn't match 'All').",
        "B. personal: Adjective (cá nhân).",
        "C. personality: Noun (tính cách).",
      ],
      toeicTip:
        "Do not confuse 'personal' (adjective) with 'personnel' (noun meaning staff/employees).",
    },
    category: "Vocabulary",
    subcategory: "Word Choice",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "personnel",
        ipa: "/ˌpɜːrsəˈnel/",
        pos: "noun",
        meaning: "nhân viên, nhân sự",
        example: "All personnel must attend the meeting.",
      },
    ],
    tags: ["nouns", "workplace"],
  },
  {
    id: "q55",
    sentence:
      "The company's profits have risen ______ over the last three quarters.",
    options: ["steady", "steadily", "steadiness", "steadier"],
    correctAnswer: 1,
    translation: "Lợi nhuận của công ty đã tăng đều đặn trong ba quý vừa qua.",
    explanation: {
      correctAnswer: "steadily",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (have risen) + Adverb",
      whyCorrect: "An adverb is needed to describe HOW the profits have risen.",
      whyOthersWrong: [
        "A. steady: Adjective.",
        "C. steadiness: Noun.",
        "D. steadier: Comparative adjective.",
      ],
      toeicTip:
        "Verbs showing change (rise, fall, increase, decrease) are frequently modified by adverbs ending in -ly (steadily, significantly, slightly).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "profit",
        ipa: "/ˈprɑːfɪt/",
        pos: "noun",
        meaning: "lợi nhuận",
        example: "The company made a huge profit.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q56",
    sentence:
      "______ you have any further questions, please do not hesitate to contact our customer support.",
    options: ["If", "Should", "Unless", "Whether"],
    correctAnswer: 1,
    translation:
      "Nếu bạn có bất kỳ câu hỏi nào thêm, xin đừng ngần ngại liên hệ với bộ phận hỗ trợ khách hàng của chúng tôi.",
    explanation: {
      correctAnswer: "Should",
      grammarRule: "Inverted Conditionals",
      sentenceStructure: "Should + S + base verb",
      whyCorrect:
        "'Should' is used here as a formal inversion of 'If you have' -> 'Should you have'.",
      whyOthersWrong: [
        "A. If: 'If' works logically, but the sentence does not have 'should' in the main clause, and in TOEIC formal letters, 'Should you have' is heavily tested.",
        "C. Unless: Means 'if not', illogical here.",
        "D. Whether: Used for choices.",
      ],
      toeicTip:
        "'Should you require...', 'Should you have...' are extremely common formal business phrases replacing 'If'.",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "hesitate",
        ipa: "/ˈhezɪteɪt/",
        pos: "verb",
        meaning: "do dự",
        example: "Don't hesitate to ask for help.",
      },
    ],
    tags: ["conditionals", "formal"],
  },
  {
    id: "q57",
    sentence:
      "The local restaurant is famous ______ its spicy seafood dishes and excellent service.",
    options: ["with", "for", "about", "to"],
    correctAnswer: 1,
    translation:
      "Nhà hàng địa phương nổi tiếng vì các món hải sản cay và dịch vụ xuất sắc.",
    explanation: {
      correctAnswer: "for",
      grammarRule: "Adjective + Preposition",
      sentenceStructure: "famous + for",
      whyCorrect:
        "The adjective 'famous' is always followed by the preposition 'for' to indicate the reason.",
      whyOthersWrong: [
        "A. with: Incorrect collocation.",
        "C. about: Incorrect collocation.",
        "D. to: Used as 'famous to (someone)', not for the reason.",
      ],
      toeicTip:
        "Memorize adjective+preposition pairs: famous for, responsible for, interested in, aware of.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "famous",
        ipa: "/ˈfeɪməs/",
        pos: "adj",
        meaning: "nổi tiếng",
        example: "Paris is famous for its museums.",
      },
    ],
    tags: ["prepositions", "collocation"],
  },
  {
    id: "q58",
    sentence:
      "The management decided to postpone ______ the new policy until next year.",
    options: ["implement", "implemented", "to implement", "implementing"],
    correctAnswer: 3,
    translation:
      "Ban quản lý quyết định hoãn việc thực thi chính sách mới cho đến năm sau.",
    explanation: {
      correctAnswer: "implementing",
      grammarRule: "Verbs followed by Gerunds",
      sentenceStructure: "postpone + V-ing",
      whyCorrect: "The verb 'postpone' must be followed by a gerund (V-ing).",
      whyOthersWrong: [
        "A. implement: Base verb.",
        "B. implemented: Past tense.",
        "C. to implement: Incorrect because 'postpone' doesn't take an infinitive.",
      ],
      toeicTip:
        "Verbs that take V-ing: postpone, delay, avoid, consider, suggest, finish, mind.",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "postpone",
        ipa: "/poʊstˈpoʊn/",
        pos: "verb",
        meaning: "trì hoãn",
        example: "The meeting has been postponed.",
      },
    ],
    tags: ["gerunds", "verbs"],
  },
  {
    id: "q59",
    sentence:
      "______ the heavy rain, the outdoor charity event was a great success.",
    options: ["Because", "Although", "Despite", "However"],
    correctAnswer: 2,
    translation:
      "Mặc dù trời mưa to, sự kiện từ thiện ngoài trời vẫn rất thành công.",
    explanation: {
      correctAnswer: "Despite",
      grammarRule: "Prepositions of Concession",
      sentenceStructure: "Despite + Noun Phrase",
      whyCorrect:
        "'Despite' is followed by a noun phrase ('the heavy rain') and shows contrast.",
      whyOthersWrong: [
        "A. Because: Shows cause (illogical here).",
        "B. Although: Must be followed by a full clause (Although it rained heavily).",
        "D. However: An adverb requiring a comma (However, ...).",
      ],
      toeicTip:
        "Despite / In spite of + Noun Phrase. Although / Even though + Subject + Verb.",
    },
    category: "Grammar",
    subcategory: "Conjunctions & Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "charity",
        ipa: "/ˈtʃærəti/",
        pos: "noun",
        meaning: "từ thiện",
        example: "All proceeds will go to charity.",
      },
    ],
    tags: ["prepositions", "contrast"],
  },
  {
    id: "q60",
    sentence:
      "Please make sure to back up your files ______ leaving the office for the day.",
    options: ["before", "prior", "previous", "advance"],
    correctAnswer: 0,
    translation:
      "Vui lòng đảm bảo sao lưu các tập tin của bạn trước khi rời văn phòng trong ngày.",
    explanation: {
      correctAnswer: "before",
      grammarRule: "Prepositions followed by Gerunds",
      sentenceStructure: "before + V-ing",
      whyCorrect:
        "'Before' can function as a preposition followed by a gerund ('leaving').",
      whyOthersWrong: [
        "B. prior: Must be 'prior TO'.",
        "C. previous: Adjective.",
        "D. advance: Noun (in advance).",
      ],
      toeicTip: "Common TOEIC structure: Before/After/While/When + V-ing.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "back up",
        ipa: "/bæk ʌp/",
        pos: "phrasal verb",
        meaning: "sao lưu",
        example: "Always back up your important files.",
      },
    ],
    tags: ["prepositions", "gerunds"],
  },
  {
    id: "q61",
    sentence:
      "The new accounting software is designed to help users manage their finances more ______.",
    options: ["efficient", "efficiency", "efficiently", "efficiencies"],
    correctAnswer: 2,
    translation:
      "Phần mềm kế toán mới được thiết kế để giúp người dùng quản lý tài chính của họ hiệu quả hơn.",
    explanation: {
      correctAnswer: "efficiently",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (manage) + Object + Adverb",
      whyCorrect:
        "An adverb is needed to describe HOW the users manage their finances.",
      whyOthersWrong: [
        "A. efficient: Adjective.",
        "B. efficiency: Noun.",
        "D. efficiencies: Plural noun.",
      ],
      toeicTip:
        "When a sentence has Subject + Verb + Object, the blank at the end is almost always an adverb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "finance",
        ipa: "/ˈfaɪnæns/",
        pos: "noun",
        meaning: "tài chính",
        example: "He is the director of finance.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q62",
    sentence:
      "If the development team ______ the deadline, they would have secured the government contract.",
    options: ["meets", "met", "has met", "had met"],
    correctAnswer: 3,
    translation:
      "Nếu nhóm phát triển đáp ứng được thời hạn, họ đã có thể giành được hợp đồng của chính phủ.",
    explanation: {
      correctAnswer: "had met",
      grammarRule: "Conditional Type 3",
      sentenceStructure: "If + S + had + V3, S + would have + V3",
      whyCorrect:
        "The main clause uses 'would have secured', indicating an unreal past situation. The if-clause requires Past Perfect (had + V3/ed).",
      whyOthersWrong: [
        "A. meets: Type 1.",
        "B. met: Type 2.",
        "C. has met: Incorrect conditional form.",
      ],
      toeicTip:
        "Match the clauses! 'would have + V3' ALWAYS pairs with 'If ... had + V3'.",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "secure",
        ipa: "/sɪˈkjʊr/",
        pos: "verb",
        meaning: "giành được, bảo đảm",
        example: "They secured a $1 million contract.",
      },
    ],
    tags: ["conditionals", "past perfect"],
  },
  {
    id: "q63",
    sentence:
      "Our online store offers a wide ______ of electronics to suit every budget.",
    options: ["vary", "various", "variety", "variably"],
    correctAnswer: 2,
    translation:
      "Cửa hàng trực tuyến của chúng tôi cung cấp đa dạng các mặt hàng điện tử phù hợp với mọi túi tiền.",
    explanation: {
      correctAnswer: "variety",
      grammarRule: "Noun Form",
      sentenceStructure: "a wide + Noun + of",
      whyCorrect:
        "'Variety' is a noun. The phrase 'a wide variety of' is a standard English collocation.",
      whyOthersWrong: [
        "A. vary: Verb.",
        "B. various: Adjective.",
        "D. variably: Adverb.",
      ],
      toeicTip: "Memorize the phrase 'a wide variety of' (rất nhiều/đa dạng).",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "budget",
        ipa: "/ˈbʌdʒɪt/",
        pos: "noun",
        meaning: "ngân sách, túi tiền",
        example: "We are on a tight budget.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q64",
    sentence:
      "The operations manager is ______ responsible for training all newly hired employees.",
    options: ["sole", "solely", "solitary", "solitude"],
    correctAnswer: 1,
    translation:
      "Quản lý điều hành chịu trách nhiệm hoàn toàn trong việc đào tạo tất cả nhân viên mới được thuê.",
    explanation: {
      correctAnswer: "solely",
      grammarRule: "Adverbs modifying adjectives",
      sentenceStructure: "be + Adverb + Adjective (responsible)",
      whyCorrect:
        "An adverb is required between the 'be' verb and the adjective to modify the adjective.",
      whyOthersWrong: [
        "A. sole: Adjective.",
        "C. solitary: Adjective.",
        "D. solitude: Noun.",
      ],
      toeicTip:
        "A blank between 'is/are/am' and an Adjective is almost always an Adverb (-ly).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "solely",
        ipa: "/ˈsoʊlli/",
        pos: "adv",
        meaning: "duy nhất, hoàn toàn",
        example: "She is solely responsible for the project.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q65",
    sentence:
      "Participants will receive a certificate of completion ______ the end of the four-week course.",
    options: ["in", "on", "at", "by"],
    correctAnswer: 2,
    translation:
      "Người tham gia sẽ nhận được chứng chỉ hoàn thành vào cuối khóa học bốn tuần.",
    explanation: {
      correctAnswer: "at",
      grammarRule: "Prepositions of Time",
      sentenceStructure: "at + the end of",
      whyCorrect:
        "The fixed prepositional phrase is 'at the end of' to indicate a specific point in time.",
      whyOthersWrong: [
        "A. in: Used as 'in the end' (meaning eventually, without 'of').",
        "B. on: Incorrect collocation.",
        "D. by: Means 'no later than', less standard with 'the end of' without a specific context.",
      ],
      toeicTip:
        "Memorize: 'at the beginning of' / 'at the end of'. But 'in the beginning' / 'in the end' (without 'of').",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "certificate",
        ipa: "/sərˈtɪfɪkət/",
        pos: "noun",
        meaning: "chứng chỉ",
        example: "You will get a certificate after the test.",
      },
    ],
    tags: ["prepositions", "time"],
  },
  {
    id: "q66",
    sentence:
      "The board members ______ agreed on the proposed budget cuts during yesterday's meeting.",
    options: ["unanimous", "unanimously", "unanimity", "unanimities"],
    correctAnswer: 1,
    translation:
      "Các thành viên hội đồng quản trị đã nhất trí đồng ý về việc cắt giảm ngân sách được đề xuất trong cuộc họp hôm qua.",
    explanation: {
      correctAnswer: "unanimously",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Subject + Adverb + Verb",
      whyCorrect:
        "An adverb is needed to modify the verb 'agreed', showing how they agreed.",
      whyOthersWrong: [
        "A. unanimous: Adjective.",
        "C. unanimity: Noun.",
        "D. unanimities: Plural noun.",
      ],
      toeicTip:
        "When a word ends in -ly and is placed before an active verb, it is usually correct in TOEIC.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "unanimously",
        ipa: "/juˈnænɪməsli/",
        pos: "adv",
        meaning: "nhất trí, đồng lòng",
        example: "The committee voted unanimously.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q67",
    sentence:
      "______ the factory's overall production has increased, operating costs have remained relatively stable.",
    options: ["Although", "Because", "Despite", "During"],
    correctAnswer: 0,
    translation:
      "Mặc dù tổng sản lượng của nhà máy đã tăng lên, chi phí vận hành vẫn tương đối ổn định.",
    explanation: {
      correctAnswer: "Although",
      grammarRule: "Conjunctions of Contrast",
      sentenceStructure: "Although + Clause (S+V), Clause (S+V)",
      whyCorrect:
        "'Although' introduces a dependent clause that contrasts with the main clause.",
      whyOthersWrong: [
        "B. Because: Shows cause (illogical here).",
        "C. Despite: Must be followed by a Noun/V-ing, not a full clause.",
        "D. During: Preposition followed by a noun.",
      ],
      toeicTip:
        "If you see a Subject + Verb after the blank and a contrasting idea in the next clause, use Although/Even though.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "stable",
        ipa: "/ˈsteɪbl/",
        pos: "adj",
        meaning: "ổn định",
        example: "The patient's condition is stable.",
      },
    ],
    tags: ["conjunctions", "contrast"],
  },
  {
    id: "q68",
    sentence:
      "Customers who are ______ with their purchase can request a full refund within 14 days.",
    options: ["dissatisfy", "dissatisfied", "dissatisfying", "dissatisfaction"],
    correctAnswer: 1,
    translation:
      "Những khách hàng không hài lòng với việc mua hàng của họ có thể yêu cầu hoàn tiền toàn bộ trong vòng 14 ngày.",
    explanation: {
      correctAnswer: "dissatisfied",
      grammarRule: "Adjectives ending in -ed",
      sentenceStructure: "be + Adjective (-ed)",
      whyCorrect:
        "Adjectives ending in -ed describe human feelings or states. 'Dissatisfied' means feeling unhappy with something.",
      whyOthersWrong: [
        "A. dissatisfy: Base verb.",
        "C. dissatisfying: Adjective describing a thing/cause.",
        "D. dissatisfaction: Noun.",
      ],
      toeicTip: "Feelings = -ed. Causes = -ing.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "purchase",
        ipa: "/ˈpɜːrtʃəs/",
        pos: "noun/verb",
        meaning: "sự mua sắm, món hàng",
        example: "Keep the receipt as proof of purchase.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q69",
    sentence:
      "The CEO plans to ______ a new marketing strategy at the annual shareholders' meeting.",
    options: ["unveil", "conceal", "review", "predict"],
    correctAnswer: 0,
    translation:
      "Giám đốc điều hành dự định công bố một chiến lược tiếp thị mới tại cuộc họp cổ đông thường niên.",
    explanation: {
      correctAnswer: "unveil",
      grammarRule: "Vocabulary - Verbs",
      sentenceStructure: "unveil + a strategy/product",
      whyCorrect:
        "'Unveil' means to show or announce something publicly for the first time.",
      whyOthersWrong: [
        "B. conceal: To hide (illogical).",
        "C. review: To look over (possible, but 'unveil' fits the context of 'new strategy at an annual meeting' better as an announcement).",
        "D. predict: To guess the future.",
      ],
      toeicTip:
        "Common business vocabulary: unveil a product, launch a campaign, announce a strategy.",
    },
    category: "Vocabulary",
    subcategory: "Word Choice",
    type: "vocabulary",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "unveil",
        ipa: "/ʌnˈveɪl/",
        pos: "verb",
        meaning: "tiết lộ, công bố",
        example: "The company will unveil its new smartphone tomorrow.",
      },
    ],
    tags: ["verbs", "business"],
  },
  {
    id: "q70",
    sentence:
      "To ensure fast processing, please fill out the application form ______ in black ink.",
    options: ["complete", "completely", "completion", "completed"],
    correctAnswer: 1,
    translation:
      "Để đảm bảo xử lý nhanh, vui lòng điền đầy đủ vào đơn đăng ký bằng mực đen.",
    explanation: {
      correctAnswer: "completely",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (fill out) + Object + Adverb",
      whyCorrect:
        "An adverb is needed to describe how the form should be filled out.",
      whyOthersWrong: [
        "A. complete: Adjective or Verb.",
        "C. completion: Noun.",
        "D. completed: Past participle / Adjective.",
      ],
      toeicTip:
        "When you see 'fill out the form', look for the adverb 'completely'.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "application",
        ipa: "/ˌæplɪˈkeɪʃn/",
        pos: "noun",
        meaning: "đơn đăng ký, sự ứng dụng",
        example: "Please submit your application by Friday.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q71",
    sentence:
      "The project proposal must be submitted to the director ______ 5:00 PM on Friday.",
    options: ["in", "until", "by", "for"],
    correctAnswer: 2,
    translation:
      "Bản đề xuất dự án phải được nộp cho giám đốc trước 5:00 chiều thứ Sáu.",
    explanation: {
      correctAnswer: "by",
      grammarRule: "Prepositions of Time",
      sentenceStructure: "Action + by + deadline",
      whyCorrect:
        "'By' is used to indicate a deadline, meaning 'no later than'.",
      whyOthersWrong: [
        "A. in: Used for durations (in 2 hours) or months/years.",
        "B. until: Indicates an action continuing up to a point, not a single action like 'submit'.",
        "D. for: Used for durations (for 3 days).",
      ],
      toeicTip:
        "Verbs like submit, finish, complete, return always pair with 'by' for deadlines.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "proposal",
        ipa: "/prəˈpoʊzl/",
        pos: "noun",
        meaning: "bản đề xuất",
        example: "The committee accepted the proposal.",
      },
    ],
    tags: ["prepositions", "deadline"],
  },
  {
    id: "q72",
    sentence:
      "Several employees complained that the newly installed chairs were highly ______.",
    options: ["uncomfortable", "uncomfortably", "discomfort", "comforting"],
    correctAnswer: 0,
    translation:
      "Một số nhân viên phàn nàn rằng những chiếc ghế mới được lắp đặt rất không thoải mái.",
    explanation: {
      correctAnswer: "uncomfortable",
      grammarRule: "Adjective after 'be' verb",
      sentenceStructure: "be (were) + Adverb (highly) + Adjective",
      whyCorrect:
        "We need an adjective to describe the chairs. 'Highly' modifies this adjective.",
      whyOthersWrong: [
        "B. uncomfortably: Adverb.",
        "C. discomfort: Noun.",
        "D. comforting: Adjective, but means 'soothing', which contradicts 'complained'.",
      ],
      toeicTip:
        "Adverbs like highly, extremely, very are followed by adjectives.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "complain",
        ipa: "/kəmˈpleɪn/",
        pos: "verb",
        meaning: "phàn nàn",
        example: "Customers complained about the slow service.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q73",
    sentence:
      "The marketing team has ______ completed the analysis of the latest consumer survey.",
    options: ["almost", "often", "seldom", "yet"],
    correctAnswer: 0,
    translation:
      "Nhóm tiếp thị gần như đã hoàn thành việc phân tích cuộc khảo sát người tiêu dùng mới nhất.",
    explanation: {
      correctAnswer: "almost",
      grammarRule: "Adverbs of Degree",
      sentenceStructure: "has + Adverb + past participle",
      whyCorrect:
        "'Almost completed' means 'nearly finished', which makes perfect sense.",
      whyOthersWrong: [
        "B. often: Adverb of frequency, illogical here.",
        "C. seldom: Adverb of frequency, illogical.",
        "D. yet: Used at the end of negative sentences or questions.",
      ],
      toeicTip:
        "'Almost' and 'nearly' often pair with 'completed' or 'finished'.",
    },
    category: "Vocabulary",
    subcategory: "Word Choice",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "analysis",
        ipa: "/əˈnæləsɪs/",
        pos: "noun",
        meaning: "sự phân tích",
        example: "They are conducting a market analysis.",
      },
    ],
    tags: ["adverbs", "vocabulary"],
  },
  {
    id: "q74",
    sentence:
      "All visitors must check in at the reception desk ______ entering the manufacturing area.",
    options: ["before", "soon", "early", "ahead"],
    correctAnswer: 0,
    translation:
      "Tất cả khách tham quan phải đăng ký tại quầy lễ tân trước khi vào khu vực sản xuất.",
    explanation: {
      correctAnswer: "before",
      grammarRule: "Prepositions / Conjunctions",
      sentenceStructure: "before + V-ing",
      whyCorrect:
        "'Before' logically indicates the required sequence of events and can take a gerund.",
      whyOthersWrong: [
        "B. soon: Adverb of time.",
        "C. early: Adjective/Adverb.",
        "D. ahead: Requires 'of' (ahead of).",
      ],
      toeicTip:
        "Before + V-ing is a highly standard rule for procedures in TOEIC.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "reception",
        ipa: "/rɪˈsepʃn/",
        pos: "noun",
        meaning: "sự tiếp đón, quầy lễ tân",
        example: "Leave your keys at reception.",
      },
    ],
    tags: ["conjunctions", "gerunds"],
  },
  {
    id: "q75",
    sentence:
      "The CEO was very impressed by Mr. Chen's ______ to resolve the dispute so quickly.",
    options: ["able", "ability", "ably", "abilities"],
    correctAnswer: 1,
    translation:
      "Giám đốc điều hành rất ấn tượng bởi khả năng giải quyết tranh chấp nhanh chóng của ông Chen.",
    explanation: {
      correctAnswer: "ability",
      grammarRule: "Noun Form",
      sentenceStructure: "Possessive ('s) + Noun + to-infinitive",
      whyCorrect:
        "The possessive noun 'Mr. Chen's' must be followed by a noun. 'Ability to do something' is the correct collocation.",
      whyOthersWrong: [
        "A. able: Adjective.",
        "C. ably: Adverb.",
        "D. abilities: Plural (less idiomatic with 'to resolve' in this context).",
      ],
      toeicTip:
        "The pattern [Possessive] + ability + to + Verb is extremely common.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "dispute",
        ipa: "/dɪˈspjuːt/",
        pos: "noun",
        meaning: "cuộc tranh chấp",
        example: "They successfully resolved the dispute.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q76",
    sentence:
      "Due to the economic downturn, the company has decided to freeze all ______ hiring.",
    options: ["external", "externally", "exterior", "externals"],
    correctAnswer: 0,
    translation:
      "Do suy thoái kinh tế, công ty đã quyết định đóng băng tất cả việc tuyển dụng từ bên ngoài.",
    explanation: {
      correctAnswer: "external",
      grammarRule: "Adjectives modifying nouns",
      sentenceStructure: "Adjective + Noun (hiring)",
      whyCorrect:
        "We need an adjective to modify 'hiring'. 'External hiring' refers to hiring people from outside the company.",
      whyOthersWrong: [
        "B. externally: Adverb.",
        "C. exterior: Adjective/Noun (usually for physical surfaces).",
        "D. externals: Noun.",
      ],
      toeicTip:
        "Internal/External pair with nouns like audit, hiring, communication.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "downturn",
        ipa: "/ˈdaʊntɜːrn/",
        pos: "noun",
        meaning: "sự suy thoái",
        example: "The economic downturn affected sales.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q77",
    sentence:
      "Ms. Garcia will oversee the transition team ______ the new merger is completed.",
    options: ["until", "within", "during", "despite"],
    correctAnswer: 0,
    translation:
      "Cô Garcia sẽ giám sát đội ngũ chuyển tiếp cho đến khi việc sáp nhập mới hoàn tất.",
    explanation: {
      correctAnswer: "until",
      grammarRule: "Conjunctions of Time",
      sentenceStructure: "Clause + until + Clause",
      whyCorrect:
        "'Until' connects the ongoing action to a specific future point (when the merger is completed).",
      whyOthersWrong: [
        "B. within: Used with periods of time (within 3 days).",
        "C. during: Followed by a noun.",
        "D. despite: Preposition of concession, followed by a noun.",
      ],
      toeicTip:
        "If followed by a subject + verb indicating time, choose until, after, before, or when.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "merger",
        ipa: "/ˈmɜːrdʒər/",
        pos: "noun",
        meaning: "sự sáp nhập",
        example: "The merger will create a larger company.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q78",
    sentence:
      "If you had attended the seminar, you ______ how to use the new software.",
    options: ["will learn", "would learn", "would have learned", "learned"],
    correctAnswer: 2,
    translation:
      "Nếu bạn tham gia hội thảo, bạn đã học được cách sử dụng phần mềm mới.",
    explanation: {
      correctAnswer: "would have learned",
      grammarRule: "Conditional Type 3",
      sentenceStructure: "If + S + had + V3, S + would have + V3",
      whyCorrect:
        "The 'if' clause uses past perfect (had attended), indicating an unreal past condition. The main clause requires 'would have + V3'.",
      whyOthersWrong: [
        "A. will learn: Type 1.",
        "B. would learn: Type 2.",
        "D. learned: Past tense.",
      ],
      toeicTip: "Match 'had + V3' with 'would have + V3'.",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "attend",
        ipa: "/əˈtend/",
        pos: "verb",
        meaning: "tham dự",
        example: "I will attend the meeting.",
      },
    ],
    tags: ["conditionals", "past perfect"],
  },
  {
    id: "q79",
    sentence:
      "______ regular maintenance, the machines are expected to last for over twenty years.",
    options: ["With", "About", "From", "Into"],
    correctAnswer: 0,
    translation:
      "Với việc bảo trì thường xuyên, máy móc dự kiến sẽ kéo dài hơn hai mươi năm.",
    explanation: {
      correctAnswer: "With",
      grammarRule: "Prepositions",
      sentenceStructure: "With + Noun Phrase",
      whyCorrect:
        "'With' indicates having or using something. It perfectly introduces the condition/tool (maintenance).",
      whyOthersWrong: [
        "B. About: Means 'concerning'.",
        "C. From: Indicates origin.",
        "D. Into: Indicates movement inside.",
      ],
      toeicTip:
        "'With + [Noun]' is often used to show how a result is achieved (With your help, With proper care).",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "maintenance",
        ipa: "/ˈmeɪntənəns/",
        pos: "noun",
        meaning: "sự bảo trì",
        example: "The car needs regular maintenance.",
      },
    ],
    tags: ["prepositions", "tools"],
  },
  {
    id: "q80",
    sentence:
      "The supervisor requested that all reports be submitted ______ than Wednesday morning.",
    options: ["early", "earlier", "earliest", "more early"],
    correctAnswer: 1,
    translation:
      "Người giám sát yêu cầu nộp tất cả các báo cáo sớm hơn sáng thứ Tư.",
    explanation: {
      correctAnswer: "earlier",
      grammarRule: "Comparatives",
      sentenceStructure: "Comparative Adjective + than",
      whyCorrect:
        "The presence of 'than' requires the comparative form. 'Early' becomes 'earlier'.",
      whyOthersWrong: [
        "A. early: Base form.",
        "C. earliest: Superlative form.",
        "D. more early: Grammatically incorrect.",
      ],
      toeicTip:
        "When you see 'than', always look for a word ending in -er or preceded by 'more'.",
    },
    category: "Grammar",
    subcategory: "Comparisons",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "supervisor",
        ipa: "/ˈsuːpərvaɪzər/",
        pos: "noun",
        meaning: "người giám sát",
        example: "Speak to your supervisor if you have an issue.",
      },
    ],
    tags: ["comparisons", "adjectives"],
  },
  {
    id: "q81",
    sentence:
      "The committee will ______ the applications based on candidates' previous experience.",
    options: ["evaluate", "evaluates", "evaluated", "evaluating"],
    correctAnswer: 0,
    translation:
      "Ủy ban sẽ đánh giá các đơn đăng ký dựa trên kinh nghiệm trước đây của ứng viên.",
    explanation: {
      correctAnswer: "evaluate",
      grammarRule: "Modal Verbs",
      sentenceStructure: "will + base verb",
      whyCorrect:
        "The modal verb 'will' is always followed by the base (infinitive) form of the verb.",
      whyOthersWrong: [
        "B. evaluates: Present singular.",
        "C. evaluated: Past tense.",
        "D. evaluating: Gerund/Present participle.",
      ],
      toeicTip: "Will, can, could, must, should + V0.",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "evaluate",
        ipa: "/ɪˈvæljueɪt/",
        pos: "verb",
        meaning: "đánh giá",
        example: "We need to evaluate the results.",
      },
    ],
    tags: ["verbs", "modals"],
  },
  {
    id: "q82",
    sentence:
      "______ the low budget, the design team managed to create a stunning promotional video.",
    options: ["Because of", "Despite", "Even though", "However"],
    correctAnswer: 1,
    translation:
      "Bất chấp ngân sách thấp, đội thiết kế đã xoay sở để tạo ra một video quảng cáo tuyệt đẹp.",
    explanation: {
      correctAnswer: "Despite",
      grammarRule: "Prepositions of Concession",
      sentenceStructure: "Despite + Noun Phrase",
      whyCorrect:
        "Shows contrast between 'low budget' and 'stunning video'. Followed by a noun phrase.",
      whyOthersWrong: [
        "A. Because of: Shows cause (illogical here).",
        "C. Even though: Requires a full clause (Even though the budget was low).",
        "D. However: Adverb, requires punctuation like a comma.",
      ],
      toeicTip: "Despite / In spite of + Noun Phrase.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "promotional",
        ipa: "/prəˈmoʊʃənl/",
        pos: "adj",
        meaning: "thuộc về quảng cáo, khuyến mãi",
        example: "They gave away promotional items.",
      },
    ],
    tags: ["prepositions", "contrast"],
  },
  {
    id: "q83",
    sentence:
      "The director is ______ confident that sales will rebound in the next quarter.",
    options: ["full", "fully", "fullness", "fuller"],
    correctAnswer: 1,
    translation:
      "Giám đốc hoàn toàn tự tin rằng doanh số sẽ phục hồi trong quý tới.",
    explanation: {
      correctAnswer: "fully",
      grammarRule: "Adverb modifying an Adjective",
      sentenceStructure: "be (is) + Adverb + Adjective (confident)",
      whyCorrect: "An adverb is needed to modify the adjective 'confident'.",
      whyOthersWrong: [
        "A. full: Adjective.",
        "C. fullness: Noun.",
        "D. fuller: Comparative adjective.",
      ],
      toeicTip:
        "A blank between a 'be' verb and an adjective is always an adverb ending in -ly.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "rebound",
        ipa: "/rɪˈbaʊnd/",
        pos: "verb",
        meaning: "phục hồi, bật lại",
        example: "The market is expected to rebound.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q84",
    sentence:
      "All newly hired staff are required to attend an ______ session on Monday morning.",
    options: ["orient", "oriented", "orientation", "orienting"],
    correctAnswer: 2,
    translation:
      "Tất cả nhân viên mới được thuê đều phải tham dự buổi định hướng vào sáng thứ Hai.",
    explanation: {
      correctAnswer: "orientation",
      grammarRule: "Compound Nouns",
      sentenceStructure: "Article (an) + Noun + Noun (session)",
      whyCorrect:
        "'Orientation session' is a standard compound noun meaning a meeting for new employees.",
      whyOthersWrong: [
        "A. orient: Verb.",
        "B. oriented: Adjective.",
        "D. orienting: Participle.",
      ],
      toeicTip:
        "Familiarize yourself with common business compound nouns: training session, orientation session, safety regulations.",
    },
    category: "Vocabulary",
    subcategory: "Word Form",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "orientation",
        ipa: "/ˌɔːriənˈteɪʃn/",
        pos: "noun",
        meaning: "sự định hướng",
        example: "The orientation is at 9 AM.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q85",
    sentence:
      "The technician promised that he ______ the photocopier by the end of the day.",
    options: ["fixes", "fixed", "will fix", "would fix"],
    correctAnswer: 3,
    translation:
      "Kỹ thuật viên đã hứa rằng anh ấy sẽ sửa xong máy photocopy trước cuối ngày.",
    explanation: {
      correctAnswer: "would fix",
      grammarRule: "Reported Speech / Backshifting",
      sentenceStructure:
        "Subject + promised (past) + that + Subject + would + verb",
      whyCorrect:
        "Since the main verb 'promised' is in the past tense, the future intention 'will fix' backshifts to 'would fix'.",
      whyOthersWrong: [
        "A. fixes: Present tense.",
        "B. fixed: Past tense (implies he already did it, ignoring 'by the end of the day' intention).",
        "C. will fix: Fails to backshift after a past tense reporting verb.",
      ],
      toeicTip:
        "When reporting verbs (said, promised, stated) are in the past, verbs in the 'that' clause shift back (will -> would, is -> was).",
    },
    category: "Grammar",
    subcategory: "Reported Speech",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "photocopier",
        ipa: "/ˈfoʊtoʊkɑːpiər/",
        pos: "noun",
        meaning: "máy photocopy",
        example: "The photocopier is jammed again.",
      },
    ],
    tags: ["verbs", "reported speech"],
  },
  {
    id: "q86",
    sentence:
      "To apply for the loan, you must provide ______ of income and a valid identification card.",
    options: ["prove", "proves", "proven", "proof"],
    correctAnswer: 3,
    translation:
      "Để vay tiền, bạn phải cung cấp bằng chứng thu nhập và thẻ căn cước hợp lệ.",
    explanation: {
      correctAnswer: "proof",
      grammarRule: "Noun Form",
      sentenceStructure: "provide + Noun + of",
      whyCorrect:
        "The verb 'provide' needs an object (a noun). 'Proof' is the noun form of 'prove'.",
      whyOthersWrong: [
        "A. prove: Verb.",
        "B. proves: Verb.",
        "C. proven: Adjective / Past participle.",
      ],
      toeicTip:
        "Provide proof of (address/income/identity) is a common banking collocation.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "proof",
        ipa: "/pruːf/",
        pos: "noun",
        meaning: "bằng chứng",
        example: "Keep the receipt as proof of purchase.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q87",
    sentence:
      "The presentation was ______ long that several people in the audience fell asleep.",
    options: ["very", "too", "so", "such"],
    correctAnswer: 2,
    translation:
      "Bài thuyết trình dài đến nỗi một số người trong khán giả đã ngủ gật.",
    explanation: {
      correctAnswer: "so",
      grammarRule: "So ... that structure",
      sentenceStructure: "so + Adjective + that + Clause",
      whyCorrect:
        "'So' combines with an adjective and 'that' to express a result.",
      whyOthersWrong: [
        "A. very: Does not pair with 'that'.",
        "B. too: Pairs with 'to' (too long to watch).",
        "D. such: Requires a noun (such a long presentation that...).",
      ],
      toeicTip: "so + Adj/Adv + that. such + (a/an) + Noun + that.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "audience",
        ipa: "/ˈɔːdiəns/",
        pos: "noun",
        meaning: "khán giả",
        example: "The audience clapped loudly.",
      },
    ],
    tags: ["conjunctions", "structures"],
  },
  {
    id: "q88",
    sentence:
      "Mr. Adams is known for handling difficult clients ______ and professionally.",
    options: ["polite", "politely", "politeness", "more polite"],
    correctAnswer: 1,
    translation:
      "Ông Adams được biết đến với việc xử lý các khách hàng khó tính một cách lịch sự và chuyên nghiệp.",
    explanation: {
      correctAnswer: "politely",
      grammarRule: "Parallel Structure",
      sentenceStructure: "Adverb + and + Adverb",
      whyCorrect:
        "The conjunction 'and' connects parallel forms. 'Professionally' is an adverb, so the blank must be an adverb.",
      whyOthersWrong: [
        "A. polite: Adjective.",
        "C. politeness: Noun.",
        "D. more polite: Comparative adjective.",
      ],
      toeicTip:
        "Look at the word after 'and'. Your answer must match its word form.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "professionally",
        ipa: "/prəˈfeʃənəli/",
        pos: "adv",
        meaning: "một cách chuyên nghiệp",
        example: "You must dress professionally.",
      },
    ],
    tags: ["adverbs", "parallel structure"],
  },
  {
    id: "q89",
    sentence:
      "The warranty does not cover damages caused by ______ or improper use.",
    options: ["neglect", "neglects", "neglectful", "neglected"],
    correctAnswer: 0,
    translation:
      "Bảo hành không bao gồm các hư hỏng do sự bất cẩn hoặc sử dụng sai cách gây ra.",
    explanation: {
      correctAnswer: "neglect",
      grammarRule: "Parallel Structure with Nouns",
      sentenceStructure: "Noun (neglect) + or + Noun Phrase (improper use)",
      whyCorrect:
        "'Neglect' acts as an uncountable noun here, parallel to 'improper use'.",
      whyOthersWrong: [
        "B. neglects: Verb.",
        "C. neglectful: Adjective.",
        "D. neglected: Verb/Adjective.",
      ],
      toeicTip: "Prepositions like 'by' must be followed by a noun or gerund.",
    },
    category: "Vocabulary",
    subcategory: "Word Form",
    type: "vocabulary",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "neglect",
        ipa: "/nɪˈɡlekt/",
        pos: "noun/verb",
        meaning: "sự lơ là, bỏ bê",
        example: "The building is in a state of neglect.",
      },
    ],
    tags: ["nouns", "warranty"],
  },
  {
    id: "q90",
    sentence:
      "Passengers are requested to place all carry-on luggage ______ the seat in front of them.",
    options: ["below", "under", "down", "lower"],
    correctAnswer: 1,
    translation:
      "Hành khách được yêu cầu đặt tất cả hành lý xách tay dưới ghế phía trước mặt họ.",
    explanation: {
      correctAnswer: "under",
      grammarRule: "Prepositions of Place",
      sentenceStructure: "place + Object + under + Noun",
      whyCorrect:
        "'Under' is the standard preposition used when something is directly covered by something else (under the seat, under the table).",
      whyOthersWrong: [
        "A. below: Usually means lower than, but not necessarily directly underneath in physical contact contexts.",
        "C. down: Adverb of direction.",
        "D. lower: Comparative adjective.",
      ],
      toeicTip:
        "'Under the seat' and 'under the desk' are fixed TOEIC phrases.",
    },
    category: "Vocabulary",
    subcategory: "Prepositions",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "luggage",
        ipa: "/ˈlʌɡɪdʒ/",
        pos: "noun",
        meaning: "hành lý",
        example: "Don't leave your luggage unattended.",
      },
    ],
    tags: ["prepositions", "travel"],
  },
  {
    id: "q91",
    sentence:
      "The city council plans to build a new bridge, ______ will connect the industrial park to the highway.",
    options: ["who", "what", "which", "whose"],
    correctAnswer: 2,
    translation:
      "Hội đồng thành phố dự định xây một cây cầu mới, cái mà sẽ kết nối khu công nghiệp với đường cao tốc.",
    explanation: {
      correctAnswer: "which",
      grammarRule: "Relative Pronouns",
      sentenceStructure: ", + which + Verb",
      whyCorrect:
        "'which' is used to refer to a thing (the new bridge) in a non-defining relative clause.",
      whyOthersWrong: [
        "A. who: Refers to people.",
        "B. what: Cannot be used as a relative pronoun after a noun.",
        "D. whose: Indicates possession.",
      ],
      toeicTip:
        "When you see a comma and referring to a thing, 'which' is almost always the answer.",
    },
    category: "Grammar",
    subcategory: "Relative Clauses",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "council",
        ipa: "/ˈkaʊnsl/",
        pos: "noun",
        meaning: "hội đồng",
        example: "The city council approved the budget.",
      },
    ],
    tags: ["relative pronouns"],
  },
  {
    id: "q92",
    sentence:
      "Employees must notify their manager ______ they plan to take vacation time.",
    options: ["whenever", "whatever", "whoever", "whichever"],
    correctAnswer: 0,
    translation:
      "Nhân viên phải thông báo cho quản lý của họ bất cứ khi nào họ dự định nghỉ phép.",
    explanation: {
      correctAnswer: "whenever",
      grammarRule: "Conjunctions (Time/Condition)",
      sentenceStructure: "Clause + whenever + Clause",
      whyCorrect:
        "'Whenever' means 'at whatever time' or 'every time that', perfectly linking the condition of taking vacation.",
      whyOthersWrong: [
        "B. whatever: Means 'any thing'.",
        "C. whoever: Refers to people.",
        "D. whichever: Used for choices.",
      ],
      toeicTip:
        "'Whenever' acts as a conjunction connecting two clauses regarding time.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "notify",
        ipa: "/ˈnoʊtɪfaɪ/",
        pos: "verb",
        meaning: "thông báo",
        example: "Please notify us of any address changes.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q93",
    sentence:
      "Mr. Patel will not be able to attend the conference because of a previous ______.",
    options: ["engage", "engages", "engaging", "engagement"],
    correctAnswer: 3,
    translation:
      "Ông Patel sẽ không thể tham dự hội nghị vì một lịch trình (cuộc hẹn) từ trước.",
    explanation: {
      correctAnswer: "engagement",
      grammarRule: "Noun Form",
      sentenceStructure: "Article (a) + Adjective (previous) + Noun",
      whyCorrect:
        "'Engagement' is a noun meaning an appointment or arrangement.",
      whyOthersWrong: [
        "A. engage: Verb.",
        "B. engages: Verb.",
        "C. engaging: Adjective/Participle.",
      ],
      toeicTip:
        "'A prior engagement' or 'a previous engagement' is a very formal business excuse for being absent.",
    },
    category: "Vocabulary",
    subcategory: "Word Form",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "engagement",
        ipa: "/ɪnˈɡeɪdʒmənt/",
        pos: "noun",
        meaning: "cuộc hẹn, sự đính hôn",
        example: "I have a prior engagement tomorrow.",
      },
    ],
    tags: ["nouns", "business"],
  },
  {
    id: "q94",
    sentence:
      "The software update is ______ to fix the bug that causes the system to crash.",
    options: ["intend", "intends", "intended", "intending"],
    correctAnswer: 2,
    translation:
      "Bản cập nhật phần mềm được nhằm mục đích để sửa lỗi khiến hệ thống bị sập.",
    explanation: {
      correctAnswer: "intended",
      grammarRule: "Passive Voice / Participle Adjectives",
      sentenceStructure: "be (is) + intended + to + verb",
      whyCorrect:
        "'Be intended to' is a passive structure meaning 'is planned/designed to'.",
      whyOthersWrong: [
        "A. intend: Base verb.",
        "B. intends: Active singular verb.",
        "D. intending: Active present participle.",
      ],
      toeicTip: "Memorize the phrase: 'is intended to' or 'is intended for'.",
    },
    category: "Grammar",
    subcategory: "Passive Voice",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "crash",
        ipa: "/kræʃ/",
        pos: "verb",
        meaning: "sập (hệ thống), va chạm",
        example: "My computer crashed again.",
      },
    ],
    tags: ["passive", "verbs"],
  },
  {
    id: "q95",
    sentence:
      "Please review the document and return it to the HR department ______ possible.",
    options: ["as quick as", "as quickly as", "more quickly", "quickest"],
    correctAnswer: 1,
    translation:
      "Vui lòng xem lại tài liệu và gửi lại cho phòng nhân sự càng nhanh càng tốt.",
    explanation: {
      correctAnswer: "as quickly as",
      grammarRule: "Comparisons of Equality",
      sentenceStructure: "Verb + as + Adverb + as",
      whyCorrect:
        "We need an adverb to modify the verb 'return'. The structure 'as + adverb + as' is used for equality.",
      whyOthersWrong: [
        "A. as quick as: Uses an adjective instead of an adverb.",
        "C. more quickly: Missing 'than'.",
        "D. quickest: Superlative form.",
      ],
      toeicTip:
        "'As quickly as possible' is a standard set phrase in business emails.",
    },
    category: "Grammar",
    subcategory: "Comparisons",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "department",
        ipa: "/dɪˈpɑːrtmənt/",
        pos: "noun",
        meaning: "phòng ban",
        example: "He works in the sales department.",
      },
    ],
    tags: ["comparisons", "adverbs"],
  },
  {
    id: "q96",
    sentence: "The ______ of the new sports arena will begin next month.",
    options: ["construct", "construction", "constructive", "constructor"],
    correctAnswer: 1,
    translation:
      "Việc xây dựng nhà thi đấu thể thao mới sẽ bắt đầu vào tháng tới.",
    explanation: {
      correctAnswer: "construction",
      grammarRule: "Noun Form",
      sentenceStructure: "The + Noun + of",
      whyCorrect:
        "A noun is required. 'Construction' refers to the process of building.",
      whyOthersWrong: [
        "A. construct: Verb.",
        "C. constructive: Adjective.",
        "D. constructor: Noun (person/company), but doesn't fit 'begin next month' logically in this context.",
      ],
      toeicTip: "The pattern 'The + Noun + of' is highly reliable.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "construction",
        ipa: "/kənˈstrʌkʃn/",
        pos: "noun",
        meaning: "sự xây dựng",
        example: "The bridge is under construction.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q97",
    sentence:
      "No one in the office knows ______ left the front door unlocked last night.",
    options: ["who", "whom", "which", "whose"],
    correctAnswer: 0,
    translation:
      "Không ai trong văn phòng biết ai là người đã để cửa trước không khóa tối qua.",
    explanation: {
      correctAnswer: "who",
      grammarRule: "Noun Clauses",
      sentenceStructure: "knows + who + verb",
      whyCorrect:
        "'Who' acts as the subject of the noun clause ('who left the front door unlocked').",
      whyOthersWrong: [
        "B. whom: Object pronoun.",
        "C. which: Refers to things.",
        "D. whose: Indicates possession.",
      ],
      toeicTip:
        "If the blank is followed directly by a verb (left), you need a subject pronoun (who).",
    },
    category: "Grammar",
    subcategory: "Pronouns",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "unlock",
        ipa: "/ʌnˈlɑːk/",
        pos: "verb",
        meaning: "mở khóa",
        example: "I forgot to unlock the door.",
      },
    ],
    tags: ["pronouns", "noun clauses"],
  },
  {
    id: "q98",
    sentence:
      "The catering company provided a wide selection of beverages, ______ coffee, tea, and juice.",
    options: ["include", "includes", "included", "including"],
    correctAnswer: 3,
    translation:
      "Công ty cung cấp dịch vụ ăn uống đã cung cấp nhiều lựa chọn đồ uống, bao gồm cà phê, trà và nước trái cây.",
    explanation: {
      correctAnswer: "including",
      grammarRule: "Prepositions / Participles",
      sentenceStructure: ", + including + Nouns",
      whyCorrect:
        "'Including' functions as a preposition meaning 'having as part of the whole'.",
      whyOthersWrong: [
        "A. include: Base verb (creates a comma splice).",
        "B. includes: Singular verb.",
        "C. included: Adjective, usually placed after the noun (e.g., batteries included).",
      ],
      toeicTip:
        "When listing examples after a comma, use 'including' or 'such as'.",
    },
    category: "Vocabulary",
    subcategory: "Prepositions",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "beverage",
        ipa: "/ˈbevərɪdʒ/",
        pos: "noun",
        meaning: "đồ uống",
        example: "Hot and cold beverages are available.",
      },
    ],
    tags: ["participles", "prepositions"],
  },
  {
    id: "q99",
    sentence:
      "The manager has asked everyone to keep their desks ______ at all times.",
    options: ["organize", "organizing", "organized", "organization"],
    correctAnswer: 2,
    translation:
      "Quản lý đã yêu cầu mọi người giữ bàn làm việc của họ luôn gọn gàng/có tổ chức.",
    explanation: {
      correctAnswer: "organized",
      grammarRule: "Adjective after keep",
      sentenceStructure: "keep + Object + Adjective (V-ed)",
      whyCorrect:
        "'Organized' acts as an adjective describing the state of the desks.",
      whyOthersWrong: [
        "A. organize: Base verb.",
        "B. organizing: Present participle (incorrect meaning here).",
        "D. organization: Noun.",
      ],
      toeicTip:
        "Keep + Object + V-ed/Adjective. E.g., keep the door closed, keep the room clean, keep files organized.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "organize",
        ipa: "/ˈɔːrɡənaɪz/",
        pos: "verb",
        meaning: "sắp xếp, tổ chức",
        example: "I need to organize my files.",
      },
    ],
    tags: ["adjectives", "participles"],
  },
  {
    id: "q100",
    sentence:
      "Sales of the new smartphone have dropped ______ over the past month due to bad reviews.",
    options: ["sharp", "sharpness", "sharpen", "sharply"],
    correctAnswer: 3,
    translation:
      "Doanh số của mẫu điện thoại thông minh mới đã giảm mạnh trong tháng qua do những đánh giá tệ.",
    explanation: {
      correctAnswer: "sharply",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (have dropped) + Adverb",
      whyCorrect:
        "The adverb 'sharply' modifies the verb 'dropped', showing how the sales fell.",
      whyOthersWrong: [
        "A. sharp: Adjective.",
        "B. sharpness: Noun.",
        "C. sharpen: Verb.",
      ],
      toeicTip:
        "Verbs of change (rise, fall, drop, increase) are often modified by adverbs like sharply, significantly, steadily, dramatically.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "drop",
        ipa: "/drɑːp/",
        pos: "verb",
        meaning: "giảm xuống, rơi",
        example: "Temperatures will drop tonight.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q101",
    sentence:
      "All employees must ______ their timecards at the end of each shift.",
    options: ["submit", "contain", "involve", "consist"],
    correctAnswer: 0,
    translation:
      "Tất cả nhân viên phải nộp thẻ chấm công của họ vào cuối mỗi ca làm việc.",
    explanation: {
      correctAnswer: "submit",
      grammarRule: "Vocabulary - Verbs",
      sentenceStructure: "must + base verb + object",
      whyCorrect:
        "'Submit' means to hand in a document, which perfectly fits 'timecards'.",
      whyOthersWrong: [
        "B. contain: To hold within.",
        "C. involve: To include as a necessary part.",
        "D. consist: Takes 'of'.",
      ],
      toeicTip:
        "Submit (a report, an application, a timecard) is one of the most common verbs in TOEIC.",
    },
    category: "Vocabulary",
    subcategory: "Word Choice",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "shift",
        ipa: "/ʃɪft/",
        pos: "noun",
        meaning: "ca làm việc",
        example: "I work the night shift.",
      },
    ],
    tags: ["verbs", "workplace"],
  },
  {
    id: "q102",
    sentence:
      "The investors were hesitant to fund the startup, ______ its highly innovative product.",
    options: ["despite", "although", "even if", "because"],
    correctAnswer: 0,
    translation:
      "Các nhà đầu tư ngần ngại tài trợ cho công ty khởi nghiệp, bất chấp sản phẩm có tính đổi mới cao của nó.",
    explanation: {
      correctAnswer: "despite",
      grammarRule: "Prepositions of Concession",
      sentenceStructure: ", + despite + Noun Phrase",
      whyCorrect:
        "A noun phrase ('its highly innovative product') follows the blank, and there is a contrast in meaning.",
      whyOthersWrong: [
        "B. although: Requires a full clause.",
        "C. even if: Requires a full clause.",
        "D. because: Shows reason, but requires a full clause.",
      ],
      toeicTip:
        "Despite / In spite of + Noun Phrase. Although / Even though + Clause.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "hesitant",
        ipa: "/ˈhezɪtənt/",
        pos: "adj",
        meaning: "ngần ngại, do dự",
        example: "She was hesitant to make a decision.",
      },
    ],
    tags: ["prepositions", "contrast"],
  },
  {
    id: "q103",
    sentence:
      "The customer service representative spoke ______ with the angry client to calm the situation.",
    options: ["gentle", "gentleness", "gently", "gentler"],
    correctAnswer: 2,
    translation:
      "Đại diện dịch vụ khách hàng đã nói chuyện nhẹ nhàng với vị khách hàng đang tức giận để xoa dịu tình hình.",
    explanation: {
      correctAnswer: "gently",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (spoke) + Adverb",
      whyCorrect:
        "An adverb is required to modify how the representative 'spoke'.",
      whyOthersWrong: [
        "A. gentle: Adjective.",
        "B. gentleness: Noun.",
        "D. gentler: Comparative adjective.",
      ],
      toeicTip: "Verbs like speak, work, react are modified by -ly adverbs.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "representative",
        ipa: "/ˌreprɪˈzentətɪv/",
        pos: "noun",
        meaning: "người đại diện",
        example: "She is our sales representative.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q104",
    sentence: "It is strictly ______ to smoke anywhere inside the building.",
    options: ["prohibit", "prohibiting", "prohibited", "prohibition"],
    correctAnswer: 2,
    translation: "Việc hút thuốc ở bất cứ đâu trong tòa nhà đều bị nghiêm cấm.",
    explanation: {
      correctAnswer: "prohibited",
      grammarRule: "Passive Voice / Adjectives",
      sentenceStructure: "be (is) + Adverb (strictly) + past participle (-ed)",
      whyCorrect:
        "'Is prohibited' is the passive form, meaning 'is not allowed'.",
      whyOthersWrong: [
        "A. prohibit: Base verb.",
        "B. prohibiting: Active continuous.",
        "D. prohibition: Noun.",
      ],
      toeicTip: "Memorize the phrase: 'It is strictly prohibited to...'",
    },
    category: "Grammar",
    subcategory: "Passive Voice",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "strictly",
        ipa: "/ˈstrɪktli/",
        pos: "adv",
        meaning: "một cách nghiêm ngặt",
        example: "The rules are strictly enforced.",
      },
    ],
    tags: ["passive", "rules"],
  },
  {
    id: "q105",
    sentence:
      "______ we had checked the weather forecast, we would not have planned a picnic.",
    options: ["If", "Should", "Unless", "Whether"],
    correctAnswer: 0,
    translation:
      "Nếu chúng ta đã kiểm tra dự báo thời tiết, chúng ta đã không lên kế hoạch đi dã ngoại.",
    explanation: {
      correctAnswer: "If",
      grammarRule: "Conditionals Type 3",
      sentenceStructure: "If + S + had + V3, S + would have + V3",
      whyCorrect: "Standard Type 3 conditional structure requires 'If'.",
      whyOthersWrong: [
        "B. Should: Used for Type 1 inversion (Should we check...).",
        "C. Unless: Means 'if not' (illogical meaning).",
        "D. Whether: Shows alternatives (whether... or).",
      ],
      toeicTip:
        "Look at the main clause: 'would not have planned' points to a Type 3 conditional. The blank needs 'If' or 'Had' (inversion).",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "forecast",
        ipa: "/ˈfɔːrkæst/",
        pos: "noun/verb",
        meaning: "dự báo",
        example: "What is the weather forecast for tomorrow?",
      },
    ],
    tags: ["conditionals", "past perfect"],
  },
  {
    id: "q106",
    sentence:
      "The hotel offers complimentary shuttle service ______ the airport and the resort.",
    options: ["among", "between", "from", "with"],
    correctAnswer: 1,
    translation:
      "Khách sạn cung cấp dịch vụ đưa đón miễn phí giữa sân bay và khu nghỉ dưỡng.",
    explanation: {
      correctAnswer: "between",
      grammarRule: "Prepositions of Place",
      sentenceStructure: "between A and B",
      whyCorrect:
        "'Between' pairs with 'and' to indicate a connection connecting two distinct points.",
      whyOthersWrong: [
        "A. among: Used for three or more items in a group.",
        "C. from: Pairs with 'to' (from A to B).",
        "D. with: Incorrect collocation.",
      ],
      toeicTip:
        "If you see 'and' linking two nouns, 'between' is usually the correct preposition.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "complimentary",
        ipa: "/ˌkɑːmplɪˈmentri/",
        pos: "adj",
        meaning: "miễn phí",
        example: "We offer complimentary breakfast to all guests.",
      },
    ],
    tags: ["prepositions", "place"],
  },
  {
    id: "q107",
    sentence: "Please remember ______ your badge before leaving the building.",
    options: ["returning", "returned", "to return", "return"],
    correctAnswer: 2,
    translation: "Vui lòng nhớ trả lại thẻ của bạn trước khi rời tòa nhà.",
    explanation: {
      correctAnswer: "to return",
      grammarRule: "Infinitives vs Gerunds",
      sentenceStructure: "remember + to + verb",
      whyCorrect:
        "'Remember to do something' means you have a task to perform in the future. 'Remember doing' means recalling a past memory.",
      whyOthersWrong: [
        "A. returning: Recalling a past event (incorrect context).",
        "B. returned: Past tense.",
        "D. return: Base verb.",
      ],
      toeicTip: "For instructions or rules, always use 'remember to + Verb'.",
    },
    category: "Grammar",
    subcategory: "Infinitives",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "badge",
        ipa: "/bædʒ/",
        pos: "noun",
        meaning: "thẻ, huy hiệu",
        example: "Don't forget your ID badge.",
      },
    ],
    tags: ["infinitives", "verbs"],
  },
  {
    id: "q108",
    sentence:
      "Mr. Kim is ______ the most qualified candidate we have interviewed so far.",
    options: ["easy", "easier", "easily", "easiness"],
    correctAnswer: 2,
    translation:
      "Ông Kim dễ dàng là ứng viên đủ tiêu chuẩn nhất mà chúng ta đã phỏng vấn cho đến nay.",
    explanation: {
      correctAnswer: "easily",
      grammarRule: "Adverb emphasizing Superlatives",
      sentenceStructure: "Adverb + the most + Adjective",
      whyCorrect:
        "'Easily' is used here as an intensifier for a superlative, meaning 'without a doubt' or 'by far'.",
      whyOthersWrong: [
        "A. easy: Adjective.",
        "B. easier: Comparative.",
        "D. easiness: Noun.",
      ],
      toeicTip:
        "The adverbs 'easily' and 'by far' are often used to emphasize superlative adjectives (the most / the best).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "qualified",
        ipa: "/ˈkwɑːlɪfaɪd/",
        pos: "adj",
        meaning: "đủ tiêu chuẩn",
        example: "She is highly qualified for the job.",
      },
    ],
    tags: ["adverbs", "superlatives"],
  },
  {
    id: "q109",
    sentence:
      "The new factory will ______ 500 new jobs in the local community.",
    options: ["invent", "create", "discover", "design"],
    correctAnswer: 1,
    translation:
      "Nhà máy mới sẽ tạo ra 500 việc làm mới trong cộng đồng địa phương.",
    explanation: {
      correctAnswer: "create",
      grammarRule: "Vocabulary - Collocation",
      sentenceStructure: "create + jobs",
      whyCorrect:
        "The standard verb used with 'jobs' or 'opportunities' is 'create'.",
      whyOthersWrong: [
        "A. invent: To design something completely new (a machine).",
        "C. discover: To find something already existing.",
        "D. design: To plan drawing/structure.",
      ],
      toeicTip:
        "Common collocations: create jobs, create opportunities, create a problem.",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "community",
        ipa: "/kəˈmjuːnəti/",
        pos: "noun",
        meaning: "cộng đồng",
        example: "He is a respected member of the community.",
      },
    ],
    tags: ["verbs", "collocation"],
  },
  {
    id: "q110",
    sentence:
      "Our team aims to respond to all customer inquiries ______ 24 hours.",
    options: ["during", "within", "between", "while"],
    correctAnswer: 1,
    translation:
      "Nhóm của chúng tôi đặt mục tiêu phản hồi tất cả các câu hỏi của khách hàng trong vòng 24 giờ.",
    explanation: {
      correctAnswer: "within",
      grammarRule: "Prepositions of Time",
      sentenceStructure: "within + time limit",
      whyCorrect:
        "'Within' indicates that an action will happen before a certain amount of time has passed.",
      whyOthersWrong: [
        "A. during: Used with nouns (during the meeting).",
        "C. between: Used with two points (between Monday and Friday).",
        "D. while: Conjunction followed by a clause.",
      ],
      toeicTip:
        "'Within [number] hours/days/months' is a very common TOEIC expression.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "inquiry",
        ipa: "/ˈɪnkwəri/",
        pos: "noun",
        meaning: "câu hỏi, yêu cầu thông tin",
        example: "We received many inquiries about the product.",
      },
    ],
    tags: ["prepositions", "time"],
  },
  {
    id: "q111",
    sentence:
      "The supervisor asked the team to work ______ to meet the tight deadline.",
    options: [
      "collaborate",
      "collaborative",
      "collaboratively",
      "collaboration",
    ],
    correctAnswer: 2,
    translation:
      "Người giám sát yêu cầu nhóm làm việc hợp tác với nhau để kịp thời hạn gấp rút.",
    explanation: {
      correctAnswer: "collaboratively",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (work) + Adverb",
      whyCorrect: "An adverb is needed to modify the verb 'work'.",
      whyOthersWrong: [
        "A. collaborate: Base verb.",
        "B. collaborative: Adjective.",
        "D. collaboration: Noun.",
      ],
      toeicTip:
        "A word modifying an action verb like 'work', 'speak', or 'run' must be an adverb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "tight",
        ipa: "/taɪt/",
        pos: "adj",
        meaning: "gấp gáp, chặt chẽ",
        example: "We are on a tight schedule.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q112",
    sentence:
      "______ the final draft is approved by the client, we will begin the printing process.",
    options: ["Once", "Unless", "Therefore", "Despite"],
    correctAnswer: 0,
    translation:
      "Một khi bản nháp cuối cùng được khách hàng phê duyệt, chúng tôi sẽ bắt đầu quá trình in ấn.",
    explanation: {
      correctAnswer: "Once",
      grammarRule: "Conjunctions of Time",
      sentenceStructure: "Once + Clause, Clause",
      whyCorrect:
        "'Once' means 'as soon as' or 'after', showing the correct sequence of events.",
      whyOthersWrong: [
        "B. Unless: Means 'if not', illogical here.",
        "C. Therefore: Adverb, doesn't connect clauses directly without a semicolon.",
        "D. Despite: Preposition, must be followed by a noun.",
      ],
      toeicTip: "As a conjunction, 'once' acts like 'after' or 'as soon as'.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "draft",
        ipa: "/dræft/",
        pos: "noun",
        meaning: "bản nháp",
        example: "This is only the first draft of my speech.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q113",
    sentence:
      "The human resources manager has asked the staff to submit ______ expense reports by noon.",
    options: ["they", "their", "theirs", "them"],
    correctAnswer: 1,
    translation:
      "Quản lý nhân sự đã yêu cầu nhân viên nộp báo cáo chi phí của họ trước buổi trưa.",
    explanation: {
      correctAnswer: "their",
      grammarRule: "Possessive Adjectives",
      sentenceStructure: "Possessive Adjective + Noun Phrase",
      whyCorrect:
        "'their' is a possessive adjective modifying the noun 'expense reports'.",
      whyOthersWrong: [
        "A. they: Subject pronoun.",
        "C. theirs: Possessive pronoun (used without a following noun).",
        "D. them: Object pronoun.",
      ],
      toeicTip:
        "Before a noun, always use a possessive adjective (my, your, his, her, its, our, their).",
    },
    category: "Grammar",
    subcategory: "Pronouns",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 350,
    vocabulary: [
      {
        word: "expense",
        ipa: "/ɪkˈspens/",
        pos: "noun",
        meaning: "chi phí",
        example: "We need to cut our expenses.",
      },
    ],
    tags: ["pronouns", "possession"],
  },
  {
    id: "q114",
    sentence:
      "The board of directors is not ______ with the current marketing strategy.",
    options: ["satisfy", "satisfying", "satisfied", "satisfaction"],
    correctAnswer: 2,
    translation:
      "Hội đồng quản trị không hài lòng với chiến lược tiếp thị hiện tại.",
    explanation: {
      correctAnswer: "satisfied",
      grammarRule: "Adjectives ending in -ed",
      sentenceStructure: "be (is) + Adjective (-ed) + with",
      whyCorrect:
        "'Satisfied' is an adjective describing people's feelings. It pairs with the preposition 'with'.",
      whyOthersWrong: [
        "A. satisfy: Base verb.",
        "B. satisfying: Adjective describing a thing (a satisfying meal).",
        "D. satisfaction: Noun.",
      ],
      toeicTip:
        "Memorize: be satisfied with, be pleased with, be disappointed with.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "strategy",
        ipa: "/ˈstrætədʒi/",
        pos: "noun",
        meaning: "chiến lược",
        example: "We need a new business strategy.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q115",
    sentence:
      "The new branch manager was selected because of her ______ experience in international sales.",
    options: ["extensively", "extension", "extensive", "extend"],
    correctAnswer: 2,
    translation:
      "Người quản lý chi nhánh mới được chọn vì kinh nghiệm dày dặn của cô ấy trong lĩnh vực bán hàng quốc tế.",
    explanation: {
      correctAnswer: "extensive",
      grammarRule: "Adjective modifying a Noun",
      sentenceStructure: "Possessive (her) + Adjective + Noun (experience)",
      whyCorrect: "An adjective is needed to describe 'experience'.",
      whyOthersWrong: [
        "A. extensively: Adverb.",
        "B. extension: Noun.",
        "D. extend: Verb.",
      ],
      toeicTip:
        "The collocation 'extensive experience' is frequently tested in TOEIC.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "extensive",
        ipa: "/ɪkˈstensɪv/",
        pos: "adj",
        meaning: "rộng rãi, bao quát, nhiều",
        example: "He has extensive knowledge of history.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q116",
    sentence:
      "Please make sure that all ______ are turned off before leaving the building.",
    options: ["appliances", "applications", "applicants", "applies"],
    correctAnswer: 0,
    translation:
      "Vui lòng đảm bảo rằng tất cả các thiết bị điện đã được tắt trước khi rời tòa nhà.",
    explanation: {
      correctAnswer: "appliances",
      grammarRule: "Vocabulary - Nouns",
      sentenceStructure: "all + Plural Noun",
      whyCorrect:
        "'Appliances' means devices/machines (like coffee makers, microwaves) which can be 'turned off'.",
      whyOthersWrong: [
        "B. applications: Forms or software programs.",
        "C. applicants: People applying for a job.",
        "D. applies: Verb.",
      ],
      toeicTip:
        "Pay attention to similar-looking words. Appliance = machine; Applicant = person; Application = form/software.",
    },
    category: "Vocabulary",
    subcategory: "Word Choice",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "appliance",
        ipa: "/əˈplaɪəns/",
        pos: "noun",
        meaning: "thiết bị, dụng cụ (điện gia dụng)",
        example: "We sell household appliances.",
      },
    ],
    tags: ["nouns", "vocabulary"],
  },
  {
    id: "q117",
    sentence:
      "______ the road construction, the main entrance to the office will be closed on Monday.",
    options: ["Due to", "Even though", "Since", "While"],
    correctAnswer: 0,
    translation:
      "Do việc thi công đường, lối vào chính của văn phòng sẽ bị đóng vào thứ Hai.",
    explanation: {
      correctAnswer: "Due to",
      grammarRule: "Prepositions of Cause",
      sentenceStructure: "Due to + Noun Phrase",
      whyCorrect:
        "'Due to' means 'because of' and is followed by a noun phrase ('the road construction').",
      whyOthersWrong: [
        "B. Even though: Conjunction, requires a clause.",
        "C. Since: When meaning 'because', it requires a full clause.",
        "D. While: Conjunction, requires a clause.",
      ],
      toeicTip: "Because of / Due to / Owing to + Noun Phrase.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "entrance",
        ipa: "/ˈentrəns/",
        pos: "noun",
        meaning: "lối vào",
        example: "The main entrance is at the front.",
      },
    ],
    tags: ["prepositions", "cause"],
  },
  {
    id: "q118",
    sentence:
      "Mr. Gomez is considering ______ a new branch of his restaurant in the downtown area.",
    options: ["open", "to open", "opened", "opening"],
    correctAnswer: 3,
    translation:
      "Ông Gomez đang cân nhắc việc mở một chi nhánh mới của nhà hàng tại khu vực trung tâm thành phố.",
    explanation: {
      correctAnswer: "opening",
      grammarRule: "Gerunds after specific verbs",
      sentenceStructure: "consider + V-ing",
      whyCorrect: "The verb 'consider' must be followed by a gerund (V-ing).",
      whyOthersWrong: [
        "A. open: Base verb.",
        "B. to open: Infinitive.",
        "C. opened: Past tense.",
      ],
      toeicTip:
        "Verbs strictly followed by V-ing: consider, suggest, mind, finish, avoid, postpone.",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "downtown",
        ipa: "/ˌdaʊnˈtaʊn/",
        pos: "noun/adv/adj",
        meaning: "trung tâm thành phố",
        example: "They bought an apartment downtown.",
      },
    ],
    tags: ["gerunds", "verbs"],
  },
  {
    id: "q119",
    sentence:
      "The financial auditor found several ______ in the quarterly report.",
    options: ["error", "errors", "erred", "erroneous"],
    correctAnswer: 1,
    translation:
      "Kiểm toán viên tài chính đã tìm thấy một số lỗi trong báo cáo hàng quý.",
    explanation: {
      correctAnswer: "errors",
      grammarRule: "Noun Plurals",
      sentenceStructure: "several + Plural Countable Noun",
      whyCorrect: "The word 'several' requires a plural noun.",
      whyOthersWrong: [
        "A. error: Singular noun.",
        "C. erred: Verb (past).",
        "D. erroneous: Adjective.",
      ],
      toeicTip:
        "Quantifiers like 'several', 'many', 'various', 'numerous' are always followed by plural nouns with an 's'.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "auditor",
        ipa: "/ˈɔːdɪtər/",
        pos: "noun",
        meaning: "kiểm toán viên",
        example: "The auditor will review our accounts.",
      },
    ],
    tags: ["nouns", "quantifiers"],
  },
  {
    id: "q120",
    sentence:
      "Employees are expected to dress ______ when attending meetings with important clients.",
    options: ["formal", "formality", "formalize", "formally"],
    correctAnswer: 3,
    translation:
      "Nhân viên được kỳ vọng sẽ ăn mặc trang trọng khi tham dự các cuộc họp với những khách hàng quan trọng.",
    explanation: {
      correctAnswer: "formally",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (dress) + Adverb",
      whyCorrect: "An adverb is needed to describe how employees should dress.",
      whyOthersWrong: [
        "A. formal: Adjective.",
        "B. formality: Noun.",
        "C. formalize: Verb.",
      ],
      toeicTip:
        "When a word describes an action (dress, speak, act), always use an adverb ending in -ly.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "attend",
        ipa: "/əˈtend/",
        pos: "verb",
        meaning: "tham dự",
        example: "I have to attend a conference.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
];
