// app/test/page.js
'use client';
import { useState } from 'react';
import Modal from '@/components/Modal'; 
import Button from '@/components/Button';

export default function Test () {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
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