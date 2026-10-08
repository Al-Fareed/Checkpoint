import {
  LayoutDashboard,
  ListTodo,
  FolderKanban,
  Columns3,
  CalendarDays,
  Users,
  Bell,
  ChartNoAxesCombined,
  Flag,
  CircleUserRound,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router";

const sideBarMenu = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "My Tasks", path: "/tasks", icon: ListTodo },
  { label: "Projects", path: "/projects", icon: FolderKanban },
  { label: "Kanban", path: "/kanban", icon: Columns3 },
  { label: "Calendar", path: "/calendar", icon: CalendarDays },
  { label: "Team", path: "/team", icon: Users },
  { label: "Reports", path: "/reports", icon: ChartNoAxesCombined },
  { label: "Checkpoints", path: "/checkpoints", icon: Flag },
];

const Sidebar = () => {
  return (
    <aside className="box-border flex h-full min-h-0 w-[18vw] shrink-0 flex-col overflow-y-auto overscroll-contain border-r border-slate-800 bg-slate-900 text-white pt-2">
        {
          sideBarMenu.map((menu,index)=>{
            return(
              <div className="rounded-md p-[1.5px]" key={index}>
                <NavLink
                  className={({ isActive }) =>
                    `flex w-full flex-row items-center rounded-md px-3 py-2.5 transition-colors ${
                      isActive
                        ? "bg-blue-700 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                  to={menu.path}
                  end={menu.path === "/dashboard"}
                >
                  <menu.icon />
                  <span className="ml-3">{menu.label}</span>
                </NavLink>
              </div>
            )
          })
        }

        <div className="flex-col border-t mb-0 mt-auto flex w-full border-slate-800 pb-2 pt-2">
          <div className="rounded-md p-[1.5px]">
            <NavLink className={({ isActive }) => `flex w-full flex-row items-center rounded-md px-3 py-2.5 transition-colors ${isActive ? "bg-blue-700 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`} to="/notifications">
              <Bell />
              <span className="ml-3">Notifications</span>
            </NavLink>
          </div>
          <div className="rounded-md p-[1.5px]">
            <NavLink className={({ isActive }) => `flex w-full flex-row items-center rounded-md px-3 py-2.5 transition-colors ${isActive ? "bg-blue-700 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`} to="/profile">
            <CircleUserRound />
            <span className="ml-3">Profile</span>
            </NavLink>
          </div>
          <div className="rounded-md p-[1.5px]">
            <NavLink className={({ isActive }) => `flex w-full flex-row items-center rounded-md px-3 py-2.5 transition-colors ${isActive ? "bg-blue-700 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`} to="/settings">
              <Settings />
              <span className="ml-3">Settings</span>
            </NavLink>
          </div>
        </div>
    </aside>
  );
};

export default Sidebar;
