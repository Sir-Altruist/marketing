import { LockClosedIcon } from "@heroicons/react/outline";

export default function Payment() {
  return (
    <>
      {/* Main content header */}
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-xl font-semibold whitespace-nowrap">Payment</h1>
      </div>

      {/* Start content */}

      {/* ========== Payment content start ========== */}
      <div>
        <span className="text-xl mt-5 block">Payment methods</span>
        <div className="shadow-lg py-4 bg-white rounded-md flex flex-col">
          <div className="px-4">
            <button className="bg-blue-600 py-2 px-5 rounded-md text-white">
              Card
            </button>
            <button className="py-2 px-5 rounded-md">Paypal</button>
          </div>
          <p className="px-4 mb-3 mt-2">
            This is the <span className="font-bold">card number</span> that will
            be used every month
          </p>
          <span className="px-4 font-bold">Card Information</span>
          <form className="px-4 mt-3 md:w-2/5 w-full">
            <div class="w-full mb-5">
              <label
                htmlFor="card-number"
                className="font-extralight text-gray-500"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                className="w-full px-4 py-1 text-gray-600 border-2 border-gray-400 rounded-lg outline-none md:px-8 focus:shadow-xl"
              />
            </div>

            <div class="w-full md:w-3/5 mb-5">
              <label
                htmlFor="card-number"
                className="font-extralight text-gray-500"
              >
                Expiration Date
              </label>
              <div className="flex items-center justify-between">
                <div className="w-24">
                  <input
                    type="text"
                    id="card-number"
                    placeholder="MM"
                    className="w-full px-4 py-1 text-gray-600 border-2 border-gray-400 rounded-lg outline-none md:px-8 focus:shadow-xl"
                  />
                </div>
                <div>/</div>
                <div className="w-24">
                  <input
                    type="text"
                    id="card-number"
                    placeholder="YY"
                    className="w-full px-4 py-1 text-gray-600 border-2 border-gray-400 rounded-lg outline-none md:px-8 focus:shadow-xl"
                  />
                </div>
              </div>
            </div>

            <div class="w-full mb-5 relative">
              <label
                htmlFor="card-number"
                className="font-extralight text-gray-500"
              >
                Security Code
              </label>
              <input
                type="password"
                id="card-number"
                className="w-full px-4 py-1 text-gray-600 border-2 border-gray-400 rounded-lg outline-none md:px-8 focus:shadow-xl"
              />
              <LockClosedIcon
                width={25}
                className="text-gray-600 absolute top-7 right-4"
              />
            </div>

            <div class="w-full mb-5">
              <label
                htmlFor="card-number"
                className="font-extralight text-gray-500"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="card-number"
                className="w-full px-4 py-1 text-gray-600 border-2 border-gray-400 rounded-lg outline-none md:px-8 focus:shadow-xl"
              />
            </div>
          </form>
          <button className="bg-purple-800 self-center py-2 px-4 rounded-lg outline-none text-white">
            Save Changes
          </button>
        </div>
      </div>
      {/* ========== Payment content End ========== */}
    </>
  );
}
