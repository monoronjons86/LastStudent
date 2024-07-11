
const About = () => {
 function handleClick(){
    console.log('Button is clicked');
 }
  return (
    <div>
        <button onClick={handleClick}>I dont do anything</button>
    </div>
  )
};

export default About;
