// stories/FormInput.stories.js
import React from 'react';
import FormInput from '@/components/Form/Input'; // Adjust path as needed

export default {
  title: 'Components/Form/Input',
  component: FormInput,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    success: { control: 'boolean' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    // Add controls for other relevant props (type, etc.)
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
  },
};

const Template = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Enter your name',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  error: 'Invalid email address',
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  success: true,
};

export const Required = Template.bind({});
Required.args = {
  label: 'Phone',
  placeholder: 'Enter your phone number',
  required: true,
};

export const AllStates = Template.bind({});
AllStates.args = {
    label: 'Name',
    placeholder: 'Enter your name',
    required: true,
    error: 'Name is required',
    success: true,
}