import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calCOS, calLN, calRoot, calSIN, calTAN } from "../redux/modules/calc";
import { noteAdd } from "../redux/modules/note";

const CalculateForm = () => {
  const [value, setValue] = useState();
  const [calculationTriggered, setCalculationTriggered] = useState(false);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calc);

  useEffect(() => {
    if (calculationTriggered) {
      dispatch(noteAdd({ id: new Date().getTime(), number: result.number }));
      setCalculationTriggered(false);
    }
  }, [result.number, calculationTriggered, dispatch]);

  const handleCalculation = (calculationAction) => {
    dispatch(calculationAction({ number: value }));
    setCalculationTriggered(true);
  };

  return (
    <div>
      <input
        type="number"
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <button onClick={() => handleCalculation(calRoot)}>root</button>
        <button onClick={() => handleCalculation(calLN)}>ln</button>
        <button onClick={() => handleCalculation(calSIN)}>Sin</button>
        <button onClick={() => handleCalculation(calCOS)}>Cos</button>
        <button onClick={() => handleCalculation(calTAN)}>Tan</button>
      </div>
      <h3>answer: {result.number}</h3>
    </div>
  );
};

export default CalculateForm;
