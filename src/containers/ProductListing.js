import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';
import {setProducts} from '../redux/actions/productActions'

function ProductListing() {

    const dispatch =useDispatch();
    const products = useSelector((state)=>state)

    const fetchProducts= async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log('Err',err)
        })
        dispatch(setProducts(response.data))
    }

useEffect(()=>{
    fetchProducts()
},[])


  return (
    <div>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing