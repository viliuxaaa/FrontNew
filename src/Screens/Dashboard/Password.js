import React from 'react'
import SideBar from './SideBar'
import {
    faCheck,
    faTimes,
    faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from '../../hooks/useAuth';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}/;


function Password() {
    const privateAxios = useAxiosPrivate();
    const {auth} = useAuth(); 
    const CHANGE_PW_URL = "api/v1/auth/change-password/"+auth.userId;

    const [t, i18n] = useTranslation("global");

    // const errRef = useRef(); 

    const [oldPwd, setOldPwd] = useState("");

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");

    // for reg succes notification
    const navigate = useNavigate();
    const handleRegSuccess = () => {
        navigate('/?passwordSuccess=true');
        };
    /////////////////////////////////

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        // console.log(result);
        // console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [pwd, matchPwd]);

    async function handleSubmit(e) {
        e.preventDefault();

        const v2 = PWD_REGEX.test(pwd);
        if (!v2) {
            setErrMsg("invalid Entry");
            return;
        }
        try {
            const response = await privateAxios.post(CHANGE_PW_URL, {
                oldPassword: oldPwd,
                newPassword: pwd
            });
            handleRegSuccess();
            setOldPwd("");
            setPwd("");
            setMatchPwd("");
        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Password is used"); //TODO reikia jog patikrintų ar toks vartotojas jau egzistuoja // cai tai padaro manau
            } else {
                setErrMsg("Change failed");
            }
            // errRef.current.focus();
        }
    }

  return (
    <SideBar>
        
        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>{t("changePassword.changePasswordText")}</h2>
            {/* old password */}
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    {t("changePassword.oldPassword")}
                </label>
                <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setOldPwd(e.target.value)}
                value={oldPwd}
                className="bg-background border border-background text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                required
                />
            </div>
            {/* new Password  */}
            <div>
                <label
                    htmlFor="password1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    {t("changePassword.newPassword")}
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
                name="password1"
                id="password1"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                className="bg-background border border-background text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                    {t("changePassword.confirmNewPassword")}
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
                    className="bg-background border border-background text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
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
            <div className='flex justify-end items-center my-4'> 
                <button type="submit" className='bg-main font-medium transitions hover:bg-subMain border border-text text-text py-3 px-6 rounded w-full sm:w-auto'>
                {t("changePassword.changePasswordButton")}
                </button> 
            </div>
        </div>
     </form>
    </SideBar>
  )
}

export default Password