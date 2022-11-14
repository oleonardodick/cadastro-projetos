import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function handleSetValues(chave, valor) {
    // chave = nome, descricao, cor
    setValues({
      ...values,
      [chave]: valor, // nome:'valor'
    });
  }

  const handleChange = (info) => {
    const { name, value } = info.target;
    handleSetValues(
      name,
      value,
    );
  };

  function clearForm() {
    setValues(valoresIniciais);
  }

  function initializeForm(data){
    setValues(data)
  }

  return {
    handleChange,
    values,
    clearForm,
    initializeForm,
  };
}

export default useForm;
