/// notes: ///
//Action: An action is an object which describes what sort of transfermation you want to make to your state.

//3 requirements to a pure function
// always return the same result given the same arguments
//execution doesnt depend on the state of the application
//dont modify the variables outside of ther scope

{
  type 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false,
  }
}

{
  type: 'REMOVE_TODO',
  id: 0,
}

{
  type: 'TOGGLE_TODO',
  id: 0,
}

{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a Marathon',
  }
}
{
  type: 'REMOVE_GOAL',
  id: 0,
}

//STORE

function todos(state = [], action) {
  if(action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }
  return state
}

function createStore() {
  //the store should have four parts
  //1.the state
  //2.Get the state.
  //3.Listen to changes on the state.
  //4.Update the state.

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  return {
    getState,
    subscribe,
  }
}
