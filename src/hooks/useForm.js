import { useState } from "react";

export const useForm = (formData = []) => {
  const [formValues, setformValues] = useState(formData);

  const handleInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return {
    formValues,
    handleInputChange,
  };
};
