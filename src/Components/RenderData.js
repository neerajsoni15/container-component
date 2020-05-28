import React from 'react'

function RenderData(props){
    return(
        <div>
            {
               props.post.map(item =>
               <li key = {item.id}> {item.title}</li>
               ) 
            }
        </div>
    )
}

export default RenderData