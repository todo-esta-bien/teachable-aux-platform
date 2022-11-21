// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={ScaffoldLayout} title="Students" titleTo="students" buttonLabel="New Student" buttonTo="newStudent">
          <Route path="/students/new" page={StudentNewStudentPage} name="newStudent" />
          <Route path="/students/{id:Int}/edit" page={StudentEditStudentPage} name="editStudent" />
          <Route path="/students/{id:Int}" page={StudentStudentPage} name="student" />
          <Route path="/students" page={StudentStudentsPage} name="students" />
        </Set>
        <Set wrap={ScaffoldLayout} title="TeachableCourses" titleTo="teachableCourses" buttonLabel="New TeachableCourse" buttonTo="newTeachableCourse">
          <Route path="/teachable-courses/new" page={TeachableCourseNewTeachableCoursePage} name="newTeachableCourse" />
          <Route path="/teachable-courses/{id:Int}/edit" page={TeachableCourseEditTeachableCoursePage} name="editTeachableCourse" />
          <Route path="/teachable-courses/{id:Int}" page={TeachableCourseTeachableCoursePage} name="teachableCourse" />
          <Route path="/teachable-courses" page={TeachableCourseTeachableCoursesPage} name="teachableCourses" />
        </Set>
        <Set wrap={ScaffoldLayout} title="StudentsOnTeachableCourses" titleTo="studentsOnTeachableCourses" buttonLabel="New StudentsOnTeachableCourse" buttonTo="newStudentsOnTeachableCourse">
          <Route path="/students-on-teachable-courses/new" page={StudentsOnTeachableCourseNewStudentsOnTeachableCoursePage} name="newStudentsOnTeachableCourse" />
          <Route path="/students-on-teachable-courses/{id:Int}/edit" page={StudentsOnTeachableCourseEditStudentsOnTeachableCoursePage} name="editStudentsOnTeachableCourse" />
          <Route path="/students-on-teachable-courses/{id:Int}" page={StudentsOnTeachableCourseStudentsOnTeachableCoursePage} name="studentsOnTeachableCourse" />
          <Route path="/students-on-teachable-courses" page={StudentsOnTeachableCourseStudentsOnTeachableCoursesPage} name="studentsOnTeachableCourses" />
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/course" page={CoursePage} name="course" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
