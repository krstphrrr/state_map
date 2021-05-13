import React from "react"

const layerButton = (props) => {
  const handleClick=()=>{
    console.log(props.localito)
  }
  return(
    <div>
      <a onClick={()=>handleClick()}>layer placeholder 1</a>
    </div>
  )
}

export default layerButton