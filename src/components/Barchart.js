import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Pilot',
    Female: 1,
    Male: 4,
   
  },
  {
    name: 'Steward',
    Female: 1,
    Male: 2,
    
  },
  {
    name: 'Airhostess',
    Female: 2,
    Male: 2,

  },
];

export default class Barchart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
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
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Female" fill="#70B986" />
          <Bar dataKey="Male" fill="#2C643E" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}