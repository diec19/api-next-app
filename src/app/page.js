import React from 'react'
import Personas from './components/Personas';


async  function apiFetch(){
  const res = await fetch("https://randomuser.me/api/?results=8",{cache:'no-store'})
  const data = await res.json();
  return data.results
}

async function IndexPage(){
  const api = await apiFetch()

  return (
    <div>
       {
        <Personas api={api}/>
       }
    </div>
  )
}

export default IndexPage