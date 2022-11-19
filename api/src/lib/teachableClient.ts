import { fetch } from 'cross-undici-fetch'
import type {Lecture, Course} from '@prisma/client'

interface IFetchLecture {
  course_id: number
  lecture_id: number
}

export const fetchLecture = async ({
  course_id,
  lecture_id,
}: IFetchLecture): Promise<Lecture> => {
  const url = `https://developers.teachable.com/v1/courses/${course_id}/lectures/${lecture_id}`
  const response = await fetch(url, {
    headers: {
      apiKey: process.env.TEACHABLE_API_KEY,
    },
  })

  const result = await response.json()
  return result.lecture
}

export const fetchCourse = async (courseId: number): Promise<Course> => {
  const url = `https://developers.teachable.com/v1/courses/${courseId}`
  const response = await fetch(url, {
    headers: {
      apiKey: process.env.TEACHABLE_API_KEY,
    },
  })

  const result = await response.json()
  return result.course
}
