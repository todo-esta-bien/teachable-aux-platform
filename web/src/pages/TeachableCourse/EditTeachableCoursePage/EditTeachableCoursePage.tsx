import EditTeachableCourseCell from 'src/components/TeachableCourse/EditTeachableCourseCell'

type TeachableCoursePageProps = {
  id: number
}

const EditTeachableCoursePage = ({ id }: TeachableCoursePageProps) => {
  return <EditTeachableCourseCell id={id} />
}

export default EditTeachableCoursePage
