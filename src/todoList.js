import React from 'react';
import TodoItem from './todoItem';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],  //列表内容
      inputVal: ''  //输入框内容
    }

    this.onChange = this.onChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.delTodo = this.delTodo.bind(this)
  }
  render () {
    const { list, inputVal } = this.state;
    return (
      <div>
        <input type="text"
          value={ inputVal }
          onChange={ this.onChange } />
        <button onClick={ this.addTodo }>ADD</button>
        <ul>
          {
            list.map((item, index) => {
              return <TodoItem
                key={ index }
                text={ item }
                del={ this.delTodo }
                index={ index } /> //<li key={ index }>{ item }</li>
            })
          }
        </ul>
      </div>
    )
  }

  /**
   * 输入框 chenge 处理函数
   */
  onChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  addTodo() {
    // this.setState({
    //   list: [this.state.inputVal, ...this.state.list]
    // })
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputVal],
      inputVal: ''
    }))
  }

  delTodo(index) {
    this.setState((prevState) => {
      let list = prevState.list;
      list.splice(index, 1)
      return {
        list: list
      }
    })
  }
}

export default TodoList;
