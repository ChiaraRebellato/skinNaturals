import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error d-flex align-items-center mt-2 position-absolute">

          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-exclamation-circle me-1" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
          </svg>

          {meta.error}

        </div>
      ) : null}
    </>
  );
};


const EmailValidator = () => {

  return (
    <>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required')
        })}
        onSubmit={() => {
          setTimeout(() => {
            alert("Thank you! Check your email for a 15% discount");

          }, 1000);

        }}
      >
        <fieldset>

          <Form 
          action='#' 
          encType="text/plain" 
          id="newsletterForm" 
          name="newsletterForm"
          autoComplete="on" 
          noValidate>

            <legend className="fs-6 text-center">Subscribe to our newsletter and receive a surprise</legend>

            <div className="form-floating mb-4">
              <MyTextInput 
                className="form-control rounded-0 border-0 border-bottom border-white bg-transparent"
                name="email"
                type="email"
                placeholder="name@example.com"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                required
                autoComplete="email"
                aria-required="true"
              />
              <label for="email" className='bg-transparent'>Email address<sup>*</sup></label>

            </div>

            <button id="submitButton" type="submit" className="position-relative">
              <img src="/img/arrow-right.svg" alt="Arrow right" />
            </button>

          </Form>
        </fieldset>
      </Formik>
    </>
  );
};


export default EmailValidator;
