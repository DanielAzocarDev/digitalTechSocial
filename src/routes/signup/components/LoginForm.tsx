import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

const LoginForm = ({ handleShowLogin }: { handleShowLogin: () => void }) => {
  const { loginUser, checkUsername } = useAuth();

  const [username, setUsername] = useState<string>("");

  return (
    <>
      <div className="flex gap-4">
        <input
          className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          placeholder="@username"
        />
        <button
          data-testid="login-button"
          className="bg-purple-600 disabled:bg-gray-400 text-white font-bold px-5 py-2 rounded-sm"
          onClick={() => loginUser(username)}
          disabled={checkUsername(username)}
        >
          ENTRAR
        </button>
      </div>

      <div className="flex justify-end pt-5">
        <button data-testid="signup-button" onClick={handleShowLogin}>
          No tienes cuenta? Entra aqui
        </button>
      </div>
    </>
  );
};

export default LoginForm;
