import type {
  FindStudentsOnTeachableCourseQuery,
  FindStudentsOnTeachableCourseQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import CourseCell from 'src/components/CourseCell'

export const QUERY = gql`
  query FindStudentsOnTeachableCourseQuery($token: String!, $courseId: Int!) {
    studentsOnTeachableCourseByToken: studentsOnTeachableCourseByToken(
      token: $token
      courseId: $courseId
    ) {
      id
      teachableCourse {
        id
        teachableId
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="m-10 flex flex-col items-center">
    <h1 className="alert alert-error text-3xl">Este enlace no está activo.</h1>
    <h2 className="text-xl">
      Por favor usa el enlace proporcionado tal cual se te fue enviado. Si
      tienes dudas, ponte en conacto con el Botiel
    </h2>
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindStudentsOnTeachableCourseQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  studentsOnTeachableCourseByToken,
}: CellSuccessProps<
  FindStudentsOnTeachableCourseQuery,
  FindStudentsOnTeachableCourseQueryVariables
>) => {
  return (
    <main>
      <CourseCell
        id={studentsOnTeachableCourseByToken.teachableCourse.teachableId}
      />
    </main>
  )
}
