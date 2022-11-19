jest.mock('src/lib/teachableClient', () => {
  return {
    fetchLecture: jest.fn().mockImplementation(() => {
      return {
        id: 1,
        name: 'String',
        is_published: true,
        position: 2581310,
        lecture_section_id: 5744735,
        lectureSectionId: null,
      }
    }),
    fetchCourse: jest.fn().mockImplementation(() => {
      return {
        id: 1,
        name: 'String',
        description: null,
        heading: 'String',
        is_published: true,
        image_url: 'String',
      }
    })
  }
})
