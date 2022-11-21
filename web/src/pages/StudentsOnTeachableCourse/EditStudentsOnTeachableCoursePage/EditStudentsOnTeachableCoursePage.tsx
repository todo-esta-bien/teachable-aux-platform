import EditStudentsOnTeachableCourseCell from 'src/components/StudentsOnTeachableCourse/EditStudentsOnTeachableCourseCell'

type StudentsOnTeachableCoursePageProps = {
  id: number
}

const EditStudentsOnTeachableCoursePage = ({
  id,
}: StudentsOnTeachableCoursePageProps) => {
  return <EditStudentsOnTeachableCourseCell id={id} />
}

export default EditStudentsOnTeachableCoursePage
