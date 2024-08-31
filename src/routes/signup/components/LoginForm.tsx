const LoginForm = ({ handleShowLogin }: { handleShowLogin: () => void }) => {
  return (
    <>
      <div className="flex gap-4">
        <input
          className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm"
          type="text"
          name="username"
          id="username"
          placeholder="@username"
        />
        <button className="bg-purple-600 text-white font-bold px-5 py-2 rounded-sm">
          ENTRAR
        </button>
      </div>

      <div className="flex justify-end pt-5">
        <button onClick={handleShowLogin}>No tienes cuenta? Entra aqui</button>
      </div>
    </>
  );
};

export default LoginForm;
