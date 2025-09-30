import {useState} from 'react'
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const Accordian = (props) => {
  const { items } = props

  const [expandedIndex, setExpandedIndex] = useState(0)

  const handleClick = (nextIndex) =>{
    setExpandedIndex((currentExpandedIndex)=>{
      if (currentExpandedIndex === nextIndex){
        return -1
      } else{
        return nextIndex
      }
    })
  }
  const renderedItems = items.map((item, index) => {
    //logic 
    const isExpanded = index === expandedIndex 

    // considitional icon render using a ternary 
    const icon = ( 
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown/> : <GoChevronUp/>}
      </span>
    )
    //return jsx 
    return (
    <div key={item.id}>
      <div onClick={() => handleClick(index)} 
      className="flex justify-between items-center p-3 bg-gray-100 border-b cursor-pointer"
      >{item.label}{icon}</div>
      {/* {conditional content div based on if index of item === expanded index from stat} */}
      { isExpanded && <div className="border-b p-5">{item.content}</div>}

    </div>
    )
  })

  return (
    <div>{renderedItems}</div>
  )
}

export default Accordian
