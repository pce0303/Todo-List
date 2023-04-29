import React from 'react';
import './TodolistTemplate.css';

const TodolistTemplate = ({form, palette, children}) => {//비구조화 할당
  return (
    <main className="todo-list-template">
      <div className="title">
        할일 목록
      </div>
      <section className="palette-wrapper">
        {palette}
      </section>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodolistTemplate;