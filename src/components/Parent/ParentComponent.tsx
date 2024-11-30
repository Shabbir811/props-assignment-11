"use client"
import { useState } from "react"
import ChildComponent from "../child/ChildComponent"

const ParentComponent = () => {
  const title = "Props Assignment-11: Background colour changer by ghulam shabbir"
    const [color , setColor] = useState("rgb(51, 55, 61)")
    const colors = [
      "black",
      "purple",
      "red",
      "green",
      "orange",
      "white",
      "grey",
      "blue",
      "yellow",
      
    ]
    const handleChangeColor = (colour:string)=>{
      setColor(colour)
    }
    return (
      
      <div
        style={{backgroundColor:color}}
        className="shadow-md flex justify-center align-middle  px-40 h-screen w-full rounded-md flex-wrap "
      >
          <ChildComponent 
            title={title} 
            colours={colors} 
            getColor={handleChangeColor}
          />
      </div>
    )
}

export default ParentComponent
