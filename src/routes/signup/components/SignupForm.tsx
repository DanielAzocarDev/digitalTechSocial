import { useForm, SubmitHandler } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { registerUser } from "../../../store/features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { login } from "../../../store/features/auth/authSlice";
import { imageToString } from "../../../utils/imageToString";

type UserForm = {
  username: string;
  name: string;
  surname: string;
};
const SignupForm = ({ handleShowLogin }: { handleShowLogin: () => void }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [preview, setPreview] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserForm>();
  const onSubmit: SubmitHandler<UserForm> = (data) => {
    dispatch(registerUser({ ...data, avatar: preview }));
    dispatch(login({ ...data, avatar: preview }));
    reset();
    navigate("/");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      imageToString(file, setPreview);
    }
  };

  return (
    <>
      <h2 className="text-center text-xl font-bold mb-2">Registrate aqui</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 pb-2">
          <label className="" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm focus:outline-none"
            {...register("username", {
              required: "Debes ingresar un nombre de usuario.",
            })}
            type="text"
            name="username"
            placeholder="username"
          />
          {errors.username && (
            <p className="text-xs text-red-400 font-light">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 pb-2">
          <label htmlFor="name">Nombre</label>
          <input
            className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm focus:outline-none"
            type="text"
            {...register("name", {
              required: "Debes ingresar tu nombre",
            })}
            name="name"
            placeholder="name"
          />
          {errors.name && (
            <p className="text-xs text-red-400 font-light">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 pb-2">
          <label htmlFor="surname">Apellido</label>
          <input
            className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm focus:outline-none"
            type="text"
            {...register("surname", {
              required: "Debes ingresar tu Apellido",
            })}
            name="surname"
            placeholder="surname"
          />
          {errors.surname && (
            <p className="text-xs text-red-400 font-light">
              {errors.surname.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 pb-2">
          <label htmlFor="avatar">Foto de perfil</label>
          {preview !== "" && (
            <div className="w-40 h-40 border border-purple-600 p-2 rounded-full overflow-hidden">
              <img className="rounded-full" src={preview} alt="" />
            </div>
          )}
          <input
            // className="bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm"
            type="file"
            onChange={handleChange}
            name="avatar"
            placeholder="avatar"
          />
        </div>
        <div className="flex justify-between gap-4 pt-5">
          <button onClick={handleShowLogin}>
            Ya estas registrado? Entra aqui
          </button>
          <input
            className="bg-purple-600 hover:bg-purple-800 hover:cursor-pointer text-white font-bold px-5 py-2"
            type="submit"
            value="Regitrar"
          />
          {/* <button className="bg-purple-600 text-white font-bold px-5 py-2">
          Registrar
        </button> */}
        </div>
      </form>
    </>
  );
};

export default SignupForm;
