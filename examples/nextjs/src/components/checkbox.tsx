import React from 'react';

// Id is omitted to make it required for the input.
// if input is inside of the label it needs an ID
// or it cannot be selected so we mark it as required.
type CheckboxInputProps = {
  checked?: boolean
  id: string
} & Omit<React.HTMLProps<HTMLInputElement>, 'id'>;

const CheckboxInput = ({ checked, id, ...rest }: CheckboxInputProps): JSX.Element => (
  <label htmlFor={id}>
    <input
      checked={checked}
      id={id}
      type="checkbox"
      {...rest}
    />
  </label>
);

export default CheckboxInput;
