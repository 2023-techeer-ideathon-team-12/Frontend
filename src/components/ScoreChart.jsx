import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, XAxis, YAxis, CartesianGrid, BarChart } from 'recharts';

function ScoreChart() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const res = await axios.get(`http://localhost:8080/api/reviews/star/1`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
      <YAxis dataKey="star" type="category" />
      <Bar dataKey="count" barSize={20} fill="#FFC500" />
    </BarChart>
  );
}

export default ScoreChart;
