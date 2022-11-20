import type { ComponentMeta } from '@storybook/react'

import HomePage from './HomePage'

export const generated = () => {
  return <HomePage />
}

export const loggedIn = () => {
  mockCurrentUser({
    id: 1,
    email: 'moderator@moderator.com',
    name: 'Leticia Neri',
  })
  return <HomePage />
}

export default {
  title: 'Pages/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>
