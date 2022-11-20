// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LectureSection> = (args) => {
//   return <LectureSection {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import LectureSection from './LectureSection'

export const generated: ComponentStory<typeof LectureSection> = (args) => {
  return <LectureSection {...args} />
}

export default {
  title: 'Components/LectureSection',
  component: LectureSection,
} as ComponentMeta<typeof LectureSection>
