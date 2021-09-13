import { useSelector } from 'react-redux'
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  BellIcon,
} from "@heroicons/react/outline";
import { logout } from '../../actions/marketerAction'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Salisu from "../../assets/home/salisu.jpg";

function NavBar({ chevronClicked, show }) {

  const dispatch = useDispatch()
  const history = useHistory()
  const marketerDetails = useSelector(state => state.marketerDetailsReducer)
  const { user } = marketerDetails
 

  const handleLogout = () => {
    dispatch(logout())
    history.push('/login/marketer')
}

  return (
    <header className="flex-shrink-1 border-b bg-white">
      <div className="flex items-center justify-between p-2">
        {/* Navbar Left */}
        <div className="flex items-center">
          <button
            onClick={chevronClicked}
            className={`p-2 rounded-md focus:outline-none focus:ring`}
          >
            {show ? (
              <ChevronDoubleLeftIcon width={30} />
            ) : (
              <ChevronDoubleRightIcon width={30} />
            )}
          </button>
        </div>

        {/* Navbar Right */}
        <div className="relative flex items-center space-x-3">
          <div className="items-center space-x-3 flex">
            <h4
            onClick={handleLogout}
            style={{ cursor: 'pointer'}}>
              Log Out
            </h4>
            {/*Notification Button */}
            <div className="relative">
              <div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
              <div className="absolute outline-none right-0 p-1 bg-red-400 border rounded-full"></div>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring">
                <BellIcon width={30} />
              </button>
            </div>

            <h4>{user ? user.name : null}</h4>

            {/* Avatar */}
            <div className="relative">
              <button className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src={Salisu}
                  alt="Salisu Shuaibu"
                />
              </button>
              {/* Green dots */}
              <div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"></div>
              <div className="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
