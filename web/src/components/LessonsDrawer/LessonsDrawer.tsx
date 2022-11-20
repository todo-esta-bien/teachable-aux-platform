import type { LectureSection as LectureSectionType } from 'types/graphql'
import LectureSection from 'src/components/LectureSection'

interface ILessonDrawer {
  children: React.ReactNode
  lectureSections: LectureSectionType[]
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
      <div className="drawer-content bg-base-200 p-4">
        {/*<!-- Page content here -->*/}
        {children}
        <label
          htmlFor="lessons-drawer"
          className="btn-primary drawer-button btn lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-base-300">
        <label htmlFor="lessons-drawer" className="drawer-overlay"></label>
        <ul className="menu w-80 p-4 text-base-content">
          {/*<!-- Sidebar content here -->*/}
          {lectureSections
            .filter((section) => section.is_published)
            .map((section) => {
              return (
                <LectureSection sectionName={section.name} key={section.id}>
                  {section.lectures.map((lecture, idx) => (
                    <li key={lecture.id}>
                      <button onClick={() => updateLessonId(lecture.id)}>
                        Lección {idx + 1}
                      </button>
                    </li>
                  ))}
                </LectureSection>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default LessonsDrawer
