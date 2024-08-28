import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calCOS, calLN, calRoot, calSIN, calTAN } from "../redux/modules/calc";
import { noteAdd } from "../redux/modules/note";

const CalculateForm = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calc);
  // console.log(result);

  useEffect(() => {
    if (value !== undefined) {
      dispatch(noteAdd({ id: new Date().getTime(), number: result.number }));
    }
  }, [result.number, dispatch]);

  return (
    <div>
      <input
        type="number"
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <button
          onClick={() => {
            dispatch(calRoot({ number: value }));
          }}
        >
          root
        </button>

        <button
          onClick={() => {
            dispatch(calLN({ number: value }));
          }}
        >
          ln
        </button>

        <button
          onClick={() => {
            dispatch(calSIN({ number: value }));
          }}
        >
          Sin
        </button>

        <button
          onClick={() => {
            dispatch(calCOS({ number: value }));
          }}
        >
          Cos
        </button>

        <button
          onClick={() => {
            dispatch(calTAN({ number: value }));
          }}
        >
          Tan
        </button>
      </div>
      <h3>answer: {result.number}</h3>
    </div>
  );
};

export default CalculateForm;
