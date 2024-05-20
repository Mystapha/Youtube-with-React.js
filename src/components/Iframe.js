import React from 'react'

function Iframe({ el }) {
  return (
    <div style={{marginTop:"21px" ,display:"flex",alignItems:"center"}}>
        
       <iframe
       style={{borderRadius:"10px"}} 
       width="230"
        height="120" 
       src = {el.src} 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        <h6 style={{marginLeft:"15px"}}>{el.name}</h6>
    </div>
  )
}

export default Iframe
