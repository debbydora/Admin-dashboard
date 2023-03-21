import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";

const useAuthProvider = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, login } = useAuth();

  const handleLoginOnchange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupOnchange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(signupData.email, signupData.password);
      setLoading(false);
      toast.success("signup successful", {
        position: toast.POSITION.TOP_CENTER,
      });
      router.push("/login");
    } catch (err) {
      setLoading(false);
      console.error(err.message);
      toast.error(err.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(loginData.email, loginData.password);
      setLoading(false);
      router.push("/dashboard");
    } catch (err) {
      setLoading(false);
      console.error(err.message);
      toast.error(err.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return {
    loginData,
    signupData,
    handleLoginOnchange,
    handleSignupOnchange,
    handleSignup,
    loading,
    handleLogin,
  };
};

export default useAuthProvider;
