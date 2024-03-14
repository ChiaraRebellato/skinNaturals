import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './contactForm.css'

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
                <div className="error d-flex align-items-center mt-1">

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

const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error d-flex align-items-center mt-1">

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

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently from other input types: select and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props htmlFor you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error d-flex align-items-center mt-1">

                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-exclamation-circle me-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                    </svg>

                    {meta.error}

                </div>
            ) : null}
        </div>
    );
};


const ContactForm = () => {

    const navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    email: '',
                    acceptedTerms: false, // added htmlFor our checkbox
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .min(2, 'Too Short!')
                        .max(15, 'Must be 15 characters or less')
                        .required('Required')
                        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed htmlFor this field "),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    msg: Yup.string()
                        .required('Required')
                })}
                onSubmit={() => {
                    setTimeout(() => {
                        navigate("/redirect", {
                            state: {
                                isSent: true
                            }
                        }
                        );
                    }, 400);

                }}
            >
                <fieldset>
                    <legend className="fs-5 fw-bold text-center">Leave a message</legend>

                    <Form encType="text/plain" id="messageForm" name="messageForm" autoComplete="on" noValidate data-netlify="true">

                    <input type="hidden" name="messageForm" value="messageForm" />

                        <div className="form-floating mt-5 mb-4">
                            <MyTextInput className="form-control rounded-0 border-0 border-bottom"
                                name="firstName"
                                type="text"
                                pattern="^[a-zA-Z]+"
                                required
                                autoFocus
                                autoComplete="given-name"
                                aria-required="true"
                                placeholder="Your Name"
                            />
                            <label htmlFor="name">Name<sup>*</sup></label>

                        </div>

                        <div className="form-floating mb-4">
                            <MyTextInput className="form-control rounded-0 border-0 border-bottom"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                required
                                autoComplete="email"
                                aria-required="true"
                            />
                            <label htmlFor="email">Email address<sup>*</sup></label>

                        </div>

                        <div className="form-floating mb-4">
                            <MyTextArea
                                className="form-control rounded-0 h-100 border-0 border-bottom"
                                name="msg"
                                cols="5"
                                rows="2"
                                placeholder="Your Message"
                                required
                                aria-required="true"
                            ></MyTextArea>
                            <label htmlFor="msg">Message<sup>*</sup></label>

                        </div>

                        <MyCheckbox name="acceptedTerms" className='m-1'>
                            I accept the terms and conditions
                        </MyCheckbox>

                        <input
                            type="submit"
                            className="btn border rounded-0 w-100 mt-3 mb-3"
                            value="SEND"
                            tabIndex={0}
                        />

                    </Form>
                </fieldset>
            </Formik>
        </>
    );
};

export default ContactForm;