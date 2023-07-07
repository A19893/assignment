import React, { useState, useEffect } from 'react';
import { getProducts } from "../Services/getProduct.service";
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Services/addToCart.service';
import { useSelector } from 'react-redux';
const User = () => {
    const [list, setList] = useState(null);
    const userId=useSelector((state)=>state.authentication.currentUserId);
    const navigate=useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            const ProductList = await getProducts();
            console.log(ProductList);
            setList(ProductList.data);
          };
          fetchProducts();
    }, []);
    const addHandler = async(item) => {
        // let userData = JSON.parse(localStorage.getItem('userData')) || [];
        // let cartItems = JSON.parse(localStorage.getItem('productData')) || [];
        // userData.push(cartItems[idx]);
        // localStorage.setItem('userData', JSON.stringify(userData));
       const data=await addToCart(item,userId);
       console.log("aagya",data);
       if(data.status===200)
       alert('Added To Cart Successfully')
    }
    const checkOutHandler=()=>{
        navigate("/checkOut")
    }
    return (
        <div className='user'>
            <div>
                <button onClick={checkOutHandler}>CheckOut</button>
            </div>
            {
                list?.map((item, idx) => {
                    return (
                        <>
                            <div className='specificProd'>
                                Product ID-{item.id}<br />
                                Prod Name-{item.name}<br />
                                Prod Description-{item.description}<br />
                                <button type="submit" style={{ width: "100px", backgroundColor: 'blue', borderRadius: "25px", color: 'white' }} onClick={e => addHandler(item)}>Add to Cart</button>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
}

export default User;