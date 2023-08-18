import React, { useState, useRef, useEffect } from 'react'
import MainModal from './MainModal'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import {
    faCheck,
    faTimes,
    faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const FIRST_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]{3,24}$/;
const LAST_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]{3,24}$/;

function UpdateUserInfoModal({ modalOpen, setModalOpen, user }) {
    const [t, i18n] = useTranslation("global");
    const { auth } = useAuth();
    const userRef = useRef();

    const UPDATE_NAME_URL = "api/v1/user/"+auth.userId+"/change-name";

    const privateAxios = useAxiosPrivate();

    const [firstName, setFirstName] = useState("");
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState("");
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    useEffect(() => {
        const result = FIRST_REGEX.test(firstName);
        setValidFirstName(result);
    }, [firstName]);

    useEffect(() => {
        const result = LAST_REGEX.test(lastName);
        setValidLastName(result);
    }, [lastName]);

    
    
//NEED TO FINISH
    async function handleSubmit(e) {
        try{
            const response = await privateAxios.post(UPDATE_NAME_URL,{
                firstname: firstName,
                lastname: lastName
            });
            
            console.log(response.data)
            setModalOpen(false)
        }catch(err){
            console.log("you failed to update your user information!" )
        }}
    
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block border border-border rounded-md w-[350px] align-middle p-1 overflow-y-auto bg-darkAccent text-white'>
            <form>
                <div>
                    <label
                    htmlFor="firstname"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
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
                <div className='pb-6'>
                    <label
                        htmlFor="lastname"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
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
                <button
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none"
                    onClick={(e) => handleSubmit(e)}
                >
                    {t("modal.submitChanges")}
                </button>
            </form>
        </div>
    </MainModal>
  )
}

export default UpdateUserInfoModal