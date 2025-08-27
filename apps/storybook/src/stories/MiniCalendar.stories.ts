import type { Meta, StoryObj } from '@storybook/react'
import { MiniCalendar } from '@taichi-ui/components'

const meta: Meta<typeof MiniCalendar> = {
  title: 'Components/MiniCalendar',
  component: MiniCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'date' },
      description: '默认选中的日期',
    },
    onChange: {
      action: 'changed',
      description: '日期改变时的回调函数',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: new Date(),
    onChange: (date) => console.log('选中日期:', date),
  },
}

export const WithSpecificDate: Story = {
  args: {
    defaultValue: new Date('2025-08-26'),
    onChange: (date) => console.log('选中日期:', date),
  },
}
