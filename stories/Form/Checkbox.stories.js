import React from 'react';
import FormCheckbox from '@/components/Form/Checkbox';

export default {
  title: 'Components/Form/Checkbox',
  component: FormCheckbox,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    success: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'onChange' },
    checked: { control: 'boolean' },
  },
};

const TemplateCheckbox = (args) => <FormCheckbox {...args} />;

export const DefaultCheckbox = TemplateCheckbox.bind({});
DefaultCheckbox.args = {
  label: 'I agree to the terms',
};


