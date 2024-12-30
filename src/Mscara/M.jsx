import React from 'react';
import InputMask from 'react-input-mask';

function MaskedCPF() {
  return (
    <div>
      <label htmlFor="cpf">CPF:</label>
      <InputMask
        id="cpf"
        mask="999.999.999-99"
        placeholder="Digite seu CPF"
      />
    </div>
  );
}

export default MaskedCPF;