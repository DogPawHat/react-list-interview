import * as React from 'react';
import ListInput from './ListInput';
import List from './List';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
            list: []
        }
    }
    changeInput = (newInput) => {
        this.setState({
            input: newInput
        })
    }
    addItem = (newItem) => {
        this.setState((prevState) => {
            const newItems = prevState.list.append(prevState.input);
            return {
                list: newItems
            }
        })
    }
    removeItem = (itemIndex) => {
        this.setState((prevState) => {
            const newItems = prevState.list.splice(itemIndex, 1)
            return {
                list: newItems
            }
        })
    }
    render(
        <div>
            <ListInput
                input={this.state.input}
                changeInput={this.changeInput}
                addItem={this.addItem}
            />
            <List
                list={this.state.list}
                removeItem={this.removeItem}
            />
            <ListCounter
                count={this.state.list.length}
            />
        </div>
    )
}

export default App;
