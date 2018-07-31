import React from 'react';
import FormInput from './FormInput';
import './FormComponent.css';

const FormComponent = (props) => {
  const formInput = React.createRef();

  const inputSelection = () => {
    const input = formInput.current;

    if (input.hasText()) {
      input.selectInputText();
    }
  }

  return (
    <div>
      <button className="button button-yellow" type="button" onClick={inputSelection}>
        Select Input
      </button>

      <FormInput ref={formInput} />
    </div>
  );
}

export default FormComponent;

