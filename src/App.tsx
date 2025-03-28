import { DetailsLayout } from "./pages/Details";
import { Dashboard } from "./pages/Dashboard";

export default function App() {

  const isLoggedIn = false;
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return (
      <Dashboard />
    )
  }

  return (
    <div className="min-h-screen items-center justify-center flex bg-primary-100">
      <DetailsLayout />
    </div>
  )
}