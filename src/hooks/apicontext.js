import  { useState } from "react";
import { useEffect,useCallback } from 'react';
import axios  from "axios";



export const useServer = () =>{

  const [loading, setLoading] = useState(false) 
  const [products,setProducts] = useState([]);
  const [error,setError] = useState("");


  const fetchApi = useCallback(async() =>{

      try{
        setLoading(true);
        setError("");
        const response = await axios('https://fakestoreapi.com/products');
        setProducts(response.data)
        setLoading(false)
      }
      catch(e){
          const error = e ;
          setError(error.message);
          setLoading(false);
      }


      
  },[])


  useEffect(()=>{
    fetchApi()
  },[fetchApi])

  return{
    error,products,loading
  }
}
