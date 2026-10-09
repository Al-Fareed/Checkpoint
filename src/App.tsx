import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Calendar from "./pages/Calendar";
import Checkpoints from "./pages/Checkpoints";
import Dashboard from "./pages/Dashboard";
import Kanban from "./pages/Kanban";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/SideBar";
import Shell from "./layouts/Shell";
import Login from "./pages/Login";
import GuestRoute from "./routes/GuestRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import SignUp from "./pages/SignUp";

function AppLayout() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Navbar />
      <main className="flex min-h-0 flex-1 flex-row overflow-hidden bg-black text-white">
        <Sidebar />
        <Shell />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>

      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/:taskId" element={<Tasks />} />
          <Route path="kanban" element={<Kanban />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="team" element={<Team />} />
          <Route path="reports" element={<Reports />} />
          <Route path="checkpoints" element={<Checkpoints />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
