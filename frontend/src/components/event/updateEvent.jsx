import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { eventField } from '../template/formFields';
import Input from '../template/Input';
import FormAction from '../FormAction';

const fields = eventField;
const fieldState = {};
fields.forEach(field => fieldState[field.id] = '')

export default function UpdateEvent({id}) {
    const [eventState, setEvents] = useState(fieldState);
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
  
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/events/${id}/`);
        const eventData = await response.json();

        if (response.ok) {
          
          for (const key in eventData) {
            if (key === 'poster_image') {
              eventData[key] = ''; //eventData[key].split('/').pop();
            }
          }
          setEvents(eventData);
        } else {
          console.error('Failed to fetch event data');
        }
      } catch (error) {
        console.error('Error fetching event data:', error.message);
      }
    };

    useEffect(() => {
      fetchEventDetails();
    }, [id]);

    const handleChange = (e) => {
        setEvents({...eventState, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEvent();
    }

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

        const updateEvent = async () => {

        const formdata = new FormData(document.querySelector('form'))
        
        try {
            const response = await fetch(`http://localhost:8000/api/events/${id}/`, {
                method: 'PUT',
                body: formdata,
            });
            if (response.ok) {
                onCloseModal()
                console.log('Event updated successfully');
            } else {
                console.error('Event failed to update')
            }
        } catch (error) {
            console.error('Failed to update event', error.message);
        }
    }

  return (
    <div>
      <Button className='bg-blue-500' onClick={() => setOpenModal(true)}>Update</Button>
      <Modal className='bg-blue-200 w-[50vw] h-[60vh] mx-auto my-auto' show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
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
                        <FormAction handleSubmit={handleSubmit} text="Update" />
                    </form>
            
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}