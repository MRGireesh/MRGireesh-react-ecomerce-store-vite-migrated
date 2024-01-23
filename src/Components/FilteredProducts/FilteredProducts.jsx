import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect } from "react";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";

export const FilteredProducts = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const products = useSelector((state) => state.products.filteredProducts);
  useEffect (() => {
    // scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="bg-pink-50 ">
      <div className="p-10">
        <div className="py-8 mb-2 flex ">
          <div className=" flex-1 ">
            <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
              {type }
            </h1>
          </div>
          <div>
            <Link to="/" className=" flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 pb-0 m-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <h2 className="pt-2 pb-0 text-4lg font-inter text-center text-gray-600 font-bold tracking-normal leading-none">
                Home
              </h2>
            </Link>
          </div>
        </div>
        <NavigationButtons/>
        <div className="grid grid-cols-1 justify-items-center py-8 gap-12 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          { 
          products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  img={product.img}
                  price={product.price}
                  text={product.text}
                  colors={product.color}
                  type = {product.type}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
