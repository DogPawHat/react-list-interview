import * as React from 'react';

const ListInput = props => {
    const changeInputEventHandler = e => {
        e.preventDefault();
        props.changeInput(e.target.value);
    }
    const addItemEventHandler = e => {
        e.preventDefault();
        props.addItem();
    }
    return(
        <form>
            <input
                type='text'
                value={props.input}
                onChange={changeInputEventHandler}
            />
            <button
                onClick={addItemEventHandler}
            >Click</button>
        </form>
    );
};

export default ListInput;
