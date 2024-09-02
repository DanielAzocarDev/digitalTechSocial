import { Route, Routes } from "react-router-dom";
import { Signup } from "./routes/signup/Signup";
import Feed from "./routes/feed";
import ProtectedRoute from "./routes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Signup />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Feed />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
