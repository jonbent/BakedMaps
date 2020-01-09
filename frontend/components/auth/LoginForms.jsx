import React from 'react'
import queryString from "query-string";
import EmailForm from './EmailForm'
import LoginOptions from './LoginOptions'
const LoginForms = (props) => {
    const queryStringParams = queryString.parse(props.location.search);
    const demoUser = {
        email_or_username: "demo@bakedmaps.com",
        password: 'password'
    }
    let returnedForm;
    switch (queryStringParams.mode) {
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
      case "demo":
        returnedForm = (
          <EmailForm
            processForm={props.processForm}
            formType={props.formType}
            errors={props.errors}
            demoUser={demoUser}
            clearErrors={props.clearErrors}
          />
        );
        break;
      default:
        returnedForm = <LoginOptions />;
        break;
    }
    return returnedForm;
}

export default LoginForms
