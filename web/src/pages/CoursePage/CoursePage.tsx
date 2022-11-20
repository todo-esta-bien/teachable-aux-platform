import { MetaTags } from '@redwoodjs/web'
import CourseCell from 'src/components/CourseCell'
import { CourseStore } from 'src/store/CourseStore'

const CoursePage = ({ authToken = null, courseId = null }) => {
  CourseStore.update((s) => {
    s.courseId = courseId
  })

  return (
    <>
      <MetaTags
        title="Escuela Todo Está Bien"
        description="Cursos de evolución personal"
      />
      <h1>CoursePage. Token: {authToken}</h1>
      <CourseCell id={+courseId} />
    </>
  )
}

export default CoursePage
