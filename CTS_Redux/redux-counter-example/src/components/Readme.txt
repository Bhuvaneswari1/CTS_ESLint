1.store - Central state Container
The Redux store holds the entire state tree of your application. With the help of 
configureStore() from Redux Toolkit.

configureStore() - version of createStore, sets up Redux with DevTools and middleware
counterReducer - Handles all state updates for the counter slice.
store makes Redux state available for your entire app (<Provider>) in main.jsx


2.counterSlice - Slice of Redux state
createSlice - Create a slice of the Redux state with
    a name(counter)
    an intial state({count:0})
    and reducers(function to update the state)
Reducer inside the slick:
    increment : increases count by 1
    decrement: decreases count by 1
Generated Exports:
    counterSlice.actions - include increment and decrement action creators
    counterSlice.reducer -  the actual reducer function to plug into the store

3.Action - What happened?
increment() and decrement() are action creators
When called, they return action objects like
{type: 'counter/increment'}

4.Dispatcher - send Action to store
useDispatch() gives you the dispatcher function
when you call dispatch(increment())
    It sends an action {type: 'counter/increment'} to the store 
    The store uses the reducer {counterReducer} to calculate the new state
    React updates the UI with the new state

5.useSelector - Read from Redux store
const count = useSelector((state) => state.counter.count);
Reads the count value form the global Redux store.
useSelector subscribes the component to changes in that part of the state.

| Term            | Purpose                                 | Code Example                        |
| --------------- | --------------------------------------- | ----------------------------------- |
| **Store**       | Holds global state                      | `configureStore({ reducer })`       |
| **Slice**       | Combines state + reducers for a feature | `createSlice({ name, reducers })`   |
| **Action**      | Describes what happened                 | `increment()` returns `{type}`      |
| **Dispatcher**  | Sends action to store                   | `dispatch(increment())`             |
| **useSelector** | Reads state from store                  | `useSelector(state => state.count)` |
