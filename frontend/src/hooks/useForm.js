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
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }


    return {
        ...formState,
        formState,
        handleChange,
        handleSubmit
    }
}
