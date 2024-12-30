import React, { useState } from 'react';

function MaskedCPF() {
  const [cpf, setCpf] = useState('');

  const handleCpfChange = (e) => {
    let value = e.target.value;

    // Remove tudo que não for número
    value = value.replace(/\D/g, '');

    // Aplica a máscara
    if (value.length <= 3) {
      value = value.replace(/(\d{3})(\d{1,})/, '$1.$2');
    } else if (value.length <= 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
    } else if (value.length <= 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
    }

    setCpf(value);
  };

  return (
    <div>
      <label htmlFor="cpf">CPF:</label>
      <input
        id="cpf"
        type="text"
        value={cpf}
        onChange={handleCpfChange}
        placeholder="Digite seu CPF"
      />
    </div>
  );
}

export default MaskedCPF;