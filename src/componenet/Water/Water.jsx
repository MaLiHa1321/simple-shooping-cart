import PropTypes from 'prop-types';

const Water = ({water,handleCart}) => {
    // console.log(water)
    const {name,seller,price,ratings,img} = water;
    return (
        <div>
            <div>
            <img src={img} alt="" className="w-[200px] rounded-xl" />
            <h2> <span className="font-bold"> {name}</span></h2>
            <p className="font-bold">Brand: {seller}</p>
            <h2 className="font-bold"> {price} TK</h2>
            <p>Rating:{ratings}</p>
             <button onClick={() => handleCart(water)} className="btn btn-accent">Add to cart</button>

            </div>
          
            
        </div>
    );
};

Water.propTypes ={
    water: PropTypes.object,
    handleCart: PropTypes.func
}

export default Water;