import { MetaTags } from '@redwoodjs/web'
import StudentsOnTeachableCourseCell from 'src/components/StudentsOnTeachableCourseCell'

import { CourseStore } from 'src/store/CourseStore'

const CoursePage = ({ authToken = null, courseId = null }) => {
  return (
    <>
      <MetaTags
        title="Escuela Todo Está Bien"
        description="Cursos de evolución personal"
      />
      <StudentsOnTeachableCourseCell token={authToken} courseId={+courseId} />
    </>
  )
}

export default CoursePage
