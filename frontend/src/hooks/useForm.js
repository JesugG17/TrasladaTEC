import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleInputChange= (event, newValue) => {
    
    console.log({event, newValue});

    // setFormState({
    //   ...formState,
    //   [name]: newValue
    // })
  }

  const onResetForm = () => {
    setFormState(initialState);
  }


  return {
    ...formState,
    formState,
    handleChange,
    handleInputChange,
    onResetForm
  }
}
