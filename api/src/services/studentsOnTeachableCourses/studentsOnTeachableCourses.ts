import type {
  QueryResolvers,
  MutationResolvers,
  StudentsOnTeachableCourseRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const studentsOnTeachableCourses: QueryResolvers['studentsOnTeachableCourses'] =
  () => {
    return db.studentsOnTeachableCourse.findMany()
  }

export const studentsOnTeachableCourse: QueryResolvers['studentsOnTeachableCourse'] =
  ({ id }) => {
    return db.studentsOnTeachableCourse.findUnique({
      where: { id },
    })
  }

export const createStudentsOnTeachableCourse: MutationResolvers['createStudentsOnTeachableCourse'] =
  ({ input }) => {
    return db.studentsOnTeachableCourse.create({
      data: input,
    })
  }

export const updateStudentsOnTeachableCourse: MutationResolvers['updateStudentsOnTeachableCourse'] =
  ({ id, input }) => {
    return db.studentsOnTeachableCourse.update({
      data: input,
      where: { id },
    })
  }

export const deleteStudentsOnTeachableCourse: MutationResolvers['deleteStudentsOnTeachableCourse'] =
  ({ id }) => {
    return db.studentsOnTeachableCourse.delete({
      where: { id },
    })
  }

export const StudentsOnTeachableCourse: StudentsOnTeachableCourseRelationResolvers =
  {
    student: (_obj, { root }) => {
      return db.studentsOnTeachableCourse
        .findUnique({ where: { id: root?.id } })
        .student()
    },
    teachableCourse: (_obj, { root }) => {
      return db.studentsOnTeachableCourse
        .findUnique({ where: { id: root?.id } })
        .teachableCourse()
    },
  }
