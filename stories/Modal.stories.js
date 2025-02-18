// stories/Modal.stories.js
import React from 'react';
import Modal from '@/components/Modal'; // Path to your Modal component
import Button from '@/components/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' }, // Control for isOpen prop
    onClose: { action: 'onClose' }, // Action for onClose prop
    children: { control: 'text' }, // Control for children prop
  },
};

const Template = (args) => (
  <Modal {...args}>
    {args.children ? args.children : (
      <>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <Button onClick={args.onClose}>Close</Button>
      </>
    )}
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true, // Initially open in Storybook
  onClose: () => {}, // Placeholder function
  children: '', // No initial children
};


export const WithContent = Template.bind({});
WithContent.args = {
  isOpen: true,
  onClose: () => {},
  children: (
    <div>
      <h2>Custom Title</h2>
      <p>This is some custom content.</p>
    </div>
  ),
};