// app/test/page.js
'use client';
import { useState } from 'react';
import Modal from '@/components/Modal'; 
import Button from '@/components/Button';
import FormInput  from '@/components/Form/Input';
import FormSelect  from '@/components/Form/Select';
import FormRadio  from '@/components/Form/Radio';
import FormCheckbox from '@/components/Form/Checkbox';
import FormTextarea  from '@/components/Form/Textarea';
// import { FormSwitch } from '@/components/Form/Switch';
// import { FormSlider } from '@/components/Form/Slider';
// import { FormRange } from '@/components/Form/Range';


export default function Test () {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [country, setCountry] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [gender, setGender] = useState('');

    const countryOptions = [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
      // ... more countries
    ];

    return (
        <div>
              <form>
      <FormInput
        label="Name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        //error={name.length < 3 ? 'Name must be at least 3 characters' : ''}
      />
      <FormInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormTextarea
        label="Message"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <FormSelect
        label="Country"
        options={countryOptions}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <FormCheckbox
        label="Subscribe to newsletter"
        checked={newsletter}
        onChange={(e) => setNewsletter(e.target.checked)}
      />
      <div>
        <FormRadio
          label="Male"
          name="gender" // Same name for radio group
          value="male"
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />
        <FormRadio
          label="Female"
          name="gender" // Same name for radio group
          value="female"
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>




        <Button onClick={openModal}>Open Modal</Button> {/* Button to open modal */}
  
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {/* Modal content goes here */}
          <h2>Modal Title</h2>
          <p>This is the content of the modal.</p>
          <Button onClick={closeModal}>Close</Button>
        </Modal>
      </div>
    );
}