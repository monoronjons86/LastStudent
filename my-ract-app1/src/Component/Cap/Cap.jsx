/* eslint-disable react/prop-types */
import '../Cap/Cap.css'
const Cap = ({cap,handleOnecap}) => {
    console.log(cap)
    const{id,color,img}=cap
    return (
        <div className="cap">
            <h1>Cap id:{id}</h1>
            <h2>Cap color:{color}</h2>
            <img src={img} alt="" />
            <button onClick={handleOnecap}>clik me</button>
        </div>
    );
};

export default Cap;