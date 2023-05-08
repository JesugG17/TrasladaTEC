import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialState);
  }


  return {
    ...formState,
    formState,
    handleChange,
    onResetForm
  }
}
