import ReduxFieldLevelValidationForm from './Form';

function Page3() {
  const onSubmit = formData => {
    console.log(formData)
  }
  
  return (
    <div>
      <h1>Field level validation example</h1>
      <ReduxFieldLevelValidationForm onSubmit={ onSubmit }/>
    </div>
  );
}

export default Page3;