export const schema = gql`
  type TeachableCourse {
    id: Int!
    name: String!
    teachableId: Int!
    students: [StudentsOnTeachableCourse]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    teachableCourses: [TeachableCourse!]! @requireAuth
    teachableCourse(id: Int!): TeachableCourse @requireAuth
  }

  input CreateTeachableCourseInput {
    name: String!
    teachableId: Int!
  }

  input UpdateTeachableCourseInput {
    name: String
    teachableId: Int
  }

  type Mutation {
    createTeachableCourse(input: CreateTeachableCourseInput!): TeachableCourse!
      @requireAuth
    updateTeachableCourse(
      id: Int!
      input: UpdateTeachableCourseInput!
    ): TeachableCourse! @requireAuth
    deleteTeachableCourse(id: Int!): TeachableCourse! @requireAuth
  }
`
