import * as React from 'react';

const List = props => {
    removeListEventHandlerCreator = index => {
        return e => {
            props.removeItem(index);
        }
    }
    return(
        <ul>
            { props.list.map((i, value) => {
                return (
                    <li onClick={removeListEventHandlerCreator(i)}>value</li>
                )
            })}
        </ul>
    );
};

export default List;
