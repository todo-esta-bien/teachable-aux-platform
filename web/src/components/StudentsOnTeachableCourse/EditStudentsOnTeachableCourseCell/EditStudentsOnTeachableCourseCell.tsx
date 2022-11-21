import type {
  EditStudentsOnTeachableCourseById,
  UpdateStudentsOnTeachableCourseInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StudentsOnTeachableCourseForm from 'src/components/StudentsOnTeachableCourse/StudentsOnTeachableCourseForm'

export const QUERY = gql`
  query EditStudentsOnTeachableCourseById($id: Int!) {
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
const UPDATE_STUDENTS_ON_TEACHABLE_COURSE_MUTATION = gql`
  mutation UpdateStudentsOnTeachableCourseMutation(
    $id: Int!
    $input: UpdateStudentsOnTeachableCourseInput!
  ) {
    updateStudentsOnTeachableCourse(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  studentsOnTeachableCourse,
}: CellSuccessProps<EditStudentsOnTeachableCourseById>) => {
  const [updateStudentsOnTeachableCourse, { loading, error }] = useMutation(
    UPDATE_STUDENTS_ON_TEACHABLE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('StudentsOnTeachableCourse updated')
        navigate(routes.studentsOnTeachableCourses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStudentsOnTeachableCourseInput,
    id: EditStudentsOnTeachableCourseById['studentsOnTeachableCourse']['id']
  ) => {
    updateStudentsOnTeachableCourse({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit StudentsOnTeachableCourse {studentsOnTeachableCourse?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StudentsOnTeachableCourseForm
          studentsOnTeachableCourse={studentsOnTeachableCourse}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
