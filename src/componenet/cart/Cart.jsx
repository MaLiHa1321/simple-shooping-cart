// import Dcart from "../dCart/Dcart";
import PropTypes from 'prop-types';
import Dcart from "../dCart/Dcart";


const Cart = ({cart,handleRemove,total}) => {
    // console.log(handleRemove)

    return (
        <div>
            <h1 className="text-3xl font-bold border-b-2">Cart: {cart.length}</h1>
            
            {
                cart.map((cart,idx) => 
                     <Dcart key={idx} cart={cart} handleRemove={handleRemove}></Dcart>)

            }
            <hr className="my-4"/>
            <h3 className="text-3xl font-bold flex justify-end">Total: {total.toFixed(2)} </h3>
            
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.object,
    handleRemove: PropTypes.func,
    total: PropTypes.func
}


export default Cart;