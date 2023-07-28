import './App.css';
import SelectLanguage from 'components/SelectLanguage';
import NumberFormatter from 'components/NumberFormatter';
import DateTime from 'components/DateTime';
import Measurement from 'components/Measurement';

function App() {
  return (
    <div className="App-wrapper">
      <SelectLanguage />
      <NumberFormatter />
      <DateTime />
      <Measurement />
    </div>
  );
}

export default App;
