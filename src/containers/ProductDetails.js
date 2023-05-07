import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';


export default function ProductDetails() {
    const product = useSelector((state)=>state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
const{category,description,image,price,rating,title}= product;

    const fetchProduct = async ()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log("Err",err);
        })
        dispatch(selectedProduct(response.data))
console.log(response.data)
    }

    useEffect(()=>{
        if(productId && productId !== "")fetchProduct();
        return()=>{
            dispatch(removeSelectedProduct());
        }
    },[productId])
    
 
  return (
    <div>
        {Object.keys(product).length === 0 ? (
            <div>...Loading </div>
        ): (
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-1">
                        <div className="card">
                            <div className="card-header">
                            <p>{category}</p>
                            <p>{title}</p>
                            </div>
                            <div className="card-body">
                                <p>{description}</p>
                                <p>Price: {price}$</p>
                                <img src={image} width={200} height={300} alt="" />
                            </div>
                            {/* <div className="card-footer">
                                <p>{rating}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
