import React, { useState } from 'react';
import {
  Input, Label, Container, ContainerDecimal, ErrorLabel,
} from './styles';
import WrapperDefault from '../../components/WrapperDefault';
import Convert from '../../helper/convert';

const regExBin = /[2,9]/;
const regNum = /\D/;

function Bin2Dec() {
  const [inputValue, setInputValue] = useState('');
  const [decLabel, setDecLabel] = useState('');
  const [error, setError] = useState('');

  const handlerInputBin = (e) => {
    const valorInput = e.target.value;

    if (regNum.test(valorInput)) {
      setError('Por favor digite um número entre 0 e 1.');
      return;
    }

    if (regExBin.test(valorInput)) {
      setError('O número digitado tem que estar entre 0 e 1.');
      return;
    }
    setInputValue(valorInput);
    setError('');
    const decimal = Convert.binaryToDecimal(valorInput);
    setDecLabel(() => decimal);
  };

  return (
    <WrapperDefault>
      <Container>
        <Label>Digite o valor binário para ser convertido</Label>
        <Input
          maxLength={256}
          onChange={handlerInputBin}
          value={inputValue}
        />
        <ErrorLabel>{ error }</ErrorLabel>
        <ContainerDecimal>
          <Label>
            Decimal:
            {' '}
            { decLabel }
          </Label>
        </ContainerDecimal>
      </Container>
    </WrapperDefault>

  );
}

export default Bin2Dec;
