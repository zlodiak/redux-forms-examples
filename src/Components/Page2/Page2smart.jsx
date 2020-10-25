import ReduxSyncValidationForm from './Form';

function Page2() {
  const onSubmit = formData => {
    console.log(formData)
  }
  
  return (
    <div>
      <h1>Sync valid form example</h1>
      <ReduxSyncValidationForm onSubmit={ onSubmit }/>
    </div>
  );
}

export default Page2;