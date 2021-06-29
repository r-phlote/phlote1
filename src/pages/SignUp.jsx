/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from '../../node_modules/aws-amplify'
import { createTodo } from '../graphql/mutations'
import { listTodos } from '../graphql/queries'
import '../App.css';

//Fortmatic
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const fm = new Fortmatic('pk_live_80D32598ABBBEF7F');
const web3 = new Web3(fm.getProvider());
window.web3 = web3;

const initialState = { name: '', email: '', address: '' }

const SignUp = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
    setAddress()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }
  async function setAddress () {
      try {
        const myAddress = await web3.eth.getAccounts();
        setInput('address', myAddress)
      } catch (err) { console.log('error fetching accounts') }
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
      console.log(todos);
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container} backgroundColor='blue' >
      <h2>Create Account</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('email', event.target.value)}
        style={styles.input}
        value={formState.email}
        placeholder="Email"
      />
      <input 
        type="text"
        disabled="disabled"
        //onChange={event => setInput('address', event.target.value)}
        style={styles.input}
        value={formState.address}
        readOnly
        
      />
      <button style={styles.button} onClick={addTodo}>Create Account</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
      
    </div>
    
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  addressInput: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { 
      backgroundColor: '#007bff   ', 
      color: 'white', 
      outline: 'none', 
      fontSize: 18, 
      padding: '12px 0px', 
      borderTopLeftRadius: '1rem',
      borderTopRightRadius: '1rem',
      borderBottomLeftRadius: '1rem',
      borderBottomRightRadius: '1rem'}

}

export default SignUp;
