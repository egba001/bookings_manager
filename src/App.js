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
      <div className='bg-red'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/bookings" className="btn">
                  <FaCalendarAlt />
                  <span>Bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/bookables" className="btn">
                  <FaDoorOpen />
                  <span>Bookables</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" className="btn">
                  <FaUsers />
                  <span>Users</span>
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
      </div>
    </Router>
  )
}

export default App;
