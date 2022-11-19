export const schema = gql`
  type LectureSection {
    id: Int!
    name: String!
    is_published: Boolean!
    position: Int!
    lectures: [Lecture]!
    Course: Course
    courseId: Int
  }
`
