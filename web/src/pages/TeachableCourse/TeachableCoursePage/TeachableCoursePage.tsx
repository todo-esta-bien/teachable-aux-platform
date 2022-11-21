import TeachableCourseCell from 'src/components/TeachableCourse/TeachableCourseCell'

type TeachableCoursePageProps = {
  id: number
}

const TeachableCoursePage = ({ id }: TeachableCoursePageProps) => {
  return <TeachableCourseCell id={id} />
}

export default TeachableCoursePage
