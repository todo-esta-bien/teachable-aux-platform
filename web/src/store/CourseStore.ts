import { Store } from 'pullstate'

interface ICourseStore {
  courseId?: number
  lessonId?: number
}

export const CourseStore = new Store<ICourseStore>({})
