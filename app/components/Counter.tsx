import { useState ,useEffect} from "react";
import useCounter from "../hooks/useCounter";

interface CounterProps {
  incrementValue?: number;
}

const regex = new RegExp(`(^| )customCount=([^;]+)`)
const match = document.cookie.match(regex)
var existingCount=0;
if (match && parseInt(match[2])>=0) {
  existingCount=parseInt(match[2])
}

const Counter = ({ incrementValue}) => {
  const { countB, incrementB, decrementB,setCountB} = useCounter(existingCount!==0?existingCount:incrementValue);

  useEffect(()=>{
      
        document.cookie=`customCount=${countB}`

      
  },[countB])


  
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-[25px] mx-2">
      <p className="font-bold my-2" id="count-display">Count : {countB}</p>

      <div className="flex flex-row gap-10">
        <button
          onClick={()=>{incrementB(incrementValue==0?1:incrementValue,countB)}}
          type="button"
          id="increment-button"
          className=" text-white bg-green-700 hover:bg-green-800   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600"
        >
          Increment
        </button>

        <button
          onClick={()=>{decrementB(incrementValue==0?1:incrementValue,countB)}}
          type="button"
          id="decrement-button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Decrement{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;
