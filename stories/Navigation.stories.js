import React from 'react';
import Navigation from '@/components/Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {}; // Add any props here if needed