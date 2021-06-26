import React from 'react'

export function useInput() {
  const [input, setInput] = React.useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const resetInput = () => {
      setInput('')
  }

  return [input, handleInput, resetInput];
}
