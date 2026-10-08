export default function Dashboard() {
  return <PageTitle title="Dashboard" />;
}

function PageTitle({ title }: { title: string }) {
  return <div className="p-6 text-white"><h1 className="text-2xl font-semibold">{title}</h1></div>;
}
