import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Purses from './components/Purses';


export default function App() {
    const [purses, setPurses] = useState([])
    const [formInputs, updateFormInputs] = useState({
      brand: '',
      name: '',
      description: '',
      price: ''
    });
    const getPurses = async ()=>{
      try{
        const response = await fetch('http://localhost:3000/purses');
        const data = await response.json();
        setPurses(data)
      }catch(error){
        console.error(error)
      }
    }
    useEffect(
      ()=>{
        (
          async function (){
             await getPurses();
          }
        )()
      }, [])
  const handleChange = (event) => {
    const updateInput = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
    updateFormInputs(updateInput)
  }
  
  const handleSubmit  = async (event) =>{
    event.preventDefault()
    try{
      const response = await fetch('http://localhost:3000/purses',{
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInputs)
      })
      const createdPurse = await response.json()
      updateFormInputs({
        brand: '',
        name: '',
        description: '',
        price: ''
      })
      setPurses([createdPurse, ...purses])
    }catch(error){
      console.error(error)

    }
  }  
  return (
    <div className="App">
      <div className="container">
        <nav>
          <h4 className="title">Add a Purse</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand</label>
            <input 
            type="text" 
            id="brand"
            onChange={handleChange}
            value={formInputs.brand}
             />
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            id="name"
            onChange={handleChange}
            value={formInputs.name} />
            <label htmlFor="description">Description</label>
            <input 
            type="text" 
            id="description"
            onChange={handleChange}
            value={formInputs.description} />
            <label htmlFor="price">Price</label>
            <input 
            type="text" 
            id="price" 
            onChange={handleChange}
            value={formInputs.price}/>
            <input type="submit" className="submit" />
          </form>
        </nav>
        <main>
          <Purses purses={purses} />
        </main>
        <aside>
        </aside>
      </div>
      <footer/>
    </div>
  );
}


