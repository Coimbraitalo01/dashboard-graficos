import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Seg', acessos: 4000 },
  { name: 'Ter', acessos: 3000 },
  { name: 'Qua', acessos: 5000 },
];

export default function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="acessos" stroke="#8884d8" />
      </LChart>
    </ResponsiveContainer>
  );
}
