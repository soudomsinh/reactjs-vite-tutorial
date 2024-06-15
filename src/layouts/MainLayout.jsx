import { Outlet } from "react-router-dom"
import Navbar from "../conmponents/Navbar"

const MainLayout = () => {
  return (
   <>   
        <Navbar />
        <Outlet />
   </>
  )
}

export default MainLayout