import React from 'react'

const Personas = ({api}) => {
  return (
    <div>
        {
        api.map((a)=>(
          <div >
             <p>{a.name.first}</p>
            <img src={a.picture.large} alt=''/>
          </div>
        ))
    }
    </div>

  )
}

export default Personas