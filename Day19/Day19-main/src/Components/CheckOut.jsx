import React, { useEffect,useState } from 'react';
import { getCartItems } from '../Services/getCartItems.service';
import { placeOrder } from '../Services/placeOrder.service';
import { useSelector } from 'react-redux';
const CheckOut = () => {
    const userId=useSelector((state)=>state.authentication.currentUserId);
    const[items,setItems]=useState();
    const[name,setName]=useState("");
    const[address,setAddress]=useState("");
    const[phone,setPhone]=useState("");
    useEffect(()=>{
        const fetchItems=async()=>{
        const data=await getCartItems();
        const FilteredData=data.data.filter((item)=>{
            return item.purchasedBy===userId
        })
        setItems(FilteredData);
        console.log("cart items",data);
        }
        fetchItems();
    },[])
    const placeOrders=async()=>{
        const data=await placeOrder(items);
        if(data.status===200)
        alert("Order Placed Successfully")
    }
  return (
    <div>
      {
        items?.map((item,idx)=>{
            // if(item.purchasedBy===userId)
            return (
                <>
                    <div className='specificProd' key={idx}>
                        Prod Name-{item.item.name}<br />
                        Prod Description-{item.item.description}<br />
                    </div>
                </>
            )
        })
      }
      <form>
        Name<input type="text" name="name"/>
        Address <input type="text" name="address"/>
        Phone No.<input type="text" name="phone"/>
        <button onClick={placeOrders}>Place Order</button>
      </form>
    </div>
  );
}

export default CheckOut;
