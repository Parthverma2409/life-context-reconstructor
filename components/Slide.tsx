export default function Slide({ title, children } : { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
