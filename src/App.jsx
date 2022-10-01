import './App.css';
import MyAccordion from './components/MyAccordion/MyAccordion';
import MyAlert from './components/MyAlert/MyAlert';

function App() {

  return (
    <div className='container'>
      <h1 className='my-5 text-center'>Explore React Bootstrap</h1>
      <MyAlert></MyAlert>
      <MyAccordion></MyAccordion>
    </div>
  );
}

export default App;
