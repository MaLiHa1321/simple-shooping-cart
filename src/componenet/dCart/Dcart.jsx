import PropTypes from 'prop-types';

const Dcart = ({cart,handleRemove}) => {
    const {name,price,img,id} = cart;
    // console.log(cart)
  
    return (
        <div className="flex gap-8 m-8">
            <img src={img} alt="" className="w-[50px]" />
            <h3>{name}</h3>
            <p>{price}TK</p>
            <button onClick={() => handleRemove(id)} className="btn">Remove</button>
            
        </div>
    );
};
Dcart.propTypes ={
    cart: PropTypes.object,
    handleRemove: PropTypes.func
}

export default Dcart;