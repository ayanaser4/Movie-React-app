// import logo from './logo.svg';
import './App.css';
//import AddUser from './views/Form';
// import MyComponent from './components/MyComponent';
import MovieModel from './models/movieModel';
import MovieList from './views/MovieList';
import Navbar from './navbar/nav'; 
function App() {
  const movie = new MovieModel(
        1,
        "Inception",
        "A mind-bending thriller",
        "/inception.jpg",
        "2010-07-16",
        8.8
  );
  return (
    <>
       
      <div className="App">
       {<Navbar title1="Home" title2="About" title3="Contact" title4="Login"/>}
      {<MovieList /> }
      </div>
    </>
    
  );
}

export default App;
