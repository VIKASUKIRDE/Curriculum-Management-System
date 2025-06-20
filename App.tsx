

import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'; // Keep HashRouter import if needed elsewhere, but not for wrapping here
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import TeacherManagementPage from './pages/Admin/TeacherManagementPage';
import StudentManagementPage from './pages/Admin/StudentManagementPage'; 
import SubjectManagementPage from './pages/Admin/SubjectManagementPage';
import AcademicCalendarPageAdmin from './pages/Admin/AcademicCalendarPageAdmin';
import TimetableManagementPage from './pages/Admin/TimetableManagementPage';
import StudentFeedbackPage from './pages/Admin/StudentFeedbackPage'; 
import HolidayReportPage from './pages/Admin/HolidayReportPage'; 
import AdminProfilePage from './pages/Admin/AdminProfilePage'; 
import SMTPSettingsPage from './pages/Admin/SMTPSettingsPage'; 
import CreateAnnouncementPage from './pages/Admin/CreateAnnouncementPage';
import StudentEngagementReportPage from './pages/Admin/StudentEngagementReportPage';
import TeacherActivityReportPage from './pages/Admin/TeacherActivityReportPage'; // Corrected Path


import TeacherDashboardPage from './pages/Teacher/TeacherDashboardPage';
import MySubjectsPage from './pages/Teacher/MySubjectsPage';
import SubjectDetailPage from './pages/Teacher/SubjectDetailPage'; 
import WeeklyPlanPage from './pages/Teacher/WeeklyPlanPage';
import AcademicCalendarPageTeacher from './pages/Teacher/AcademicCalendarPageTeacher';
import MyTimetablePage from './pages/Teacher/MyTimetablePage';
import TeacherProfilePage from './pages/Teacher/TeacherProfilePage';
import StudentAttendancePage from './pages/Teacher/StudentAttendancePage';
import TeacherReportsLandingPage from './pages/Teacher/TeacherReportsLandingPage'; 
import MySyllabusCoverageReportPage from './pages/Teacher/MySyllabusCoverageReportPage'; 
import LessonPlanStatusReportPage from './pages/Teacher/LessonPlanStatusReportPage'; 


import StudentDashboardPage from './pages/Student/StudentDashboardPage';
import MySyllabusPage from './pages/Student/MySyllabusPage';
import AcademicCalendarPageStudent from './pages/Student/AcademicCalendarPageStudent';
import StudentTimetablePage from './pages/Student/StudentTimetablePage';
import StudentProfilePage from './pages/Student/StudentProfilePage'; 
import QuizzesAndAssignmentsPage from './pages/Student/QuizzesAndAssignmentsPage';
import TakeQuizPage from './pages/Student/TakeQuizPage';
import ViewAssignmentPage from './pages/Student/ViewAssignmentPage';
import DiscussionForumsLandingPage from './pages/Student/DiscussionForumsLandingPage';
import SubjectForumPage from './pages/Student/SubjectForumPage';
import CreateForumPostPage from './pages/Student/CreateForumPostPage';
import ForumPostDetailPage from './pages/Student/ForumPostDetailPage'; 


import NotFoundPage from './pages/NotFoundPage';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Chatbot from './components/common/Chatbot';
import { UserRole } from './types';
import { pageVariants, sidebarVariants, headerVariants } from './animations';


const AppRoutes: React.FC = () => {
  const location = useLocation();
  const { userRole } = useAuth();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname} // Ensure animation triggers on route change
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent p-6" // Main content area transparent to show body's gradient
      >
        <Routes location={location}>
          {userRole === UserRole.Admin && (
            <>
              <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              <Route path="/admin/teachers" element={<TeacherManagementPage />} />
              <Route path="/admin/students" element={<StudentManagementPage />} /> 
              <Route path="/admin/subjects" element={<SubjectManagementPage />} />
              <Route path="/admin/calendar" element={<AcademicCalendarPageAdmin />} />
              <Route path="/admin/timetable" element={<TimetableManagementPage />} />
              <Route path="/admin/student-feedback" element={<StudentFeedbackPage />} /> 
              <Route path="/admin/holiday-report" element={<HolidayReportPage />} /> 
              <Route path="/admin/teacher-activity-report" element={<TeacherActivityReportPage />} />
              <Route path="/admin/profile-settings" element={<AdminProfilePage />} /> 
              <Route path="/admin/smtp-settings" element={<SMTPSettingsPage />} /> 
              <Route path="/admin/create-announcement" element={<CreateAnnouncementPage />} />
              <Route path="/admin/student-engagement-report" element={<StudentEngagementReportPage />} />
            </>
          )}
          {userRole === UserRole.Teacher && (
            <>
              <Route path="/" element={<Navigate to="/teacher/dashboard" replace />} />
              <Route path="/teacher/dashboard" element={<TeacherDashboardPage />} />
              <Route path="/teacher/subjects" element={<MySubjectsPage />} />
              <Route path="/teacher/subject-details/:subjectId" element={<SubjectDetailPage />} /> 
              <Route path="/teacher/weekly-plan" element={<WeeklyPlanPage />} />
              <Route path="/teacher/attendance" element={<StudentAttendancePage />} />
              <Route path="/teacher/calendar" element={<AcademicCalendarPageTeacher />} />
              <Route path="/teacher/timetable" element={<MyTimetablePage />} />
              <Route path="/teacher/profile-settings" element={<TeacherProfilePage />} />
              <Route path="/teacher/reports" element={<TeacherReportsLandingPage />} /> 
              <Route path="/teacher/reports/syllabus-coverage" element={<MySyllabusCoverageReportPage />} /> 
              <Route path="/teacher/reports/lesson-plan-status" element={<LessonPlanStatusReportPage />} /> 
            </>
          )}
          {userRole === UserRole.Student && (
            <>
              <Route path="/" element={<Navigate to="/student/dashboard" replace />} />
              <Route path="/student/dashboard" element={<StudentDashboardPage />} />
              <Route path="/student/syllabus" element={<MySyllabusPage />} />
              <Route path="/student/quizzes-assignments" element={<QuizzesAndAssignmentsPage />} />
              <Route path="/student/quiz/:quizId" element={<TakeQuizPage />} />
              <Route path="/student/assignment/:assignmentId" element={<ViewAssignmentPage />} />
              <Route path="/student/forums" element={<DiscussionForumsLandingPage />} />
              <Route path="/student/forum/:subjectId" element={<SubjectForumPage />} />
              <Route path="/student/forum/:subjectId/post/new" element={<CreateForumPostPage />} />
              <Route path="/student/forum/:subjectId/post/:postId" element={<ForumPostDetailPage />} /> 
              <Route path="/student/calendar" element={<AcademicCalendarPageStudent />} />
              <Route path="/student/timetable" element={<StudentTimetablePage />} />
              <Route path="/student/profile-settings" element={<StudentProfilePage />} /> 
            </>
          )}
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
};


const App: React.FC = () => {
  const { userRole, loading } = useAuth();
  const location = useLocation(); 

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl text-cms-text-default bg-cms-bg-main">Loading...</div>;
  }

  // If user is not authenticated, render login page routes.
  // These <Routes> are children of the <HashRouter> in index.tsx.
  if (!userRole) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
  
  // Determine chatbot visibility
  const hideChatbotRoutesRegex = [
    /^\/student\/quiz\/.+/,
    /^\/student\/assignment\/.+/
  ];
  const isStudentAssessRoute = userRole === UserRole.Student && hideChatbotRoutesRegex.some(routeRegex => routeRegex.test(location.pathname));
  const shouldShowChatbot = userRole && !isStudentAssessRoute;

  // If user is authenticated, render the main application layout.
  // <AppRoutes /> will render its own <Routes> which are also children of <HashRouter> in index.tsx.
  // No <HashRouter> should be rendered here.
  return (
      <div className="flex h-screen bg-cms-bg-main">
        <motion.div variants={sidebarVariants} initial="hidden" animate="visible" exit="exit">
          <Sidebar />
        </motion.div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <motion.div variants={headerVariants} initial="hidden" animate="visible">
            <Header />
          </motion.div>
          <AppRoutes /> 
        </div>
        {shouldShowChatbot && <Chatbot />}
      </div>
  );
};

export default App;