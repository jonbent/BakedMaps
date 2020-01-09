import React from 'react'

import queryString from 'query-string';
import EmailForm from './EmailForm'
import SignupOptions from './SignupOptions'

const SignupForms = (props) => {
    const queryStringParams = queryString.parse(props.location.search);
    let returnedForm;
    switch(queryStringParams.mode){
        case "email":
            returnedForm = (
              <EmailForm
                processForm={props.processForm}
                formType={props.formType}
                errors={props.errors}
                clearErrors={props.clearErrors}
              />
            );
            break;
        default:
            returnedForm = <SignupOptions/>
            break;
    }
    return returnedForm;
}

export default SignupForms