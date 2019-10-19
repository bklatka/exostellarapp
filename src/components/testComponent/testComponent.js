import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ELEMENT } from '../../store/actions/test.actions';

const TestComponent = props => {
    const dispatch = useDispatch();
    const values = useSelector(s => s.test);
    const testHandle = () => {
        dispatch({ type: ADD_ELEMENT, payload: 'test'});
    };
    return (
        <div>
            <button onClick={testHandle}>Click to add</button>
            <ul>
                {values.map(value => <li>{value}</li>)}
            </ul>
        </div>
    );
};

TestComponent.propTypes = {

};

export default TestComponent;
