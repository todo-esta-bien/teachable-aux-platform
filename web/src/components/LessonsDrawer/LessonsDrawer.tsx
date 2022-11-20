import type { LectureSection } from 'types/graphql'

interface ILessonDrawer {
  children: React.ReactNode
  lectureSections: LectureSection[]
}
import { CourseStore } from 'src/store/CourseStore'

const updateLessonId = (lessonId: number) =>
  CourseStore.update((s) => {
    s.lessonId = lessonId
  })

const LessonsDrawer = ({ children, lectureSections }: ILessonDrawer) => {
  return (
    <div className="drawer-mobile drawer">
      <input id="lessons-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/*<!-- Page content here -->*/}
        {children}
        <label
          htmlFor="lessons-drawer"
          className="btn-primary drawer-button btn lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="lessons-drawer" className="drawer-overlay"></label>
        <ul className="menu w-80 bg-base-100 p-4 text-base-content">
          {/*<!-- Sidebar content here -->*/}
          {lectureSections
            .filter((section) => section.is_published)
            .map((section) => {
              return (
                <div key={section.id}>
                  <h1 className="pb-4 text-lg">
                    <a>{section.name}</a>
                  </h1>
                  {section.lectures.map((lecture, idx) => (
                    <li key={lecture.id}>
                      <button onClick={() => updateLessonId(lecture.id)}>
                        Lección {idx + 1}
                      </button>
                    </li>
                  ))}
                </div>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default LessonsDrawer
