import type {
  FindCourseQuery,
  FindCourseQueryVariables,
  LectureSection,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import LessonsDrawer from 'src/components/LessonsDrawer'
import LectureCell from 'src/components/LectureCell'
import { CourseStore } from 'src/store/CourseStore'
import Navbar from 'src/components/Navbar'

export const QUERY = gql`
  query FindCourseQuery($id: Int!) {
    course: course(id: $id) {
      id
      name
      heading
      description
      is_published
      image_url
      lecture_sections {
        id
        name
        is_published
        position
        lectures {
          id
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCourseQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  course,
}: CellSuccessProps<FindCourseQuery, FindCourseQueryVariables>) => {
  const { lessonId } = CourseStore.useState((s) => ({
    lessonId: s.lessonId,
  }))

  return (
    <>
      <Navbar courseName={course.name} />
      <LessonsDrawer
        lectureSections={course.lecture_sections as LectureSection[]}
      >
        {!!lessonId ? (
          <LectureCell course_id={course.id} lecture_id={lessonId} />
        ) : (
          <h1 className="text-4xl">Selecciona una lección de la izquierda</h1>
        )}
      </LessonsDrawer>
    </>
  )
}
