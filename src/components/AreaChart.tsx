import React from 'react'
import {
  Area,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Jan',
    value: 400,
  },
  {
    name: 'Feb',
    value: 300,
  },
  {
    name: 'Mar',
    value: 200,
  },
  {
    name: 'Apr',
    value: 500,
  },
  {
    name: 'May',
    value: 400,
  },
  {
    name: 'Jun',
    value: 300,
  },
  {
    name: 'Jul',
    value: 450,
  },
  {
    name: 'Aug',
    value: 500,
  },
]
export function AreaChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4CAF50" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="#4CAF50"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorGradient)"
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  )
}
