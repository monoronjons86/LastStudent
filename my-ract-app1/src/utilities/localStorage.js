const getStoredCart=()=>{
    const storedCartString=localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return []
}
const saveCardToLs=cart=>{
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)

}

const addTols=id=>{
    const cart=getStoredCart();
    cart.push(id);
    saveCardToLs(cart);
}

export {addTols}