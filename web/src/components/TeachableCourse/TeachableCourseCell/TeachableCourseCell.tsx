import type { FindTeachableCourseById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeachableCourse from 'src/components/TeachableCourse/TeachableCourse'

export const QUERY = gql`
  query FindTeachableCourseById($id: Int!) {
    teachableCourse: teachableCourse(id: $id) {
      id
      name
      teachableId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TeachableCourse not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  teachableCourse,
}: CellSuccessProps<FindTeachableCourseById>) => {
  return <TeachableCourse teachableCourse={teachableCourse} />
}
