import React, {Component} from 'react'
import './TodoItems.css'

class TodoItems extends Component {
  confirmDelete = key => {
    // eslint-disable-next-line no-restricted-globals
    let isDeleting = confirm('Удаить?');
    if (isDeleting) {
      this.props.deleteItem(key);
    }
  };
  createTasks = item => {

    let date = new Date();
    date.setTime(item.key);

    let currentDate =
      date.getDay() + '/' +
      date.getMonth() + '/' +
      date.getFullYear() + ' ' +
      date.getHours() + ':' +
      date.getMinutes();

    return (
      <li
        key={item.key}
        onClick={() => this.confirmDelete(item.key)}>
        <span>{currentDate}</span>
        {item.text}
      </li>
    )
  };

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <div className="todoListMain">
        <ul className="todoListMain__theList">
          {listItems}
        </ul>
      </div>
    )
  }
}

export default TodoItems
