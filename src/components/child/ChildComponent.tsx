
interface Props{
    title:string,
    colours:string[],
    getColor: (clour:string)=> void

}

function ChildComponent(props:Props) {
  return (
    <div 
        className="shadow-lg flex justify-center flex-col pt-1 px-5 gap-1 fixed bottom-1/2   h-36 w-max rounded-full  bg-gray-800 text-center text-white"
      >
        <h3>{props.title}</h3>
         <div className="flex  justify-center gap-5">
         {
           props.colours.map((colour, index)=> {
            return <button 
              key={index} 
              style={{backgroundColor:colour }} 
              className="py-8 px-6 rounded-full border-black border-solid h-20 w-20 "
              onClick={()=>props.getColor(colour)}
            >
            </button>
           })
         }
         </div>
        </div>
  )
}

export default ChildComponent
