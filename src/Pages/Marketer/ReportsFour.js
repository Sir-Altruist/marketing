import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../../actions/productAction'


export default function ReportsFour() {

  const dispatch = useDispatch()
  const productLists = useSelector(state => state.productReducers)
  const { loading, error, products } = productLists

  useEffect(() => {
    dispatch(productList())
  }, [dispatch])

  let listOfProducts = products.length > 0 ? 
  <>
  {products && products.map((product, i) => {
    return (
      <article className="bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
  <div className="relative">
    <img src={`${process.env.REACT_APP_API_URL}${product.productImg}`} alt="product" className="w-full" />
    <span
      style={{ left: "4rem" }}
      className="absolute top-20 text-xl bg-blue-600 bg-blend-multiply py-2 px-6 rounded-lg font-bold text-white"
    >
       Commission {product.commission}&#37;
    </span>
  </div>
  <div className="px-6">
    <p className="font-semibold text-md">{product.name}</p>
    <span className="block pb-5 pt-2 font-extralight">
     {product.description}
    </span>
    <span className="block pb-5 text-purple-500 font-bold text-md">
      {product.amount}
    </span>
  </div>
  </article>
    )
  })}
</> : <h2>No product has been uploaded yet...</h2>


  return (
    <>
      {/* Main content header */}
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-xl font-bold whitespace-nowrap">Total Products</h1>
      </div>

      {/* Start content */}
      <div className="grid grid-cols-1 mt-6 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {listOfProducts}
      </div>
      {/* ========== Start content end ========= */}
    </>
  );
}
