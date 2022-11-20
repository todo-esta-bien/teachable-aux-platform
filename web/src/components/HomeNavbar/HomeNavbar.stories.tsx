// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof HomeNavbar> = (args) => {
//   return <HomeNavbar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import HomeNavbar from './HomeNavbar'

export const generated = () => {
  return <HomeNavbar />
}

export const loggedIn = () => {
  mockCurrentUser({
    id: 1,
    email: 'moderator@moderator.com',
    name: 'Leticia Neri',
  })

  return <HomeNavbar />
}

export default {
  title: 'Components/HomeNavbar',
  component: HomeNavbar,
} as ComponentMeta<typeof HomeNavbar>
