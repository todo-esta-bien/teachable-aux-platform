export const schema = gql`
  type Student {
    id: Int!
    name: String!
    courses: [StudentsOnTeachableCourse]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    students: [Student!]! @requireAuth
    student(id: Int!): Student @requireAuth
  }

  input CreateStudentInput {
    name: String!
  }

  input UpdateStudentInput {
    name: String
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student! @requireAuth
    updateStudent(id: Int!, input: UpdateStudentInput!): Student! @requireAuth
    deleteStudent(id: Int!): Student! @requireAuth
  }
`
