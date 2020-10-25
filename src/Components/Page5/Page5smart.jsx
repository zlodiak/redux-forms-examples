import ReduxAsyncBlurValidationForm from './Form';

function Page5() {
  const onSubmit = formData => {
    console.log(formData)
  }

  return (
    <div>
      <h1>async blur valid form example</h1>
      <ReduxAsyncBlurValidationForm onSubmit={ onSubmit }/>
    </div>
  );
}

export default Page5;