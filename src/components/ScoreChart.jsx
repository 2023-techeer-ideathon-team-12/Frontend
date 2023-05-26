import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, BarChart } from 'recharts';

const data = [
  {
    name: '5점',
    pv: 800,
  },
  {
    name: '4점',
    pv: 967,
  },
  {
    name: '3점',
    pv: 1098,
  },
  {
    name: '2점',
    pv: 1200,
  },
  {
    name: '1점',
    pv: 1108,
  },
];

function ScoreChart() {
  return (
    <BarChart
      layout="vertical"
      width={300}
      height={250}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Bar dataKey="pv" barSize={20} fill="#FFC500" />
    </BarChart>
  );
}

export default ScoreChart;
