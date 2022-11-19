import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CourseCell from 'src/components/CourseCell'
import LectureCell from 'src/components/LectureCell'
import { CourseStore } from 'src/store/CourseStore'

const CoursePage = ({ authToken = null, courseId = null }) => {
  CourseStore.update((s) => {
    s.courseId = courseId
  })

  const lessonId = CourseStore.useState((s) => s.lessonId)

  return (
    <>
      <MetaTags title="Course" description="Course page" />

      <h1>CoursePage</h1>
      <p>
        Find me in <code>./web/src/pages/CoursePage/CoursePage.tsx</code>
        Your token {authToken}
      </p>
      <CourseCell id={+courseId} />
      <p>
        My default route is named <code>course</code>, link to me with `
        <Link to={routes.course()}>Course</Link>`
      </p>
      {lessonId && <LectureCell course_id={+courseId} lecture_id={lessonId} />}
    </>
  )
}

export default CoursePage
