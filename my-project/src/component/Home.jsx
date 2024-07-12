


function Button({ onMash, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onMash();
    }}>
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <div className="Toolbar" onClick={() => {
      console.log('You clicked on the toolbar!');
    }}>
      <Button onMash={() => console.log('Playing!')}>
        Play Movie
      </Button>
      <Button onMash={() =>console.log('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

