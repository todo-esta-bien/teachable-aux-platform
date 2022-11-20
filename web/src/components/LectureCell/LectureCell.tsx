import type { FindLectureQuery, FindLectureQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import TeachableAttachment from 'src/components/TeachableAttachment'
import type { ITeachableAssignment } from 'src/components/TeachableAttachment'

export const QUERY = gql`
  query FindLectureQuery($course_id: Int!, $lecture_id: Int!) {
    lecture: lecture(course_id: $course_id, lecture_id: $lecture_id) {
      id
      name
      is_published
      position
      attachments {
        id
        name
        kind
        url
        text
        position
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindLectureQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  lecture,
}: CellSuccessProps<FindLectureQuery, FindLectureQueryVariables>) => {
  return (
    <div>
      <h1 className="text-xl">{lecture.name}</h1>
      {lecture.attachments.map((attachment) => (
        <TeachableAttachment
          key={attachment.id}
          {...(attachment as ITeachableAssignment)}
        />
      ))}
    </div>
  )
}
