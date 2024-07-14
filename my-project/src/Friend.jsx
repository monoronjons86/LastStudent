/* eslint-disable react/prop-types */
export default function Friend({friend}){
    // console.log(friend)
    const {name,phone,email}=friend
    return(
        <div>
            <h4>Name:{name}</h4>
            <p>phone:{phone}</p>
            <p>Email:{email}</p>
        </div>
    )
}