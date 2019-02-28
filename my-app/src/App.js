import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// "use strict";


function ToDo({ todo, index, finishToDo, removeToDo }) {
  return (
    <div
    className="todo"
    style={{color: todo.toDoFinished ? "green" : "", textDecoration: todo.toDoFinished ? "line-through" : "", fontVariant: todo.toDoFinished ? "small-caps" : "" }}
    // style={{ textDecoration: todo.toDoFinished ? "line-through" : "" }}
    >
    {todo.text}

    <div>
    <button onClick={() => finishToDo(index)}>✓</button>
    <button onClick={() => removeToDo(index)}>X</button>
    </div>
    </div>

  );
}

function ToDoList({ addToDo }) {
  const [value, setValue] = useState(" ");

  const submitHandler = e => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };
  return (
    <form onSubmit={submitHandler}>
    <input
    type="text"
    className="input"
    value={value}
    onChange={e => setValue(e.target.value)}
    />
    </form>
  );
}

function App() {
  const [toDos, setToDos] = useState([
    {
      text: "Eat breakfast",
      toDoFinished: false
    },
    {
      text: "Take a walk",
      toDoFinished: false
    },
    {
      text: "Remember the thing",
      toDoFinished: false
    }
  ]);
  const addToDo = text => {
    const newToDos = [ ...toDos, { text }];
    setToDos(newToDos);
  };
  const finishToDo = index => {
    const newToDos = [...toDos];
    newToDos[index].toDoFinished = true;
    setToDos(newToDos);
  };
  const removeToDo = index => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };
  return (
    <div className="app">
    <div className="ToDo-List">
    {toDos.map((todo, index) => (
    <ToDo
      key={index}
      index={index}
      todo={todo}
      finishToDo={finishToDo}
      removeToDo={removeToDo}
      />
  ))}
  <ToDoList addToDo={addToDo} />
  </div>
  </div>
);
}

// // class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
export default App;
