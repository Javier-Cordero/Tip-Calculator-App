import { General } from "./components/General";
import { Data } from "./components/Data";
import { Result } from "./components/Result";
import { useEffect, useState } from "react";
const empty_value = { bill: 0, tip: '', people: 1 }
const empty_result = { totalTip: 0, total: 0 }
function App() {
  const [valor, setValor] = useState(empty_value)
  const [totals, setTotals] = useState(empty_result)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValor({ ...valor, [name]: name === 'tip' ? (value === '' ? '' : parseFloat(value)) : parseFloat(value) || '' });
  }
  const handleTipClick = (tipValue) => setValor({ ...valor, tip: tipValue })
  const Resultado = () => {
    const { bill, tip, people } = valor;
    if (bill > 0 && tip > 0 && people > 0) {
      const totalTip = ((tip / 100) * bill / people).toFixed(2);
      const total = parseFloat((totalTip * people + bill) / people).toFixed(2);
      setTotals({ totalTip, total });
    } else setTotals(empty_result)
  }
  useEffect(() => { Resultado() }, [valor]);
  const Reset = () => {
    setValor(empty_value);
    setTotals(empty_result);
  }
  return (
    <>
      <header><img src="logo.svg" alt="logo de tip calculator" /></header>
      <General>
        <Data handleChange={handleChange} valor={valor} handleTipClick={handleTipClick} />
        <Result totals={totals} Reset={Reset} />
      </General>
    </>
  );
}

export default App;
