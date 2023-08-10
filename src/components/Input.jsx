import React from 'react';
import { Field, ErrorMessage } from 'formik';
//import { string, object } from 


const Input = ({ name, label, type = 'text' , className =""}) => {

const classes =`w-full px-6 py-3 mt-1 p-2 border rounded
-lg  focus:ring focus:ring-indigo-300 focus:outline-none ${className}`

  return (
    <div className="w-full mb-4 flex flex-col px-3 md:px-8">

      <label htmlFor={name} className="block text-lg font-bold">
        {label}
      </label>
      {type ==="textarea"?
      <Field
        as = "textarea"
        rows = {5}
        id={name}                                             name={name}
        className={classes}                                 />

     :
     <Field
        type={type}
        id={name}
        name={name}
        className={classes}
      />

      }

      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
};

export default Input;
