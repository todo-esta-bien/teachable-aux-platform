import type { FindStudentsOnTeachableCourses } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StudentsOnTeachableCourses from 'src/components/StudentsOnTeachableCourse/StudentsOnTeachableCourses'

export const QUERY = gql`
  query FindStudentsOnTeachableCourses {
    studentsOnTeachableCourses {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No studentsOnTeachableCourses yet. '}
      <Link to={routes.newStudentsOnTeachableCourse()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  studentsOnTeachableCourses,
}: CellSuccessProps<FindStudentsOnTeachableCourses>) => {
  return (
    <StudentsOnTeachableCourses
      studentsOnTeachableCourses={studentsOnTeachableCourses}
    />
  )
}
