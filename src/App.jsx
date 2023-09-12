
import { useEffect, useState } from 'react'
import './App.css'
import Water from './componenet/Water/Water'
import Cart from './componenet/cart/Cart'



function App() {

  const [water, setWater] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  
  useEffect(() =>{
    fetch('water.json')
    .then(res => res.json())
    .then(data => setWater(data))
  },[])

  const handleCart = (cartItem) =>{
   
    const newCart  = [...cart, cartItem]
    setCart(newCart)
    
    // const newTotal = newCart.reduce((acc, item) => acc + item.price, 0);
    let newTotal = 0;

    newCart.forEach((item) => {
  newTotal += item.price;
});
    setTotal(newTotal);
    
  }
  // remove
  const handleRemove = id =>{
    // console.log(id)
   
    const removeData = cart.filter(item => item.id !== id)
    setCart(removeData)

    let newTotal = 0;

    removeData.forEach((item) => {
      newTotal += item.price;
    });
    setTotal(newTotal);

 
  }


  return (
    <>

     
      <h1 className='text-3xl font-bold'>Shooping Cart</h1>

      {/* <Header></Header> */}
      <div className='flex justify-around m-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
        water.map((water,idx) => <Water key={idx} water={water} handleCart={handleCart} ></Water>)
      }

        </div>
        <div>
         <Cart cart={cart} handleRemove={handleRemove} total={total} />

        </div>
      </div>
     
      
     
    </>
  )
}

export default App
