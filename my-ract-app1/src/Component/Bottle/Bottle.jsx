/* eslint-disable react/prop-types */
import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    console.log(bottle);
    const{name,type,price}=bottle;
    return (
        <div className="bottle">
            <h3>Bottle:{name}</h3>
            <h3>Bottle:{type}</h3>
            <h3>Bottle:{price}</h3>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;