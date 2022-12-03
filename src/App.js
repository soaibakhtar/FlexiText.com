import './App.css';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils" aboutText="About us"/>
      <div className='container'>
      <TextFrom heading="Enter the text to analyze"/>
      </div>
    </div>
  );
}

export default App;
