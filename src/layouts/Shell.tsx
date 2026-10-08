import { Outlet } from "react-router";

const Shell = () => (
  <section className="min-h-0 min-w-0 flex-1 overflow-y-auto bg-slate-950">
    <Outlet />
  </section>
);

export default Shell;
