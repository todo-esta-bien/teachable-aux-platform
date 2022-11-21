import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/TeachableCourse/TeachableCoursesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteTeachableCourseMutationVariables,
  FindTeachableCourses,
} from 'types/graphql'

const DELETE_TEACHABLE_COURSE_MUTATION = gql`
  mutation DeleteTeachableCourseMutation($id: Int!) {
    deleteTeachableCourse(id: $id) {
      id
    }
  }
`

const TeachableCoursesList = ({ teachableCourses }: FindTeachableCourses) => {
  const [deleteTeachableCourse] = useMutation(
    DELETE_TEACHABLE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('TeachableCourse deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Teachable id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {teachableCourses.map((teachableCourse) => (
            <tr key={teachableCourse.id}>
              <td>{truncate(teachableCourse.id)}</td>
              <td>{truncate(teachableCourse.name)}</td>
              <td>{truncate(teachableCourse.teachableId)}</td>
              <td>{timeTag(teachableCourse.createdAt)}</td>
              <td>{timeTag(teachableCourse.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.teachableCourse({ id: teachableCourse.id })}
                    title={
                      'Show teachableCourse ' + teachableCourse.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTeachableCourse({ id: teachableCourse.id })}
                    title={'Edit teachableCourse ' + teachableCourse.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete teachableCourse ' + teachableCourse.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(teachableCourse.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeachableCoursesList
