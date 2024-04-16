import Toolbar from "./components/ToolBar";
import UserTable from "./components/UsersTable";

const fakeUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    registrationDate: "2024-04-16",
    lastLoginDate: "2024-04-16",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    registrationDate: "2024-04-15",
    lastLoginDate: "2024-04-15",
    status: "Blocked",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    registrationDate: "2024-04-14",
    lastLoginDate: "2024-04-14",
    status: "Active",
  },
];

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Toolbar />
      <UserTable users={fakeUsers} />
    </div>
  );
}

export default App;
