import * as React from 'react';
import ListInput from './ListInput';
import List from './List';
import ListCounter from './ListCounter';

class App extends React.Component {
    state = {
        input: '',
        list: []
    }

    constructor(props) {
        super(props);
    }
    changeInput = (newInput) => {
        this.setState({input: newInput})
    }
    addItem = (newItem) => {
        this.setState((prevState) => {
            const newItems = prevState.list.concat([prevState.input]);
            return {list: newItems};
        })
    }
    removeItem = (itemIndex) => {
        this.setState((prevState) => {
            const newItems = prevState.list.filter((v ,item) => {
                return (itemIndex != item)
            });
            return {list: newItems};
        });
    }
    render() {
        return(
            <div>
                <ListInput input={this.state.input} changeInput={this.changeInput} addItem={this.addItem}/>
                <List list={this.state.list} removeItem={this.removeItem}/>
                <ListCounter count={this.state.list.length}/>
            </div>
        )
    }
}

export default App;
