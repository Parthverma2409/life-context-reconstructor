import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
export default function WordFrequency({ data }: { data: any[] }) {
  return (
    <div style={{ height: 240 }} className="bg-slate-900 p-4 rounded">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="word" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
