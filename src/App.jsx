import './App.css';
import Axios from './components/Axios/Axios';
import MyAccordion from './components/MyAccordion/MyAccordion';
import MyAlert from './components/MyAlert/MyAlert';
import MyBadge from './components/MyBadge/MyBadge';

function App() {

  return (
    <div className='container'>
      <h1 className='my-5 text-center'>Explore React Bootstrap</h1>
      <div className='MyContainer'>
        {/* <MyAlert></MyAlert>
        <MyAccordion></MyAccordion>
        <div className='bg-secondary d-flex justify-content-center align-items-center'>
          <MyBadge></MyBadge>
        </div> */}
        <Axios></Axios>
      </div>
    </div>
  );
}

export default App;
