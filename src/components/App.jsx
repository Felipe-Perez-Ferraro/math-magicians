import '../App.css';
import ApiCall from './ApiCall';
import Calculator from './Calculator';

function App() {
  return (
    <section className="calculator">
      <Calculator />
      <ApiCall />
    </section>
  );
}

export default App;
