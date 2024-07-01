import { useContext } from "react";
import { UserContext } from "../context/context";
import { GET_AUTH, setTokens, whoami, RESET_PASSWORD,
    removeTokens, redirectToLogin, CREATE_NEW_USER, checkTokenIsValid
    } from "./useFetchQuery";

export const useLogin = () => {
    const { setUser } = useContext(UserContext);

    const login = async (credential) => {
        const data = await GET_AUTH(credential);
        setTokens(data.access, data.refresh);
        const userData = await whoami();
        setUser(userData);
    };
    return { login}
}


export const useLogout = () => {
    const { setUser } = useContext(UserContext);
  
    const logout = () => {
      removeTokens();
      setUser({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        username: "",
      });
      redirectToLogin();
    };
  
    return { logout };
  };

export const useResetPassword = () => {
  const resetPassword = async (data) => {
    const response = await RESET_PASSWORD(data);
    return response;
  };

  return { resetPassword };
};

export const useRegister = () => {
    const Register = async (credentials) => {
      const data = await CREATE_NEW_USER(credentials);
      return data;
    };
  
    return { Register };
  };

  export const useCheckTokenValidity = () => {
    const isTokenValid = async () => {
      const isValid = await checkTokenIsValid();
      return isValid;
    };
  
    return { isTokenValid };
  };