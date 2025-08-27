import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '@taichi-ui/components'
import dayjs from 'dayjs'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'date' },
      description: '当前选中的日期',
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
    value: dayjs(),
    onChange: (date) => console.log('选中日期:', date.format('YYYY-MM-DD')),
  },
}

export const WithCustomContent: Story = {
  args: {
    value: dayjs(),
    onChange: (date) => console.log('选中日期:', date.format('YYYY-MM-DD')),
    dateInnerContent: (value) => (
      <div>
        <p
          style={{
            background: 'yellowgreen',
            height: '30px',
            margin: 0,
            padding: '5px',
          }}
        >
          {value.format('MM/DD')}
        </p>
      </div>
    ),
  },
}
