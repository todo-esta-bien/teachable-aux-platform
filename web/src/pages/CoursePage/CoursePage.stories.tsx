import type { ComponentMeta } from '@storybook/react'

import CoursePage from './CoursePage'

export const generated = (args) => {
  return <CoursePage {...args} />
}

export default {
  title: 'Pages/CoursePage',
  component: CoursePage,
  args: {
    courseId: 69,
    authToken: 'mamalon',
  },
  argTypes: {
    courseId: {
      control: 'number',
    },
    authToken: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof CoursePage>
