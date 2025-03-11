import { useState } from "react";
import { DetailsLayout } from "./components/layout/DetailsLayout";
import { Dashboard } from "./components/Dashboard";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(setIsLoggedIn);
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