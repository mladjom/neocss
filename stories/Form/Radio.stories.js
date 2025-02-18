import React from 'react';
import { FormRadio } from '@/components/Form/Radio';

export default {
  title: 'Components/Form/Radio',
  component: FormRadio,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    success: { control: 'boolean' },
    required: { control: 'boolean' },
    name: { control: 'text' }, // Important: Control for radio group name
    onChange: { action: 'onChange' },
    value: { control: 'text' }, // Control for the input value
    checked: { control: 'boolean' },
  },
};

const TemplateRadio = (args) => <FormRadio {...args} />;

export const Male = TemplateRadio.bind({});
Male.args = {
  label: 'Male',
  name: 'gender', // Same name for radio group
  value: 'male',
};

export const Female = TemplateRadio.bind({});
Female.args = {
  label: 'Female',
  name: 'gender', // Same name for radio group
  value: 'female',
};