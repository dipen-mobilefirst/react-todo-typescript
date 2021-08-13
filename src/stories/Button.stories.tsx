import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button>Add Todo</Button>

export const emoji = () =>
  <Button>Emoji</Button>
