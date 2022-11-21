import type { FindStudentsOnTeachableCourseById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StudentsOnTeachableCourse from 'src/components/StudentsOnTeachableCourse/StudentsOnTeachableCourse'

export const QUERY = gql`
  query FindStudentsOnTeachableCourseById($id: Int!) {
    studentsOnTeachableCourse: studentsOnTeachableCourse(id: $id) {
      id
      studentId
      teachableCourseId
      token
      isActive
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>StudentsOnTeachableCourse not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  studentsOnTeachableCourse,
}: CellSuccessProps<FindStudentsOnTeachableCourseById>) => {
  return (
    <StudentsOnTeachableCourse
      studentsOnTeachableCourse={studentsOnTeachableCourse}
    />
  )
}
