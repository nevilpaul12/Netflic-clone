import logo from './logo.svg';
import './App.css';
import {action,comedy,originals, romance,documentaries, horror} from './urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />

      

    </div>
  );
}

export default App;
