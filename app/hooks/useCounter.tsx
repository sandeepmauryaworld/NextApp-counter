import { useState } from "react";

const useCounter = (initialValue: number = 0) => {
  const [countA, setCountA] = useState<number>(initialValue);
  const [countB, setCountB] = useState<number>(initialValue);

  const incrementA = () => {
    setCountA(countA + 1);
  };

  const decrementA = () => {
    setCountA(countA - 1);
  };

  const incrementB = (value: Number, count: Number) => {
    console.log(value, count);
    setCountB(count + value);
  };

  const decrementB = (value: Number, count: Number) => {
    let isNeg = count - value;
    if (isNeg >= 0) {
      console.log(isNeg);
      setCountB(isNeg);
    }
  };

  return {
    countA,
    countB,
    incrementA,
    decrementA,
    incrementB,
    decrementB,
    setCountB,
  };
};

export default useCounter;
