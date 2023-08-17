import Layout from "../Layout/Layout"
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../hooks/useAuth";
import { useTranslation } from "react-i18next";


const LOGIN_URL = "api/v1/auth/authenticate";

const Login = () => {
    const [t, i18n] = useTranslation("global");
    const { setAuth } = useAuth();

    const navigate = useNavigate();

    // for login succes notification
   
    const handleLoginSuccess = () => {
        navigate('/?loginSuccess=true');
      };
    /////////////////////////////////
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        userRef?.current?.focus();
    },[]);

    useEffect(() => {
        setErrMsg("");
    },[]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, {
                username : user,
                password : pwd
            });
            console.log(response.data);
            const accessToken = response?.data?.access_token;
            const roles = response?.data?.role;
            const email = response?.data?.email;
            const userId = response?.data?.user_id;
            setAuth({ userId, user, email, roles, accessToken });
            console.log({userId, user, email, roles, accessToken});
            
            handleLoginSuccess();
            setUser("");
            setPwd("");

            // navigate(from, { replace: true });
        } catch (err){
            if (!err?.response) {
                setErrMsg("No Server response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 403) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login failed");
            }
            errRef.current.focus();
        }
    }


    return (
        <Layout>
                <section>
                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive" //will announce the error immediately when it's focused on
                    >
                        {errMsg}
                    </p>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
                        <Link to="/">
                            <img 
                            src="/images/logo.png" 
                            alt="logo" 
                            className="w-full h-12 object-contain flex items-center mb-6" 
                            />
                        </Link>
                        <div className="w-full bg-gradient-to-t from-accentLower from-5% to-background to-90% rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                              {t("loginFrame.signInText")}
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  {t("loginFrame.username")}
                                </label>
                                <input
                                type="text"
                                name="username"
                                id="email"
                                ref={userRef}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Username"
                                required
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                />
                            </div>
                            <div>
                                <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  {t("loginFrame.password")}
                                </label>
                                <input
                                type="password"
                                name="password"
                                id="password"
                                className="bg-bacground border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                onChange={(e) => setPwd(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    
                                    />
                                </div>
                                <div className="ml-3 text-base">
                                    <label
                                    htmlFor="remember"
                                    className="text-text font-medium"
                                    >
                                      {t("loginFrame.rememberMeText")}
                                    </label>
                                </div>
                                </div>
                            </div>
                            <button
                              type="submit"
                              className="border-[2px] border-main w-full shadow-md bg-subMain hover:text-black text-text bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                              {t("loginFrame.signInButton")}
                            </button>
                            
                            <p className="text-base text-text font-medium">
                              {t("loginFrame.dontHaveAcc")}{" "}
                                <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                  {t("loginFrame.signUp")}
                                </Link>
                            </p>
                            </form>
                        </div>
                      </div> 
        </div>
      </section>
    </Layout>
  );
}

export default Login;
