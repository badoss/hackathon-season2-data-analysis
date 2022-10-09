
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Age 20-30',
    Female: 2,
    Male: 2,
  },
  {
    name: 'Age 31-40',
    Female: 1,
    Male: 2,
  },
  {
    name: 'Age 41-50',
    Female: 1,
    Male: 1,

  },
  {
    name: 'Age 51-60',
    Female: 0,
    Male: 3,

  },

];

export default class Linechart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name"  />
          <YAxis type="number" domain={[0, 4]}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Male" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Female" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
