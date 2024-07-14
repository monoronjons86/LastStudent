// import Actor from "./Actor";
// import Singer from "./Singer"

import Friends from "./Friends";
import User from "./User";

// export default function App() {
//   const actors=['Sakib','sorib','tomal','rahim'];
//   const singers=[
//     {name:'Dr mahfuz',age:68},
//     {name:'Eva Rahman',age:28},
//     {name:'Monir khan',age:38},
//     {name:'mahfuz',age:48},
//   ]
//   return (
//     <>
//     {
//       singers.map(singer=><Singer singer={singer}></Singer>)
//     }
//     {/* <Actor name="sakib khan"></Actor> */}
//     {
//       actors.map(actor=><Actor name={actor}></Actor>)
//     }
//     </>

    
//   )
// }

export default function App(){
  function handleClick(){
    alert('button clicked');
  }
  const butonClick1=()=>{
    alert('button two is clicked')
  }
  const button3=(btn)=>{
    alert(btn+5);
  }
  return(
    <>
    <Friends></Friends>
    <User></User>
     <h3>React core concept 2</h3>
     <button onClick={handleClick}>Click me</button>
     <button onClick={butonClick1}>Click two</button>
     <button onClick={()=>button3(5)}>Click five</button>
    </>
  )

}