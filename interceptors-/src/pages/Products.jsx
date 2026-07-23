import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { axiosInstance } from '../config/axiosInstance'

const Products = () => {
  
  const [productsData, setProductsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let getProductsData = async () => {
    try {

      let res = await axiosInstance.get('/products')
      console.log(res.data);
      setProductsData(res.data)
      setIsLoading(false)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProductsData()
  } ,[])

  if(isLoading) return <h1 className='text-4xl'>Products loading...</h1>

  return (
    <div className='grid grid-cols-4 gap-5'>
      {
        productsData.map((val) => (
          <ProductCard key={val.id} product={val}/>
        ))
      }
    </div>
  )
}

export default Products
