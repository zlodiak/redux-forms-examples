import React from 'react';
import ReduxSimpleForm from './Form';


function Page1smart(props) {
  const onSubmit = formData => {
    console.log(formData)
  }

  return (
    <div>
      <ReduxSimpleForm onSubmit={ onSubmit } />
    </div> 
  );
}

export default Page1smart;
