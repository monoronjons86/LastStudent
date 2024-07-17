/* eslint-disable react/prop-types */
import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle);
    const{name,type,price}=bottle;
    return (
        <div className="bottle">
            <h3>Bottle:{name}</h3>
            <h3>Bottle:{type}</h3>
            <h3>Bottle:{price}</h3>
        </div>
    );
};

export default Bottle;