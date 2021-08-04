import { NavLink } from "react-router-dom";
// import Reports from "../../assets/icons/report.svg";

import {
  TrendingUpIcon,
  UserAddIcon,
  ViewGridIcon,
  CreditCardIcon,
  XIcon,
} from "@heroicons/react/outline";

// initial width = 64

function SideBar({ show, closed }) {
  return (
    <>
      <aside
        className={`fixed bg-white inset-y-0 z-50 flex flex-col flex-shrink-0 ${
          show ? "w-64" : "w-0"
        } max-h-screen overflow-hidden transition-all transform border-r shadow-lg lg:z-auto lg:shadow-none`}
      >
        <div className="flex items-center justify-between flex-shrink-0 p-2">
          <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
            <span className="text-purple-500">{show ? "Affliate" : "AF"}</span>
          </span>
          <XIcon
            width={20}
            className="block cursor-pointer"
            onClick={closed}
          />
        </div>

        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
          <ul className="p-2 space-y-5 overflow-hidden">
            <li>
              <NavLink
                to="/marketer/dashboard"
                exact
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <ViewGridIcon width={22} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>
                  Dashboard
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketer/products"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <ViewGridIcon width={22} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>Products</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketer/reports"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <TrendingUpIcon width={22} className="" />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>Reports</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketer/reportsone"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <TrendingUpIcon width={22} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>
                  Reports One
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketer/reportstwo"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <TrendingUpIcon width={22} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>
                  Reports Two
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketer/reportsthree"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <TrendingUpIcon width={22} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>
                  Reports Three
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketer/reportsfour"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <TrendingUpIcon width={22} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>
                  Reports Four
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketer/invitation"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <UserAddIcon width={22} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>
                  Invitation
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketer/payment"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <CreditCardIcon width={22} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>Payment</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SideBar;
