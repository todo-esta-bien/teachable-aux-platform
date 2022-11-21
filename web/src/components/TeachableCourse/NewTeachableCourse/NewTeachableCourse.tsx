import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TeachableCourseForm from 'src/components/TeachableCourse/TeachableCourseForm'

import type { CreateTeachableCourseInput } from 'types/graphql'

const CREATE_TEACHABLE_COURSE_MUTATION = gql`
  mutation CreateTeachableCourseMutation($input: CreateTeachableCourseInput!) {
    createTeachableCourse(input: $input) {
      id
    }
  }
`

const NewTeachableCourse = () => {
  const [createTeachableCourse, { loading, error }] = useMutation(
    CREATE_TEACHABLE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('TeachableCourse created')
        navigate(routes.teachableCourses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTeachableCourseInput) => {
    createTeachableCourse({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TeachableCourse</h2>
      </header>
      <div className="rw-segment-main">
        <TeachableCourseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTeachableCourse
