import type {
  EditTeachableCourseById,
  UpdateTeachableCourseInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TeachableCourseForm from 'src/components/TeachableCourse/TeachableCourseForm'

export const QUERY = gql`
  query EditTeachableCourseById($id: Int!) {
    teachableCourse: teachableCourse(id: $id) {
      id
      name
      teachableId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_TEACHABLE_COURSE_MUTATION = gql`
  mutation UpdateTeachableCourseMutation(
    $id: Int!
    $input: UpdateTeachableCourseInput!
  ) {
    updateTeachableCourse(id: $id, input: $input) {
      id
      name
      teachableId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  teachableCourse,
}: CellSuccessProps<EditTeachableCourseById>) => {
  const [updateTeachableCourse, { loading, error }] = useMutation(
    UPDATE_TEACHABLE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('TeachableCourse updated')
        navigate(routes.teachableCourses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTeachableCourseInput,
    id: EditTeachableCourseById['teachableCourse']['id']
  ) => {
    updateTeachableCourse({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TeachableCourse {teachableCourse?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TeachableCourseForm
          teachableCourse={teachableCourse}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
