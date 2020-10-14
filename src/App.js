import React, { Component } from "react";
import ToDoList from "./containers/ToDoList/ToDoList";
import DoneList from "./containers/DoneList/DoneList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: [],
      doneList: [],
      newEntry: "",
    };
  }

  onAddItem = () => {
    let newEntry = this.state.newEntry;
    if (newEntry) {
      let modifiedState = [...this.state.newList];
      modifiedState.push(newEntry);
      this.setState({ newList: modifiedState, newEntry: "" });
    }
  };

  onDone = (selectedItem, onAction) => {
    debugger;
    if (onAction === "todo") {
      let modifiedState = [...this.state.doneList];
      modifiedState.push(selectedItem);
      this.setState({ doneList: modifiedState }, () => {
        this.onDelete(selectedItem, onAction);
      });
    } else {
      let modifiedState = [...this.state.newList];
      modifiedState.push(selectedItem);
      this.setState({ newList: modifiedState }, () => {
        this.onDelete(selectedItem, onAction);
      });
    }
  };

  onDelete = (selectedItem, onAction) => {
    if (onAction === "todo") {
      this.setState((prev) => {
        let modifiedState = [...this.state.newList];
        return {
          newList: modifiedState.filter((item) => item !== selectedItem),
        };
      });
    } else {
      this.setState((prev) => {
        let modifiedState = [...this.state.doneList];
        return {
          doneList: modifiedState.filter((item) => item !== selectedItem),
        };
      });
    }
  };

  render() {
    return (
      <div className="app-container">
        <div className="todo-list-layout">
          <div className="todo-list">
            <input
              value={this.state.newEntry}
              type="text"
              onChange={(e) =>
                this.setState({
                  newEntry: e.target.value,
                })
              }
            />
            <button onClick={this.onAddItem}>Add</button>
          </div>
          <div className="todo-list">
            <ToDoList
              itemList={this.state.newList}
              onDone={this.onDone}
              onDelete={this.onDelete}
              actionOn="todo"
            />
          </div>
        </div>
        <hr />
        <DoneList
          itemList={this.state.doneList}
          onDone={this.onDone}
          onDelete={this.onDelete}
          actionOn="done"
        />
      </div>
    );
  }
}

export default App;
