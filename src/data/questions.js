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
];
