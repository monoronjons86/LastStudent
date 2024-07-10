function Item({ name, isPacked }) {
    // if (isPacked) {
    //   return <li className="item">{name} ✔</li>;
    // }
    // return <li className="item">{name}</li>;

    //ternary operator 
    // return(
    //     <li className="item">{isPacked ?name +'✔' :name}</li>
    // )
    //ternary operator && and operator
    // return(
    //     <li className="item">{isPacked && name +'✔'}</li>
    // )

    return(
        <li className="item">
            {name}{isPacked && "✔"}
        </li>
    )
  }
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Rides Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }