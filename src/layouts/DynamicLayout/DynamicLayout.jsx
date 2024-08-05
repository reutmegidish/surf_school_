import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'

const DynamicLayout = () => {
  return (
    <div>
      <header>{<Navbar />}</header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default DynamicLayout
