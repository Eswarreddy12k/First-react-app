import React from 'react'

function Imglist(props) {
    let arr=[]
    let n=Math.floor(Math.random()*10)
    
    for(let i=0;i<n+1;i++){
        let imgn=Math.floor(Math.random()*36)+1
        arr.push(<button style={{border:"None",background:"None",padding:"0"}} ><img src={require('./images/'+String(imgn)+'.jpg')} alt='abc' style={{height:"23vh",padding:"10px",borderRadius:"13px"}} ></img></button>)
    }
  return (
    <div>
        <p style={{paddingLeft:"20px",paddingTop:"10px"}}>{props.date}</p>
        <hr></hr>
        {arr}
        
    </div>
    
  )
}

export default Imglist