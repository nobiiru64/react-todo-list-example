import React, {Component} from 'react'
import './TodoList.css'
class TodoList extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
   // this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Задание"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Добавить задание</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList

