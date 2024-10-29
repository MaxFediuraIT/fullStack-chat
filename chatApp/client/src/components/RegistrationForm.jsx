import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = (props) => {
    const [field, meta] = useField(props);
  return (
      <>
          <div className='flex justify-between'>
              <label htmlFor={props.id || props.name}>{props.label}</label>
            {meta.touched && meta.error ? (
        <div className='text-red-600'>{meta.error}</div>
      ) : null}        
          </div>
          <input  {...field} {...props} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-500'}`} />

    </>
  );
};


export default function RegistrationForm()  {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col px-5 py-5 gap-3 bg-[#f5f5f5]'>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <button type="submit" className='bg-blue-500 text-white rounded px-3 py-2'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};