import React from "react";
//import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const TodoCart = (props) => {
  const { todo } = props;
  //const { index } = props.index;
  const { id, title, completed } = todo;
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor: "gray" , margin:'10px' , padding: '15px', width:'150px'}}
      onClick={()=> navigate(`/todo/${id}`)}>
      
      <h4>{title}</h4>
      <h6>{`completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCart;
