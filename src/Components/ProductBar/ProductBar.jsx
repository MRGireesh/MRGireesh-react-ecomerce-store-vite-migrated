import { storeData } from "../../assets/data/dummyData";
import { ProductCard } from "../ProductCard/ProductCard";
    import clothes from "../../assets/images/clothes.jpg";

export const ProductBar = () => {
  let itemNum = 0;
  return (
    <div>
    <div className="bg-black p-2 w-[55%] mx-auto rounded">
        <h3 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
          ***DISCOUNT UPTO 50% OFF***
        </h3>
      </div>
      <div className="flex justify-center item-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    <div className="grid grid-cols-3 my-12 mx-40 p-8 border-black ">
      {storeData.map((product , index) => {
        if (itemNum < 6) {
          itemNum++;
          return (
            <div key={index} className="my-6">            <ProductCard
              id={product.id}
              name={product.name}
              text={product.text}
              img={product.img}
              price={product.price}
              colors={product.color}
              type={product.type}
            />
            </div>
          );
          
        } else {
          return;
        }
      })}
    </div><div className="bg-red-300 p-2 w-[55%] mx-auto rounded m-4">
        <h3 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
          ***DISCOUNT UPTO 50% OFF Claim Now***
        </h3>
      </div>
      </div>
  );
};
