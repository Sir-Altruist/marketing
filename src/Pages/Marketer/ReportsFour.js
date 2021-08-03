import Laptop from "../../assets/home/laptop1.png";
import Mouse from "../../assets/home/mouse.png";
import Xbox from "../../assets/home/xbox.png";

export default function ReportsFour() {
  return (
    <>
      {/* Main content header */}
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-xl font-bold whitespace-nowrap">Total Products</h1>
      </div>

      {/* Start content */}
      <div className="grid grid-cols-1 mt-6 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="relative">
            <img src={Laptop} alt="Laptop" className="w-full" />
            <span
              style={{ left: "4rem" }}
              className="absolute top-20 text-xl bg-blue-600 bg-blend-multiply py-2 px-6 rounded-lg font-bold text-white"
            >
              Commission 25%
            </span>
          </div>
          <div className="px-6">
            <p className="font-semibold text-md">Laptop-AsusMX456GM</p>
            <span className="block pb-5 pt-2 font-extralight">
              Core i7 Gen 11, Ram 16 Gb
            </span>
            <span className="block pb-5 text-purple-500 font-bold text-md">
              $1000
            </span>
          </div>
        </article>

        <article className="bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="relative">
            <img src={Mouse} alt="Mouse" className="w-full" />
            <span className="absolute top-20 right-16 text-xl bg-blue-600 bg-blend-multiply py-2 px-6 rounded-lg font-bold text-white">
              Commission 25%
            </span>
          </div>
          <div className="px-6">
            <p className="font-semibold text-md">Laptop-AsusMX456GM</p>
            <span className="block pb-5 pt-2 font-extralight">
              Core i7 Gen 11, Ram 16 Gb
            </span>
            <span className="block pb-5 text-purple-500 font-bold text-md">
              $1000
            </span>
          </div>
        </article>

        <article className="bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="relative">
            <img src={Xbox} alt="Xbox" className="w-full" />
            <span className="absolute top-20 right-16 text-xl bg-blue-600 bg-blend-multiply py-2 px-6 rounded-lg font-bold text-white">
              Commission 25%
            </span>
          </div>
          <div className="px-6">
            <p className="font-semibold text-md">Laptop-AsusMX456GM</p>
            <span className="block pb-5 pt-2 font-extralight">
              Core i7 Gen 11, Ram 16 Gb
            </span>
            <span className="block pb-5 text-purple-500 font-bold text-md">
              $1000
            </span>
          </div>
        </article>
      </div>
      {/* ========== Start content end ========= */}
    </>
  );
}
