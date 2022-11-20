// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LessonsDrawer> = (args) => {
//   return <LessonsDrawer {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import LessonsDrawer from './LessonsDrawer'

export const generated: ComponentStory<typeof LessonsDrawer> = (args) => {
  return <LessonsDrawer {...args} />
}

export default {
  title: 'Components/LessonsDrawer',
  component: LessonsDrawer,
  args: {
    courseName: 'My Course Name',
    lectureSections: [
      { name: 'My Section', is_published: true, lectures: [{ id: 1 }] },
    ],
  },
} as ComponentMeta<typeof LessonsDrawer>
