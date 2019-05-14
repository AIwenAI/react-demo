import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li onClick={ this.delTodo.bind(this) } >{ this.props.text }</li>
    )
  }

  delTodo() {
    let { del, index } = this.props
    del(index)
  }

  /**
   * 使用这个函数来处理一些性能问题
   * 判断nextProps是否有改变
   */
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.text !== this.props.text || nextProps.index !== this.props.index || nextProps.del !== this.props.del) {
      return true
    } else{
      return false
    }
  }
}

export default TodoItem;
