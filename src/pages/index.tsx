import { Outlet } from 'react-router-dom'
import 'assets/style.scss'
import TopNavBar from 'components/ui/topNavBar'

const Layout = () => {
  return (
    <>
      <TopNavBar />
      <main className="fluid-container">
        <div className="bg-body-tertiary p-2 rounded">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Layout
