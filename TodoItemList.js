import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  } //컴포넌트가 리렌더링을 할지 말지 정해줌 

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todolist = todos.map(
        ({id, text, checked, color}) => (
            <TodoItem
            id={id}
            text={text}
            checked={checked}
            color={color}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
            />
        )//비구조화할당
    );

    return (
      <div>
        {todolist}
      </div>
    );
  }
}

export default TodoItemList;
//todos : todo 객체들이 들어있는 배열
//onToggle : checkbox를 키고 끄는 함수
//onRemove : 아이템을 삭제시키는 함수