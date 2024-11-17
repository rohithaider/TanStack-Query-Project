import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IdContext } from "../../context/IDContext";

const retrieveProducts = async ({queryKey}) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
  return response.data;
};

 const ProductList = () => {
  const {setId} = useContext(IdContext);
  

  const {data:products, error, isLoading} =useQuery({
    queryKey: ["products"],
    queryFn:retrieveProducts,
  });

  if (isLoading) return <div>Fetching Products.......</div>
  if(error) return <div>An error occured: {error.message}</div>
  return (<div className="flex flex-col justify-center  items-center w-3/5">

    <h2 className="text-3xl my-2">Product List</h2>
    <ul className="flex flex-wrap justify-center items-center">
        {products && products.map(product=>(
            <li key={product.id} className="flex flex-col items-center m-2 border rounded-sm">
                <img src={product.thumbnail} alt={product.title} className="object-cover h-64 w-96  rounded-sm" />
                <p className="text-xl my-3">{product.title}</p>
                <button onClick={()=>setId(product.id)} className="bg-blue-100 p-2 border rounded-2xl mb-2 text-red-500 font-bold">Show Details</button>
            </li>
        ))}
    </ul>


  </div>)
};

export default ProductList;