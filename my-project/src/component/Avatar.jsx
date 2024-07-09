
const Avatar = (props) => {
    
    const {person,size}=props;
  return (
    <div>
        <h4>monoronjon sarker</h4>
      <h1>{person.name}</h1>
      <h3>{person.imageId}</h3>
      <p>{size}</p>
    </div>
  )
};

export default Avatar;
