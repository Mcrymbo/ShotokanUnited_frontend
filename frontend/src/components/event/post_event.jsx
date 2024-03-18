import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eventField } from '../template/formFields';
import Input from '../template/Input';
import FormAction from '../FormAction';

const fields = eventField;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

function Post_event() {  
  const [eventState, setEventState] = useState(fieldsState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEventState({ ...eventState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postEvent();
  };

  const postEvent = async () => {
    const formdata = new FormData(document.querySelector('form'));

    try {
      const response = await fetch('http://localhost:8000/api/events/', {
        method: 'POST',
        body: formdata,
      });

      const data = await response.json();

      if (response.ok) {
        setEventState(fieldsState);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px w-[400px]">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={eventState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormAction handleSubmit={handleSubmit} text="Event" />
      </form>
    </div>
  );
}

export default Post_event;
