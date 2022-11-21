import type { FindTeachableCourses } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeachableCourses from 'src/components/TeachableCourse/TeachableCourses'

export const QUERY = gql`
  query FindTeachableCourses {
    teachableCourses {
      id
      name
      teachableId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No teachableCourses yet. '}
      <Link to={routes.newTeachableCourse()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  teachableCourses,
}: CellSuccessProps<FindTeachableCourses>) => {
  return <TeachableCourses teachableCourses={teachableCourses} />
}
