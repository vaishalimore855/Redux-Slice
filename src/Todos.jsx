import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import TodoCart from "./TodoCard";
import { useSelector, useDispatch } from "react-redux";
import FetchWeather from "./actions/index";

const Todos = () => {
  const [todos, setTodos] = useState();
  const [apiData, setApiData] = useState([]);
  const [loading, setLoding] = useState(false);

  const myState = useSelector((state) => state.Data);
  console.log("myState",myState);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const ROOT_URL = "https://jsonplaceholder.typicode.com/todos";
    await fetch(ROOT_URL)
      .then((res) => res.json())
      .then((data) => dispatch(FetchWeather(data)));
  }

  const showData = () => {
    // console.log("showData");
    // console.log(myState);
    // console.log(myState[0].title);
    setLoding(true);
  };

  return (
    <>
      <h3>Hello</h3>
      {loading ? (
        <>
          {/* {myState.slice(0, 10).map((data, i) => {
            return <p key={i}>{data.title}</p>;
          })} */}
          <div style={{ display: "flex", flextWrap: "wrap" }}>
            {myState.slice(0, 10).map((todo, index) => (
              <TodoCart todo={todo} key={index} />
            ))}
          </div>
        </>
      ) : (
        <h1>Loding</h1>
      )}
      <button onClick={showData}>GetData</button>
    </>
  );
};

export default Todos;
