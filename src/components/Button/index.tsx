import React from 'react';

import { ButtonWrapper } from './styles';

const Button: React.FC = ({ children }) => {
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
