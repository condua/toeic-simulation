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
  {
    id: "q121",
    sentence:
      "The corporate headquarters will ______ to a larger building in the downtown area next year.",
    options: ["relocate", "relocates", "relocated", "relocating"],
    correctAnswer: 0,
    translation:
      "Trụ sở chính của công ty sẽ chuyển đến một tòa nhà lớn hơn ở khu vực trung tâm vào năm tới.",
    explanation: {
      correctAnswer: "relocate",
      grammarRule: "Modal Verbs",
      sentenceStructure: "will + base verb",
      whyCorrect:
        "The modal verb 'will' requires the base form of the verb to express a future action.",
      whyOthersWrong: [
        "B. relocates: 3rd person singular present.",
        "C. relocated: Past tense.",
        "D. relocating: Present participle / Gerund.",
      ],
      toeicTip:
        "Will, can, could, should, must ALWAYS take a bare infinitive (verb without 'to').",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "relocate",
        ipa: "/ˌriːˈloʊkeɪt/",
        pos: "verb",
        meaning: "chuyển địa điểm",
        example: "The company is planning to relocate to Asia.",
      },
    ],
    tags: ["verbs", "modals"],
  },
  {
    id: "q122",
    sentence:
      "The new interns must complete the training modules by ______, without any assistance.",
    options: ["them", "their", "theirs", "themselves"],
    correctAnswer: 3,
    translation:
      "Các thực tập sinh mới phải tự mình hoàn thành các mô-đun đào tạo mà không cần bất kỳ sự trợ giúp nào.",
    explanation: {
      correctAnswer: "themselves",
      grammarRule: "Reflexive Pronouns",
      sentenceStructure: "by + reflexive pronoun",
      whyCorrect:
        "The phrase 'by themselves' means 'alone' or 'without help', which matches the context of 'without any assistance'.",
      whyOthersWrong: [
        "A. them: Object pronoun (requires a different preposition like 'with them').",
        "B. their: Possessive adjective (requires a noun).",
        "C. theirs: Possessive pronoun.",
      ],
      toeicTip:
        "Memorize: by myself = on my own; by themselves = on their own.",
    },
    category: "Grammar",
    subcategory: "Pronouns",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "assistance",
        ipa: "/əˈsɪstəns/",
        pos: "noun",
        meaning: "sự giúp đỡ",
        example: "Do you need any assistance?",
      },
    ],
    tags: ["pronouns", "reflexive"],
  },
  {
    id: "q123",
    sentence:
      "To remain ______ in the global market, the company must invest heavily in research and development.",
    options: ["compete", "competitor", "competitive", "competitively"],
    correctAnswer: 2,
    translation:
      "Để duy trì tính cạnh tranh trên thị trường toàn cầu, công ty phải đầu tư mạnh vào nghiên cứu và phát triển.",
    explanation: {
      correctAnswer: "competitive",
      grammarRule: "Adjective after linking verb",
      sentenceStructure: "remain + Adjective",
      whyCorrect:
        "The verb 'remain' is a linking verb and must be followed by an adjective.",
      whyOthersWrong: [
        "A. compete: Verb.",
        "B. competitor: Noun (person).",
        "D. competitively: Adverb.",
      ],
      toeicTip:
        "Linking verbs (remain, become, seem, look, appear) are always followed by adjectives.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "competitive",
        ipa: "/kəmˈpetətɪv/",
        pos: "adj",
        meaning: "có tính cạnh tranh",
        example: "We offer highly competitive prices.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q124",
    sentence:
      "The security guards patrol the premises ______ the night to ensure the safety of the facility.",
    options: ["over", "throughout", "between", "among"],
    correctAnswer: 1,
    translation:
      "Nhân viên bảo vệ tuần tra khuôn viên xuyên suốt đêm để đảm bảo an toàn cho cơ sở.",
    explanation: {
      correctAnswer: "throughout",
      grammarRule: "Prepositions of Time",
      sentenceStructure: "throughout + time period",
      whyCorrect:
        "'Throughout' means in every part of a period of time, fitting the context of patrolling all night.",
      whyOthersWrong: [
        "A. over: Can mean during, but 'throughout' is more precise for continuous action.",
        "C. between: Requires two time points (between 9 and 5).",
        "D. among: Used for groups of things/people.",
      ],
      toeicTip:
        "Throughout the year / throughout the day / throughout the night are common TOEIC collocations.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "premise",
        ipa: "/ˈpremɪs/",
        pos: "noun",
        meaning: "cơ sở, khuôn viên",
        example: "Alcohol is not allowed on the premises.",
      },
    ],
    tags: ["prepositions", "time"],
  },
  {
    id: "q125",
    sentence:
      "Mr. Lin ______ as the head of the marketing department since the company was founded.",
    options: ["works", "is working", "has been working", "worked"],
    correctAnswer: 2,
    translation:
      "Ông Lin đã và đang làm việc với tư cách là trưởng phòng tiếp thị kể từ khi công ty được thành lập.",
    explanation: {
      correctAnswer: "has been working",
      grammarRule: "Present Perfect Continuous",
      sentenceStructure:
        "Subject + has/have been + V-ing + since + Past Clause",
      whyCorrect:
        "The keyword 'since' indicates an action starting in the past and continuing to the present. Present perfect or present perfect continuous is required.",
      whyOthersWrong: [
        "A. works: Present simple.",
        "B. is working: Present continuous.",
        "D. worked: Past simple.",
      ],
      toeicTip:
        "When you see 'since' followed by a past time or clause, look for 'has/have + V3' or 'has/have been + V-ing'.",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "found",
        ipa: "/faʊnd/",
        pos: "verb",
        meaning: "thành lập",
        example: "The company was founded in 1990.",
      },
    ],
    tags: ["verbs", "present perfect"],
  },
  {
    id: "q126",
    sentence:
      "The company encourages all employees ______ in the annual charity run.",
    options: ["participate", "participating", "to participate", "participated"],
    correctAnswer: 2,
    translation:
      "Công ty khuyến khích tất cả nhân viên tham gia vào giải chạy từ thiện hàng năm.",
    explanation: {
      correctAnswer: "to participate",
      grammarRule: "Verbs followed by Infinitives",
      sentenceStructure: "encourage + Object + to-infinitive",
      whyCorrect:
        "The verb 'encourage' takes an object followed by a 'to-infinitive'.",
      whyOthersWrong: [
        "A. participate: Base verb.",
        "B. participating: Gerund.",
        "D. participated: Past tense.",
      ],
      toeicTip:
        "Memorize verbs taking Object + to V: encourage, allow, force, require, ask, tell, invite.",
    },
    category: "Grammar",
    subcategory: "Infinitives",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "participate",
        ipa: "/pɑːrˈtɪsɪpeɪt/",
        pos: "verb",
        meaning: "tham gia",
        example: "Everyone is welcome to participate.",
      },
    ],
    tags: ["infinitives", "verbs"],
  },
  {
    id: "q127",
    sentence:
      "You will not be allowed to enter the laboratory ______ you wear the proper protective eyewear.",
    options: ["unless", "if", "therefore", "because"],
    correctAnswer: 0,
    translation:
      "Bạn sẽ không được phép vào phòng thí nghiệm trừ khi bạn đeo kính bảo hộ thích hợp.",
    explanation: {
      correctAnswer: "unless",
      grammarRule: "Conditional Conjunctions",
      sentenceStructure: "Negative Main Clause + unless + Affirmative Clause",
      whyCorrect:
        "'Unless' means 'if not' (If you do not wear...). It perfectly provides the negative condition for the main clause.",
      whyOthersWrong: [
        "B. if: Would mean you can't enter IF you wear it (illogical).",
        "C. therefore: Adverb of result.",
        "D. because: Illogical cause.",
      ],
      toeicTip:
        "'Unless' is frequently tested. Think of it as 'trừ khi'. If the main clause is negative (will not), 'unless' is very likely.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "eyewear",
        ipa: "/ˈaɪwer/",
        pos: "noun",
        meaning: "kính mắt, đồ bảo vệ mắt",
        example: "Protective eyewear is required here.",
      },
    ],
    tags: ["conjunctions", "conditionals"],
  },
  {
    id: "q128",
    sentence:
      "Only personnel with written ______ from the director can access the server room.",
    options: ["authorize", "authorizes", "authorization", "authorized"],
    correctAnswer: 2,
    translation:
      "Chỉ những nhân viên có văn bản ủy quyền từ giám đốc mới được phép vào phòng máy chủ.",
    explanation: {
      correctAnswer: "authorization",
      grammarRule: "Noun Form",
      sentenceStructure: "Adjective (written) + Noun",
      whyCorrect: "The adjective 'written' must be followed by a noun.",
      whyOthersWrong: [
        "A. authorize: Verb.",
        "B. authorizes: Verb.",
        "D. authorized: Adjective / Past Participle.",
      ],
      toeicTip:
        "'Written authorization' and 'written permission' are standard business collocations.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "authorization",
        ipa: "/ˌɔːθərəˈzeɪʃn/",
        pos: "noun",
        meaning: "sự cho phép, sự ủy quyền",
        example: "You need authorization to enter this room.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q129",
    sentence:
      "Of all the suppliers we evaluated, Apex Logistics proved to be ______.",
    options: [
      "reliable",
      "more reliable",
      "most reliable",
      "the most reliable",
    ],
    correctAnswer: 3,
    translation:
      "Trong số tất cả các nhà cung cấp mà chúng tôi đánh giá, Apex Logistics chứng tỏ là đáng tin cậy nhất.",
    explanation: {
      correctAnswer: "the most reliable",
      grammarRule: "Superlatives",
      sentenceStructure:
        "Of all + Noun, Subject + Verb + the + most + Adjective",
      whyCorrect:
        "The phrase 'Of all the suppliers' sets up a comparison among more than two entities, requiring a superlative form with 'the'.",
      whyOthersWrong: [
        "A. reliable: Base adjective.",
        "B. more reliable: Comparative (used for comparing two things).",
        "C. most reliable: Missing the article 'the'.",
      ],
      toeicTip:
        "When a sentence starts with 'Of all the...' or 'Among the...', always look for the superlative (the most / the -est).",
    },
    category: "Grammar",
    subcategory: "Comparisons",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "reliable",
        ipa: "/rɪˈlaɪəbl/",
        pos: "adj",
        meaning: "đáng tin cậy",
        example: "We need a reliable transportation system.",
      },
    ],
    tags: ["comparisons", "superlatives"],
  },
  {
    id: "q130",
    sentence:
      "The new accounting software was installed ______ compliance with the latest tax regulations.",
    options: ["in", "on", "at", "by"],
    correctAnswer: 0,
    translation:
      "Phần mềm kế toán mới được cài đặt tuân thủ theo các quy định thuế mới nhất.",
    explanation: {
      correctAnswer: "in",
      grammarRule: "Prepositional Phrases",
      sentenceStructure: "in compliance with",
      whyCorrect:
        "'In compliance with' is a fixed prepositional phrase meaning 'obeying a rule or law'.",
      whyOthersWrong: [
        "B. on: Incorrect collocation.",
        "C. at: Incorrect collocation.",
        "D. by: Incorrect collocation.",
      ],
      toeicTip:
        "Memorize legal/formal phrases: in compliance with, in accordance with, in violation of.",
    },
    category: "Vocabulary",
    subcategory: "Phrasal Verbs / Prepositions",
    type: "vocabulary",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "compliance",
        ipa: "/kəmˈplaɪəns/",
        pos: "noun",
        meaning: "sự tuân thủ",
        example: "Ensure strict compliance with the rules.",
      },
    ],
    tags: ["prepositions", "collocation"],
  },
  {
    id: "q131",
    sentence:
      "The employee manual ______ by the legal department before it is printed.",
    options: [
      "must revise",
      "must be revised",
      "must have revised",
      "must be revising",
    ],
    correctAnswer: 1,
    translation:
      "Sổ tay nhân viên phải được bộ phận pháp lý chỉnh sửa trước khi nó được in.",
    explanation: {
      correctAnswer: "must be revised",
      grammarRule: "Passive Voice with Modals",
      sentenceStructure: "Subject + modal + be + past participle + by + Agent",
      whyCorrect:
        "The subject 'employee manual' cannot revise itself. It must receive the action. Passive voice is required.",
      whyOthersWrong: [
        "A. must revise: Active voice.",
        "C. must have revised: Active, past possibility.",
        "D. must be revising: Active continuous.",
      ],
      toeicTip:
        "If the subject is a non-living thing (manual, report, email) and there is a 'by' phrase, it's a 99% chance you need the passive voice (be + V3/ed).",
    },
    category: "Grammar",
    subcategory: "Passive Voice",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "revise",
        ipa: "/rɪˈvaɪz/",
        pos: "verb",
        meaning: "chỉnh sửa, duyệt lại",
        example: "Please revise this document.",
      },
    ],
    tags: ["passive", "modals"],
  },
  {
    id: "q132",
    sentence:
      "The conference center ______ the annual convention is held has recently been renovated.",
    options: ["which", "that", "where", "when"],
    correctAnswer: 2,
    translation:
      "Trung tâm hội nghị nơi tổ chức hội nghị thường niên gần đây đã được cải tạo.",
    explanation: {
      correctAnswer: "where",
      grammarRule: "Relative Adverbs",
      sentenceStructure: "Noun of Place + where + Subject + Verb",
      whyCorrect:
        "'Where' refers to the location (conference center) and acts as a preposition + relative pronoun (in which). It is followed by a full clause.",
      whyOthersWrong: [
        "A. which: Would require a preposition (in which) because the clause 'the convention is held' is complete.",
        "B. that: Same issue as 'which'.",
        "D. when: Used for time.",
      ],
      toeicTip: "Place + where + S + V. Place + which/that + V.",
    },
    category: "Grammar",
    subcategory: "Relative Clauses",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "convention",
        ipa: "/kənˈvenʃn/",
        pos: "noun",
        meaning: "hội nghị",
        example: "He attended a political convention.",
      },
    ],
    tags: ["relative adverbs", "places"],
  },
  {
    id: "q133",
    sentence:
      "The keynote speaker will arrive ______, so please take your seats.",
    options: ["short", "shorten", "shortage", "shortly"],
    correctAnswer: 3,
    translation:
      "Diễn giả chính sẽ đến ngay, vì vậy vui lòng ổn định chỗ ngồi.",
    explanation: {
      correctAnswer: "shortly",
      grammarRule: "Adverbs of Time",
      sentenceStructure: "Subject + will arrive + Adverb",
      whyCorrect:
        "The adverb 'shortly' means 'soon' and modifies the verb 'arrive'.",
      whyOthersWrong: [
        "A. short: Adjective.",
        "B. shorten: Verb.",
        "C. shortage: Noun.",
      ],
      toeicTip:
        "'Shortly' is a highly tested time adverb in TOEIC, meaning 'soon' (will happen shortly = will happen soon).",
    },
    category: "Vocabulary",
    subcategory: "Word Form",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "keynote speaker",
        ipa: "/ˈkiːnoʊt ˈspiːkər/",
        pos: "noun",
        meaning: "diễn giả chính",
        example: "She is the keynote speaker at the event.",
      },
    ],
    tags: ["adverbs", "time"],
  },
  {
    id: "q134",
    sentence:
      "City officials will ______ an inspection of the construction site next Tuesday.",
    options: ["conduct", "commit", "produce", "behave"],
    correctAnswer: 0,
    translation:
      "Các quan chức thành phố sẽ tiến hành một cuộc kiểm tra công trường xây dựng vào thứ Ba tới.",
    explanation: {
      correctAnswer: "conduct",
      grammarRule: "Vocabulary - Collocations",
      sentenceStructure: "conduct + an inspection / a survey",
      whyCorrect:
        "'Conduct' is the standard verb used with words like inspection, survey, interview, and study.",
      whyOthersWrong: [
        "B. commit: Used with crimes or promises.",
        "C. produce: To make something physical.",
        "D. behave: Intransitive verb regarding actions.",
      ],
      toeicTip:
        "Memorize collocations: conduct a survey, conduct an inspection, conduct an interview.",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "inspection",
        ipa: "/ɪnˈspekʃn/",
        pos: "noun",
        meaning: "cuộc kiểm tra, thanh tra",
        example: "The building passed the fire inspection.",
      },
    ],
    tags: ["verbs", "collocation"],
  },
  {
    id: "q135",
    sentence:
      "Had the management known about the supply chain issues, they ______ another vendor.",
    options: ["chose", "will choose", "would choose", "would have chosen"],
    correctAnswer: 3,
    translation:
      "Nếu ban quản lý biết về các vấn đề của chuỗi cung ứng, họ đã chọn một nhà cung cấp khác.",
    explanation: {
      correctAnswer: "would have chosen",
      grammarRule: "Conditional Type 3 (Inversion)",
      sentenceStructure: "Had + S + V3, S + would have + V3",
      whyCorrect:
        "'Had the management known' is an inverted Type 3 conditional (If the management had known). The main clause needs 'would have + V3'.",
      whyOthersWrong: [
        "A. chose: Past simple.",
        "B. will choose: Future simple.",
        "C. would choose: Type 2 conditional.",
      ],
      toeicTip:
        "When a sentence starts with 'Had + Subject + Past Participle', the other half is always 'would/could/might have + Past Participle'.",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "vendor",
        ipa: "/ˈvendər/",
        pos: "noun",
        meaning: "nhà cung cấp, người bán",
        example: "We are looking for a new software vendor.",
      },
    ],
    tags: ["conditionals", "inversion"],
  },
  {
    id: "q136",
    sentence:
      "If you have any complaints ______ the new catering service, please email the HR department.",
    options: ["towards", "regarding", "between", "next to"],
    correctAnswer: 1,
    translation:
      "Nếu bạn có bất kỳ phàn nàn nào liên quan đến dịch vụ ăn uống mới, vui lòng gửi email cho phòng nhân sự.",
    explanation: {
      correctAnswer: "regarding",
      grammarRule: "Prepositions",
      sentenceStructure: "complaints + regarding + Noun Phrase",
      whyCorrect:
        "'Regarding' means 'concerning' or 'about', which logically links the complaints to the catering service.",
      whyOthersWrong: [
        "A. towards: Indicates direction.",
        "C. between: Indicates relation between two items.",
        "D. next to: Indicates physical location.",
      ],
      toeicTip:
        "'Regarding' and 'concerning' are formal TOEIC synonyms for 'about'.",
    },
    category: "Vocabulary",
    subcategory: "Prepositions",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "catering",
        ipa: "/ˈkeɪtərɪŋ/",
        pos: "noun",
        meaning: "dịch vụ ăn uống",
        example: "Who is doing the catering for the wedding?",
      },
    ],
    tags: ["prepositions", "formal"],
  },
  {
    id: "q137",
    sentence:
      "The merger between the two airlines is expected to be mutually ______.",
    options: ["benefit", "benefits", "beneficial", "beneficially"],
    correctAnswer: 2,
    translation:
      "Việc sáp nhập giữa hai hãng hàng không dự kiến sẽ mang lại lợi ích chung.",
    explanation: {
      correctAnswer: "beneficial",
      grammarRule: "Adjective after 'be' verb",
      sentenceStructure: "be (be) + Adverb (mutually) + Adjective",
      whyCorrect:
        "An adjective is required after the 'be' verb. The adverb 'mutually' modifies this adjective.",
      whyOthersWrong: [
        "A. benefit: Noun / Verb.",
        "B. benefits: Noun plural / Verb present.",
        "D. beneficially: Adverb.",
      ],
      toeicTip:
        "'Mutually beneficial' is a standard business phrase in TOEIC meaning good for both sides.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "mutually",
        ipa: "/ˈmjuːtʃuəli/",
        pos: "adv",
        meaning: "lẫn nhau, chung",
        example: "They reached a mutually acceptable agreement.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q138",
    sentence:
      "______ hiring external consultants, the firm decided to train its own staff.",
    options: ["Rather than", "In case of", "According to", "Except for"],
    correctAnswer: 0,
    translation:
      "Thay vì thuê các nhà tư vấn bên ngoài, công ty đã quyết định đào tạo nhân viên của chính mình.",
    explanation: {
      correctAnswer: "Rather than",
      grammarRule: "Prepositions of Preference",
      sentenceStructure: "Rather than + V-ing, S + V",
      whyCorrect:
        "'Rather than' shows preference or alternatives (Instead of). It makes logical sense: choosing to train internal staff instead of hiring externally.",
      whyOthersWrong: [
        "B. In case of: Used for precautions.",
        "C. According to: Used for citing sources.",
        "D. Except for: Used for exclusion.",
      ],
      toeicTip:
        "'Rather than' and 'Instead of' are frequently followed by V-ing.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "consultant",
        ipa: "/kənˈsʌltənt/",
        pos: "noun",
        meaning: "nhà tư vấn",
        example: "She works as a financial consultant.",
      },
    ],
    tags: ["prepositions", "preference"],
  },
  {
    id: "q139",
    sentence:
      "Management must ______ that all safety protocols are strictly followed.",
    options: ["insure", "assure", "ensure", "reassure"],
    correctAnswer: 2,
    translation:
      "Ban quản lý phải đảm bảo rằng tất cả các quy trình an toàn được tuân thủ nghiêm ngặt.",
    explanation: {
      correctAnswer: "ensure",
      grammarRule: "Vocabulary - Confusing Verbs",
      sentenceStructure: "ensure + that clause",
      whyCorrect:
        "'Ensure' means to make certain that something happens. It is followed by a 'that' clause.",
      whyOthersWrong: [
        "A. insure: To protect against financial loss (insurance).",
        "B. assure: To tell someone confidently to remove doubt (assure SOMEONE that...).",
        "D. reassure: To comfort someone.",
      ],
      toeicTip:
        "Ensure + that... / Assure + PERSON + that... / Insure + a car/house.",
    },
    category: "Vocabulary",
    subcategory: "Word Choice",
    type: "vocabulary",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "protocol",
        ipa: "/ˈproʊtəkɑːl/",
        pos: "noun",
        meaning: "quy trình, giao thức",
        example: "Safety protocols must be observed.",
      },
    ],
    tags: ["verbs", "confusing words"],
  },
  {
    id: "q140",
    sentence:
      "The number of complaints regarding the new software ______ decreased significantly.",
    options: ["has", "have", "are", "is"],
    correctAnswer: 0,
    translation:
      "Số lượng khiếu nại liên quan đến phần mềm mới đã giảm đáng kể.",
    explanation: {
      correctAnswer: "has",
      grammarRule: "Subject-Verb Agreement",
      sentenceStructure: "The number of + Plural Noun + Singular Verb",
      whyCorrect:
        "The phrase 'The number of' acts as a singular subject, so it takes a singular verb. The past participle 'decreased' requires 'has'.",
      whyOthersWrong: [
        "B. have: Plural auxiliary verb (used for 'A number of').",
        "C. are: Plural 'be' verb.",
        "D. is: Cannot be followed by 'decreased' in active voice (would mean passive).",
      ],
      toeicTip: "'The number of' + Singular Verb. 'A number of' + Plural Verb.",
    },
    category: "Grammar",
    subcategory: "Subject-Verb Agreement",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "significantly",
        ipa: "/sɪɡˈnɪfɪkəntli/",
        pos: "adv",
        meaning: "đáng kể",
        example: "Prices have dropped significantly.",
      },
    ],
    tags: ["verbs", "agreement"],
  },
  {
    id: "q141",
    sentence:
      "The board of directors is expected to approve the ______ for the new facility next week.",
    options: ["propose", "proposal", "proposed", "proposing"],
    correctAnswer: 1,
    translation:
      "Hội đồng quản trị dự kiến sẽ phê duyệt bản đề xuất cho cơ sở mới vào tuần tới.",
    explanation: {
      correctAnswer: "proposal",
      grammarRule: "Noun Form",
      sentenceStructure: "the + Noun",
      whyCorrect:
        "The article 'the' requires a noun. 'Proposal' is the noun form meaning a formal suggestion/plan.",
      whyOthersWrong: [
        "A. propose: Verb.",
        "C. proposed: Adjective / Past Participle.",
        "D. proposing: Present Participle.",
      ],
      toeicTip:
        "Common noun endings include -al (proposal, approval), -tion, -ment, -ance.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "proposal",
        ipa: "/prəˈpoʊzl/",
        pos: "noun",
        meaning: "bản đề xuất",
        example: "The proposal was accepted.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q142",
    sentence:
      "Passengers must show their boarding passes ______ entering the security checkpoint.",
    options: ["prior to", "so that", "in order", "as well as"],
    correctAnswer: 0,
    translation:
      "Hành khách phải xuất trình thẻ lên máy bay trước khi vào trạm kiểm tra an ninh.",
    explanation: {
      correctAnswer: "prior to",
      grammarRule: "Prepositions",
      sentenceStructure: "prior to + V-ing",
      whyCorrect:
        "'Prior to' is a formal preposition meaning 'before', correctly followed by a gerund.",
      whyOthersWrong: [
        "B. so that: Indicates purpose, followed by a clause.",
        "C. in order: Followed by 'to + Verb'.",
        "D. as well as: Means 'and', illogical here.",
      ],
      toeicTip: "'Prior to' is a very common TOEIC synonym for 'before'.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "checkpoint",
        ipa: "/ˈtʃekpɔɪnt/",
        pos: "noun",
        meaning: "trạm kiểm tra",
        example: "Have your ID ready at the checkpoint.",
      },
    ],
    tags: ["prepositions", "travel"],
  },
  {
    id: "q143",
    sentence:
      "The software development team is ______ working on a patch for the security vulnerability.",
    options: ["current", "currently", "currency", "currents"],
    correctAnswer: 1,
    translation:
      "Nhóm phát triển phần mềm hiện đang làm việc để tạo ra một bản vá cho lỗ hổng an ninh.",
    explanation: {
      correctAnswer: "currently",
      grammarRule: "Adverb Placement",
      sentenceStructure: "be + Adverb + V-ing",
      whyCorrect:
        "An adverb is needed between the auxiliary verb 'is' and the main verb 'working'.",
      whyOthersWrong: [
        "A. current: Adjective.",
        "C. currency: Noun.",
        "D. currents: Noun plural.",
      ],
      toeicTip: "The pattern 'be + ___ + V-ing/V-ed' always takes an adverb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "vulnerability",
        ipa: "/ˌvʌlnərəˈbɪləti/",
        pos: "noun",
        meaning: "lỗ hổng, sự yếu kém",
        example: "They fixed a security vulnerability.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q144",
    sentence:
      "By this time next year, Ms. Robertson ______ as the regional manager for a decade.",
    options: ["will serve", "serves", "will have served", "has served"],
    correctAnswer: 2,
    translation:
      "Vào thời điểm này năm tới, bà Robertson sẽ đã đảm nhiệm chức vụ quản lý khu vực được một thập kỷ.",
    explanation: {
      correctAnswer: "will have served",
      grammarRule: "Future Perfect Tense",
      sentenceStructure: "By + future time, S + will have + V3",
      whyCorrect:
        "The phrase 'By this time next year' indicates an action that will be completed at a specific point in the future.",
      whyOthersWrong: [
        "A. will serve: Simple future (does not show completion over a period).",
        "B. serves: Present tense.",
        "D. has served: Present perfect.",
      ],
      toeicTip:
        "Always pair 'By + [future time]' with the Future Perfect (will have + V3).",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "decade",
        ipa: "/ˈdekeɪd/",
        pos: "noun",
        meaning: "thập kỷ (10 năm)",
        example: "She has lived here for a decade.",
      },
    ],
    tags: ["verbs", "future perfect"],
  },
  {
    id: "q145",
    sentence:
      "All department heads must make an ______ to attend the leadership seminar.",
    options: ["effect", "affect", "effort", "afford"],
    correctAnswer: 2,
    translation: "Tất cả trưởng phòng phải nỗ lực tham dự hội thảo lãnh đạo.",
    explanation: {
      correctAnswer: "effort",
      grammarRule: "Collocations",
      sentenceStructure: "make + an + effort + to do something",
      whyCorrect:
        "'Make an effort' is a fixed phrase meaning to try hard to do something.",
      whyOthersWrong: [
        "A. effect: Used in 'have an effect on'.",
        "B. affect: Verb.",
        "D. afford: Verb.",
      ],
      toeicTip:
        "Memorize: 'make an effort', 'make a decision', 'make an appointment'.",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "effort",
        ipa: "/ˈefərt/",
        pos: "noun",
        meaning: "sự nỗ lực",
        example: "Please make an effort to be on time.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q146",
    sentence:
      "______ you require additional assistance with your account, please press zero to speak to an operator.",
    options: ["Should", "Could", "Would", "Might"],
    correctAnswer: 0,
    translation:
      "Nếu bạn cần thêm hỗ trợ với tài khoản của mình, vui lòng bấm số 0 để nói chuyện với tổng đài viên.",
    explanation: {
      correctAnswer: "Should",
      grammarRule: "Inverted Conditionals",
      sentenceStructure: "Should + S + base verb, Clause",
      whyCorrect:
        "'Should' replaces 'If' in formal conditional sentences (Should you require = If you require).",
      whyOthersWrong: [
        "B. Could: Modal of ability.",
        "C. Would: Modal of intention/habit.",
        "D. Might: Modal of possibility.",
      ],
      toeicTip:
        "'Should you [verb]...' is one of the most heavily tested conditional structures in TOEIC Part 5.",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "operator",
        ipa: "/ˈɑːpəreɪtər/",
        pos: "noun",
        meaning: "tổng đài viên, người điều hành",
        example: "The operator will transfer your call.",
      },
    ],
    tags: ["conditionals", "formal"],
  },
  {
    id: "q147",
    sentence:
      "The company's new line of eco-friendly products has proven to be highly ______.",
    options: ["profit", "profitable", "profitably", "profitability"],
    correctAnswer: 1,
    translation:
      "Dòng sản phẩm thân thiện với môi trường mới của công ty đã được chứng minh là mang lại lợi nhuận cao.",
    explanation: {
      correctAnswer: "profitable",
      grammarRule: "Adjective after Linking Verb",
      sentenceStructure: "prove to be + Adverb + Adjective",
      whyCorrect:
        "The phrase 'prove to be' acts as a linking verb requiring an adjective. 'Highly' modifies it.",
      whyOthersWrong: [
        "A. profit: Noun.",
        "C. profitably: Adverb.",
        "D. profitability: Noun.",
      ],
      toeicTip: "prove to be / turn out to be + Adjective.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "eco-friendly",
        ipa: "/ˌiːkoʊ ˈfrendli/",
        pos: "adj",
        meaning: "thân thiện với môi trường",
        example: "They sell eco-friendly cleaning supplies.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q148",
    sentence:
      "The printer ______ we purchased last week is already malfunctioning.",
    options: ["who", "whom", "whose", "which"],
    correctAnswer: 3,
    translation: "Chiếc máy in mà chúng ta đã mua tuần trước đã bị trục trặc.",
    explanation: {
      correctAnswer: "which",
      grammarRule: "Relative Pronouns",
      sentenceStructure: "Noun (Thing) + which + Clause",
      whyCorrect:
        "'Which' is used as the relative pronoun to replace a thing (the printer).",
      whyOthersWrong: [
        "A. who: Used for people.",
        "B. whom: Used for people (object).",
        "C. whose: Indicates possession.",
      ],
      toeicTip: "When referring to objects or animals, use 'which' or 'that'.",
    },
    category: "Grammar",
    subcategory: "Relative Clauses",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "malfunction",
        ipa: "/ˌmælˈfʌŋkʃn/",
        pos: "verb/noun",
        meaning: "trục trặc, hoạt động sai",
        example: "The equipment started to malfunction.",
      },
    ],
    tags: ["relative pronouns"],
  },
  {
    id: "q149",
    sentence:
      "The cafeteria will be closed ______ the summer holidays for renovation.",
    options: ["while", "during", "since", "until"],
    correctAnswer: 1,
    translation: "Căn tin sẽ đóng cửa trong suốt kỳ nghỉ hè để cải tạo.",
    explanation: {
      correctAnswer: "during",
      grammarRule: "Prepositions of Time",
      sentenceStructure: "during + Noun Phrase",
      whyCorrect:
        "'During' is followed by a noun phrase to indicate when an event happens.",
      whyOthersWrong: [
        "A. while: Followed by a clause (S + V) or V-ing.",
        "C. since: Indicates a starting point.",
        "D. until: Indicates the end point of an action.",
      ],
      toeicTip:
        "During + Noun (during the meeting, during the holidays). While + Clause.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "renovation",
        ipa: "/ˌrenəˈveɪʃn/",
        pos: "noun",
        meaning: "sự cải tạo",
        example: "The hotel is closed for renovation.",
      },
    ],
    tags: ["prepositions", "time"],
  },
  {
    id: "q150",
    sentence:
      "The new automated system is much ______ efficient than the manual process we used before.",
    options: ["more", "most", "very", "too"],
    correctAnswer: 0,
    translation:
      "Hệ thống tự động mới hiệu quả hơn nhiều so với quy trình thủ công mà chúng ta đã sử dụng trước đây.",
    explanation: {
      correctAnswer: "more",
      grammarRule: "Comparative Adjectives",
      sentenceStructure: "much + more + Adjective + than",
      whyCorrect:
        "The word 'than' requires a comparative structure. Since 'efficient' is a long adjective, we use 'more'.",
      whyOthersWrong: [
        "B. most: Superlative.",
        "C. very: Cannot be used with comparatives.",
        "D. too: Expresses excess, not comparison.",
      ],
      toeicTip:
        "Modifiers for comparatives: much more, far more, even more, slightly more.",
    },
    category: "Grammar",
    subcategory: "Comparisons",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "automated",
        ipa: "/ˈɔːtəmeɪtɪd/",
        pos: "adj",
        meaning: "tự động hóa",
        example: "The factory uses an automated system.",
      },
    ],
    tags: ["comparisons", "adjectives"],
  },
  {
    id: "q151",
    sentence:
      "Mr. Thompson has requested a ______ of the meeting minutes by the end of the day.",
    options: ["summarize", "summary", "summarized", "summarizing"],
    correctAnswer: 1,
    translation:
      "Ông Thompson đã yêu cầu một bản tóm tắt biên bản cuộc họp vào cuối ngày.",
    explanation: {
      correctAnswer: "summary",
      grammarRule: "Noun Form",
      sentenceStructure: "a + Noun + of",
      whyCorrect:
        "The article 'a' indicates that a noun is needed. 'Summary' is the noun form.",
      whyOthersWrong: [
        "A. summarize: Verb.",
        "C. summarized: Adjective/Past Tense.",
        "D. summarizing: Gerund.",
      ],
      toeicTip: "The pattern 'a/an/the + ___ + of' strictly requires a noun.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "minutes",
        ipa: "/ˈmɪnɪts/",
        pos: "noun",
        meaning: "biên bản cuộc họp",
        example: "Who will take the minutes today?",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q152",
    sentence:
      "Employees are not permitted to use company equipment for ______ purposes.",
    options: ["person", "personality", "personally", "personal"],
    correctAnswer: 3,
    translation:
      "Nhân viên không được phép sử dụng thiết bị của công ty cho mục đích cá nhân.",
    explanation: {
      correctAnswer: "personal",
      grammarRule: "Adjective modifying Noun",
      sentenceStructure: "Adjective + Noun (purposes)",
      whyCorrect: "We need an adjective to modify 'purposes'.",
      whyOthersWrong: [
        "A. person: Noun.",
        "B. personality: Noun.",
        "C. personally: Adverb.",
      ],
      toeicTip:
        "'For personal use' and 'for personal purposes' are standard business regulations.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "permit",
        ipa: "/pərˈmɪt/",
        pos: "verb",
        meaning: "cho phép",
        example: "Smoking is not permitted here.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q153",
    sentence:
      "The marketing director ______ suggested increasing the advertising budget.",
    options: ["strong", "strength", "strongly", "strengthen"],
    correctAnswer: 2,
    translation:
      "Giám đốc tiếp thị đã kịch liệt đề nghị tăng ngân sách quảng cáo.",
    explanation: {
      correctAnswer: "strongly",
      grammarRule: "Adverb Placement",
      sentenceStructure: "Subject + Adverb + Verb",
      whyCorrect:
        "An adverb is needed between the subject and the main verb to modify the action.",
      whyOthersWrong: [
        "A. strong: Adjective.",
        "B. strength: Noun.",
        "D. strengthen: Verb.",
      ],
      toeicTip:
        "Words like strongly, highly, and repeatedly often precede verbs like recommend, suggest, advise.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "suggest",
        ipa: "/səɡˈdʒest/",
        pos: "verb",
        meaning: "đề nghị, gợi ý",
        example: "I suggest we leave early.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q154",
    sentence:
      "All candidates must undergo a rigorous background check ______ they can be officially hired.",
    options: ["before", "so that", "because of", "during"],
    correctAnswer: 0,
    translation:
      "Tất cả ứng viên phải trải qua một cuộc kiểm tra lý lịch nghiêm ngặt trước khi họ có thể chính thức được tuyển dụng.",
    explanation: {
      correctAnswer: "before",
      grammarRule: "Time Clauses",
      sentenceStructure: "Action 1 + before + Clause (Action 2)",
      whyCorrect:
        "'Before' logically establishes the correct sequence of events.",
      whyOthersWrong: [
        "B. so that: Indicates purpose.",
        "C. because of: Requires a noun phrase.",
        "D. during: Requires a noun phrase.",
      ],
      toeicTip:
        "Before and After can be followed by a clause (S + V) or a V-ing.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "rigorous",
        ipa: "/ˈrɪɡərəs/",
        pos: "adj",
        meaning: "nghiêm ngặt, khắt khe",
        example: "The athletes undergo rigorous training.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q155",
    sentence:
      "To be considered for the scholarship, applications must be ______ by March 15th.",
    options: ["receive", "receives", "received", "receiving"],
    correctAnswer: 2,
    translation:
      "Để được xem xét cấp học bổng, các đơn đăng ký phải được nhận trước ngày 15 tháng 3.",
    explanation: {
      correctAnswer: "received",
      grammarRule: "Passive Voice",
      sentenceStructure: "must be + past participle",
      whyCorrect:
        "Applications cannot receive themselves; they are received. Therefore, the passive form (be + V3) is required.",
      whyOthersWrong: [
        "A. receive: Base form.",
        "B. receives: Present singular.",
        "D. receiving: Active continuous.",
      ],
      toeicTip:
        "Modal + be + V-ed is the standard passive structure for rules and deadlines.",
    },
    category: "Grammar",
    subcategory: "Passive Voice",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "scholarship",
        ipa: "/ˈskɑːlərʃɪp/",
        pos: "noun",
        meaning: "học bổng",
        example: "He won a scholarship to Harvard.",
      },
    ],
    tags: ["passive", "modals"],
  },
  {
    id: "q156",
    sentence:
      "The company’s decision to open a new branch in Europe proved to be highly ______.",
    options: ["success", "succeed", "successful", "successfully"],
    correctAnswer: 2,
    translation:
      "Quyết định mở chi nhánh mới tại Châu Âu của công ty đã được chứng minh là rất thành công.",
    explanation: {
      correctAnswer: "successful",
      grammarRule: "Adjective after Linking Verb",
      sentenceStructure: "prove to be + Adverb (highly) + Adjective",
      whyCorrect:
        "'Prove to be' acts as a linking structure requiring an adjective.",
      whyOthersWrong: [
        "A. success: Noun.",
        "B. succeed: Verb.",
        "D. successfully: Adverb.",
      ],
      toeicTip: "Linking verb + adverb + ADJECTIVE.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "branch",
        ipa: "/bræntʃ/",
        pos: "noun",
        meaning: "chi nhánh",
        example: "We opened a new branch in London.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q157",
    sentence:
      "Customers are advised to retain their receipts ______ they need to return an item.",
    options: ["in case", "so that", "unless", "but"],
    correctAnswer: 0,
    translation:
      "Khách hàng được khuyên nên giữ lại biên lai phòng trường hợp họ cần trả lại một món hàng.",
    explanation: {
      correctAnswer: "in case",
      grammarRule: "Conditional Conjunctions",
      sentenceStructure: "Clause + in case + Clause",
      whyCorrect:
        "'In case' is used to express preparation for a possible future situation.",
      whyOthersWrong: [
        "B. so that: Expresses purpose, but 'so that they need' is illogical.",
        "C. unless: Means 'if not'.",
        "D. but: Conjunction of contrast.",
      ],
      toeicTip:
        "'In case' is frequently used with precautions (keep the receipt, take an umbrella).",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "retain",
        ipa: "/rɪˈteɪn/",
        pos: "verb",
        meaning: "giữ lại",
        example: "Please retain this portion for your records.",
      },
    ],
    tags: ["conjunctions", "conditionals"],
  },
  {
    id: "q158",
    sentence:
      "The technician ______ the network issue before the staff arrived at the office.",
    options: ["resolved", "has resolved", "will resolve", "had resolved"],
    correctAnswer: 3,
    translation:
      "Kỹ thuật viên đã giải quyết xong sự cố mạng trước khi nhân viên đến văn phòng.",
    explanation: {
      correctAnswer: "had resolved",
      grammarRule: "Past Perfect Tense",
      sentenceStructure: "Past Perfect + before + Past Simple",
      whyCorrect:
        "The Past Perfect (had + V3) is used to show that an action was completed before another action in the past ('arrived').",
      whyOthersWrong: [
        "A. resolved: Past simple (less precise for sequence of past events).",
        "B. has resolved: Present perfect.",
        "C. will resolve: Future tense.",
      ],
      toeicTip:
        "When you see 'before' or 'by the time' linking two past actions, the earlier action is Past Perfect.",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "resolve",
        ipa: "/rɪˈzɑːlv/",
        pos: "verb",
        meaning: "giải quyết",
        example: "We need to resolve this issue quickly.",
      },
    ],
    tags: ["verbs", "past perfect"],
  },
  {
    id: "q159",
    sentence:
      "Management is considering ______ a bonus to employees who meet their quarterly targets.",
    options: ["offer", "offering", "to offer", "offered"],
    correctAnswer: 1,
    translation:
      "Ban quản lý đang xem xét việc thưởng cho những nhân viên đạt mục tiêu hàng quý.",
    explanation: {
      correctAnswer: "offering",
      grammarRule: "Verbs Followed by Gerunds",
      sentenceStructure: "consider + V-ing",
      whyCorrect:
        "The verb 'consider' is always followed by a gerund when an action is the object.",
      whyOthersWrong: [
        "A. offer: Base verb.",
        "C. to offer: Infinitive.",
        "D. offered: Past tense.",
      ],
      toeicTip: "Memorize: consider, suggest, avoid, enjoy, mind + V-ing.",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "bonus",
        ipa: "/ˈboʊnəs/",
        pos: "noun",
        meaning: "tiền thưởng",
        example: "Everyone will receive a Christmas bonus.",
      },
    ],
    tags: ["gerunds", "verbs"],
  },
  {
    id: "q160",
    sentence:
      "The newly updated policy will be distributed to all ______ within the next two days.",
    options: ["department", "departments", "departmental", "departmentally"],
    correctAnswer: 1,
    translation:
      "Chính sách mới được cập nhật sẽ được phân phát tới tất cả các phòng ban trong vòng hai ngày tới.",
    explanation: {
      correctAnswer: "departments",
      grammarRule: "Noun Plurals",
      sentenceStructure: "all + Plural Noun",
      whyCorrect:
        "The quantifier 'all' must be followed by a plural countable noun.",
      whyOthersWrong: [
        "A. department: Singular.",
        "C. departmental: Adjective.",
        "D. departmentally: Adverb.",
      ],
      toeicTip: "All, many, several, a few + Plural Nouns.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "distribute",
        ipa: "/dɪˈstrɪbjuːt/",
        pos: "verb",
        meaning: "phân phát",
        example: "Please distribute these flyers.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q161",
    sentence:
      "Any modifications to the architectural plans must be approved ______ the head engineer.",
    options: ["by", "with", "from", "at"],
    correctAnswer: 0,
    translation:
      "Bất kỳ sự sửa đổi nào đối với các bản vẽ kiến trúc đều phải được phê duyệt bởi kỹ sư trưởng.",
    explanation: {
      correctAnswer: "by",
      grammarRule: "Passive Voice Agent",
      sentenceStructure: "be approved + by + person",
      whyCorrect:
        "In a passive voice sentence, the doer of the action is introduced with 'by'.",
      whyOthersWrong: [
        "B. with: Used for tools.",
        "C. from: Shows origin.",
        "D. at: Shows location/time.",
      ],
      toeicTip: "Passive Verb (be + V3) + BY + Agent.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "modification",
        ipa: "/ˌmɑːdɪfɪˈkeɪʃn/",
        pos: "noun",
        meaning: "sự sửa đổi",
        example: "We made some modifications to the design.",
      },
    ],
    tags: ["prepositions", "passive"],
  },
  {
    id: "q162",
    sentence:
      "Our main competitor has launched a new product; ______, we must accelerate our own release schedule.",
    options: ["however", "furthermore", "therefore", "instead"],
    correctAnswer: 2,
    translation:
      "Đối thủ cạnh tranh chính của chúng ta đã ra mắt một sản phẩm mới; do đó, chúng ta phải đẩy nhanh tiến độ phát hành của chính mình.",
    explanation: {
      correctAnswer: "therefore",
      grammarRule: "Conjunctive Adverbs",
      sentenceStructure: "Clause 1; therefore, Clause 2",
      whyCorrect:
        "'Therefore' indicates a logical result or consequence of the previous statement.",
      whyOthersWrong: [
        "A. however: Shows contrast.",
        "B. furthermore: Adds information.",
        "D. instead: Shows an alternative.",
      ],
      toeicTip:
        "Read for logical flow. Cause -> Result = therefore, thus, consequently.",
    },
    category: "Grammar",
    subcategory: "Transitions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "accelerate",
        ipa: "/əkˈseləreɪt/",
        pos: "verb",
        meaning: "đẩy nhanh, tăng tốc",
        example: "We need to accelerate the process.",
      },
    ],
    tags: ["transitions", "logic"],
  },
  {
    id: "q163",
    sentence:
      "The director spoke so ______ that people in the back row could hardly hear him.",
    options: ["soft", "softly", "softness", "softer"],
    correctAnswer: 1,
    translation:
      "Giám đốc nói nhỏ đến nỗi những người ở hàng ghế sau hầu như không thể nghe thấy ông ấy.",
    explanation: {
      correctAnswer: "softly",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (spoke) + Adverb",
      whyCorrect: "An adverb is required to modify the verb 'spoke'.",
      whyOthersWrong: [
        "A. soft: Adjective.",
        "C. softness: Noun.",
        "D. softer: Comparative adjective.",
      ],
      toeicTip:
        "In the 'so...that' structure, an adverb is used if it modifies an action verb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "hardly",
        ipa: "/ˈhɑːrdli/",
        pos: "adv",
        meaning: "hầu như không",
        example: "I could hardly believe my eyes.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q164",
    sentence:
      "Please arrange the documents in ______ order before placing them in the filing cabinet.",
    options: ["alphabet", "alphabetize", "alphabetical", "alphabetically"],
    correctAnswer: 2,
    translation:
      "Vui lòng sắp xếp các tài liệu theo thứ tự bảng chữ cái trước khi đặt chúng vào tủ hồ sơ.",
    explanation: {
      correctAnswer: "alphabetical",
      grammarRule: "Adjective modifying Noun",
      sentenceStructure: "Preposition (in) + Adjective + Noun (order)",
      whyCorrect:
        "We need an adjective to modify 'order'. 'Alphabetical order' is the standard phrase.",
      whyOthersWrong: [
        "A. alphabet: Noun.",
        "B. alphabetize: Verb.",
        "D. alphabetically: Adverb.",
      ],
      toeicTip:
        "Memorize collocations: in alphabetical order, in chronological order.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "cabinet",
        ipa: "/ˈkæbɪnət/",
        pos: "noun",
        meaning: "tủ (có ngăn kéo)",
        example: "The files are in the filing cabinet.",
      },
    ],
    tags: ["adjectives", "collocation"],
  },
  {
    id: "q165",
    sentence:
      "The warranty is valid for two years, ______ covers parts and labor.",
    options: ["who", "whom", "which", "whose"],
    correctAnswer: 2,
    translation:
      "Bảo hành có giá trị trong hai năm, bao gồm (chi phí) phụ tùng và nhân công.",
    explanation: {
      correctAnswer: "which",
      grammarRule: "Relative Pronouns",
      sentenceStructure: ", + which + Verb",
      whyCorrect:
        "'Which' is used in a non-defining relative clause to refer back to the preceding noun clause/thing (the warranty).",
      whyOthersWrong: [
        "A. who: For people.",
        "B. whom: For people (object).",
        "D. whose: Indicates possession.",
      ],
      toeicTip:
        "After a comma, referring to a thing, use 'which' (never use 'that' after a comma in this context).",
    },
    category: "Grammar",
    subcategory: "Relative Clauses",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "warranty",
        ipa: "/ˈwɔːrənti/",
        pos: "noun",
        meaning: "giấy bảo hành",
        example: "The TV comes with a one-year warranty.",
      },
    ],
    tags: ["relative pronouns"],
  },
  {
    id: "q166",
    sentence:
      "If the venue is too small, we ______ the event to a larger conference center.",
    options: ["move", "moved", "will move", "would move"],
    correctAnswer: 2,
    translation:
      "Nếu địa điểm quá nhỏ, chúng ta sẽ chuyển sự kiện đến một trung tâm hội nghị lớn hơn.",
    explanation: {
      correctAnswer: "will move",
      grammarRule: "Conditionals Type 1",
      sentenceStructure: "If + S + V(present), S + will + V0",
      whyCorrect:
        "The 'if' clause uses present tense ('is'), indicating a Type 1 conditional. The main clause requires 'will' + base verb.",
      whyOthersWrong: [
        "A. move: Present tense.",
        "B. moved: Past tense.",
        "D. would move: Used for Type 2 (unreal present).",
      ],
      toeicTip: "If + Present -> Will + Base Verb.",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "venue",
        ipa: "/ˈvenjuː/",
        pos: "noun",
        meaning: "địa điểm (tổ chức sự kiện)",
        example: "They are looking for a wedding venue.",
      },
    ],
    tags: ["conditionals", "verbs"],
  },
  {
    id: "q167",
    sentence:
      "The CEO was impressed with the presentation, ______ it was prepared at the last minute.",
    options: ["because", "even though", "in spite of", "however"],
    correctAnswer: 1,
    translation:
      "Giám đốc điều hành rất ấn tượng với bài thuyết trình, mặc dù nó được chuẩn bị vào phút chót.",
    explanation: {
      correctAnswer: "even though",
      grammarRule: "Conjunctions of Contrast",
      sentenceStructure: "Clause + even though + Clause",
      whyCorrect: "'Even though' introduces a contrasting clause.",
      whyOthersWrong: [
        "A. because: Shows reason (illogical).",
        "C. in spite of: Must be followed by a noun phrase or V-ing.",
        "D. however: Adverb, requires semicolon/comma.",
      ],
      toeicTip: "Even though / Although + Subject + Verb.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "impressed",
        ipa: "/ɪmˈprest/",
        pos: "adj",
        meaning: "bị ấn tượng",
        example: "I am very impressed with your work.",
      },
    ],
    tags: ["conjunctions", "contrast"],
  },
  {
    id: "q168",
    sentence:
      "The accounting department will issue reimbursement checks ______ all receipts are verified.",
    options: ["once", "despite", "so that", "during"],
    correctAnswer: 0,
    translation:
      "Phòng kế toán sẽ phát hành séc hoàn tiền một khi tất cả các biên lai được xác minh.",
    explanation: {
      correctAnswer: "once",
      grammarRule: "Conjunctions of Time",
      sentenceStructure: "Clause + once + Clause",
      whyCorrect: "'Once' functions as a conjunction meaning 'as soon as'.",
      whyOthersWrong: [
        "B. despite: Preposition.",
        "C. so that: Indicates purpose.",
        "D. during: Preposition.",
      ],
      toeicTip: "'Once' is heavily tested in TOEIC to mean 'after/as soon as'.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "reimbursement",
        ipa: "/ˌriːɪmˈbɜːrsmənt/",
        pos: "noun",
        meaning: "sự hoàn trả, bồi hoàn",
        example: "Submit your expenses for reimbursement.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q169",
    sentence:
      "Staff members are expected to conduct ______ professionally when interacting with clients.",
    options: ["them", "their", "theirs", "themselves"],
    correctAnswer: 3,
    translation:
      "Nhân viên được kỳ vọng sẽ cư xử chuyên nghiệp khi tương tác với khách hàng.",
    explanation: {
      correctAnswer: "themselves",
      grammarRule: "Reflexive Pronouns",
      sentenceStructure: "conduct + reflexive pronoun",
      whyCorrect:
        "When the subject (Staff members) and object are the same, a reflexive pronoun is used. 'Conduct oneself' means to behave.",
      whyOthersWrong: [
        "A. them: Object pronoun (implies other people).",
        "B. their: Possessive adjective.",
        "C. theirs: Possessive pronoun.",
      ],
      toeicTip:
        "Verbs like conduct, pride, absent often take reflexive pronouns (myself, themselves, etc.).",
    },
    category: "Grammar",
    subcategory: "Pronouns",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "interact",
        ipa: "/ˌɪntərˈækt/",
        pos: "verb",
        meaning: "tương tác",
        example: "He interacts well with other children.",
      },
    ],
    tags: ["pronouns", "reflexive"],
  },
  {
    id: "q170",
    sentence:
      "The factory's new machinery operates much more ______ than the older models.",
    options: ["quiet", "quietly", "quietness", "quieter"],
    correctAnswer: 1,
    translation:
      "Máy móc mới của nhà máy hoạt động êm ái hơn nhiều so với các mẫu cũ.",
    explanation: {
      correctAnswer: "quietly",
      grammarRule: "Adverbs in Comparisons",
      sentenceStructure: "Verb + more + Adverb + than",
      whyCorrect:
        "An adverb is needed to modify the action verb 'operates'. The comparative form is 'more quietly'.",
      whyOthersWrong: [
        "A. quiet: Adjective.",
        "C. quietness: Noun.",
        "D. quieter: Comparative adjective.",
      ],
      toeicTip:
        "Always look at the verb. If it's an action verb (operates), you need an adverb (quietly) not an adjective (quiet).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "machinery",
        ipa: "/məˈʃiːnəri/",
        pos: "noun",
        meaning: "máy móc",
        example: "The factory uses advanced machinery.",
      },
    ],
    tags: ["adverbs", "comparisons"],
  },
  {
    id: "q171",
    sentence:
      "Applicants must provide three letters of ______ from previous employers.",
    options: ["refer", "refers", "reference", "referred"],
    correctAnswer: 2,
    translation:
      "Ứng viên phải cung cấp ba thư giới thiệu từ các nhà tuyển dụng trước đây.",
    explanation: {
      correctAnswer: "reference",
      grammarRule: "Noun Form",
      sentenceStructure: "letters of + Noun",
      whyCorrect:
        "'Letters of reference' is a fixed compound noun/phrase meaning recommendation letters.",
      whyOthersWrong: [
        "A. refer: Verb.",
        "B. refers: Verb.",
        "D. referred: Past tense / Participle.",
      ],
      toeicTip:
        "Memorize business phrases: letters of reference, letters of recommendation.",
    },
    category: "Vocabulary",
    subcategory: "Word Form",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "applicant",
        ipa: "/ˈæplɪkənt/",
        pos: "noun",
        meaning: "người nộp đơn",
        example: "We had many applicants for the job.",
      },
    ],
    tags: ["nouns", "business"],
  },
  {
    id: "q172",
    sentence:
      "The ______ to upgrade the software system was made by the IT director.",
    options: ["decide", "decision", "decisive", "decisively"],
    correctAnswer: 1,
    translation:
      "Quyết định nâng cấp hệ thống phần mềm được đưa ra bởi giám đốc CNTT.",
    explanation: {
      correctAnswer: "decision",
      grammarRule: "Noun placement",
      sentenceStructure: "The + Noun + to verb",
      whyCorrect:
        "The article 'The' requires a noun as the subject of the sentence.",
      whyOthersWrong: [
        "A. decide: Verb.",
        "C. decisive: Adjective.",
        "D. decisively: Adverb.",
      ],
      toeicTip:
        "The pattern 'The ______ to [verb]' always takes a noun (e.g., The decision to go, The ability to speak).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "upgrade",
        ipa: "/ˈʌpɡreɪd/",
        pos: "verb",
        meaning: "nâng cấp",
        example: "We need to upgrade our computers.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q173",
    sentence:
      "______ his lack of experience, he learned the duties of the job very quickly.",
    options: ["Because of", "Although", "Despite", "However"],
    correctAnswer: 2,
    translation:
      "Mặc dù thiếu kinh nghiệm, anh ấy đã học các nhiệm vụ của công việc rất nhanh chóng.",
    explanation: {
      correctAnswer: "Despite",
      grammarRule: "Prepositions of Concession",
      sentenceStructure: "Despite + Noun Phrase",
      whyCorrect:
        "'Despite' shows contrast and is correctly followed by the noun phrase 'his lack of experience'.",
      whyOthersWrong: [
        "A. Because of: Indicates cause, illogical here.",
        "B. Although: Must be followed by a full clause.",
        "D. However: Adverb requiring a comma.",
      ],
      toeicTip: "Despite + Noun Phrase. Although + Clause.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "duty",
        ipa: "/ˈduːti/",
        pos: "noun",
        meaning: "nhiệm vụ",
        example: "It is my duty to protect the building.",
      },
    ],
    tags: ["prepositions", "contrast"],
  },
  {
    id: "q174",
    sentence: "Please make sure to sign the contract ______ blue or black ink.",
    options: ["by", "in", "with", "at"],
    correctAnswer: 1,
    translation: "Vui lòng đảm bảo ký hợp đồng bằng mực xanh hoặc đen.",
    explanation: {
      correctAnswer: "in",
      grammarRule: "Prepositions",
      sentenceStructure: "in + ink/color",
      whyCorrect:
        "In English, the correct preposition to use with 'ink' or colors is 'in'.",
      whyOthersWrong: [
        "A. by: Incorrect.",
        "C. with: Used for instruments (with a pen) but not the ink itself.",
        "D. at: Incorrect.",
      ],
      toeicTip: "Memorize: Write IN ink. Write WITH a pen.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "contract",
        ipa: "/ˈkɑːntrækt/",
        pos: "noun",
        meaning: "hợp đồng",
        example: "Please sign the contract.",
      },
    ],
    tags: ["prepositions", "tools"],
  },
  {
    id: "q175",
    sentence:
      "The marketing team worked ______ to launch the campaign ahead of schedule.",
    options: ["diligence", "diligent", "diligently", "more diligent"],
    correctAnswer: 2,
    translation:
      "Nhóm tiếp thị đã làm việc siêng năng để ra mắt chiến dịch trước tiến độ.",
    explanation: {
      correctAnswer: "diligently",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (worked) + Adverb",
      whyCorrect: "An adverb is needed to describe how the team worked.",
      whyOthersWrong: [
        "A. diligence: Noun.",
        "B. diligent: Adjective.",
        "D. more diligent: Comparative adjective.",
      ],
      toeicTip:
        "Verbs like work, study, try are followed by -ly adverbs (diligently, hard is an exception).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "diligently",
        ipa: "/ˈdɪlɪdʒəntli/",
        pos: "adv",
        meaning: "một cách siêng năng",
        example: "She worked diligently on her project.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q176",
    sentence:
      "______ that the highway is closed, we will have to take an alternate route.",
    options: ["Given", "Provide", "Unless", "Because of"],
    correctAnswer: 0,
    translation:
      "Căn cứ vào việc đường cao tốc bị đóng cửa, chúng ta sẽ phải đi một tuyến đường thay thế.",
    explanation: {
      correctAnswer: "Given",
      grammarRule: "Prepositions / Conjunctions",
      sentenceStructure: "Given that + Clause",
      whyCorrect:
        "'Given that' means 'considering the fact that' and perfectly fits the context.",
      whyOthersWrong: [
        "B. Provide: Incorrect form (Provided that would mean 'if').",
        "C. Unless: Means 'if not'.",
        "D. Because of: Must be followed by a noun, not 'that + clause'.",
      ],
      toeicTip:
        "'Given that' + clause is a common formal expression meaning 'because/considering'.",
    },
    category: "Vocabulary",
    subcategory: "Conjunctions",
    type: "vocabulary",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "alternate",
        ipa: "/ˈɔːltərnət/",
        pos: "adj",
        meaning: "thay thế",
        example: "We took an alternate route to avoid traffic.",
      },
    ],
    tags: ["conjunctions", "formal"],
  },
  {
    id: "q177",
    sentence:
      "Employees who accumulate too many absences will face disciplinary ______.",
    options: ["act", "acts", "acting", "action"],
    correctAnswer: 3,
    translation:
      "Những nhân viên tích lũy quá nhiều ngày vắng mặt sẽ phải đối mặt với biện pháp kỷ luật.",
    explanation: {
      correctAnswer: "action",
      grammarRule: "Noun Collocations",
      sentenceStructure: "Adjective (disciplinary) + Noun",
      whyCorrect:
        "'Disciplinary action' is a fixed corporate term meaning punishment for breaking rules.",
      whyOthersWrong: [
        "A. act: A single deed, not used in this collocation.",
        "B. acts: Plural deed.",
        "C. acting: Present participle.",
      ],
      toeicTip: "Memorize the phrase 'take disciplinary action'.",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "disciplinary",
        ipa: "/ˈdɪsəplɪneri/",
        pos: "adj",
        meaning: "thuộc về kỷ luật",
        example: "The committee will take disciplinary action.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q178",
    sentence:
      "The project manager is responsible for ______ the budget and ensuring deadlines are met.",
    options: ["monitor", "monitors", "monitored", "monitoring"],
    correctAnswer: 3,
    translation:
      "Quản lý dự án chịu trách nhiệm theo dõi ngân sách và đảm bảo đáp ứng đúng thời hạn.",
    explanation: {
      correctAnswer: "monitoring",
      grammarRule: "Prepositions followed by Gerunds",
      sentenceStructure: "for + V-ing",
      whyCorrect: "The preposition 'for' must be followed by a gerund.",
      whyOthersWrong: [
        "A. monitor: Base verb.",
        "B. monitors: 3rd person singular.",
        "C. monitored: Past tense.",
      ],
      toeicTip:
        "Prepositions (in, on, at, of, for, about) are followed by V-ing.",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "monitor",
        ipa: "/ˈmɑːnɪtər/",
        pos: "verb",
        meaning: "theo dõi, giám sát",
        example: "We are monitoring the situation.",
      },
    ],
    tags: ["gerunds", "prepositions"],
  },
  {
    id: "q179",
    sentence:
      "______ any questions arise during the installation, please consult the user manual.",
    options: ["If", "Should", "Would", "When"],
    correctAnswer: 1,
    translation:
      "Nếu có bất kỳ câu hỏi nào phát sinh trong quá trình cài đặt, vui lòng tham khảo hướng dẫn sử dụng.",
    explanation: {
      correctAnswer: "Should",
      grammarRule: "Inverted Conditionals (Type 1)",
      sentenceStructure: "Should + Subject + Base Verb",
      whyCorrect:
        "'Should' acts as 'If' in this formal inversion structure (Should any questions arise).",
      whyOthersWrong: [
        "A. If: Would require 'If any questions arise', but 'Should' is the classic TOEIC test point for this exact formal phrasing.",
        "C. Would: Incorrect modal.",
        "D. When: Logically possible, but 'Should' is standard for 'in the event that'.",
      ],
      toeicTip:
        "'Should [subject] [base verb]...' is the inverted form of 'If [subject] [verb]'.",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "arise",
        ipa: "/əˈraɪz/",
        pos: "verb",
        meaning: "phát sinh",
        example: "Problems may arise during the project.",
      },
    ],
    tags: ["conditionals", "inversion"],
  },
  {
    id: "q180",
    sentence:
      "The CEO thanked everyone for their ______ contributions to the company's success.",
    options: ["value", "valuable", "valuably", "valuation"],
    correctAnswer: 1,
    translation:
      "Giám đốc điều hành cảm ơn mọi người vì những đóng góp quý giá của họ cho thành công của công ty.",
    explanation: {
      correctAnswer: "valuable",
      grammarRule: "Adjective modifying Noun",
      sentenceStructure: "Adjective + Noun (contributions)",
      whyCorrect: "An adjective is needed to describe 'contributions'.",
      whyOthersWrong: [
        "A. value: Noun.",
        "C. valuably: Adverb.",
        "D. valuation: Noun.",
      ],
      toeicTip: "The pattern 'their + ______ + Noun' requires an adjective.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "contribution",
        ipa: "/ˌkɑːntrɪˈbjuːʃn/",
        pos: "noun",
        meaning: "sự đóng góp",
        example: "He made a significant contribution to the team.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q181",
    sentence:
      "All visitors are asked to sign in at the front desk ______ they can enter the facility.",
    options: ["before", "during", "soon", "yet"],
    correctAnswer: 0,
    translation:
      "Tất cả khách tham quan được yêu cầu đăng ký tại quầy lễ tân trước khi họ có thể vào cơ sở.",
    explanation: {
      correctAnswer: "before",
      grammarRule: "Conjunctions of Time",
      sentenceStructure: "Clause + before + Clause",
      whyCorrect:
        "'Before' logically links the two clauses, establishing the required order of events.",
      whyOthersWrong: [
        "B. during: Preposition, followed by a noun.",
        "C. soon: Adverb.",
        "D. yet: Conjunction (meaning but) or Adverb.",
      ],
      toeicTip:
        "Before and After can be followed by a full clause (Subject + Verb).",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "facility",
        ipa: "/fəˈsɪləti/",
        pos: "noun",
        meaning: "cơ sở, tiện ích",
        example: "The sports facility is open to the public.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q182",
    sentence:
      "The new tax laws will affect small businesses ______, forcing many to cut costs.",
    options: ["adverse", "adversely", "adversity", "adversaries"],
    correctAnswer: 1,
    translation:
      "Các luật thuế mới sẽ ảnh hưởng bất lợi đến các doanh nghiệp nhỏ, buộc nhiều bên phải cắt giảm chi phí.",
    explanation: {
      correctAnswer: "adversely",
      grammarRule: "Adverb modifying Verb",
      sentenceStructure: "Verb (affect) + Object + Adverb",
      whyCorrect:
        "An adverb is required to describe how the laws will affect the businesses.",
      whyOthersWrong: [
        "A. adverse: Adjective.",
        "C. adversity: Noun.",
        "D. adversaries: Plural noun (enemies).",
      ],
      toeicTip: "'Adversely affect' is a highly common TOEIC collocation.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "adversely",
        ipa: "/ədˈvɜːrsli/",
        pos: "adv",
        meaning: "một cách bất lợi",
        example: "The weather adversely affected the crops.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q183",
    sentence:
      "______ the increase in raw material costs, the company has decided not to raise its prices.",
    options: ["Because", "Although", "In spite of", "Even though"],
    correctAnswer: 2,
    translation:
      "Mặc dù chi phí nguyên liệu thô tăng, công ty vẫn quyết định không tăng giá.",
    explanation: {
      correctAnswer: "In spite of",
      grammarRule: "Prepositions of Concession",
      sentenceStructure: "In spite of + Noun Phrase",
      whyCorrect:
        "'In spite of' is used to show contrast and is followed by the noun phrase 'the increase in raw material costs'.",
      whyOthersWrong: [
        "A. Because: Indicates cause, requires a clause.",
        "B. Although: Requires a clause (Subject + Verb).",
        "D. Even though: Requires a clause.",
      ],
      toeicTip: "In spite of / Despite + Noun Phrase.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "raw material",
        ipa: "/rɔː məˈtɪriəl/",
        pos: "noun",
        meaning: "nguyên liệu thô",
        example: "The factory needs more raw materials.",
      },
    ],
    tags: ["prepositions", "contrast"],
  },
  {
    id: "q184",
    sentence:
      "Mr. Davis will remain in London until the contract negotiations are ______.",
    options: ["complete", "completes", "completely", "completeness"],
    correctAnswer: 0,
    translation:
      "Ông Davis sẽ ở lại London cho đến khi các cuộc đàm phán hợp đồng hoàn tất.",
    explanation: {
      correctAnswer: "complete",
      grammarRule: "Adjective after Linking Verb",
      sentenceStructure: "are + Adjective",
      whyCorrect:
        "'Complete' functions as an adjective here, describing the state of the negotiations.",
      whyOthersWrong: [
        "B. completes: Verb.",
        "C. completely: Adverb.",
        "D. completeness: Noun.",
      ],
      toeicTip:
        "The verb 'be' (are) is followed by an adjective or past participle.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "negotiation",
        ipa: "/nɪˌɡoʊʃiˈeɪʃn/",
        pos: "noun",
        meaning: "sự đàm phán",
        example: "The contract is under negotiation.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q185",
    sentence:
      "The committee has yet ______ a decision regarding the new office location.",
    options: ["make", "making", "to make", "made"],
    correctAnswer: 2,
    translation:
      "Ủy ban vẫn chưa đưa ra quyết định liên quan đến địa điểm văn phòng mới.",
    explanation: {
      correctAnswer: "to make",
      grammarRule: "Have yet to",
      sentenceStructure: "have/has yet + to-infinitive",
      whyCorrect:
        "'Have yet to do something' is a formal structure meaning something has not been done yet but is expected to be done.",
      whyOthersWrong: [
        "A. make: Base verb.",
        "B. making: Gerund.",
        "D. made: Past tense.",
      ],
      toeicTip: "Memorize the phrase: 'have yet to + verb' (vẫn chưa làm gì).",
    },
    category: "Grammar",
    subcategory: "Infinitives",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "regarding",
        ipa: "/rɪˈɡɑːrdɪŋ/",
        pos: "prep",
        meaning: "liên quan đến",
        example: "I have a question regarding my order.",
      },
    ],
    tags: ["infinitives", "structures"],
  },
  {
    id: "q186",
    sentence:
      "Employees are reminded that all files stored on company servers are the ______ of the corporation.",
    options: ["proper", "property", "properly", "properties"],
    correctAnswer: 1,
    translation:
      "Nhân viên được nhắc nhở rằng tất cả các tệp được lưu trữ trên máy chủ của công ty đều là tài sản của tập đoàn.",
    explanation: {
      correctAnswer: "property",
      grammarRule: "Noun Form",
      sentenceStructure: "the + Noun",
      whyCorrect:
        "The article 'the' requires a noun. 'Property' (uncountable) means something owned.",
      whyOthersWrong: [
        "A. proper: Adjective.",
        "C. properly: Adverb.",
        "D. properties: Plural form (usually refers to real estate).",
      ],
      toeicTip:
        "The phrase 'is the property of' is standard in legal and corporate contexts.",
    },
    category: "Vocabulary",
    subcategory: "Word Form",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "property",
        ipa: "/ˈprɑːpərti/",
        pos: "noun",
        meaning: "tài sản",
        example: "This laptop is company property.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q187",
    sentence:
      "If the delivery ______ by noon tomorrow, we will have to cancel the order.",
    options: [
      "does not arrive",
      "did not arrive",
      "will not arrive",
      "had not arrived",
    ],
    correctAnswer: 0,
    translation:
      "Nếu hàng giao không đến trước buổi trưa ngày mai, chúng ta sẽ phải hủy đơn hàng.",
    explanation: {
      correctAnswer: "does not arrive",
      grammarRule: "Conditionals Type 1",
      sentenceStructure: "If + Present Simple, Future Simple",
      whyCorrect:
        "The main clause uses 'will have to' (future), making this a Type 1 conditional. The 'if' clause requires the present simple tense.",
      whyOthersWrong: [
        "B. did not arrive: Past tense (Type 2).",
        "C. will not arrive: 'Will' is not used in the 'if' clause.",
        "D. had not arrived: Past perfect (Type 3).",
      ],
      toeicTip:
        "In real future conditionals, the 'if' clause takes the present tense.",
    },
    category: "Grammar",
    subcategory: "Conditionals",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "cancel",
        ipa: "/ˈkænsəl/",
        pos: "verb",
        meaning: "hủy bỏ",
        example: "I need to cancel my reservation.",
      },
    ],
    tags: ["conditionals", "verbs"],
  },
  {
    id: "q188",
    sentence:
      "The technician worked ______ on the server to ensure the system was restored before morning.",
    options: ["continual", "continuous", "continuation", "continuously"],
    correctAnswer: 3,
    translation:
      "Kỹ thuật viên đã làm việc liên tục trên máy chủ để đảm bảo hệ thống được khôi phục trước buổi sáng.",
    explanation: {
      correctAnswer: "continuously",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Verb (worked) + Adverb",
      whyCorrect:
        "An adverb is required to describe how the technician worked.",
      whyOthersWrong: [
        "A. continual: Adjective.",
        "B. continuous: Adjective.",
        "C. continuation: Noun.",
      ],
      toeicTip: "Action verbs are modified by adverbs (-ly).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "restore",
        ipa: "/rɪˈstɔːr/",
        pos: "verb",
        meaning: "khôi phục",
        example: "Power has been fully restored.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q189",
    sentence:
      "Participants in the survey were selected ______ from across different regions of the country.",
    options: ["random", "randomly", "randomness", "randomize"],
    correctAnswer: 1,
    translation:
      "Những người tham gia khảo sát được chọn ngẫu nhiên từ các khu vực khác nhau trên cả nước.",
    explanation: {
      correctAnswer: "randomly",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Passive Verb (were selected) + Adverb",
      whyCorrect:
        "An adverb is needed to describe how the participants were selected.",
      whyOthersWrong: [
        "A. random: Adjective.",
        "C. randomness: Noun.",
        "D. randomize: Verb.",
      ],
      toeicTip:
        "When a sentence is structurally complete (Subject + Passive Verb), add an adverb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "participant",
        ipa: "/pɑːrˈtɪsɪpənt/",
        pos: "noun",
        meaning: "người tham gia",
        example: "The seminar had 50 participants.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q190",
    sentence:
      "The board of directors is dedicated to ______ a safe and inclusive workplace for everyone.",
    options: ["maintain", "maintained", "maintaining", "maintenance"],
    correctAnswer: 2,
    translation:
      "Hội đồng quản trị luôn cống hiến hết mình trong việc duy trì một nơi làm việc an toàn và hòa nhập cho mọi người.",
    explanation: {
      correctAnswer: "maintaining",
      grammarRule: "Prepositions followed by Gerunds",
      sentenceStructure: "be dedicated to + V-ing",
      whyCorrect:
        "In the phrase 'be dedicated to', 'to' is a preposition, not an infinitive marker. Therefore, it must be followed by a noun or gerund (V-ing).",
      whyOthersWrong: [
        "A. maintain: Base verb.",
        "B. maintained: Past tense.",
        "D. maintenance: Noun (Logically less direct than 'maintaining' followed by an object).",
      ],
      toeicTip:
        "Memorize phrases where 'to' is a preposition: look forward to, be dedicated to, be committed to, be used to + V-ing.",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "inclusive",
        ipa: "/ɪnˈkluːsɪv/",
        pos: "adj",
        meaning: "hòa nhập, bao gồm",
        example: "We aim for an inclusive society.",
      },
    ],
    tags: ["gerunds", "prepositions"],
  },
  {
    id: "q191",
    sentence:
      "The project manager is currently ______ charge of overseeing the new marketing campaign.",
    options: ["in", "on", "at", "with"],
    correctAnswer: 0,
    translation:
      "Quản lý dự án hiện đang chịu trách nhiệm giám sát chiến dịch tiếp thị mới.",
    explanation: {
      correctAnswer: "in",
      grammarRule: "Prepositional Phrases",
      sentenceStructure: "be in charge of + Noun/V-ing",
      whyCorrect:
        "'In charge of' is a fixed prepositional phrase meaning 'responsible for'.",
      whyOthersWrong: [
        "B. on: Incorrect collocation.",
        "C. at: Incorrect collocation.",
        "D. with: Incorrect collocation.",
      ],
      toeicTip:
        "Memorize business idioms: in charge of (phụ trách), in favor of (ủng hộ), in regard to (liên quan đến).",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "oversee",
        ipa: "/ˌoʊvərˈsiː/",
        pos: "verb",
        meaning: "giám sát",
        example: "He was hired to oversee the new project.",
      },
    ],
    tags: ["prepositions", "collocation"],
  },
  {
    id: "q192",
    sentence:
      "The newly released smartphone is highly popular because it is both durable and ______.",
    options: ["afford", "affords", "affordable", "affordability"],
    correctAnswer: 2,
    translation:
      "Chiếc điện thoại thông minh mới ra mắt rất được ưa chuộng vì nó vừa bền vừa có giá cả phải chăng.",
    explanation: {
      correctAnswer: "affordable",
      grammarRule: "Parallel Structure",
      sentenceStructure: "Adjective (durable) + and + Adjective",
      whyCorrect:
        "The conjunction 'and' links two items of the same grammatical form. Since 'durable' is an adjective, the blank must be an adjective.",
      whyOthersWrong: [
        "A. afford: Verb.",
        "B. affords: Verb.",
        "D. affordability: Noun.",
      ],
      toeicTip:
        "Look at the word before 'and' (durable). Match its part of speech in the blank.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "durable",
        ipa: "/ˈdʊrəbl/",
        pos: "adj",
        meaning: "bền",
        example: "This fabric is highly durable.",
      },
    ],
    tags: ["adjectives", "parallel structure"],
  },
  {
    id: "q193",
    sentence:
      "______ wishes to attend the annual gala must purchase a ticket by Friday.",
    options: ["Who", "Whoever", "Anyone", "Whom"],
    correctAnswer: 1,
    translation:
      "Bất cứ ai muốn tham dự buổi dạ tiệc thường niên đều phải mua vé trước thứ Sáu.",
    explanation: {
      correctAnswer: "Whoever",
      grammarRule: "Noun Clauses",
      sentenceStructure: "Whoever + Verb (wishes), S + Verb",
      whyCorrect:
        "'Whoever' acts as the subject of the noun clause ('Whoever wishes to attend...'), which in turn acts as the subject of the main verb 'must purchase'.",
      whyOthersWrong: [
        "A. Who: Used in direct questions or relative clauses, not as a standalone subject clause starter here.",
        "C. Anyone: Needs 'who' (Anyone who wishes).",
        "D. Whom: Object pronoun.",
      ],
      toeicTip:
        "'Whoever' = 'Anyone who'. If you see a blank starting a sentence followed directly by a verb, 'Whoever' is a strong candidate.",
    },
    category: "Grammar",
    subcategory: "Pronouns",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "gala",
        ipa: "/ˈɡeɪlə/",
        pos: "noun",
        meaning: "buổi dạ tiệc",
        example: "The hospital is holding a fundraising gala.",
      },
    ],
    tags: ["pronouns", "noun clauses"],
  },
  {
    id: "q194",
    sentence:
      "Attached to this email ______ the finalized schedule for next week's training sessions.",
    options: ["is", "are", "be", "has"],
    correctAnswer: 0,
    translation:
      "Đính kèm trong email này là lịch trình đã được chốt cho các buổi đào tạo tuần tới.",
    explanation: {
      correctAnswer: "is",
      grammarRule: "Inversion",
      sentenceStructure: "Attached + to + Noun + be + Subject",
      whyCorrect:
        "This sentence is inverted. The real subject is 'the finalized schedule' (singular), so the verb must be 'is'. (The finalized schedule is attached...).",
      whyOthersWrong: [
        "B. are: Plural verb.",
        "C. be: Base form.",
        "D. has: Auxiliary verb showing possession/perfect tense, illogical here.",
      ],
      toeicTip:
        "Memorize the inversion formula: Attached/Enclosed/Included is + Singular Noun (are + Plural Noun).",
    },
    category: "Grammar",
    subcategory: "Subject-Verb Agreement",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "finalize",
        ipa: "/ˈfaɪnəlaɪz/",
        pos: "verb",
        meaning: "chốt, hoàn tất",
        example: "We need to finalize the contract.",
      },
    ],
    tags: ["verbs", "inversion"],
  },
  {
    id: "q195",
    sentence:
      "The maintenance department announced that the elevator repairs have been ______ until Monday.",
    options: ["delayed", "delay", "delaying", "delays"],
    correctAnswer: 0,
    translation:
      "Phòng bảo trì thông báo rằng việc sửa chữa thang máy đã bị hoãn cho đến thứ Hai.",
    explanation: {
      correctAnswer: "delayed",
      grammarRule: "Passive Voice",
      sentenceStructure: "have been + past participle",
      whyCorrect:
        "The subject 'elevator repairs' receives the action, so the passive voice is required (have been delayed).",
      whyOthersWrong: [
        "B. delay: Base verb.",
        "C. delaying: Active continuous.",
        "D. delays: Present singular.",
      ],
      toeicTip:
        "have/has/had been + V-ed/V3 is the standard present perfect passive structure.",
    },
    category: "Grammar",
    subcategory: "Passive Voice",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "repair",
        ipa: "/rɪˈper/",
        pos: "noun/verb",
        meaning: "sự sửa chữa",
        example: "The car needs some major repairs.",
      },
    ],
    tags: ["passive", "verbs"],
  },
  {
    id: "q196",
    sentence:
      "All passengers are advised to keep their seatbelts securely ______ while seated.",
    options: ["fasten", "fastening", "fastened", "fastener"],
    correctAnswer: 2,
    translation:
      "Tất cả hành khách được khuyên nên giữ dây an toàn được cài chặt trong khi ngồi.",
    explanation: {
      correctAnswer: "fastened",
      grammarRule: "Adjective/Participle after keep",
      sentenceStructure: "keep + Object + V-ed",
      whyCorrect:
        "The verb 'keep' takes an object and a state (adjective or past participle). The seatbelts are acted upon, so 'fastened' is correct.",
      whyOthersWrong: [
        "A. fasten: Base verb.",
        "B. fastening: Active participle.",
        "D. fastener: Noun.",
      ],
      toeicTip:
        "Keep + Object + V-ed (keep the door closed, keep the seatbelt fastened).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "fasten",
        ipa: "/ˈfæsn/",
        pos: "verb",
        meaning: "cài, thắt chặt",
        example: "Please fasten your seatbelts.",
      },
    ],
    tags: ["participles", "travel"],
  },
  {
    id: "q197",
    sentence:
      "______ to the weather forecast, heavy snow is expected in the northern region this weekend.",
    options: ["According", "Due", "Because", "Depending"],
    correctAnswer: 0,
    translation:
      "Theo dự báo thời tiết, tuyết rơi dày được dự báo ở khu vực phía bắc vào cuối tuần này.",
    explanation: {
      correctAnswer: "According",
      grammarRule: "Prepositions",
      sentenceStructure: "According + to + Noun Phrase",
      whyCorrect:
        "'According to' means 'as stated by'. It perfectly matches the context of citing a weather forecast.",
      whyOthersWrong: [
        "B. Due: Needs 'to' (Due to = because of), but doesn't fit the context of citing a source.",
        "C. Because: Needs 'of'.",
        "D. Depending: Needs 'on'.",
      ],
      toeicTip: "Memorize prepositions: according to, due to, depending on.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "forecast",
        ipa: "/ˈfɔːrkæst/",
        pos: "noun",
        meaning: "dự báo",
        example: "The economic forecast is positive.",
      },
    ],
    tags: ["prepositions", "collocation"],
  },
  {
    id: "q198",
    sentence:
      "The new manager is very ______ to feedback and constantly seeks ways to improve team performance.",
    options: ["receptively", "receptive", "receptiveness", "reception"],
    correctAnswer: 1,
    translation:
      "Quản lý mới rất cởi mở tiếp thu các phản hồi và liên tục tìm kiếm các cách để cải thiện hiệu suất nhóm.",
    explanation: {
      correctAnswer: "receptive",
      grammarRule: "Adjective after Linking Verb",
      sentenceStructure: "be (is) + Adverb (very) + Adjective",
      whyCorrect:
        "The linking verb 'is' requires an adjective to describe the manager.",
      whyOthersWrong: [
        "A. receptively: Adverb.",
        "C. receptiveness: Noun.",
        "D. reception: Noun.",
      ],
      toeicTip:
        "Adjectives follow 'be' verbs. 'Receptive to' is a great TOEIC collocation meaning 'willing to listen to'.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "receptive",
        ipa: "/rɪˈseptɪv/",
        pos: "adj",
        meaning: "dễ tiếp thu, cởi mở",
        example: "She was very receptive to my suggestions.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q199",
    sentence:
      "The committee will not make a final decision ______ all the data has been thoroughly analyzed.",
    options: ["until", "during", "within", "despite"],
    correctAnswer: 0,
    translation:
      "Ủy ban sẽ không đưa ra quyết định cuối cùng cho đến khi tất cả dữ liệu được phân tích kỹ lưỡng.",
    explanation: {
      correctAnswer: "until",
      grammarRule: "Conjunctions of Time",
      sentenceStructure: "Negative Clause + until + Clause",
      whyCorrect:
        "'Until' means 'up to the time that', linking the delay of a decision to a specific completed condition.",
      whyOthersWrong: [
        "B. during: Followed by a noun.",
        "C. within: Used for time limits.",
        "D. despite: Followed by a noun.",
      ],
      toeicTip:
        "When you see 'not... [verb]' in the first clause, 'until' is a very strong candidate to start the second clause.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "thoroughly",
        ipa: "/ˈθɜːrəli/",
        pos: "adv",
        meaning: "một cách kỹ lưỡng",
        example: "The room was cleaned thoroughly.",
      },
    ],
    tags: ["conjunctions", "time"],
  },
  {
    id: "q200",
    sentence:
      "To ensure customer satisfaction, any defective items will be replaced ______ of charge.",
    options: ["free", "freedom", "freely", "freed"],
    correctAnswer: 0,
    translation:
      "Để đảm bảo sự hài lòng của khách hàng, bất kỳ món hàng lỗi nào cũng sẽ được thay thế miễn phí.",
    explanation: {
      correctAnswer: "free",
      grammarRule: "Collocations",
      sentenceStructure: "free of charge",
      whyCorrect:
        "'Free of charge' is a fixed idiom meaning without any payment required.",
      whyOthersWrong: [
        "B. freedom: Noun.",
        "C. freely: Adverb.",
        "D. freed: Verb.",
      ],
      toeicTip:
        "Memorize the phrase 'free of charge'. It frequently appears in TOEIC reading passages and Part 5.",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "defective",
        ipa: "/dɪˈfektɪv/",
        pos: "adj",
        meaning: "có lỗi, khiếm khuyết",
        example: "Return any defective merchandise to the store.",
      },
    ],
    tags: ["collocations", "business"],
  },
  {
    id: "q201",
    sentence:
      "Mr. Lopez is not in the office today; he is ______ a business trip in London.",
    options: ["in", "on", "at", "for"],
    correctAnswer: 1,
    translation:
      "Ông Lopez hôm nay không có ở văn phòng; ông ấy đang đi công tác ở London.",
    explanation: {
      correctAnswer: "on",
      grammarRule: "Prepositions",
      sentenceStructure: "on + a trip / vacation",
      whyCorrect:
        "The correct preposition to use with 'trip', 'vacation', or 'holiday' is 'on'.",
      whyOthersWrong: [
        "A. in: Incorrect collocation.",
        "C. at: Incorrect collocation.",
        "D. for: Incorrect collocation.",
      ],
      toeicTip:
        "Memorize collocations: on a business trip, on vacation, on leave, on duty.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "trip",
        ipa: "/trɪp/",
        pos: "noun",
        meaning: "chuyến đi",
        example: "How was your trip to Paris?",
      },
    ],
    tags: ["prepositions", "collocation"],
  },
  {
    id: "q202",
    sentence:
      "The factory supervisor demanded that all machinery ______ inspected before the shift begins.",
    options: ["is", "was", "be", "are"],
    correctAnswer: 2,
    translation:
      "Người giám sát nhà máy yêu cầu tất cả máy móc phải được kiểm tra trước khi ca làm việc bắt đầu.",
    explanation: {
      correctAnswer: "be",
      grammarRule: "Subjunctive Mood",
      sentenceStructure: "demand + that + Subject + base verb",
      whyCorrect:
        "Verbs like demand, request, suggest, insist are followed by a 'that' clause where the verb is always in its base form (bare infinitive). Here, the passive base form is 'be inspected'.",
      whyOthersWrong: [
        "A. is: Present tense (incorrect due to subjunctive).",
        "B. was: Past tense.",
        "D. are: Plural verb.",
      ],
      toeicTip:
        "When you see verbs like suggest, request, require, recommend, demand, use the base verb (V0) in the 'that' clause.",
    },
    category: "Grammar",
    subcategory: "Subjunctive",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "supervisor",
        ipa: "/ˈsuːpərvaɪzər/",
        pos: "noun",
        meaning: "người giám sát",
        example: "Speak to your supervisor.",
      },
    ],
    tags: ["subjunctive", "verbs"],
  },
  {
    id: "q203",
    sentence:
      "Please sign the document and send it back to the HR department as ______ as possible.",
    options: ["prompt", "promptly", "promptness", "prompts"],
    correctAnswer: 1,
    translation:
      "Vui lòng ký tài liệu và gửi lại cho phòng nhân sự càng nhanh càng tốt.",
    explanation: {
      correctAnswer: "promptly",
      grammarRule: "Comparisons of Equality with Adverbs",
      sentenceStructure: "Verb (send) + as + Adverb + as",
      whyCorrect:
        "An adverb is required to describe how the action 'send' should be performed.",
      whyOthersWrong: [
        "A. prompt: Adjective.",
        "C. promptness: Noun.",
        "D. prompts: Verb/Noun plural.",
      ],
      toeicTip:
        "In 'as ___ as possible', use an adjective if modifying a noun/linking verb, and an adverb if modifying an action verb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "promptly",
        ipa: "/ˈprɑːmptli/",
        pos: "adv",
        meaning: "nhanh chóng, ngay lập tức",
        example: "Please reply promptly.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q204",
    sentence:
      "A limited number of parking spaces are available for employees ______ commute from outside the city.",
    options: ["which", "whose", "who", "whom"],
    correctAnswer: 2,
    translation:
      "Có một số lượng hạn chế chỗ đậu xe dành cho nhân viên, những người đi làm từ ngoại ô thành phố.",
    explanation: {
      correctAnswer: "who",
      grammarRule: "Relative Pronouns",
      sentenceStructure: "Noun (employees) + who + Verb (commute)",
      whyCorrect:
        "'who' is used as the subject of the relative clause to replace people (employees).",
      whyOthersWrong: [
        "A. which: For things.",
        "B. whose: Indicates possession.",
        "D. whom: Used as an object.",
      ],
      toeicTip:
        "If a blank is after a person and before a verb, 'who' is the correct choice.",
    },
    category: "Grammar",
    subcategory: "Relative Clauses",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "commute",
        ipa: "/kəˈmjuːt/",
        pos: "verb",
        meaning: "đi lại (giữa nhà và nơi làm việc)",
        example: "She commutes to the city by train.",
      },
    ],
    tags: ["relative pronouns"],
  },
  {
    id: "q205",
    sentence:
      "The company's net income for the third quarter was significantly higher than ______ of the second quarter.",
    options: ["this", "that", "these", "those"],
    correctAnswer: 1,
    translation:
      "Thu nhập ròng của công ty trong quý 3 cao hơn đáng kể so với (thu nhập) của quý 2.",
    explanation: {
      correctAnswer: "that",
      grammarRule: "Pronouns of Comparison",
      sentenceStructure: "Noun (singular) + higher than + that + of",
      whyCorrect:
        "'that' replaces the singular noun phrase 'The company's net income' to avoid repetition.",
      whyOthersWrong: [
        "A. this: Not used for this type of comparison.",
        "C. these: Plural.",
        "D. those: Plural (would be used if comparing 'profits' instead of 'income').",
      ],
      toeicTip:
        "Memorize: 'that of' (singular noun replacement) and 'those of' (plural noun replacement).",
    },
    category: "Grammar",
    subcategory: "Pronouns",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "net income",
        ipa: "/net ˈɪnkʌm/",
        pos: "noun",
        meaning: "thu nhập ròng",
        example: "The company reported a high net income.",
      },
    ],
    tags: ["pronouns", "comparisons"],
  },
  {
    id: "q206",
    sentence:
      "______ the construction is completed on schedule, the grand opening will take place in December.",
    options: ["Providing", "Regardless of", "Because of", "Without"],
    correctAnswer: 0,
    translation:
      "Miễn là việc thi công hoàn thành đúng tiến độ, lễ khai trương sẽ diễn ra vào tháng 12.",
    explanation: {
      correctAnswer: "Providing",
      grammarRule: "Conditional Conjunctions",
      sentenceStructure: "Providing (that) + Clause",
      whyCorrect:
        "'Providing (that)' acts like 'If' or 'On the condition that'.",
      whyOthersWrong: [
        "B. Regardless of: Preposition, takes a noun.",
        "C. Because of: Preposition, takes a noun.",
        "D. Without: Preposition, takes a noun.",
      ],
      toeicTip:
        "Providing (that) and Provided (that) are formal synonyms for 'If'.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "grand opening",
        ipa: "/ɡrænd ˈoʊpənɪŋ/",
        pos: "noun",
        meaning: "lễ khai trương",
        example: "The grand opening is next week.",
      },
    ],
    tags: ["conjunctions", "conditionals"],
  },
  {
    id: "q207",
    sentence: "We sincerely apologize for the ______ in shipping your order.",
    options: ["delay", "delaying", "delayed", "delays"],
    correctAnswer: 0,
    translation:
      "Chúng tôi chân thành xin lỗi vì sự chậm trễ trong việc giao đơn hàng của bạn.",
    explanation: {
      correctAnswer: "delay",
      grammarRule: "Noun Form",
      sentenceStructure: "the + Noun + in",
      whyCorrect:
        "The article 'the' requires a noun. 'Delay' is the correct uncountable/singular noun here representing the situation.",
      whyOthersWrong: [
        "B. delaying: Gerund.",
        "C. delayed: Adjective/Verb.",
        "D. delays: Plural (less idiomatic here than the singular concept of 'delay').",
      ],
      toeicTip:
        "The phrase 'apologize for the delay' is a standard customer service expression.",
    },
    category: "Vocabulary",
    subcategory: "Word Form",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "sincerely",
        ipa: "/sɪnˈsɪrli/",
        pos: "adv",
        meaning: "chân thành",
        example: "We sincerely hope you enjoy your stay.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q208",
    sentence: "All employees must wash their hands ______ returning to work.",
    options: ["before", "until", "since", "while"],
    correctAnswer: 0,
    translation: "Tất cả nhân viên phải rửa tay trước khi trở lại làm việc.",
    explanation: {
      correctAnswer: "before",
      grammarRule: "Prepositions / Gerunds",
      sentenceStructure: "before + V-ing",
      whyCorrect:
        "'Before' logically dictates the necessary sequence of actions for hygiene protocols.",
      whyOthersWrong: [
        "B. until: Means up to a point, illogical.",
        "C. since: Means from a point in the past.",
        "D. while: Means simultaneously, illogical for washing hands and working at the same time.",
      ],
      toeicTip:
        "Before/After + V-ing is a very common grammatical pattern in instructions.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "return",
        ipa: "/rɪˈtɜːrn/",
        pos: "verb",
        meaning: "trở lại",
        example: "He returned to his office.",
      },
    ],
    tags: ["prepositions", "time"],
  },
  {
    id: "q209",
    sentence:
      "The new software is extremely ______, allowing users to learn it within hours.",
    options: ["intuition", "intuitively", "intuitive", "intuitiveness"],
    correctAnswer: 2,
    translation:
      "Phần mềm mới cực kỳ trực quan, cho phép người dùng học nó chỉ trong vài giờ.",
    explanation: {
      correctAnswer: "intuitive",
      grammarRule: "Adjective after Linking Verb",
      sentenceStructure: "is + Adverb + Adjective",
      whyCorrect:
        "The linking verb 'is' requires an adjective to describe the software. 'Extremely' modifies the adjective.",
      whyOthersWrong: [
        "A. intuition: Noun.",
        "B. intuitively: Adverb.",
        "D. intuitiveness: Noun.",
      ],
      toeicTip: "be + highly/extremely/very + ADJECTIVE.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "intuitive",
        ipa: "/ɪnˈtuːɪtɪv/",
        pos: "adj",
        meaning: "trực quan, dễ hiểu",
        example: "The software has an intuitive interface.",
      },
    ],
    tags: ["adjectives", "word form"],
  },
  {
    id: "q210",
    sentence:
      "Ms. Jenkins was promoted to branch manager ______ her outstanding leadership skills.",
    options: ["due to", "instead of", "as if", "rather than"],
    correctAnswer: 0,
    translation:
      "Bà Jenkins đã được thăng chức làm quản lý chi nhánh nhờ vào kỹ năng lãnh đạo xuất sắc của mình.",
    explanation: {
      correctAnswer: "due to",
      grammarRule: "Prepositions of Cause",
      sentenceStructure: "due to + Noun Phrase",
      whyCorrect:
        "'Due to' means 'because of' and connects the promotion to the reason (leadership skills).",
      whyOthersWrong: [
        "B. instead of: Means in place of.",
        "C. as if: Conjunction meaning 'like'.",
        "D. rather than: Means in preference to.",
      ],
      toeicTip: "Due to, Because of, Owing to, On account of + Noun Phrase.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "outstanding",
        ipa: "/aʊtˈstændɪŋ/",
        pos: "adj",
        meaning: "xuất sắc, nổi bật",
        example: "She did an outstanding job.",
      },
    ],
    tags: ["prepositions", "cause"],
  },
  {
    id: "q211",
    sentence:
      "All prices listed in the catalog are subject ______ change without prior notice.",
    options: ["for", "to", "with", "at"],
    correctAnswer: 1,
    translation:
      "Tất cả giá niêm yết trong danh mục có thể thay đổi mà không cần báo trước.",
    explanation: {
      correctAnswer: "to",
      grammarRule: "Collocations",
      sentenceStructure: "be subject to + Noun",
      whyCorrect:
        "'Be subject to' is a fixed phrase meaning 'likely to experience or suffer from something'.",
      whyOthersWrong: [
        "A. for: Incorrect preposition.",
        "C. with: Incorrect preposition.",
        "D. at: Incorrect preposition.",
      ],
      toeicTip: "Memorize the highly tested phrase: 'be subject to change'.",
    },
    category: "Vocabulary",
    subcategory: "Prepositions",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "catalog",
        ipa: "/ˈkætəlɔːɡ/",
        pos: "noun",
        meaning: "danh mục sản phẩm",
        example: "Please refer to our online catalog.",
      },
    ],
    tags: ["prepositions", "collocation"],
  },
  {
    id: "q212",
    sentence:
      "To secure a table, we highly recommend making a reservation at least a week in ______.",
    options: ["front", "advance", "prior", "forward"],
    correctAnswer: 1,
    translation:
      "Để đảm bảo có bàn, chúng tôi thực sự khuyên bạn nên đặt chỗ trước ít nhất một tuần.",
    explanation: {
      correctAnswer: "advance",
      grammarRule: "Collocations",
      sentenceStructure: "in advance",
      whyCorrect: "'In advance' means beforehand or ahead of time.",
      whyOthersWrong: [
        "A. front: 'in front of' means physical location.",
        "C. prior: 'prior to' means before.",
        "D. forward: 'look forward to'.",
      ],
      toeicTip:
        "'In advance' (trước) is a classic TOEIC phrase used for bookings and payments.",
    },
    category: "Vocabulary",
    subcategory: "Fixed Phrases",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "reservation",
        ipa: "/ˌrezərˈveɪʃn/",
        pos: "noun",
        meaning: "sự đặt chỗ",
        example: "I have a reservation for two.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q213",
    sentence:
      "The presentation was ______ engaging that the audience gave a standing ovation.",
    options: ["very", "too", "so", "such"],
    correctAnswer: 2,
    translation:
      "Bài thuyết trình hấp dẫn đến nỗi khán giả đã đứng dậy vỗ tay.",
    explanation: {
      correctAnswer: "so",
      grammarRule: "So ... that structure",
      sentenceStructure: "so + Adjective + that",
      whyCorrect:
        "'So' pairs with an adjective ('engaging') and 'that' to show a result.",
      whyOthersWrong: [
        "A. very: Cannot pair with 'that'.",
        "B. too: Pairs with 'to' (too engaging to ignore).",
        "D. such: Requires a noun (such an engaging presentation that...).",
      ],
      toeicTip:
        "Always look ahead in the sentence. If you see 'that' introducing a result, choose 'so' (with Adjectives) or 'such' (with Nouns).",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "engaging",
        ipa: "/ɪnˈɡeɪdʒɪŋ/",
        pos: "adj",
        meaning: "hấp dẫn, lôi cuốn",
        example: "The speaker was very engaging.",
      },
    ],
    tags: ["conjunctions", "structures"],
  },
  {
    id: "q214",
    sentence:
      "Neither the manager ______ the supervisor was available to sign the documents.",
    options: ["or", "and", "nor", "but"],
    correctAnswer: 2,
    translation:
      "Cả quản lý lẫn người giám sát đều không có mặt để ký tài liệu.",
    explanation: {
      correctAnswer: "nor",
      grammarRule: "Correlative Conjunctions",
      sentenceStructure: "Neither ... nor",
      whyCorrect:
        "'Neither' is always paired with 'nor' to mean 'không cái này cũng không cái kia'.",
      whyOthersWrong: [
        "A. or: Pairs with 'either'.",
        "B. and: Pairs with 'both'.",
        "D. but: Pairs with 'not only... but also'.",
      ],
      toeicTip: "Memorize pairs: Neither...nor, Either...or, Both...and.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "available",
        ipa: "/əˈveɪləbl/",
        pos: "adj",
        meaning: "có sẵn, rảnh rỗi",
        example: "The manager is not available right now.",
      },
    ],
    tags: ["conjunctions", "pairs"],
  },
  {
    id: "q215",
    sentence:
      "Dr. Evans is a highly ______ expert in the field of renewable energy.",
    options: ["regard", "regards", "regarding", "regarded"],
    correctAnswer: 3,
    translation:
      "Tiến sĩ Evans là một chuyên gia được đánh giá rất cao trong lĩnh vực năng lượng tái tạo.",
    explanation: {
      correctAnswer: "regarded",
      grammarRule: "Participle Adjectives",
      sentenceStructure: "highly + regarded + Noun",
      whyCorrect:
        "'Highly regarded' is a fixed collocation meaning 'greatly respected'. 'Regarded' acts as an adjective.",
      whyOthersWrong: [
        "A. regard: Base verb.",
        "B. regards: Noun / Present singular.",
        "C. regarding: Preposition (meaning 'about').",
      ],
      toeicTip:
        "Collocations with 'highly': highly regarded, highly recommended, highly qualified.",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "renewable",
        ipa: "/rɪˈnuːəbl/",
        pos: "adj",
        meaning: "có thể tái tạo",
        example: "Wind is a renewable energy source.",
      },
    ],
    tags: ["adjectives", "participles"],
  },
  {
    id: "q216",
    sentence:
      "If you have difficulty ______ the online registration form, please call our help desk.",
    options: ["access", "to access", "accessing", "accessed"],
    correctAnswer: 2,
    translation:
      "Nếu bạn gặp khó khăn trong việc truy cập biểu mẫu đăng ký trực tuyến, vui lòng gọi cho bộ phận hỗ trợ của chúng tôi.",
    explanation: {
      correctAnswer: "accessing",
      grammarRule: "Gerunds after Specific Expressions",
      sentenceStructure: "have difficulty + V-ing",
      whyCorrect:
        "The phrase 'have difficulty' (or 'have trouble') is always followed by a gerund (V-ing).",
      whyOthersWrong: [
        "A. access: Base verb.",
        "B. to access: Infinitive.",
        "D. accessed: Past tense.",
      ],
      toeicTip: "Memorize: have difficulty/trouble/a hard time + V-ing.",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "registration",
        ipa: "/ˌredʒɪˈstreɪʃn/",
        pos: "noun",
        meaning: "sự đăng ký",
        example: "Online registration is now open.",
      },
    ],
    tags: ["gerunds", "expressions"],
  },
  {
    id: "q217",
    sentence:
      "Employees can work remotely ______ long as they meet their weekly targets.",
    options: ["so", "too", "as", "very"],
    correctAnswer: 2,
    translation:
      "Nhân viên có thể làm việc từ xa miễn là họ đạt được mục tiêu hàng tuần.",
    explanation: {
      correctAnswer: "as",
      grammarRule: "Conditional Conjunctions",
      sentenceStructure: "as long as + Clause",
      whyCorrect:
        "'As long as' is a conjunction phrase meaning 'if' or 'on the condition that'.",
      whyOthersWrong: [
        "A. so: 'so long as' is possible, but 'as' is the standard pairing here.",
        "B. too: Illogical.",
        "D. very: Illogical.",
      ],
      toeicTip: "'As long as' = 'Provided that' = 'If'.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "remotely",
        ipa: "/rɪˈmoʊtli/",
        pos: "adv",
        meaning: "từ xa",
        example: "Many people now work remotely.",
      },
    ],
    tags: ["conjunctions", "conditionals"],
  },
  {
    id: "q218",
    sentence:
      "Our research department will ______ with a leading university on this new project.",
    options: ["collaborate", "collaborates", "collaborated", "collaboration"],
    correctAnswer: 0,
    translation:
      "Phòng nghiên cứu của chúng tôi sẽ hợp tác với một trường đại học hàng đầu trong dự án mới này.",
    explanation: {
      correctAnswer: "collaborate",
      grammarRule: "Modal Verbs",
      sentenceStructure: "will + base verb",
      whyCorrect: "The modal 'will' must be followed by a base verb.",
      whyOthersWrong: [
        "B. collaborates: Present singular.",
        "C. collaborated: Past tense.",
        "D. collaboration: Noun.",
      ],
      toeicTip:
        "Will, can, could, should, must + Base Verb (V0). Also memorize the collocation 'collaborate with'.",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "collaborate",
        ipa: "/kəˈlæbəreɪt/",
        pos: "verb",
        meaning: "hợp tác",
        example: "We will collaborate on the report.",
      },
    ],
    tags: ["verbs", "modals"],
  },
  {
    id: "q219",
    sentence:
      "In ______ to last year, our overseas sales have grown by twenty percent.",
    options: ["compare", "comparing", "comparison", "comparable"],
    correctAnswer: 2,
    translation:
      "So với năm ngoái, doanh số bán hàng ở nước ngoài của chúng ta đã tăng 20%.",
    explanation: {
      correctAnswer: "comparison",
      grammarRule: "Noun Phrases",
      sentenceStructure: "In comparison to/with",
      whyCorrect: "'In comparison to' is a standard prepositional phrase.",
      whyOthersWrong: [
        "A. compare: Verb.",
        "B. comparing: Gerund.",
        "D. comparable: Adjective.",
      ],
      toeicTip:
        "Fixed phrases starting with 'In' often require a noun: in addition to, in comparison to, in reference to.",
    },
    category: "Vocabulary",
    subcategory: "Prepositions",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "overseas",
        ipa: "/ˌoʊvərˈsiːz/",
        pos: "adj/adv",
        meaning: "ở nước ngoài",
        example: "We have an overseas branch.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q220",
    sentence:
      "The executive ______ office is on the top floor will be conducting the interviews.",
    options: ["who", "whom", "whose", "which"],
    correctAnswer: 2,
    translation:
      "Vị giám đốc điều hành, người có văn phòng ở tầng cao nhất, sẽ tiến hành các cuộc phỏng vấn.",
    explanation: {
      correctAnswer: "whose",
      grammarRule: "Relative Pronouns",
      sentenceStructure: "Noun (person) + whose + Noun (office)",
      whyCorrect:
        "'Whose' shows possession, linking the executive to his/her office.",
      whyOthersWrong: [
        "A. who: Requires a verb.",
        "B. whom: Requires a subject pronoun.",
        "D. which: Used for things.",
      ],
      toeicTip:
        "If you see two nouns sandwiching a blank (executive ___ office), 'whose' is almost always correct.",
    },
    category: "Grammar",
    subcategory: "Relative Clauses",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "executive",
        ipa: "/ɪɡˈzekjətɪv/",
        pos: "noun",
        meaning: "ủy viên ban quản trị, giám đốc điều hành",
        example: "The company executives had a meeting.",
      },
    ],
    tags: ["relative pronouns", "possession"],
  },
  {
    id: "q221",
    sentence:
      "Demand for electric vehicles ______ steadily over the past five years.",
    options: ["increase", "is increasing", "has increased", "will increase"],
    correctAnswer: 2,
    translation: "Nhu cầu về xe điện đã tăng đều đặn trong suốt năm năm qua.",
    explanation: {
      correctAnswer: "has increased",
      grammarRule: "Present Perfect Tense",
      sentenceStructure: "Subject + has/have + V3 + over the past + time",
      whyCorrect:
        "The phrase 'over the past five years' indicates an action starting in the past and continuing to the present, requiring the present perfect tense.",
      whyOthersWrong: [
        "A. increase: Present simple.",
        "B. is increasing: Present continuous (focuses only on right now).",
        "D. will increase: Future simple.",
      ],
      toeicTip:
        "Key time markers for Present Perfect: over the past [time], for the last [time], recently, lately, since.",
    },
    category: "Grammar",
    subcategory: "Verb Tenses",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "steadily",
        ipa: "/ˈstedəli/",
        pos: "adv",
        meaning: "đều đặn",
        example: "Prices have gone up steadily.",
      },
    ],
    tags: ["verbs", "present perfect"],
  },
  {
    id: "q222",
    sentence:
      "By the time the investors arrived, the CEO ______ the financial presentation.",
    options: ["finishes", "will finish", "had finished", "has finished"],
    correctAnswer: 2,
    translation:
      "Vào thời điểm các nhà đầu tư đến, Giám đốc điều hành đã hoàn thành bài thuyết trình tài chính.",
    explanation: {
      correctAnswer: "had finished",
      grammarRule: "Past Perfect Tense",
      sentenceStructure: "By the time + Past Simple, Past Perfect",
      whyCorrect:
        "The past perfect (had + V3) is used because the action of finishing occurred before another past action (arrived).",
      whyOthersWrong: [
        "A. finishes: Present.",
        "B. will finish: Future.",
        "D. has finished: Present perfect.",
      ],
      toeicTip:
        "Structure 'By the time + S + V(past), S + had + V3' is extremely common in TOEIC.",
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
    id: "q223",
    sentence:
      "We look forward to ______ from you regarding the open position in our IT department.",
    options: ["hear", "hearing", "hears", "heard"],
    correctAnswer: 1,
    translation:
      "Chúng tôi mong nhận được hồi âm từ bạn liên quan đến vị trí đang tuyển trong bộ phận CNTT của chúng tôi.",
    explanation: {
      correctAnswer: "hearing",
      grammarRule: "Prepositions followed by Gerunds",
      sentenceStructure: "look forward to + V-ing",
      whyCorrect:
        "In the phrase 'look forward to', 'to' is a preposition. Therefore, it must be followed by a noun or a gerund (V-ing).",
      whyOthersWrong: [
        "A. hear: Base verb.",
        "C. hears: Present singular.",
        "D. heard: Past tense.",
      ],
      toeicTip: "Look forward to + V-ing. Never use the base verb here.",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "regarding",
        ipa: "/rɪˈɡɑːrdɪŋ/",
        pos: "prep",
        meaning: "liên quan đến",
        example: "I am calling regarding your recent order.",
      },
    ],
    tags: ["gerunds", "prepositions"],
  },
  {
    id: "q224",
    sentence:
      "The new manufacturing equipment is capable of ______ up to 10,000 units per hour.",
    options: ["produce", "produces", "produced", "producing"],
    correctAnswer: 3,
    translation:
      "Thiết bị sản xuất mới có khả năng sản xuất lên đến 10.000 đơn vị mỗi giờ.",
    explanation: {
      correctAnswer: "producing",
      grammarRule: "Prepositions followed by Gerunds",
      sentenceStructure: "capable of + V-ing",
      whyCorrect:
        "The preposition 'of' must be followed by a noun or gerund (V-ing).",
      whyOthersWrong: [
        "A. produce: Base verb.",
        "B. produces: 3rd person verb.",
        "C. produced: Past tense.",
      ],
      toeicTip: "Be capable of + V-ing. (Different from: Be able to + V0).",
    },
    category: "Grammar",
    subcategory: "Gerunds",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "capable",
        ipa: "/ˈkeɪpəbl/",
        pos: "adj",
        meaning: "có khả năng",
        example: "She is capable of leading the team.",
      },
    ],
    tags: ["gerunds", "prepositions"],
  },
  {
    id: "q225",
    sentence:
      "The company has reported record profits for the third ______ year.",
    options: ["consecutive", "consecutively", "consequence", "consequent"],
    correctAnswer: 0,
    translation:
      "Công ty đã báo cáo lợi nhuận kỷ lục trong năm thứ ba liên tiếp.",
    explanation: {
      correctAnswer: "consecutive",
      grammarRule: "Adjective modifying Noun",
      sentenceStructure: "Article + Adjective + Noun",
      whyCorrect:
        "An adjective is needed to describe 'year'. 'Consecutive' means following continuously.",
      whyOthersWrong: [
        "B. consecutively: Adverb.",
        "C. consequence: Noun.",
        "D. consequent: Adjective (means 'resulting', illogical here).",
      ],
      toeicTip:
        "'For the third consecutive year' (trong năm thứ 3 liên tiếp) is a very common business expression.",
    },
    category: "Vocabulary",
    subcategory: "Word Form",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "consecutive",
        ipa: "/kənˈsekjətɪv/",
        pos: "adj",
        meaning: "liên tiếp",
        example: "It rained for five consecutive days.",
      },
    ],
    tags: ["adjectives", "business"],
  },
  {
    id: "q226",
    sentence:
      "Only employees who have worked here for over a year are ______ for the extra vacation days.",
    options: ["allowed", "eligible", "qualified", "capable"],
    correctAnswer: 1,
    translation:
      "Chỉ những nhân viên đã làm việc ở đây hơn một năm mới đủ điều kiện nhận thêm ngày nghỉ phép.",
    explanation: {
      correctAnswer: "eligible",
      grammarRule: "Adjective + Preposition Collocations",
      sentenceStructure: "be eligible + for",
      whyCorrect:
        "'Eligible for' means satisfying the appropriate conditions to get something.",
      whyOthersWrong: [
        "A. allowed: Takes 'to + V' (allowed to take).",
        "C. qualified: Usually takes 'for + a position/job', but 'eligible for benefits/vacation' is the standard HR term.",
        "D. capable: Takes 'of + V-ing'.",
      ],
      toeicTip:
        "Memorize: eligible for (đủ điều kiện cho cái gì), eligible to V (đủ điều kiện làm gì).",
    },
    category: "Vocabulary",
    subcategory: "Collocations",
    type: "vocabulary",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "eligible",
        ipa: "/ˈelɪdʒəbl/",
        pos: "adj",
        meaning: "đủ điều kiện",
        example: "You are eligible for a promotion.",
      },
    ],
    tags: ["adjectives", "collocation"],
  },
  {
    id: "q227",
    sentence:
      "All attendees are requested ______ their mobile phones during the keynote speech.",
    options: ["turn off", "turning off", "to turn off", "turned off"],
    correctAnswer: 2,
    translation:
      "Tất cả những người tham dự được yêu cầu tắt điện thoại di động trong suốt bài phát biểu chính.",
    explanation: {
      correctAnswer: "to turn off",
      grammarRule: "Passive Voice + Infinitive",
      sentenceStructure: "be requested + to + base verb",
      whyCorrect:
        "The passive structure 'be requested/required/asked' is followed by a 'to-infinitive'.",
      whyOthersWrong: [
        "A. turn off: Base verb.",
        "B. turning off: Gerund.",
        "D. turned off: Past participle.",
      ],
      toeicTip: "Are required to V / are requested to V / are advised to V.",
    },
    category: "Grammar",
    subcategory: "Infinitives",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "attendee",
        ipa: "/əˌtenˈdiː/",
        pos: "noun",
        meaning: "người tham dự",
        example: "The conference had over 500 attendees.",
      },
    ],
    tags: ["infinitives", "passive"],
  },
  {
    id: "q228",
    sentence:
      "The new bridge is currently under ______, and will open to the public next spring.",
    options: ["construct", "constructive", "construction", "constructor"],
    correctAnswer: 2,
    translation:
      "Cây cầu mới hiện đang được xây dựng, và sẽ mở cửa cho công chúng vào mùa xuân năm sau.",
    explanation: {
      correctAnswer: "construction",
      grammarRule: "Collocations",
      sentenceStructure: "under + Noun",
      whyCorrect:
        "'Under construction' is a fixed phrase meaning currently being built.",
      whyOthersWrong: [
        "A. construct: Verb.",
        "B. constructive: Adjective.",
        "D. constructor: Noun (person).",
      ],
      toeicTip:
        "Memorize phrases with 'under': under construction, under pressure, under consideration, under warranty.",
    },
    category: "Vocabulary",
    subcategory: "Fixed Phrases",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "construction",
        ipa: "/kənˈstrʌkʃn/",
        pos: "noun",
        meaning: "sự xây dựng",
        example: "The website is under construction.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q229",
    sentence:
      "The quality of the materials used in our products is ______ high.",
    options: ["consist", "consistent", "consistently", "consistency"],
    correctAnswer: 2,
    translation:
      "Chất lượng vật liệu được sử dụng trong các sản phẩm của chúng tôi luôn nhất quán ở mức cao.",
    explanation: {
      correctAnswer: "consistently",
      grammarRule: "Adverb modifying Adjective",
      sentenceStructure: "be (is) + Adverb + Adjective (high)",
      whyCorrect: "An adverb is required to modify the adjective 'high'.",
      whyOthersWrong: [
        "A. consist: Verb.",
        "B. consistent: Adjective.",
        "D. consistency: Noun.",
      ],
      toeicTip:
        "Adverb + Adjective is a very common TOEIC combination (e.g., extremely difficult, consistently high, surprisingly affordable).",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "consistently",
        ipa: "/kənˈsɪstəntli/",
        pos: "adv",
        meaning: "nhất quán, liên tục",
        example: "He has consistently achieved his targets.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q230",
    sentence:
      "The shipment will not be dispatched ______ full payment is received.",
    options: ["unless", "if", "because", "without"],
    correctAnswer: 0,
    translation:
      "Lô hàng sẽ không được gửi đi trừ khi nhận được thanh toán đầy đủ.",
    explanation: {
      correctAnswer: "unless",
      grammarRule: "Conditional Conjunctions",
      sentenceStructure: "Negative Main Clause + unless + Affirmative Clause",
      whyCorrect:
        "'Unless' means 'if not' (if full payment is not received). It connects a negative consequence with a necessary condition.",
      whyOthersWrong: [
        "B. if: Illogical meaning (will not be dispatched IF payment is received).",
        "C. because: Illogical cause.",
        "D. without: Preposition (requires a noun, not a clause).",
      ],
      toeicTip:
        "If the main clause is negative (will not, cannot), 'unless' is very often the correct answer.",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "dispatch",
        ipa: "/dɪˈspætʃ/",
        pos: "verb",
        meaning: "gửi đi, phái đi",
        example: "The goods were dispatched yesterday.",
      },
    ],
    tags: ["conjunctions", "conditionals"],
  },
  {
    id: "q231",
    sentence:
      "The new software update makes it ______ for users to synchronize data across multiple devices.",
    options: ["possible", "possibly", "possibility", "possibilities"],
    correctAnswer: 0,
    translation:
      "Bản cập nhật phần mềm mới giúp người dùng có thể đồng bộ hóa dữ liệu trên nhiều thiết bị.",
    explanation: {
      correctAnswer: "possible",
      grammarRule: "Make + it + Adjective",
      sentenceStructure: "make + it + Adjective + for + Object + to V",
      whyCorrect:
        "The structure 'make it [adjective]' uses an adjective to describe the state created. 'Possible' is an adjective.",
      whyOthersWrong: [
        "B. possibly: Adverb.",
        "C. possibility: Noun.",
        "D. possibilities: Plural noun.",
      ],
      toeicTip:
        "Memorize structural patterns with 'make': make it possible, make it easy, make it clear.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "synchronize",
        ipa: "/ˈsɪŋkrənaɪz/",
        pos: "verb",
        meaning: "đồng bộ hóa",
        example: "You can synchronize your phone with your computer.",
      },
    ],
    tags: ["adjectives", "structures"],
  },
  {
    id: "q232",
    sentence:
      "The human resources manager is responsible ______ recruiting and training new employees.",
    options: ["to", "for", "with", "about"],
    correctAnswer: 1,
    translation:
      "Giám đốc nhân sự chịu trách nhiệm tuyển dụng và đào tạo nhân viên mới.",
    explanation: {
      correctAnswer: "for",
      grammarRule: "Adjective + Preposition Collocations",
      sentenceStructure: "responsible + for + V-ing",
      whyCorrect:
        "The adjective 'responsible' is followed by the preposition 'for'.",
      whyOthersWrong: [
        "A. to: Incorrect (used with 'responsible to someone').",
        "C. with: Incorrect.",
        "D. about: Incorrect.",
      ],
      toeicTip:
        "Always memorize adjectives with their prepositions: responsible for, aware of, interested in, satisfied with.",
    },
    category: "Vocabulary",
    subcategory: "Prepositions",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 400,
    vocabulary: [
      {
        word: "recruit",
        ipa: "/rɪˈkruːt/",
        pos: "verb",
        meaning: "tuyển dụng",
        example: "They are recruiting new staff.",
      },
    ],
    tags: ["prepositions", "collocation"],
  },
  {
    id: "q233",
    sentence:
      "The recent drop in oil prices will undoubtedly have a significant ______ on the global economy.",
    options: ["impact", "impactful", "impacted", "impacting"],
    correctAnswer: 0,
    translation:
      "Sự sụt giảm giá dầu gần đây chắc chắn sẽ có tác động đáng kể đến nền kinh tế toàn cầu.",
    explanation: {
      correctAnswer: "impact",
      grammarRule: "Noun Form",
      sentenceStructure: "Article (a) + Adjective (significant) + Noun",
      whyCorrect:
        "An article and adjective precede the blank, meaning a noun is required. 'Impact' is the noun form.",
      whyOthersWrong: [
        "B. impactful: Adjective.",
        "C. impacted: Past participle.",
        "D. impacting: Present participle.",
      ],
      toeicTip:
        "'Have an impact on' and 'Have an effect on' are essential TOEIC collocations.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "undoubtedly",
        ipa: "/ʌnˈdaʊtɪdli/",
        pos: "adv",
        meaning: "chắc chắn, không nghi ngờ gì",
        example: "She is undoubtedly the best candidate.",
      },
    ],
    tags: ["nouns", "collocation"],
  },
  {
    id: "q234",
    sentence:
      "______ the severe snowstorm, all flights departing from JFK Airport have been delayed.",
    options: ["Although", "Because", "Due to", "Even though"],
    correctAnswer: 2,
    translation:
      "Do trận bão tuyết nghiêm trọng, tất cả các chuyến bay khởi hành từ Sân bay JFK đã bị hoãn.",
    explanation: {
      correctAnswer: "Due to",
      grammarRule: "Prepositions of Cause",
      sentenceStructure: "Due to + Noun Phrase",
      whyCorrect:
        "'Due to' means 'because of' and is followed by a noun phrase ('the severe snowstorm').",
      whyOthersWrong: [
        "A. Although: Requires a clause (Subject + Verb).",
        "B. Because: Requires a clause (Because of takes a noun phrase).",
        "D. Even though: Requires a clause.",
      ],
      toeicTip: "Due to / Because of / Owing to + Noun Phrase.",
    },
    category: "Grammar",
    subcategory: "Prepositions",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "severe",
        ipa: "/sɪˈvɪr/",
        pos: "adj",
        meaning: "nghiêm trọng",
        example: "The storm caused severe damage.",
      },
    ],
    tags: ["prepositions", "cause"],
  },
  {
    id: "q235",
    sentence:
      "Employees cannot access the sensitive financial records without prior ______ from the CEO.",
    options: ["authorize", "authorizes", "authorization", "authorized"],
    correctAnswer: 2,
    translation:
      "Nhân viên không thể truy cập hồ sơ tài chính nhạy cảm mà không có sự ủy quyền trước từ Giám đốc điều hành.",
    explanation: {
      correctAnswer: "authorization",
      grammarRule: "Noun Form",
      sentenceStructure: "Adjective (prior) + Noun",
      whyCorrect: "The adjective 'prior' requires a noun to follow it.",
      whyOthersWrong: [
        "A. authorize: Verb.",
        "B. authorizes: Verb.",
        "D. authorized: Adjective / Past Participle.",
      ],
      toeicTip:
        "Common corporate collocations: prior authorization, prior approval, prior notice.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "sensitive",
        ipa: "/ˈsensətɪv/",
        pos: "adj",
        meaning: "nhạy cảm (bảo mật)",
        example: "This document contains sensitive information.",
      },
    ],
    tags: ["nouns", "word form"],
  },
  {
    id: "q236",
    sentence:
      "The supervisor will assign the complex project to ______ is most qualified for the task.",
    options: ["who", "whom", "whoever", "whomever"],
    correctAnswer: 2,
    translation:
      "Người giám sát sẽ giao dự án phức tạp cho bất cứ ai đủ tiêu chuẩn nhất cho nhiệm vụ này.",
    explanation: {
      correctAnswer: "whoever",
      grammarRule: "Noun Clauses",
      sentenceStructure: "Prep (to) + whoever + Verb (is)",
      whyCorrect:
        "While 'to' is a preposition (usually taking 'whom'), the entire noun clause 'whoever is most qualified' acts as the object. Inside that clause, 'whoever' is the subject of the verb 'is'.",
      whyOthersWrong: [
        "A. who: Used for specific people, not 'anyone who'.",
        "B. whom: Object pronoun (but we need a subject for 'is').",
        "D. whomever: Object pronoun.",
      ],
      toeicTip:
        "If the word after the blank is a verb (e.g., 'is'), you need a subject pronoun (whoever). If it's a noun/pronoun (e.g., 'he'), use 'whomever'.",
    },
    category: "Grammar",
    subcategory: "Pronouns",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "assign",
        ipa: "/əˈsaɪn/",
        pos: "verb",
        meaning: "phân công, giao (việc)",
        example: "The teacher assigned homework to the students.",
      },
    ],
    tags: ["pronouns", "noun clauses"],
  },
  {
    id: "q237",
    sentence:
      "The meeting will begin ______ after all the board members have arrived.",
    options: ["short", "shortly", "shorten", "shortness"],
    correctAnswer: 1,
    translation:
      "Cuộc họp sẽ bắt đầu ngay sau khi tất cả các thành viên hội đồng quản trị đã đến.",
    explanation: {
      correctAnswer: "shortly",
      grammarRule: "Adverb Placement",
      sentenceStructure: "Adverb + Preposition/Conjunction (after)",
      whyCorrect:
        "'Shortly' means 'soon'. 'Shortly after' is a fixed adverbial phrase meaning 'immediately after'.",
      whyOthersWrong: [
        "A. short: Adjective.",
        "C. shorten: Verb.",
        "D. shortness: Noun.",
      ],
      toeicTip: "Memorize: shortly after, immediately after, right after.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "board member",
        ipa: "/bɔːrd ˈmembər/",
        pos: "noun",
        meaning: "thành viên hội đồng quản trị",
        example: "The board members voted on the proposal.",
      },
    ],
    tags: ["adverbs", "collocation"],
  },
  {
    id: "q238",
    sentence:
      "The safety inspector will ______ examine the machinery to ensure compliance with regulations.",
    options: ["thorough", "thoroughly", "thoroughness", "more thorough"],
    correctAnswer: 1,
    translation:
      "Thanh tra an toàn sẽ kiểm tra kỹ lưỡng máy móc để đảm bảo tuân thủ các quy định.",
    explanation: {
      correctAnswer: "thoroughly",
      grammarRule: "Adverbs modifying verbs",
      sentenceStructure: "Auxiliary (will) + Adverb + Main Verb (examine)",
      whyCorrect:
        "An adverb is required between the auxiliary verb and the main verb to modify how the action is performed.",
      whyOthersWrong: [
        "A. thorough: Adjective.",
        "C. thoroughness: Noun.",
        "D. more thorough: Comparative adjective.",
      ],
      toeicTip: "Auxiliary Verb + ADVERB + Main Verb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "compliance",
        ipa: "/kəmˈplaɪəns/",
        pos: "noun",
        meaning: "sự tuân thủ",
        example: "The company acts in compliance with the law.",
      },
    ],
    tags: ["adverbs", "word form"],
  },
  {
    id: "q239",
    sentence:
      "We urge all employees to take ______ of the free wellness programs offered by the company.",
    options: ["benefit", "profit", "advantage", "value"],
    correctAnswer: 2,
    translation:
      "Chúng tôi kêu gọi tất cả nhân viên tận dụng các chương trình chăm sóc sức khỏe miễn phí do công ty cung cấp.",
    explanation: {
      correctAnswer: "advantage",
      grammarRule: "Collocations",
      sentenceStructure: "take + advantage + of",
      whyCorrect:
        "'Take advantage of' is a fixed idiom meaning to make good use of an opportunity.",
      whyOthersWrong: [
        "A. benefit: Takes 'from' (benefit from).",
        "B. profit: Takes 'from' (profit from).",
        "D. value: Incorrect collocation.",
      ],
      toeicTip:
        "Memorize: take advantage of (tận dụng). It's a very high-frequency phrase.",
    },
    category: "Vocabulary",
    subcategory: "Idioms / Collocations",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 500,
    vocabulary: [
      {
        word: "wellness",
        ipa: "/ˈwelnəs/",
        pos: "noun",
        meaning: "sự khỏe mạnh, chăm sóc sức khỏe",
        example: "The company promotes employee wellness.",
      },
    ],
    tags: ["collocations", "idioms"],
  },
  {
    id: "q240",
    sentence:
      "The newly hired analysts are ______ to complete the intensive training course by next Friday.",
    options: ["expect", "expects", "expecting", "expected"],
    correctAnswer: 3,
    translation:
      "Các nhà phân tích mới được tuyển dụng dự kiến sẽ hoàn thành khóa đào tạo chuyên sâu trước thứ Sáu tuần sau.",
    explanation: {
      correctAnswer: "expected",
      grammarRule: "Passive Voice + Infinitive",
      sentenceStructure: "be + past participle (expected) + to V",
      whyCorrect:
        "The passive construction 'are expected to' means they are required or scheduled to do something.",
      whyOthersWrong: [
        "A. expect: Base verb.",
        "B. expects: Singular verb.",
        "C. expecting: Active voice (meaning they are anticipating something, which doesn't fit the 'by next Friday' deadline context well).",
      ],
      toeicTip: "be expected to / be scheduled to / be supposed to + Verb.",
    },
    category: "Grammar",
    subcategory: "Passive Voice",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "intensive",
        ipa: "/ɪnˈtensɪv/",
        pos: "adj",
        meaning: "chuyên sâu, cường độ cao",
        example: "It was an intensive three-day course.",
      },
    ],
    tags: ["passive", "infinitives"],
  },
  {
    id: "q241",
    sentence:
      "The two tech giants have signed a ______ beneficial agreement to share their patents.",
    options: ["mutual", "mutually", "mutuals", "mutuality"],
    correctAnswer: 1,
    translation:
      "Hai gã khổng lồ công nghệ đã ký kết một thỏa thuận cùng có lợi để chia sẻ bằng sáng chế của họ.",
    explanation: {
      correctAnswer: "mutually",
      grammarRule: "Adverb modifying Adjective",
      sentenceStructure: "Adverb + Adjective (beneficial) + Noun",
      whyCorrect: "An adverb is needed to modify the adjective 'beneficial'.",
      whyOthersWrong: [
        "A. mutual: Adjective.",
        "C. mutuals: Noun.",
        "D. mutuality: Noun.",
      ],
      toeicTip:
        "The phrase 'mutually beneficial' (cùng có lợi) is heavily tested in business English contexts.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "patent",
        ipa: "/ˈpætnt/",
        pos: "noun",
        meaning: "bằng sáng chế",
        example: "The company filed a patent for the new device.",
      },
    ],
    tags: ["adverbs", "collocation"],
  },
  {
    id: "q242",
    sentence:
      "In the ______ of a fire, please use the stairs and proceed to the nearest exit.",
    options: ["event", "case", "situation", "time"],
    correctAnswer: 0,
    translation:
      "Trong trường hợp hỏa hoạn, vui lòng sử dụng cầu thang bộ và tiến đến lối ra gần nhất.",
    explanation: {
      correctAnswer: "event",
      grammarRule: "Fixed Phrases",
      sentenceStructure: "In the event of + Noun",
      whyCorrect:
        "'In the event of' is a formal phrase meaning 'if something happens'.",
      whyOthersWrong: [
        "B. case: Used as 'in case of', not 'in the case of a fire' typically.",
        "C. situation: Not part of the standard emergency idiom.",
        "D. time: Incorrect.",
      ],
      toeicTip:
        "Memorize emergency phrases: in the event of an emergency, in case of fire.",
    },
    category: "Vocabulary",
    subcategory: "Fixed Phrases",
    type: "vocabulary",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "proceed",
        ipa: "/proʊˈsiːd/",
        pos: "verb",
        meaning: "tiến lên, tiếp tục",
        example: "Please proceed to the boarding gate.",
      },
    ],
    tags: ["nouns", "idioms"],
  },
  {
    id: "q243",
    sentence:
      "The new sales representative is not yet accustomed ______ the company's fast-paced environment.",
    options: ["with", "for", "in", "to"],
    correctAnswer: 3,
    translation:
      "Đại diện bán hàng mới vẫn chưa quen với môi trường nhịp độ nhanh của công ty.",
    explanation: {
      correctAnswer: "to",
      grammarRule: "Adjective + Preposition Collocations",
      sentenceStructure: "be accustomed + to",
      whyCorrect:
        "The adjective 'accustomed' is always followed by the preposition 'to'.",
      whyOthersWrong: [
        "A. with: Incorrect.",
        "B. for: Incorrect.",
        "C. in: Incorrect.",
      ],
      toeicTip:
        "Memorize: be accustomed to + Noun / V-ing (quen với cái gì / việc gì).",
    },
    category: "Vocabulary",
    subcategory: "Prepositions",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 550,
    vocabulary: [
      {
        word: "accustomed",
        ipa: "/əˈkʌstəmd/",
        pos: "adj",
        meaning: "quen với",
        example: "I am not accustomed to waking up so early.",
      },
    ],
    tags: ["prepositions", "collocation"],
  },
  {
    id: "q244",
    sentence:
      "The contract was signed on Monday; ______, production began on Tuesday morning.",
    options: ["therefore", "subsequently", "instead", "nevertheless"],
    correctAnswer: 1,
    translation:
      "Hợp đồng được ký vào thứ Hai; ngay sau đó, quá trình sản xuất đã bắt đầu vào sáng thứ Ba.",
    explanation: {
      correctAnswer: "subsequently",
      grammarRule: "Conjunctive Adverbs",
      sentenceStructure: "Clause 1; subsequently, Clause 2",
      whyCorrect:
        "'Subsequently' means 'happening after something else'. It shows the sequence of events (Monday -> Tuesday).",
      whyOthersWrong: [
        "A. therefore: Shows result (doesn't emphasize the time sequence).",
        "C. instead: Shows alternative.",
        "D. nevertheless: Shows contrast.",
      ],
      toeicTip:
        "'Subsequently' is a high-level time transition word meaning 'later' or 'afterward'.",
    },
    category: "Grammar",
    subcategory: "Transitions",
    type: "grammar",
    difficulty: "advanced",
    toeicLevel: 700,
    vocabulary: [
      {
        word: "subsequently",
        ipa: "/ˈsʌbsɪkwəntli/",
        pos: "adv",
        meaning: "rồi sau đó",
        example: "He was subsequently fired from the job.",
      },
    ],
    tags: ["transitions", "time"],
  },
  {
    id: "q245",
    sentence:
      "All local businesses must ______ with the new environmental regulations by the end of the year.",
    options: ["conform", "adhere", "comply", "follow"],
    correctAnswer: 2,
    translation:
      "Tất cả các doanh nghiệp địa phương phải tuân thủ các quy định môi trường mới vào cuối năm nay.",
    explanation: {
      correctAnswer: "comply",
      grammarRule: "Vocabulary - Prepositional Verbs",
      sentenceStructure: "comply + with",
      whyCorrect: "'Comply' pairs with 'with' to mean obeying a rule or law.",
      whyOthersWrong: [
        "A. conform: Pairs with 'to'.",
        "B. adhere: Pairs with 'to'.",
        "D. follow: A transitive verb, takes no preposition (follow the rules).",
      ],
      toeicTip:
        "Memorize rule-following verbs: comply WITH, adhere TO, conform TO, follow/obey (NO preposition).",
    },
    category: "Vocabulary",
    subcategory: "Prepositional Verbs",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "comply",
        ipa: "/kəmˈplaɪ/",
        pos: "verb",
        meaning: "tuân thủ",
        example: "Failure to comply with the rules will result in a fine.",
      },
    ],
    tags: ["verbs", "collocation"],
  },
  {
    id: "q246",
    sentence:
      "The HR department plans to ______ a new software system to track employee attendance.",
    options: ["implement", "implementing", "implementation", "implemented"],
    correctAnswer: 0,
    translation:
      "Phòng nhân sự dự định triển khai một hệ thống phần mềm mới để theo dõi sự tham gia của nhân viên.",
    explanation: {
      correctAnswer: "implement",
      grammarRule: "Infinitives",
      sentenceStructure: "plan + to + base verb",
      whyCorrect:
        "The verb 'plan' is followed by a 'to-infinitive', requiring the base verb form.",
      whyOthersWrong: [
        "B. implementing: Gerund.",
        "C. implementation: Noun.",
        "D. implemented: Past tense.",
      ],
      toeicTip: "Plan to V, Intend to V, Decide to V, Hope to V.",
    },
    category: "Grammar",
    subcategory: "Infinitives",
    type: "grammar",
    difficulty: "elementary",
    toeicLevel: 450,
    vocabulary: [
      {
        word: "implement",
        ipa: "/ˈɪmplɪment/",
        pos: "verb",
        meaning: "triển khai, thực hiện",
        example: "The changes will be implemented next month.",
      },
    ],
    tags: ["verbs", "infinitives"],
  },
  {
    id: "q247",
    sentence:
      "______ that the merger is complete, the two companies will combine their marketing teams.",
    options: ["Because of", "Now", "Despite", "Although"],
    correctAnswer: 1,
    translation:
      "Bởi vì bây giờ việc sáp nhập đã hoàn tất, hai công ty sẽ kết hợp các đội ngũ tiếp thị của họ lại.",
    explanation: {
      correctAnswer: "Now",
      grammarRule: "Conjunctions of Reason/Time",
      sentenceStructure: "Now that + Clause",
      whyCorrect: "'Now that' is a conjunction phrase meaning 'because now'.",
      whyOthersWrong: [
        "A. Because of: Followed by a noun.",
        "C. Despite: Followed by a noun.",
        "D. Although: Means 'mặc dù', illogical context.",
      ],
      toeicTip:
        "Memorize: 'Now that' = 'Because' (used for present/recent changes).",
    },
    category: "Grammar",
    subcategory: "Conjunctions",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "combine",
        ipa: "/kəmˈbaɪn/",
        pos: "verb",
        meaning: "kết hợp",
        example: "We will combine our efforts.",
      },
    ],
    tags: ["conjunctions", "reason"],
  },
  {
    id: "q248",
    sentence:
      "Employees are asked to resolve minor disputes ______ means of direct communication.",
    options: ["by", "in", "with", "on"],
    correctAnswer: 0,
    translation:
      "Nhân viên được yêu cầu giải quyết các tranh chấp nhỏ bằng cách thức giao tiếp trực tiếp.",
    explanation: {
      correctAnswer: "by",
      grammarRule: "Fixed Prepositional Phrases",
      sentenceStructure: "by means of",
      whyCorrect:
        "'By means of' is a formal phrase meaning 'using a particular method'.",
      whyOthersWrong: [
        "B. in: Incorrect collocation.",
        "C. with: Incorrect collocation.",
        "D. on: Incorrect collocation.",
      ],
      toeicTip:
        "Memorize formal phrases: by means of, in terms of, on behalf of.",
    },
    category: "Vocabulary",
    subcategory: "Prepositions",
    type: "vocabulary",
    difficulty: "advanced",
    toeicLevel: 750,
    vocabulary: [
      {
        word: "dispute",
        ipa: "/dɪˈspjuːt/",
        pos: "noun",
        meaning: "tranh chấp",
        example: "The union is in a dispute with management.",
      },
    ],
    tags: ["prepositions", "collocation"],
  },
  {
    id: "q249",
    sentence:
      "The company's quarterly revenue dropped much more ______ than analysts had predicted.",
    options: ["significant", "significance", "significantly", "signify"],
    correctAnswer: 2,
    translation:
      "Doanh thu hàng quý của công ty giảm mạnh hơn nhiều so với dự đoán của các nhà phân tích.",
    explanation: {
      correctAnswer: "significantly",
      grammarRule: "Adverbs in Comparatives",
      sentenceStructure: "Verb (dropped) + more + Adverb + than",
      whyCorrect: "An adverb is needed to modify the verb 'dropped'.",
      whyOthersWrong: [
        "A. significant: Adjective.",
        "B. significance: Noun.",
        "D. signify: Verb.",
      ],
      toeicTip:
        "Even in comparative structures (more ___ than), always look back at the verb to decide between an adjective and an adverb.",
    },
    category: "Grammar",
    subcategory: "Word Form",
    type: "grammar",
    difficulty: "intermediate",
    toeicLevel: 600,
    vocabulary: [
      {
        word: "predict",
        ipa: "/prɪˈdɪkt/",
        pos: "verb",
        meaning: "dự đoán",
        example: "It is hard to predict the future.",
      },
    ],
    tags: ["adverbs", "comparisons"],
  },
  {
    id: "q250",
    sentence:
      "All laboratory staff are strictly required to ______ to safety guidelines at all times.",
    options: ["adhere", "comply", "follow", "observe"],
    correctAnswer: 0,
    translation:
      "Tất cả nhân viên phòng thí nghiệm được yêu cầu nghiêm ngặt tuân thủ các hướng dẫn an toàn vào mọi lúc.",
    explanation: {
      correctAnswer: "adhere",
      grammarRule: "Vocabulary - Prepositional Verbs",
      sentenceStructure: "adhere + to",
      whyCorrect:
        "'Adhere' pairs with the preposition 'to', meaning to follow a rule strictly.",
      whyOthersWrong: [
        "B. comply: Takes 'with'.",
        "C. follow: Takes no preposition (follow safety guidelines).",
        "D. observe: Takes no preposition.",
      ],
      toeicTip:
        "Memorize rule-following verbs and their prepositions: adhere to, conform to, comply with.",
    },
    category: "Vocabulary",
    subcategory: "Prepositional Verbs",
    type: "vocabulary",
    difficulty: "intermediate",
    toeicLevel: 650,
    vocabulary: [
      {
        word: "guideline",
        ipa: "/ˈɡaɪdlaɪn/",
        pos: "noun",
        meaning: "hướng dẫn, nguyên tắc chỉ đạo",
        example: "Please follow the strict guidelines.",
      },
    ],
    tags: ["verbs", "collocation"],
  },
];
