import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from '../../actions/priceActions';
import { fetchProductPrice } from '../../api/priceService';

function ProductDetails({ productId }) {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.product.price);

  useEffect(() => {

    dispatch(fetchProductPrice(productId));
  }, [dispatch, productId]);

  const handleUpdatePrice = (newPrice) => {

    dispatch(setPrice(newPrice));
  }

  return (
    <div>
      <h1>Product Details</h1>
      {price !== null ? (
        <div>
          <p>Price: ${price}</p>
          <button onClick={() => handleUpdatePrice(20)}>Update Price</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetails;
