import './App.css'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import Dashboard from './UserDashboard/Dashboard'
import Profile from './UserDashboard/Profile'
import Intrest from './UserDashboard/Intrest'
import Myplandetails from './UserDashboard/Myplandetails'
import Askyourdoubts from './Pages/Askyourdoubts'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Faq from './Pages/Faq'
import Settings from './UserDashboard/Settings'
import EditeProfile from './UserDashboard/EditeProfile'
import Aboutus from './Pages/Aboutus'
import Contactus from './Pages/Contactus'
import Error from './Pages/Error'
import Pricingplans from './Pages/Pricingplans'
import Allprofiles from './Pages/Allprofiles'
// import Temp from './Pages/Temp'

function App() {


  return (
    <>   

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/intrest' element={<Intrest/>}/>
      <Route path='/myplan' element={<Myplandetails/>}/>
      <Route path='/askyourdoubts' element={<Askyourdoubts/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/edite/profile' element={<EditeProfile/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/error' element={<Error/>}/>
      <Route path='/plan' element={<Pricingplans/>}/>
      <Route path='/allprofiles' element={<Allprofiles/>}/>
      
    </Routes> 
   
   {/* <Temp/> */}
    </>
  )
}

export default App
