import { Outlet } from 'react-router-dom'

import { Footer, Navbar } from '../../components'

const DynamicLayout = () => {
  return (
    <div>
      <header>{<Navbar />}</header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DynamicLayout
