// stories/Toast.stories.js
import React from 'react';
import Toast from '../components/Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    message: { control: 'text' },
    isVisible: { control: 'boolean' },
    onClose: { action: 'onClose' },
  },
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a toast message.',
  isVisible: true,
  onClose: () => {},
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This toast should be hidden.',
  isVisible: false,
  onClose: () => {},
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  message: 'This is a longer toast message that might wrap to multiple lines.  This is a longer toast message that might wrap to multiple lines.',
  isVisible: true,
  onClose: () => {},
};