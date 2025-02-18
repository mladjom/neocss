// stories/Form/Textarea.stories.js
import React from 'react';
import { FormTextarea } from '@/components/Form/Textarea';

export default {
  title: 'Components/Form/Textarea',
  component: FormTextarea,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    success: { control: 'boolean' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    rows: { control: 'number' }, // Control for number of rows
    onChange: { action: 'onChange' },
    value: { control: 'text' },
  },
};

const TemplateTextarea = (args) => <FormTextarea {...args} />;

export const DefaultTextarea = TemplateTextarea.bind({});
DefaultTextarea.args = {
  label: 'Message',
  placeholder: 'Enter your message',
  rows: 3,
};

export const WithErrorTextarea = TemplateTextarea.bind({});
WithErrorTextarea.args = {
  label: 'Message',
  placeholder: 'Enter your message',
  error: 'Message is required',
  rows: 3,
};
