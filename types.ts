
export enum UserRole {
  Admin = 'Admin',
  Teacher = 'Teacher',
  Student = 'Student',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean; 
  lastLoginDate?: string; 
}

export interface LessonPlanSegment {
  id: string;
  sloNo: string; // Specific Learning Objective Number related to this segment
  content: string;
  teacherActivity: string;
  teacherActivityCustom?: string; // For "Other..."
  learnerActivity: string;
  learnerActivityCustom?: string; // For "Other..."
  duration: string; // e.g., "15 mins", "0.5 hours"
  durationCustom?: string; // For "Other..."
  formativeAssessment: string;
  formativeAssessmentCustom?: string; // For "Other..."
}

export interface DetailedLessonPlan {
  id: string;
  lessonId: string; // Links to SyllabusLesson.id
  department: string;
  lessonPlanOn: string; // Main topic/theme of the lesson plan
  domain: string; // e.g., "Cognitive"
  lessonPlanNo: string;
  date: string; // YYYY-MM-DD
  chapter: string; // Or Unit/Topic reference
  facultyName: string;
  topic: string; // Name of the SyllabusLesson
  numberOfStudents: number | string;
  className: string; // e.g., "BAMS Year 1"

  setInduction: string;
  entryBehavior: string;
  specificCompetencies: string;
  specificLearningObjectives: string; // General SLOs description for the whole lesson

  segments: LessonPlanSegment[]; // For the detailed table structure
  lastUpdated: string; // ISO date string
}

export interface MaterialUpload {
  id: string;
  fileName: string; 
  fileType: 'pdf' | 'docx' | 'pptx' | 'videoLink' | 'other';
  url: string; 
  description?: string;
  uploadedDate: string; 
}

export interface SyllabusLesson {
  id: string;
  lessonNumber: string; // e.g., "1.1.1", "L1"
  lessonName: string;
  plannedHours: number;
  actualHoursSpent?: number;
  isCompleted?: boolean;
  dateCompleted?: string; // YYYY-MM-DD
  teacherComments?: string; 
  detailedLessonPlanId?: string; // ID linking to a DetailedLessonPlan
  materials?: MaterialUpload[]; // New field for lesson-specific materials
}

export interface SyllabusTopic {
  id: string;
  topicNumber: string; // e.g., "T1.1"
  topicName: string;
  lessons: SyllabusLesson[];
  // Aggregate planned/actual hours can be calculated from lessons
}

export interface SyllabusUnit {
  id: string;
  unitNumber: string; // e.g., "U1"
  unitName: string;
  topics: SyllabusTopic[];
  // Aggregate planned/actual hours can be calculated from topics
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  description?: string;
  academicYear: number; // New field for subject's academic year
  syllabus?: SyllabusUnit[]; // Detailed syllabus structure
}

export interface Teacher extends User {
  qualification: string;
  assignedSubjects: Subject[];
  password?: string; 
}

export interface Student extends User {
  course: string;
  year: number;
  rollNo: string;
  assignedSubjects?: Subject[];
  password?: string;
}

export enum AcademicEventType {
  Holiday = 'Holiday',
  Event = 'Event',
  Exam = 'Exam',
}

export interface AcademicEvent {
  id:string;
  title: string;
  date: string; // YYYY-MM-DD
  type: AcademicEventType;
  description?: string;
}

export interface WeeklyPlan {
  id: string;
  teacherId: string;
  subjectId: string;
  weekNumber: number;
  year: number;
  topics: string; 
  materialsUrl?: string; 
  youtubeLink?: string; 
  dateCompleted?: string;
  comments?: string;
  isCompletedByTeacher?: boolean;
}

export interface TimetableEntry {
  id: string;
  dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  timeSlot: string; // e.g., "09:00-10:00"
  subjectId: string;
  teacherId: string;
  classOrYear: string; // e.g., "BAMS Year 1" or "Class 10A"
}

export interface StudentFeedback {
  id: string;
  studentId: string; 
  studentName?: string; 
  subjectId: string;
  subjectName?: string; 
  weeklyPlanId: string; 
  topicIdentifier?: string; 
  rating: number; // e.g., 1-5
  comment: string;
  dateSubmitted: string; // ISO date string
}

export interface HighlightedVideo {
  id: string;
  teacherId: string;
  subjectId: string;
  subjectName?: string; 
  youtubeLink: string;
  description?: string; 
  dateFor: string; // YYYY-MM-DD 
}

export interface SMTPSettings {
  host?: string;
  port?: number;
  secure?: boolean; // true for SSL/TLS
  username?: string;
  password?: string;
  senderEmail?: string;
}

export enum AttendanceStatus {
  Present = 'Present',
  Absent = 'Absent',
  Late = 'Late',
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName?: string;
  subjectId: string; // Subject for which attendance is taken
  classOrYear: string; // The class/year group
  date: string; // YYYY-MM-DD
  status: AttendanceStatus;
  teacherId: string; // Teacher who took attendance
  notes?: string;
}

export interface UnitPlanAnnotation {
  unitId: string;
  startDate?: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  teacherNotes?: string;
}

export interface TeacherSubjectAnnotation {
  teacherId: string;
  subjectId: string;
  annualPlanUrl?: string;
  annualPlanFileName?: string;
  unitPlans?: UnitPlanAnnotation[];
}

export interface StudentEngagementLog {
  id: string;
  studentId: string;
  studentName?: string;
  materialId?: string; 
  materialName?: string;
  subjectId?: string;
  subjectName?: string;
  lessonId?: string; 
  lessonName?: string;
  weeklyPlanId?: string; // If accessed from weekly plan
  actionType: 'viewMaterial' | 'downloadMaterial' | 'watchVideo';
  timestamp: string; // ISO date string
}

export interface SystemNotification {
  id: string;
  timestamp: string; // ISO string
  message: string;
  rolesToNotify: UserRole[]; 
  targetClassOrYear?: string; 
  isRead?: boolean; // Optional for future "mark as read"
  title?: string; // Optional title, for announcements
  originatorRole?: UserRole; // Admin or Teacher
  originatorName?: string; // Name of the sender
  subjectId?: string; // For teacher messages related to a subject
}

// New types for Quizzes, Assignments, and Forums
export interface QuizQuestion {
  id: string;
  text: string;
  type: 'mcq' | 'shortAnswer';
  options?: string[]; // For MCQ
  correctAnswer?: string; // For MCQ auto-grading (single choice)
}

export interface Quiz {
  id: string;
  subjectId: string;
  subjectName?: string; // Denormalized for easy display
  title: string;
  description?: string;
  questions: QuizQuestion[];
  totalMarks: number;
  dueDate?: string; // Optional due date
  isAttempted?: boolean; // For student view, if they have taken it
  score?: number; // Student's score after attempting
}

export interface Assignment {
  id: string;
  subjectId: string;
  subjectName?: string; // Denormalized for easy display
  title: string;
  description: string;
  instructionsUrl?: string; // Link to PDF/doc with detailed instructions
  dueDate: string; // Due date is mandatory for assignments
  totalMarks: number;
  isSubmitted?: boolean; // For student view
  submittedFileUrl?: string; // Mock URL of the submitted file
  submissionTimestamp?: string; // ISO date string of submission
  grade?: number; // Student's grade after submission
}

export interface ForumReply {
  id: string;
  postId: string;
  authorId: string; // studentId or teacherId
  authorName: string;
  content: string;
  timestamp: string; // ISO date string
}

export interface ForumPost {
  id: string;
  subjectId: string;
  subjectName?: string; // Denormalized for easy display
  authorId: string; // studentId or teacherId
  authorName: string;
  title: string;
  content: string;
  timestamp: string; // ISO date string
  replies: ForumReply[];
  viewCount?: number;
  lastReplyTimestamp?: string;
}
