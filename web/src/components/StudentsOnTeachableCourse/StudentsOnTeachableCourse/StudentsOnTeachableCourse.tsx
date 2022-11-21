import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

import type {
  DeleteStudentsOnTeachableCourseMutationVariables,
  FindStudentsOnTeachableCourseById,
} from 'types/graphql'

const DELETE_STUDENTS_ON_TEACHABLE_COURSE_MUTATION = gql`
  mutation DeleteStudentsOnTeachableCourseMutation($id: Int!) {
    deleteStudentsOnTeachableCourse(id: $id) {
      id
    }
  }
`

interface Props {
  studentsOnTeachableCourse: NonNullable<
    FindStudentsOnTeachableCourseById['studentsOnTeachableCourse']
  >
}

const StudentsOnTeachableCourse = ({ studentsOnTeachableCourse }: Props) => {
  const [deleteStudentsOnTeachableCourse] = useMutation(
    DELETE_STUDENTS_ON_TEACHABLE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('StudentsOnTeachableCourse deleted')
        navigate(routes.studentsOnTeachableCourses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteStudentsOnTeachableCourseMutationVariables['id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete studentsOnTeachableCourse ' + id + '?'
      )
    ) {
      deleteStudentsOnTeachableCourse({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            StudentsOnTeachableCourse {studentsOnTeachableCourse.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{studentsOnTeachableCourse.id}</td>
            </tr>
            <tr>
              <th>Student id</th>
              <td>{studentsOnTeachableCourse.studentId}</td>
            </tr>
            <tr>
              <th>Teachable course id</th>
              <td>{studentsOnTeachableCourse.teachableCourseId}</td>
            </tr>
            <tr>
              <th>Token</th>
              <td>{studentsOnTeachableCourse.token}</td>
            </tr>
            <tr>
              <th>Is active</th>
              <td>{checkboxInputTag(studentsOnTeachableCourse.isActive)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(studentsOnTeachableCourse.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(studentsOnTeachableCourse.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudentsOnTeachableCourse({
            id: studentsOnTeachableCourse.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(studentsOnTeachableCourse.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default StudentsOnTeachableCourse
