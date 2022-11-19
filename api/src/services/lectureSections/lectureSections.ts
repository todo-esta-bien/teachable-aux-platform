import type {
  LectureSectionRelationResolvers,
} from 'types/graphql'

export const LectureSection: LectureSectionRelationResolvers = {
  lectures: (_obj, { root }) => {
    return root.lectures
  },
}
