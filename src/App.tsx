import React, { useState } from 'react';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
}

const initialFormValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowResults(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formValues.firstName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formValues.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formValues.email} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {showResults && (
        <div>
          <h2>Results:</h2>
          <p>First Name: {formValues.firstName}</p>
          <p>Last Name: {formValues.lastName}</p>
          <p>Email: {formValues.email}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
