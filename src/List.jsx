import * as React from 'react';

const List = props => {
    const removeListEventHandlerCreator = index => {
        return e => {
            props.removeItem(index);
        }
    }
    return(
        <ul>
            { props.list.map((value, index) => {
                return (
                    <li key={index} onClick={removeListEventHandlerCreator(index)}>{value}</li>
                )
            })}
        </ul>
    );
};

export default List;
