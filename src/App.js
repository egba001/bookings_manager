import './index.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import BookablesPage from "./components/Bookables/BookablesPage";
import BookingsPage from "./components/Bookings/BookingsPage";
import UsersPage from "./components/Users/UsersPage";
import UserPicker from "./components/Users/UserPicker.js";

function App() {
  return (
    <Router>
        <header className='flex bg-blue-500 w-screen justify'>
          <nav className='w-3/4 px-4'>
            <ul className='py-3 flex w-full'>
              <li className='w-2/4  text-green-800 bg-blue-100  p-2 rounded-lg mr-2 hover:bg-blue-300'>
                <NavLink to="/bookings" className="flex text-center items-center  justify-center">
                  <FaCalendarAlt />
                  <span className='pl-2 text-sm'>Bookings</span>
                </NavLink>
              </li>
              <li className=' group w-2/4 text-green-800 bg-blue-100  p-2 rounded-lg mr-2 hover:bg-blue-300'>
                <NavLink to="/bookables" className="flex text-center items-center  justify-center">
                  <FaDoorOpen />
                  <span className='pl-2 text-sm'>Bookables</span>
                </NavLink>
              </li>
              <li className='w-2/4  text-green-800 bg-blue-100  p-2 rounded-lg mr-2 hover:bg-blue-300'>
                <NavLink to="/users" className="flex text-center items-center  justify-center">
                  <FaUsers />
                  <span className='pl-2 text-sm'>Users</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <UserPicker />
        </header>

        <Routes>
          <Route path="/bookings" element={<BookingsPage />}/>
          <Route path="/bookables" element={<BookablesPage />}/>
          <Route path="/users" element={<UsersPage />}/>
        </Routes>
    </Router>
  )
}

export default App;
