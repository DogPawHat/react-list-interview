import * as React from 'react';

const ListInput = props => {
    changeInputEventHandler = e => {
        props.changeInput(e.target.value);
    }
    addItemEventHandler = e => {
        props.addItem();
    }
    return(
        <form>
            <input
                type='text'
                value='props.input'
                onChange={changeInputEventHandler}
            />
            <button
                onClick={addItemEventHandler}
            />
        </form>
    );
};

export default ListInput;
