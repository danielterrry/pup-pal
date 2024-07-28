import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';

const FormControl = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1rem',
}))`
  width: 100%;
  color: ${Colors.darkPurple};
  font-size: 1rem;
  border: 2px solid ${Colors.lighterPurple};
  border-radius: 3px;
  padding: ${(props) => props.size};

  &:focus {
    box-shadow: 0 0 5px ${Colors.lighterPurple};
    border-color: ${Colors.lightCream};
    background-color: ${Colors.lighterPurple};
  }
`;

export const Label = styled.label`
  color: ${Colors.primary};
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const FormGroup = ({ label, id, placeholder, name, value, onChange, size }) => (
  <div style={{ marginBottom: '1rem' }}>
    <Label for={id}>{label}</Label>
    <FormControl
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      size={size}
    />
  </div>
);

export default FormGroup;
