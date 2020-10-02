import React, {useState, useEffect} from 'react';

export default function Purses (props) {
  const getPurses = async ()=>{
    try{
      const response = await fetch('http://localhost:3000/purses');
      const data = await response.json();
      console.log(data)
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
  return <h1> Purses </h1>;
}