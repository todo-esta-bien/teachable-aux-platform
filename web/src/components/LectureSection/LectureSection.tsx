import { useState } from 'react'

interface ILectureSection {
  children: React.ReactNode
  sectionName: string
}

const LectureSection = ({ children, sectionName }: ILectureSection) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const toggleVisibility = () => setIsVisible((prevState) => !prevState)
  return (
    <div>
      <h1 className="pb-4 text-lg">
        <button onClick={toggleVisibility} className="btn-ghost btn">
          {sectionName}
        </button>
      </h1>
      <div>{isVisible && children}</div>
    </div>
  )
}

export default LectureSection
