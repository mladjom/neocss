// stories/FormSelect.stories.js
import React from 'react';
import { FormSelect } from '@/components/Form/Select';

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
];

export default {
  title: 'Components/Form/Select',
  component: FormSelect,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    success: { control: 'boolean' },
    required: { control: 'boolean' },
    options: { control: 'object', defaultValue: countryOptions }, // Control for options
    onChange: { action: 'onChange' },
    value: { control: 'text' },
  },
};

const TemplateSelect = (args) => <FormSelect {...args} />;

export const DefaultSelect = TemplateSelect.bind({});
DefaultSelect.args = {
  label: 'Country',
  options: countryOptions,
};

export const WithErrorSelect = TemplateSelect.bind({});
WithErrorSelect.args = {
  label: 'Country',
  options: countryOptions,
  error: 'Please select a country',
};