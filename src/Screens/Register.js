import Layout from "../Layout/Layout"
import { useRef, useState, useEffect } from "react";
import {
    faCheck,
    faTimes,
    faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useTranslation } from "react-i18next";

const USER_REGEX = /^[a-zA-Z](?!.*\s)[a-zA-Z0-9-_]{3,23}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}/;
const FIRST_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]{3,24}$/;
const LAST_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]{3,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const REGISTER_URL = "api/v1/auth/register";

function Register() {
    const [t, i18n] = useTranslation("global");

    const userRef = useRef(); //focus on the user input when page is loaded
    const errRef = useRef(); //error focus

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState("");
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    // for reg succes notification
    const navigate = useNavigate();
    const handleRegSuccess = () => {
        navigate('/?registrationSuccess=true');
        };
    /////////////////////////////////

    // useEffect(() => {
    //     userRef.current.focus();
    // }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        // console.log(result);
        // console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        // console.log(result);
        // console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        const result = FIRST_REGEX.test(firstName);
        // console.log(result);
        // console.log(firstName);
        setValidFirstName(result);
    }, [firstName]);

    useEffect(() => {
        const result = LAST_REGEX.test(lastName);
        // console.log(result);
        // console.log(lastName);
        setValidLastName(result);
    }, [lastName]);
    // email checking
    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        // console.log(result);
        // console.log(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd, email]);

    async function handleSubmit(e) {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = FIRST_REGEX.test(firstName);
        const v4 = LAST_REGEX.test(lastName);
        const v5 = EMAIL_REGEX.test(email);
        if (!v1 || !v2 || !v3 || !v4 || !v5) {
            setErrMsg("invalid Entry");
            return;
        }
        try {
            console.log(REGISTER_URL)
            const response = await axios.post(REGISTER_URL, {
                username: user,
                password: pwd,
                role: "USER",
                firstName: firstName,
                lastName: lastName,
                email: email
            });
            console.log(firstName)
            console.log(lastName)
            console.log(response.data);
            console.log(response.data.access_token);
            handleRegSuccess();
            setSuccess(true);
            //clear input fields
            setUser("");
            setPwd("");
            setMatchPwd("");
            setFirstName("");
            setLastName("");
            setEmail("");
        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username taken"); //TODO reikia jog patikrintų ar toks vartotojas jau egzistuoja // cai tai padaro manau
            } else {
                setErrMsg("Registration failed");
            }
            errRef.current.focus();
        }
    }

    return (
        <Layout>
            
            <div className="my-10 mx-auto min-h-screen">
                <div className=" dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                        <Link to="/">
                            <img 
                            src="/images/logo.png" 
                            alt="logo" 
                            className="w-full h-12 object-contain flex items-center mb-6" 
                            />
                        </Link>
                        <div className="w-full bg-gradient-to-t from-accentLower from-30% to-background to-100% rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="shrink p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl dark:text-white">
                                    {t("registerFrame.createAccText")}
                                </h1>
                                <p
                                    ref={errRef}
                                    className={errMsg ? "errmsg" : "offscreen"}
                                    aria-live="assertive"
                                >
                                    {errMsg}
                                </p>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            {t("registerFrame.username")}
                                            <span className={validName ? "valid" : "hide"}>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span
                                                className={
                                                    validName || !user ? "hide" : "invalid"
                                                }
                                            >
                                                <FontAwesomeIcon icon={faTimes} />
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            ref={userRef}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => setUser(e.target.value)}
                                            required
                                            aria-invalid={validName ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => setUserFocus(true)}
                                            onBlur={() => setUserFocus(false)}
                                        />
                                        <p
                                            id="uidnote"
                                            className={
                                                userFocus && user && !validName
                                                    ? "instructions"
                                                    : "offscreen"
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            {t("registerValidations.username4To24Char")}
                                            <br />
                                            {t("registerValidations.beginWithLetter")}
                                            <br />
                                            {t("registerValidations.usernameSymbolsAllowed")}
                                        </p>
                                    </div>
                                    <div>
                                        <label
                                        htmlFor="firstname"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            {t("registerFrame.firstName")}
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={
                                                    validFirstName && firstName
                                                        ? "valid"
                                                        : "hide"
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={
                                                    validFirstName || !firstName
                                                        ? "hide"
                                                        : "invalid"
                                                }
                                            />
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            ref={userRef}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder={t("registerFrame.firstNamePlaceHolder")}
                                            required
                                            aria-invalid={validFirstName ? "false" : "true"}
                                            aria-describedby="firstnote"
                                            onFocus={() => setFirstNameFocus(true)}
                                            onBlur={() => setFirstNameFocus(false)}
                                        />
                                        <p
                                            id="firstnote"
                                            className={
                                                firstNameFocus && firstName && !validFirstName
                                                    ? "instructions"
                                                    : "offscreen"
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            {t("registerValidations.name3to24Char")}
                                            <br />
                                            {t("registerValidations.nameOnlyLetters")}
                                        </p>
                                    </div>
                                    {/* LASTNAME */}
                                    <div>
                                        <label
                                            htmlFor="lastname"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            {t("registerFrame.lastName")}
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={
                                                    validLastName && lastName ? "valid" : "hide"
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={
                                                    validLastName || !lastName ? "hide" : "invalid"
                                                }
                                            />      
                                        </label>
                                        <input
                                            type="text"
                                            ref={userRef}
                                            id="lastname"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => setLastName(e.target.value)}
                                            placeholder={t("registerFrame.lastNamePlaceHolder")}
                                            required
                                            aria-invalid={validLastName ? "false" : "true"}
                                            aria-describedby="lastnote"
                                            onFocus={() => setLastNameFocus(true)}
                                            onBlur={() => setLastNameFocus(false)}
                                        />
                                         <p
                                            id="lastnote"
                                            className={
                                                lastNameFocus && lastName && !validLastName
                                                    ? "instructions"
                                                    : "offscreen"
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            {t("registerValidations.lastname3to24Char")}
                                            <br />
                                            {t("registerValidations.lastnameOnlyLetters")}
                                        </p>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            {t("registerFrame.email")}
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={
                                                    validEmail && email ? "valid" : "hide"
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={
                                                    validEmail || !email ? "hide" : "invalid"
                                                }
                                            /> 
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            ref={userRef}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={t("registerFrame.emailPlaceHolder")}
                                            required
                                            aria-invalid={validEmail ? "false" : "true"}
                                            aria-describedby="emailnote"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />
                                        <p
                                            id="emailnote"
                                            className={
                                                emailFocus && email && !validEmail
                                                    ? "instructions"
                                                    : "offscreen"
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            {t("registerValidations.emailValid")}
                                        </p>
                                    </div>
                                    {/* PASSWORD */}
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            {t("registerFrame.password")}
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={validPwd ? "valid" : "hide"}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={
                                                    validPwd || !pwd ? "hide" : "invalid"
                                                }
                                            />
                                        </label>
                                        <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                        />
                                        <p
                                            id="pwdnote"
                                            className={
                                                pwdFocus && !validPwd
                                                    ? "instructions"
                                                    : "offscreen"
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            {t("registerValidations.password8to24Char")}
                                            <br />
                                            {t("registerValidations.passwordMustInclude")}
                                            <br />
                                            {t("registerValidations.passwordSpecialSymbols")}{" "}
                                            <span aria-label="exclamation mark">!</span>{" "}
                                            <span aria-label="at symbol">@</span>{" "}
                                            <span aria-label="hashtag">#</span>{" "}
                                            <span aria-label="dollar sign">$</span>{" "}
                                            <span aria-label="percent">%</span>
                                        </p>
                                    </div>
                                    <div>
                                        {/* PASSWORD CONFIRMATION */}
                                        <label
                                        htmlFor="confirm-password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            {t("registerFrame.confirmPassword")}
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={
                                                    validMatch && matchPwd ? "valid" : "hide"
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={
                                                    validMatch || !matchPwd ? "hide" : "invalid"
                                                }
                                            />
                                        </label>
                                        <input
                                            type="password"
                                            name="confirm-password"
                                            id="confirm-password"
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            value={matchPwd}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            aria-invalid={validMatch ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                        />
                                        <p
                                            id="confirmnote"
                                            className={
                                                matchFocus && !validMatch
                                                    ? "instructions"
                                                    : "offscreen"
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            {t("registerValidations.passwordMustMatch")}
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                                <input
                                                id="terms"
                                                aria-describedby="terms"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-base">
                                            <label
                                                htmlFor="terms"
                                                className="text-text font-medium"
                                            >
                                                {t("registerFrame.iAcceptText")}{" "}
                                                <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                                    {t("registerFrame.termsAndConditionsLink")}
                                                </Link>
                                
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="border-[2px] border-main w-full shadow-md bg-subMain hover:text-black text-text bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        {t("registerFrame.createAccButton")}
                                    </button>
                                    <p className="text-base text-text font-medium">
                                        {t("registerFrame.alredyHaveText")}{" "}
                                        <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                            {t("registerFrame.loginLink")}
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Register;
