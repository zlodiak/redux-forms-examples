import React from 'react';
import ArrayForm from './Form';


function Page1smart(props) {
  const onSubmit = formData => {
    console.log(formData)
  }

  return (
    <div>
      <ArrayForm onSubmit={ onSubmit } />
    </div> 
  );
}

export default Page1smart;
