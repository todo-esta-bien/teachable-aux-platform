import { Store } from 'pullstate'

interface ICourseStore {
  lessonId?: number
}

export const CourseStore = new Store<ICourseStore>({})
