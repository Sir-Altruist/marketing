import Laptop from "../../assets/home/laptop.png";

export default function Invitation() {
  return (
    <>
      {/* Main content header */}
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-xl font-semibold whitespace-nowrap">Invitation</h1>
      </div>
      {/* Start content */}

      {/* ========== Invitation Container Start ========== */}
      <div className="py-10 invite px-36 flex flex-col text-white items-center justify-center bg-blue-600 bg-blend-multiply rounded-md">
        <div className="flex flex-col justify-center items-center py-2">
          <h2 className="text-2xl text-center font-extrabold">
            Invite Friends and Earn Active Commission
          </h2>
          <p className="text-center my-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            nesciunt magnam impedit culpa eaque voluptatibus, ab voluptatum
            accusantium voluptate velit, molestiae suscipit earum fuga quaerat
            dolores, perspiciatis voluptates sint quasi.
          </p>
          <div className="relative">
            <input
              className="h-10 px-5 w-80 border border-gray-400 rounded-md outline-none"
              type="text"
              value="http://AsusMx/4548"
              contentEditable={false}
            />
            <button className="bg-blue-600 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute left-56">
              Copy Link
            </button>
          </div>
        </div>
      </div>
      {/* ========== Invitation Container End ========== */}

      {/* ========== Product Order Start ========== */}
      <div>
        <span className="text-xl mt-5 block">Product Sale Details</span>
        <div className="shadow-lg py-4 bg-white rounded-md flex flex-col">
          <select className="outline-none mt-2 mb-5 ml-5 border border-blue-600 rounded-md py-2 px-4 w-48 bg-white">
            <option value="Seven Days">Last 7 Days</option>
          </select>
          <div>
            <table className="h-64 w-full mb-5">
              <thead className="border-b border-gray-400">
                <tr>
                  <th className="text-left pl-6">Invitation Name</th>
                  <th className="text-left">Join Date</th>
                  <th className="text-left">Email</th>
                  <th className="text-left">Phone Number</th>
                  <th className="text-left">Commission</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="flex items-center space-x-3 pl-5">
                    <img className="rounded-full" src={Laptop} alt="Laptop" />
                    <h4>Robert Lewandoski</h4>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-5 flex items-center">325</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex items-center space-x-3 pl-5">
                    <img className="rounded-full" src={Laptop} alt="Laptop" />
                    <h4>Robert Lewandoski</h4>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-5 flex items-center">325</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex items-center space-x-3 pl-5">
                    <img className="rounded-full" src={Laptop} alt="Laptop" />
                    <h4>Robert Lewandoski</h4>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-5 flex items-center">325</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex items-center space-x-3 pl-5">
                    <img className="rounded-full" src={Laptop} alt="Laptop" />
                    <h4>Robert Lewandoski</h4>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-5 flex items-center">325</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="bg-blue-600 self-center py-2 px-4 rounded-md outline-none text-white">
            View All
          </button>
        </div>
      </div>
      {/* ========== Product Order End ========== */}
    </>
  );
}
