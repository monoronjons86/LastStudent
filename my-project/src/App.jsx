
import './App.css'
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

const peoplee = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

function App() {
  const listItems=people.map(person=> <li key={person.key}>{person}</li>);
  const chmist=peoplee.filter(peson=>peson.profession==="chemist");
  const listItem=chmist.map(chemm=>chemm.name)
  return (
    <div>
      <div>{listItems}</div>
      <h3>{listItem}</h3>
    </div>
  )
}

export default App
