import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calCOS, calLN, calRoot, calSIN, calTAN } from "../redux/modules/calc";
import { noteAdd } from "../redux/modules/note";

const CalculateForm = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calc);

  const handleCalculation = (calculationAction) => {
    if (value !== 0) {
      dispatch(calculationAction({ number: value }));
      dispatch(noteAdd({ id: new Date().getTime(), number: result.number }));
    }
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
