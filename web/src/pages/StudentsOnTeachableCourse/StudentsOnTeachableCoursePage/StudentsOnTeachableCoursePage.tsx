import StudentsOnTeachableCourseCell from 'src/components/StudentsOnTeachableCourse/StudentsOnTeachableCourseCell'

type StudentsOnTeachableCoursePageProps = {
  id: number
}

const StudentsOnTeachableCoursePage = ({
  id,
}: StudentsOnTeachableCoursePageProps) => {
  return <StudentsOnTeachableCourseCell id={id} />
}

export default StudentsOnTeachableCoursePage
