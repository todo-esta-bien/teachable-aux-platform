import { LinkIcon } from '@heroicons/react/24/solid'
import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/StudentsOnTeachableCourse/StudentsOnTeachableCoursesCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteStudentsOnTeachableCourseMutationVariables,
  FindStudentsOnTeachableCourses,
} from 'types/graphql'

const DELETE_STUDENTS_ON_TEACHABLE_COURSE_MUTATION = gql`
  mutation DeleteStudentsOnTeachableCourseMutation($id: Int!) {
    deleteStudentsOnTeachableCourse(id: $id) {
      id
    }
  }
`

const StudentsOnTeachableCoursesList = ({
  studentsOnTeachableCourses,
}: FindStudentsOnTeachableCourses) => {
  const [deleteStudentsOnTeachableCourse] = useMutation(
    DELETE_STUDENTS_ON_TEACHABLE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('StudentsOnTeachableCourse deleted')
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

  const copyCreatedUrl = ({ courseId, token }) => {
    const host =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8910'
        : 'https://teachable-aux.todoestabien.com.mx'
    const generatedUrl = `${host}/course?authToken=${token}&courseId=${courseId}`
    // Copy to clipboard
    navigator.clipboard.writeText(generatedUrl)
    toast.success('Enlace copiado')
  }

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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Token</th>
            <th>Is active</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {studentsOnTeachableCourses.map((studentsOnTeachableCourse) => (
            <tr key={studentsOnTeachableCourse.id}>
              <td>{truncate(studentsOnTeachableCourse.id)}</td>
              <td>{truncate(studentsOnTeachableCourse.student.name)}</td>
              <td>
                {truncate(studentsOnTeachableCourse.teachableCourse.name)}
              </td>
              <td>{truncate(studentsOnTeachableCourse.token)}</td>
              <td>{checkboxInputTag(studentsOnTeachableCourse.isActive)}</td>
              <td>{timeTag(studentsOnTeachableCourse.createdAt)}</td>
              <td>{timeTag(studentsOnTeachableCourse.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <button
                    type="button"
                    title={
                      'Copy token url for ' +
                      studentsOnTeachableCourse.student.name
                    }
                    className="rw-button rw-button-small"
                    onClick={() =>
                      copyCreatedUrl({
                        token: studentsOnTeachableCourse.token,
                        courseId:
                          studentsOnTeachableCourse.teachableCourse.teachableId,
                      })
                    }
                  >
                    <LinkIcon className="h-5 w-5" />
                  </button>
                  <Link
                    to={routes.studentsOnTeachableCourse({
                      id: studentsOnTeachableCourse.id,
                    })}
                    title={
                      'Show studentsOnTeachableCourse ' +
                      studentsOnTeachableCourse.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStudentsOnTeachableCourse({
                      id: studentsOnTeachableCourse.id,
                    })}
                    title={
                      'Edit studentsOnTeachableCourse ' +
                      studentsOnTeachableCourse.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete studentsOnTeachableCourse ' +
                      studentsOnTeachableCourse.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(studentsOnTeachableCourse.id)}
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

export default StudentsOnTeachableCoursesList
