export const schema = gql`
  type Attachment {
    id: Int!
    name: String
    kind: String!
    url: String
    text: String
    position: Int!
    file_size: Int
    file_extension: String
    lecture: Lecture!
    lectureId: Int!
  }
`
