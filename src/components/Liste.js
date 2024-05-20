import React from 'react';
import Explication from './Explication';

function Liste() {
  return (
    <div className='image1' style={{marginLeft:"25px"}}>
      <div 
        id="avatar" 
        className="style-scope ytd-video-owner-renderer no-transition" 
        style={{ backgroundColor: 'transparent'}}
      >
        <img 
          id="img" 
          draggable="false" 
          className="style-scope yt-img-shadow" 
          alt="" 
          style={{borderRadius:"50%" }}
          width="40" 
          src="https://yt3.ggpht.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s48-c-k-c0x00ffffff-no-rj" 
        />
        <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/@GreatStackDev" style={{marginLeft:"20px",fontSize:"20px",textDecoration:"none",color:"black",fontWeight:"500"}}>GreatStack</a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"20",marginLeft:"10px"}}><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
      </div>
      <Explication/>
    </div>
  );
}

export default Liste;