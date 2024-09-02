import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";
import { login } from "../store/features/auth/authSlice";
import { registerUser } from "../store/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const useAuth = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const user = useAppSelector((state) => state.auth.user);

  const users = useAppSelector((state) => state.users.users);

  const dispatch = useAppDispatch();

  const checkUsername = (username: string) => {
    if (users.find((user) => username === user.username) === undefined)
      return true;

    return false;
  };
  const signupUser = (payload: User) => {
    dispatch(registerUser(payload));
    dispatch(login(payload));
    navigate("/");
  };

  const loginUser = (username: string) => {
    if (checkUsername(username)) return;
    const user = users.filter((user) => username === user.username)[0];
    dispatch(login(user));
    navigate("/");
  };

  return { isAuth, user, users, checkUsername, signupUser, loginUser };
};
