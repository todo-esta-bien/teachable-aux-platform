import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteTeachableCourseMutationVariables,
  FindTeachableCourseById,
} from 'types/graphql'

const DELETE_TEACHABLE_COURSE_MUTATION = gql`
  mutation DeleteTeachableCourseMutation($id: Int!) {
    deleteTeachableCourse(id: $id) {
      id
    }
  }
`

interface Props {
  teachableCourse: NonNullable<FindTeachableCourseById['teachableCourse']>
}

const TeachableCourse = ({ teachableCourse }: Props) => {
  const [deleteTeachableCourse] = useMutation(
    DELETE_TEACHABLE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('TeachableCourse deleted')
        navigate(routes.teachableCourses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id: DeleteTeachableCourseMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete teachableCourse ' + id + '?')
    ) {
      deleteTeachableCourse({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TeachableCourse {teachableCourse.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{teachableCourse.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{teachableCourse.name}</td>
            </tr>
            <tr>
              <th>Teachable id</th>
              <td>{teachableCourse.teachableId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(teachableCourse.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(teachableCourse.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTeachableCourse({ id: teachableCourse.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(teachableCourse.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TeachableCourse
