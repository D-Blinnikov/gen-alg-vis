export function validateLogin(values) {
    const errors = {};
    // if (!values.name) {
    //   errors.name = 'Required';
    // } else if (values.name.length > 20) {
    //   errors.name = 'Must be 20 characters or less';
    // }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 20 || values.password.length < 6) {
      errors.password = 'Must be 20 characters or less and 6 characters or more';
    }else if(values.password.includes(' ')) {
        errors.password = 'Must not contain white space'
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };