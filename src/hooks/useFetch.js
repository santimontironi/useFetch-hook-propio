import { useEffect, useState } from "react";

export default function useFetch(url) {
  const[data,setData] = useState(null)
  const[error,setError] = useState(null)

  async function getFetch(){
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }catch(error){
      setError(error)
    }
  }

  useEffect(function(){
    getFetch()
  },[url])

  return { data, error };
}
