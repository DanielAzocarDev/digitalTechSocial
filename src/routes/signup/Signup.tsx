import { useState } from "react";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

export const Signup = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className=" max-w-2/4">
        <div className="border-b border-purple-400 pb-3 mb-6">
          <h1 className="text-center text-2xl text-gray-300 font-black">
            Digital Tech Inc
          </h1>
        </div>
        <div className=" bg-white border border-dashed border-purple-400 rounded px-5 py-7">
          {showLogin ? (
            <LoginForm handleShowLogin={handleShowLogin} />
          ) : (
            <SignupForm handleShowLogin={handleShowLogin} />
          )}
        </div>
      </div>
    </div>
  );
};
