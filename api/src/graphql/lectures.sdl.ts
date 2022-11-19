export const schema = gql`
  type Lecture {
    id: Int!
    name: String!
    is_published: Boolean!
    position: Int!
    lecture_section_id: Int!
    attachments: [Attachment]!
    LectureSection: LectureSection
    lectureSectionId: Int
  }

  type Query {
    lecture(course_id: Int!, lecture_id: Int!): Lecture @requireAuth
  }
`
