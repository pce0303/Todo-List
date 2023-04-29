import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
//value : input의 내용
//onCreate : 버튼이 클릭 될 때 실행 될 함수
//onChange : input 내용이 변경 될 때 실행되는 함수
//onKeyPress : input에서 키를 입력 할 때 실행되는 함수. 이 함수는 나중에 Enter키가 눌렸을 떄 onCreate를 한 것과 동일한 작업을 하기 위해서 사용