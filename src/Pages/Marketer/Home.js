import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { details } from '../../actions/marketerAction'
import { getClickCount } from '../../actions/clickAction'
import ClickIcon from "../../assets/icons/click.svg";
import OrderIcon from "../../assets/icons/product.svg";
import SalesIcon from "../../assets/icons/sales.svg";
import CommissionIcon from "../../assets/icons/commision_icon.svg";


export default function Dashboard() {

  const history = useHistory()
  const dispatch = useDispatch()
  const marketerLogin = useSelector(state => state.marketerLoginReducer)
  const {marketerInfo} = marketerLogin
  const marketerDetails = useSelector(state => state.marketerDetailsReducer)
  const { user } = marketerDetails
  const clickDetails = useSelector(state => state.getClickReducer)
  const { click } = clickDetails


  useEffect(() => {
    if(!marketerInfo){
        history.push('/login/marketer')
    } else {
        dispatch(details())
        dispatch(getClickCount())
    }
}, [marketerInfo, history, dispatch])
  return (
    <>
      {/* Main content header start */}
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-xl font-semibold whitespace-nowrap">
          Welcome back, {user ? user.name : null}
        </h1>
      </div>
      {/* Main content header end */}

      {/* Start content */}
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-blue-500 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={ClickIcon} alt="How many clicked icon" />
              </div>
              <span className="text-lg font-semibold">click</span>
            </div>
            <span className="text-2xl ml-24">{click}</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-yellow-300 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={OrderIcon} alt="Order" />
              </div>
              <span className="text-lg font-semibold">Order</span>
            </div>
            <span className="text-2xl ml-24">175</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-blue-600 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={SalesIcon} alt="How many clicked icon" />
              </div>
              <span className="text-lg font-semibold">Total Sales</span>
            </div>
            <span className="text-2xl ml-24">88</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <img src={CommissionIcon} alt="How many clicked icon" />
              <span className="text-lg font-semibold">Commission</span>
            </div>
            <span className="text-2xl ml-24">$8,777</span>
          </div>
        </article>
      </div>
      {/* ========== Start content end ========= */}

      {/* ========== Statistics start ==========*/}
      <div>
        <span className="text-xl mt-5 block">Click Statistics</span>
        <div className="shadow-lg p-4 w-full h-80 bg-white rounded-md">
          <select className="outline-none border border-blue-600 rounded-md py-2 px-4 w-64 bg-white">
            <option value="Seven Days">Last 7 Days</option>
          </select>
          <div className="mt-10">Statistics Chart goes here</div>
        </div>
      </div>
      {/* ========== Statistics end ==========*/}

      {/* ========== Detail Order Start ========== */}
      <div>
        <span className="text-xl mt-5 block">Detail Order</span>
        <div className="shadow-lg py-4 bg-white rounded-md flex flex-col">
          <table className="min-w-full overflow-x-scroll mb-5">
            <thead className="border-b border-gray-400">
              <tr>
                <th className="text-left pl-6">Data</th>
                <th className="text-left">Click</th>
                <th className="text-left">Order</th>
                <th className="text-left">Presentase</th>
                <th className="text-left">Total sales</th>
                <th className="text-left">Commision</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-400">
                <td className="pl-6">7, June 2021</td>
                <td>30</td>
                <td>10</td>
                <td>3.0%</td>
                <td>3.0%</td>
                <td>$1000</td>
              </tr>
              <tr className="border-b border-gray-400">
                <td className="pl-6">7, June 2021</td>
                <td>30</td>
                <td>10</td>
                <td>3.0%</td>
                <td>3.0%</td>
                <td>$1000</td>
              </tr>
              <tr className="border-b border-gray-400">
                <td className="pl-6">7, June 2021</td>
                <td>30</td>
                <td>10</td>
                <td>3.0%</td>
                <td>3.0%</td>
                <td>$1000</td>
              </tr>
              <tr className="border-b border-gray-400">
                <td className="pl-6">7, June 2021</td>
                <td>30</td>
                <td>10</td>
                <td>3.0%</td>
                <td>3.0%</td>
                <td>$1000</td>
              </tr>
            </tbody>
          </table>
          <button className="bg-purple-800 self-center py-2 px-4 rounded-md outline-none text-white">
            View All
          </button>
        </div>
      </div>
      {/* ========== Detail Order End ========== */}
    </>
  );
}
