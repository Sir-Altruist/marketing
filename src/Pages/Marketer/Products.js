import Laptop from "../../assets/home/laptop.png";

export default function Products() {
  return (
    <>
      <h2 className="font-bold text-xl mb-10">Products</h2>
      <div>
        <div className="mb-3">
          <button className="bg-purple-800 outline-none py-2 px-5 rounded-md text-white">
            All
          </button>
          <button className="py-2 px-5 rounded- outline-none font-light">
            New Products
          </button>
          <button className="py-2 px-5 rounded-md outline-none font-light">
            Popular products
          </button>
          <button className="py-2 px-5 rounded-md outline-none font-light">
            High Compensations
          </button>
        </div>
        <div className="shadow-lg w-full py-4 bg-white rounded-md">
          <table className="w-full mb-5">
            <thead className="border-b border-gray-800">
              <tr className="font-light text-gray-300">
                <th className="text-left p-3">Product Name</th>
                <th className="text-left">Product Price</th>
                <th className="text-left">Commission Sales</th>
                <th className="text-left">Affliate Referral Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
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
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-64 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button
                    style={{ left: "13rem" }}
                    className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute top-5"
                  >
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
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
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-64 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button
                    style={{ left: "13rem" }}
                    className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute top-5"
                  >
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
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
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-64 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button
                    style={{ left: "13rem" }}
                    className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute top-5"
                  >
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
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
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-64 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button
                    style={{ left: "13rem" }}
                    className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute top-5"
                  >
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
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
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-64 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button
                    style={{ left: "13rem" }}
                    className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute top-5"
                  >
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
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
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-64 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button
                    style={{ left: "13rem" }}
                    className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute top-5"
                  >
                    Copy Link
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
