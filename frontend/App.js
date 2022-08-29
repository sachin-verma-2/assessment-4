
import LoginToken from './jwt token/LoginToken'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import DashBoardToken from './jwt token/Dashboard'
import SignUp from './jwt token/Signup'
import Main from "./asses4/main"
import Register from './asses4/register'
import Userlogin from './asses4/userlogin'
import Dashboard from './asses4/dashboard'
import AdminDashboard from './asses4/admindashborad'
function App()
{
    return(
       <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main></Main>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/userlogin' element={<Userlogin></Userlogin>}></Route>
            <Route path='/adminlogin' element={<Userlogin></Userlogin>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/admindashboard' element={<AdminDashboard></AdminDashboard>}></Route>
        </Routes>
        </BrowserRouter>
       </div>
    )
}
export default App