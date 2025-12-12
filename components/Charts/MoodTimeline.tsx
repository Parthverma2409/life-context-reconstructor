import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
export default function MoodTimeline({ data }: { data: any[] }) {
  return (
    <div style={{ height: 300 }} className="bg-slate-900 p-4 rounded">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#1f2937" />
          <XAxis dataKey="date" />
          <YAxis domain={[-1,1]} />
          <Tooltip />
          <Line dataKey="score" stroke="#8b5cf6" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
