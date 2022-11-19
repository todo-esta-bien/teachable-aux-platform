import type { FindCourseQuery, FindCourseQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { CourseStore } from 'src/store/CourseStore'

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
  return (
    <div
      onClick={() => {
        CourseStore.update((s) => {
          // TODO: Change for current lesson value
          s.lessonId = 43491536
        })
      }}
    >
      {JSON.stringify(course, null, 2)}
    </div>
  )
}
