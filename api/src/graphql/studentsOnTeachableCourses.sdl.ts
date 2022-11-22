export const schema = gql`
  type StudentsOnTeachableCourse {
    id: Int!
    studentId: Int!
    student: Student!
    teachableCourseId: Int!
    teachableCourse: TeachableCourse!
    token: String!
    isActive: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    studentsOnTeachableCourses: [StudentsOnTeachableCourse!]! @requireAuth
    studentsOnTeachableCourse(id: Int!): StudentsOnTeachableCourse @requireAuth
    studentsOnTeachableCourseByToken(
      token: String!
      courseId: Int!
    ): StudentsOnTeachableCourse @skipAuth
  }

  input CreateStudentsOnTeachableCourseInput {
    studentId: Int!
    teachableCourseId: Int!
    token: String
    isActive: Boolean!
  }

  input UpdateStudentsOnTeachableCourseInput {
    studentId: Int
    teachableCourseId: Int
    token: String
    isActive: Boolean
  }

  type Mutation {
    createStudentsOnTeachableCourse(
      input: CreateStudentsOnTeachableCourseInput!
    ): StudentsOnTeachableCourse! @requireAuth
    updateStudentsOnTeachableCourse(
      id: Int!
      input: UpdateStudentsOnTeachableCourseInput!
    ): StudentsOnTeachableCourse! @requireAuth
    deleteStudentsOnTeachableCourse(id: Int!): StudentsOnTeachableCourse!
      @requireAuth
  }
`
