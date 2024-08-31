const SignupForm = ({ handleShowLogin }: { handleShowLogin: () => void }) => {
  return (
    <>
      <h2 className="text-center text-xl font-bold mb-2">Registrate aqui</h2>
      <form>
        <div className="flex flex-col gap-2 pb-2">
          <label className="" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm"
            type="text"
            name="username"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col gap-2 pb-2">
          <label htmlFor="username">Nombre</label>
          <input
            className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm"
            type="text"
            name="username"
            placeholder="name"
          />
        </div>
        <div className="flex flex-col gap-2 pb-2">
          <label htmlFor="username">Apellido</label>
          <input
            className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm"
            type="text"
            name="username"
            placeholder="surname"
          />
        </div>
        <div className="flex flex-col gap-2 pb-2">
          <label htmlFor="username">Foto de perfil</label>
          <input
            className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm"
            type="text"
            name="username"
            placeholder="avatar"
          />
        </div>
      </form>

      <div className="flex justify-between gap-4 pt-5">
        <button onClick={handleShowLogin}>
          Ya estas registrado? Entra aqui
        </button>
        <button className="bg-purple-600 text-white font-bold px-5 py-2">
          Registrar
        </button>
      </div>
    </>
  );
};

export default SignupForm;
