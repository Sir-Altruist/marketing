import Laptop from "../../assets/home/laptop.png";

export default function ReportsThree() {
  return (
    <>
      {/* ========== Detail Order ========== */}
      <div>
        <span className="text-lg font-bold my-5 block">Total Order</span>
        <div className="shadow-lg py-4 bg-white rounded-md flex flex-col">
          <h3 className="text-purple-800 text-center mb-5 font-extrabold">
            "182 Products data found"
          </h3>
          <select className="outline-none mt-2 mb-5 ml-5 border border-blue-600 rounded-md py-2 px-4 w-48 bg-white">
            <option value="Seven Days">Show Last 7 Days</option>
          </select>
          <div>
            <table className="h-64 w-full mb-5 font-bold">
              <thead className="border-b border-gray-400 text-gray-500 font-thin">
                <tr>
                  <th className="text-left pl-6">Active Products</th>
                  <th className="text-left">Date</th>
                  <th className="text-left">Total Order</th>
                  <th className="text-left">Total Commisions</th>
                  <th className="text-left">Status</th>
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
                  <td>14, June 2021</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td>
                    <button className="text-white bg-green-600 w-24 py-2 rounded-lg">
                      Success
                    </button>
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
                  <td>14, June 2021</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td>
                    <button className="text-white bg-red-400 w-24 px-4 py-2 rounded-lg">
                      Canceled
                    </button>
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
                  <td>14, June 2021</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td>
                    <button className="text-white font-extrabold bg-yellow-200 w-24 px-4 py-2 rounded-lg">
                      Pending
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="bg-purple-800 self-center py-2 px-4 rounded-md outline-none text-white">
            View All
          </button>
        </div>
      </div>
      {/* ========== Detail Order End ========== */}
    </>
  );
}
