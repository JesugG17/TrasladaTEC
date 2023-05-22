import { useState } from "react";

export const useSolicitud = () => {
    const [instituto, setInputInstituto] = useState("");
    const [motivo, setMotivo] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const onChangeInstituto = (event, newInputValue) => {
        if (error) setError(false);
        if (success) setSuccess(false);

        setInputInstituto(newInputValue);
    };

    const handleChange = (event) => {
        if (error) setError(false);
        if (success) setSuccess(false);
        setMotivo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!instituto || motivo.length === 0) {
            setError(true);
            setSuccess(false);
            return;
        }

        setInputInstituto(null);
        setMotivo("");
        setSuccess(true);
        setDisabled(true);
    };

    return {
        motivo,
        instituto,
        error,
        success,
        disabled,
        onChangeInstituto,
        handleChange,
        handleSubmit
    }
}
