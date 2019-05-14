import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList';

// const App = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>我是自渡</h1>
//       <p>{ props.title }</p>
//       <Wen title="归途" />
//     </div>
//   )
// }

// App.propTypes = {
//   title: propTypes.string,
//   name: propTypes.number.isRequired
// }

// App.defaultProps = {
//   class : '困厄无助'
// }

// class Wen extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>{ this.props.title }</h2>
//         <div>无人问津</div>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
)
