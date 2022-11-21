import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HomeNavbar from 'src/components/HomeNavbar'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <HomeNavbar />
      <section className="h-screen bg-base-200 p-6"></section>
    </>
  )
}

export default HomePage
