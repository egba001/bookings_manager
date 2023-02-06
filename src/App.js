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
        <header className='flex bg-blue-500 w-full justify-between'>
          <nav className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <ul className='py-3 flex w-full px-0'>
              <li className='btn mr-2 hover:bg-blue-500'>
                <NavLink to="/bookings" className="flex text-center items-center justify-center">
                  <FaCalendarAlt />
                  <span className='icon-space'>Bookings</span>
                </NavLink>
              </li>
              <li className='btn mr-2 hover:bg-blue-500'>
                <NavLink to="/bookables" className="flex text-center items-center  justify-center">
                  <FaDoorOpen />
                  <span className='icon-space'>Bookables</span>
                </NavLink>
              </li>
              <li className='btn hover:bg-blue-500'>
                <NavLink to="/users" className="flex text-center items-center  justify-center">
                  <FaUsers />
                  <span className='icon-space'>Users</span>
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
