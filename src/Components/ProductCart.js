import React from "react";

export default function ProductCart({ product }) {
  return (
    <div className='col-md-4' kye={product.id}>
      <div className='card'>
        <img className='card-img-top' alt={product.title} src={product.img} />
        <div className='card-body'>
          <h5 className='card-title'>{product.title}</h5>
          <p className='card-text'>{product.descreption}</p>
          <p className='card-text text-right'>
            <small className='text-muted'>₹{product.price}</small>
          </p>
        </div>
      </div>
    </div>
  );
}
