import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  required,
  maxLength15,
  minLength2,
  number,
  minValue13,
  email,
} from './Validate';


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  // debugger
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        { touched && error && <span>{error}</span> }
      </div>
    </div>
  )
}

function FieldLevelValidationForm(props) {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength15, minLength2]}
      />
      <Field name="email" type="email" component={renderField} label="Email" validate={email} />
      <Field name="age" type="number" component={renderField} label="Age" validate={[required, number, minValue13]} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

const ReduxFieldLevelValidationForm = reduxForm({
  form: 'syncValidForm',
})(FieldLevelValidationForm);

export default ReduxFieldLevelValidationForm;
