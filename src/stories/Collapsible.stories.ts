import type { Meta, StoryObj } from '@storybook/react-vite';

import Collapsible from '../components/collapsible';

const meta = {
  title: 'Example/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    title: 'Details',
    children: 'This is the collapsible content. You can place any text here.',
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
