import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ELEMENT } from "../../store/actions/test.actions";
import { getTestSelector } from "../../store/selectors/test.selector";

const TestComponent = () => {
  const dispatch = useDispatch();
  const values = useSelector(getTestSelector);
  const testHandle = () => {
    dispatch({ type: ADD_ELEMENT, payload: "test" });
  };
  return (
    <div>
      <button onClick={testHandle}>Click to add</button>
      <ul>
        {values.map(value => (
          <li className="test-class">{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;
