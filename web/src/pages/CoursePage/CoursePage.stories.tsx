import type { ComponentMeta } from '@storybook/react'

import CoursePage from './CoursePage'

export const generated = () => {
  return <CoursePage />
}

export default {
  title: 'Pages/CoursePage',
  component: CoursePage,
} as ComponentMeta<typeof CoursePage>
