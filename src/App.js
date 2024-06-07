import logo from './logo.svg';
import './App.css';
import ocean_pic from './images/ocean_pic.jpg'
import dolphin_pic from './images/dolphin.jpg'
import lobster_pic from './images/lobster.jpg'
import starfish_pic from './images/starfish.jpg'
import './styles.css'


function App() {

const displayFact = () =>{

document.getElementById('1').innerHTML =
`Dolphins have been shown to give
 distinct names to each other`
}

const displayFact2 = () =>{

  document.getElementById('1').innerHTML =
  `Lobsters chew with their stomachs`
  }

  const displayFact3 = () =>{

    document.getElementById('1').innerHTML =
    `Starfish can have up to 40 arms`
    }







  const background = <img src={ocean_pic}/> ;
  const dolphin = <img src={dolphin_pic} onClick={displayFact}/>;
  const lobster = <img src={lobster_pic} onClick={displayFact2}/>;
  const starfish = <img src={starfish_pic}onClick={displayFact3} />;



  return (
    <div className="App">
      <header className="App-header">
        <h1 id="1"></h1>
        <div className='super-image'>
        <div className='image-container'>  
        <p>Hello please click my picture 
          for a interesting fact!</p>
        {dolphin}
        </div>
        <div className='image-container'>
        <p>Hello please click my picture 
          for a interesting fact!</p>
          {lobster}
         </div>
        <div className='image-container'>
        <p>Hello please click my picture 
          for a interesting fact!</p>
          {starfish}
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
