import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Todo = () => {
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, []);

  const { id: todoId, title, completed, userId } = todoDetails || {};

  //console.log(todoDetails);
  return (
    <>
      {todoDetails ? (
        <div>
          <p>This is TODO component {id} </p>
          <p>{`Todo Id: ${todoId}`}</p>
          <p>{`User Id: ${userId}`}</p>
          <p>{`Title: ${title}`}</p>
          <p>{`Completed: ${completed}`}</p>
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todo;
