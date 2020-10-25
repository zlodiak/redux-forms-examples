import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './Validate';


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

function SyncValidationForm(props) {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="age" type="number" component={renderField} label="Age" />
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

const ReduxSyncValidationForm = reduxForm({
  form: 'syncValidForm',
  validate,
})(SyncValidationForm);

export default ReduxSyncValidationForm;
