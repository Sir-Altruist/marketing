import TotalProductIcon from "../../assets/icons/product.svg";
import TotalOrderIcon from "../../assets/icons/product.svg";
import TotalSalesIcon from "../../assets/icons/success.svg";
import TotalPendingIcon from "../../assets/icons/pending.svg";
import TotalCancelIcon from "../../assets/icons/cancel.svg";
import TotalWithdrawIcon from "../../assets/icons/withdraw.svg";
import TotalPendingWithdrawIcon from "../../assets/icons/pendingWithdraw.svg";
import CommissionIcon from "../../assets/icons/commision_icon.svg";
import Laptop from "../../assets/home/laptop.png";

import { EyeIcon, TrashIcon } from "@heroicons/react/outline";

export default function Reports() {
  return (
    <>
      {/* Main content header */}
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-xl font-semibold whitespace-nowrap">Reports</h1>
      </div>

      {/* Start content */}
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-pink-500 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={TotalProductIcon} alt="Total Product icon" />
              </div>
              <span className="text-md font-semibold">Total Product</span>
            </div>
            <span className="text-2xl ml-24">3</span>
          </div>
        </article>

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-yellow-300 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={TotalOrderIcon} alt="Total Order icon" />
              </div>
              <span className="text-md font-semibold">Total Order</span>
            </div>
            <span className="text-2xl ml-24">182</span>
          </div>
        </article>

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-green-600 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={TotalSalesIcon} alt="Total sales icon" />
              </div>
              <span className="text-md font-semibold">Sales Success</span>
            </div>
            <span className="text-2xl ml-24">175</span>
          </div>
        </article>

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-blue-600 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={TotalPendingIcon} alt="Total pendings icon" />
              </div>
              <span className="text-md font-semibold">Pending</span>
            </div>
            <span className="text-2xl ml-24">5</span>
          </div>
        </article>

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-blue-600 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={TotalCancelIcon} alt="Total cancel icon" />
              </div>
              <span className="text-md font-semibold">Cancel Order</span>
            </div>
            <span className="text-2xl ml-24">2</span>
          </div>
        </article>

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <img src={CommissionIcon} alt="How many clicked icon" />
              <span className="text-md font-semibold">Commission</span>
            </div>
            <span className="text-2xl ml-24">$7262</span>
          </div>
        </article>

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-blue-600 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={TotalWithdrawIcon} alt="Total Withdraw" />
              </div>
              <span className="text-md font-semibold">Withdraw</span>
            </div>
            <span className="text-2xl ml-24">$120</span>
          </div>
        </article>

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-blue-600 flex justify-center items-center w-10 h-8 rounded-lg">
                <img
                  src={TotalPendingWithdrawIcon}
                  alt="Total pending withdraw icon"
                />
              </div>
              <span className="text-md font-semibold">Pending Withdraw</span>
            </div>
            <span className="text-2xl ml-24">$50</span>
          </div>
        </article>
      </div>
      {/* ========== Start content end ========= */}

      {/* ========== Product Sale Details Start ========== */}
      <div>
        <span className="text-xl mt-5 block">Product Sale Details</span>
        <div className="shadow-lg py-4 bg-white rounded-md flex flex-col">
          <select className="outline-none mt-2 mb-5 ml-5 border border-blue-600 rounded-md py-2 px-4 w-48 bg-white">
            <option value="Seven Days">Last 7 Days</option>
          </select>
          <div>
            <table className="h-64 w-full mb-5">
              <thead className="border-b border-gray-400 text-gray-500 font-thin">
                <tr>
                  <th className="text-left pl-6">Active Products</th>
                  <th className="text-left">Total Click</th>
                  <th className="text-left">Total Order</th>
                  <th className="text-left">Total Commisions</th>
                  <th className="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 p-3">
                    <img
                      className="rounded-full max-h-14"
                      src={Laptop}
                      alt="Laptop"
                    />
                    <div>
                      <span className="block font-bold break-words">
                        Laptop-AsusMX456GM
                      </span>
                      <span className="block font-light break-words">
                        Core i7 Gen 11, Ram 16 Gb
                      </span>
                    </div>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-2 lg:space-x-4 md:space-x-4">
                    <EyeIcon
                      width={20}
                      className="cursor-pointer inline-block"
                    />
                    <TrashIcon
                      width={20}
                      className="text-red-500 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 p-3">
                    <img
                      className="rounded-full max-h-14"
                      src={Laptop}
                      alt="Laptop"
                    />
                    <div>
                      <span className="block font-bold break-words">
                        Laptop-AsusMX456GM
                      </span>
                      <span className="block font-light break-words">
                        Core i7 Gen 11, Ram 16 Gb
                      </span>
                    </div>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-2 lg:space-x-4 md:space-x-4">
                    <EyeIcon
                      width={20}
                      className="cursor-pointer inline-block"
                    />
                    <TrashIcon
                      width={20}
                      className="text-red-500 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 p-3">
                    <img
                      className="rounded-full max-h-14"
                      src={Laptop}
                      alt="Laptop"
                    />
                    <div>
                      <span className="block font-bold break-words">
                        Laptop-AsusMX456GM
                      </span>
                      <span className="block font-light break-words">
                        Core i7 Gen 11, Ram 16 Gb
                      </span>
                    </div>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-2 lg:space-x-4 md:space-x-4">
                    <EyeIcon
                      width={20}
                      className="cursor-pointer inline-block"
                    />
                    <TrashIcon
                      width={20}
                      className="text-red-500 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 p-3">
                    <img
                      className="rounded-full max-h-14"
                      src={Laptop}
                      alt="Laptop"
                    />
                    <div>
                      <span className="block font-bold break-words">
                        Laptop-AsusMX456GM
                      </span>
                      <span className="block font-light break-words">
                        Core i7 Gen 11, Ram 16 Gb
                      </span>
                    </div>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-2 lg:space-x-4 md:space-x-4">
                    <EyeIcon
                      width={20}
                      className="cursor-pointer inline-block"
                    />
                    <TrashIcon
                      width={20}
                      className="text-red-500 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 p-3">
                    <img
                      className="rounded-full max-h-14"
                      src={Laptop}
                      alt="Laptop"
                    />
                    <div>
                      <span className="block font-bold break-words">
                        Laptop-AsusMX456GM
                      </span>
                      <span className="block font-light break-words">
                        Core i7 Gen 11, Ram 16 Gb
                      </span>
                    </div>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-2 lg:space-x-4 md:space-x-4">
                    <EyeIcon
                      width={20}
                      className="cursor-pointer inline-block"
                    />
                    <TrashIcon
                      width={20}
                      className="text-red-500 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 p-3">
                    <img
                      className="rounded-full max-h-14"
                      src={Laptop}
                      alt="Laptop"
                    />
                    <div>
                      <span className="block font-bold break-words">
                        Laptop-AsusMX456GM
                      </span>
                      <span className="block font-light break-words">
                        Core i7 Gen 11, Ram 16 Gb
                      </span>
                    </div>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-2 lg:space-x-4 md:space-x-4">
                    <EyeIcon
                      width={20}
                      className="cursor-pointer inline-block"
                    />
                    <TrashIcon
                      width={20}
                      className="text-red-500 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="bg-purple-600 self-center py-2 px-4 rounded-md outline-none text-white">
            View All
          </button>
        </div>
      </div>
      {/* ========== Product Sale Details End ========== */}
    </>
  );
}
