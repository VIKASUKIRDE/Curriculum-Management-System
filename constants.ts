
import { UserRole, TimetableEntry } from './types';

export const APP_NAME = "Curriculum Management System";

export const USER_ROLES_CONFIG = {
  [UserRole.Admin]: {
    name: "Admin",
    homePath: "/admin/dashboard",
  },
  [UserRole.Teacher]: {
    name: "Teacher",
    homePath: "/teacher/dashboard",
  },
  [UserRole.Student]: {
    name: "Student",
    homePath: "/student/dashboard",
  },
};

export const MOCK_API_DELAY = 500; // ms

export const DAYS_OF_WEEK: TimetableEntry['dayOfWeek'][] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const DEFAULT_TIME_SLOTS: string[] = [
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00", // Lunch Break (can be marked or skipped in UI)
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
];

export const CLASS_YEAR_OPTIONS: string[] = [
    "BAMS Year 1",
    "BAMS Year 2",
    "BAMS Year 3",
    "BAMS Year 4",
    "BHMS Year 1",
    "BHMS Year 2",
    "Engineering CSE Year 1",
    "Engineering ME Year 1",
    "Engineering CSE Year 2",
    "Engineering ME Year 2",
    "Polytechnic Civil Year 1",
    "Polytechnic EE Year 1",
    "School Class 9A",
    "School Class 10B",
];

export const ACADEMIC_YEAR_OPTIONS: number[] = [1, 2, 3, 4, 5]; // Max 5 years for a course by default

export const OTHER_OPTION = "Other...";

export const TEACHER_ACTIVITY_OPTIONS: string[] = [
  "Lecture",
  "PPT Presentation",
  "Demonstration",
  "Group Discussion",
  "Interactive Q&A",
  "Projector/Media Usage",
  "Whiteboard/Chalkboard",
  OTHER_OPTION,
];

export const LEARNER_ACTIVITY_OPTIONS: string[] = [
  "In Class (Note-taking)",
  "In Class (Asking Questions)",
  "In Class (Participating in Discussion)",
  "In Class (Group Work/Activity)",
  "In Class (Problem Solving)",
  "Beyond Class (Reading Assignment)",
  "Beyond Class (Homework/Problem Set)",
  "Beyond Class (Research)",
  OTHER_OPTION,
];

export const DURATION_OPTIONS: string[] = [
  "5 mins",
  "10 mins",
  "15 mins",
  "20 mins",
  "25 mins",
  "30 mins",
  "45 mins",
  "1 hour",
  OTHER_OPTION,
];

export const FORMATIVE_ASSESSMENT_OPTIONS: string[] = [
  "MCQ (Multiple Choice Questions)",
  "SAQ (Short Answer Questions)",
  "Oral Questioning (Viva Voce)",
  "Practical Demonstration/Skill Check",
  "Quiz",
  "Observation of Activity",
  "Think-Pair-Share",
  "One-Minute Paper",
  OTHER_OPTION,
];

// Samples for Lesson Plan Preliminaries
export const SET_INDUCTION_SAMPLES: string[] = [
  "Begin with a recap of [Previous Topic] (5 mins).",
  "Ask students: 'What do you already know about [Topic Name]?' (5 mins).",
  "Show a short engaging video related to [Topic Name] (5-7 mins).",
  "Present a real-world problem that [Topic Name] helps solve (10 mins).",
  "Have you seen the study material for [Topic Name]? Let's discuss a key image/diagram (10 mins).",
  "Quick brainstorming session on keywords related to [Topic Name] (5 mins)."
];

export const ENTRY_BEHAVIOR_SAMPLES: string[] = [
  "Students are expected to have completed the reading assignment on [Previous Topic].",
  "Basic understanding of concepts from the previous lesson on [Previous Topic] is assumed.",
  "Students should be familiar with [Specific Concept/Skill] from earlier studies.",
  "No prior specific knowledge required, enthusiasm for [Topic Name] is a plus!",
  "Students should have reviewed the provided notes/video on [Prerequisite Topic]."
];

export const SPECIFIC_COMPETENCIES_SAMPLES: string[] = [
  "By the end of this module, students will demonstrate the ability to analyze [Concept A] in relation to [Concept B].",
  "Students will be able to apply the principles of [Topic Name] to solve practical problems.",
  "Competency: Effectively communicate the key aspects of [Topic Name].",
  "Students will develop critical thinking skills regarding [Issue in Topic Name].",
  "Successfully perform [Practical Skill] related to [Topic Name]."
];

export const SPECIFIC_LEARNING_OBJECTIVES_SAMPLES: string[] = [
  "After this lesson, students will be able to:\n1. Define [Key Term 1] related to [Topic Name].\n2. Explain the process of [Process in Topic Name].\n3. Identify three examples of [Concept in Topic Name].",
  "SLOs:\n- List the main components of [System in Topic Name].\n- Compare and contrast [Method A] and [Method B] for [Task in Topic Name].",
  "Students will achieve the following learning objectives:\n- Describe the significance of [Factor in Topic Name].\n- Evaluate the impact of [Event/Theory in Topic Name].",
];
