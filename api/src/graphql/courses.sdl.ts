export const schema = gql`
  type Course {
    id: Int!
    name: String!
    heading: String!
    description: String
    is_published: Boolean!
    image_url: String!
    lecture_sections: [LectureSection]!
  }

  type Query {
    courses: [Course!]! @requireAuth
    course(id: Int!): Course @requireAuth
  }
`
