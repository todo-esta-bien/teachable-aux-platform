import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StudentsOnTeachableCourseForm from 'src/components/StudentsOnTeachableCourse/StudentsOnTeachableCourseForm'

import type { CreateStudentsOnTeachableCourseInput } from 'types/graphql'

const CREATE_STUDENTS_ON_TEACHABLE_COURSE_MUTATION = gql`
  mutation CreateStudentsOnTeachableCourseMutation(
    $input: CreateStudentsOnTeachableCourseInput!
  ) {
    createStudentsOnTeachableCourse(input: $input) {
      id
    }
  }
`

const NewStudentsOnTeachableCourse = () => {
  const [createStudentsOnTeachableCourse, { loading, error }] = useMutation(
    CREATE_STUDENTS_ON_TEACHABLE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('StudentsOnTeachableCourse created')
        navigate(routes.studentsOnTeachableCourses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStudentsOnTeachableCourseInput) => {
    createStudentsOnTeachableCourse({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New StudentsOnTeachableCourse
        </h2>
      </header>
      <div className="rw-segment-main">
        <StudentsOnTeachableCourseForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewStudentsOnTeachableCourse
