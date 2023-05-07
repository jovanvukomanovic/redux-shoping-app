import React from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


function ProductComponent() {
    const products = useSelector((state)=>state.allProducts.products);
   const renderList = products.map((product)=>{
    const{id,title,image,price,category}=product;
    return( 
  <Link to={`/product/${id}`}>
     <div className="container-fluid">
        <div className="row">
            <div className="col-5 offset-1">
                <div key={id} className="card border-dark mb-3"  >
                    <div className="card-header">{title}</div>
                    <div className="card-body text-dark">
                         <div className="row">
                             <div className="col-6">
                                <h5 className="card-title">Price: {price} $</h5>
                             </div>
                             <div className="col-6">
                                 <p className="card-text">{category}</p>
                             </div>
                             <div className="col-6">
                                 <p><img src={image} width={200} height={300} alt="" /></p>
                             </div>
                          </div> 
                     </div>
                 </div>     
            </div>    
        </div>
     </div> 
     </Link>   
        
    )
   })
    console.log(products)
  return (
 
    <>
 
 {renderList}

      </>
  )
}

export default ProductComponent