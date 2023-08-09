import Layout from "../Layout/Layout"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Register() {
    const [t, i18n] = useTranslation("global");
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
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                        {t("registerFrame.username")}
                                        </label>
                                        <input
                                        type="username"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                        required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                        htmlFor="firstname"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                        {t("registerFrame.firstName")}
                                        </label>
                                        <input
                                        type="firstname"
                                        name="firstname"
                                        id="firstname"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={t("registerFrame.firstNamePlaceHolder")}
                                        required=""
                                        />
                                    </div>

                                    {/* "registerFrame": {
                                        "createAccText": "Prideti naują skelbimą",
                                        "username": "Skelbimo pavadinimas:",
                                        "firstName": "Prekės/paslaugos aprašymas",
                                        "firstNamePlaceHolder":"Įrašykite prekės kainą (eur): ",
                                        "lastName":"Pasirinkite prekes kategoriją: ",
                                        "lastNamePlaceHolder": "Prekes kategorijos šaka: ",
                                        "email": "Pasirinkte kategorija",
                                        "emailPlaceHolder": "Kontaktinis numeris: ",
                                        "password":"priimami formata: +370XXXXXXXX",
                                        "confirmPassword": "Iš kur pardavinėjama prekė: ",
                                        "iAcceptText": "Įrašykite vietovę: ",
                                        "termsAndConditionsLink": "Nuoroda į prekės tinklalapį (jei toks yra):",
                                        "createAccButton": "Nuoroda į vaizdinę medžiagą (jei tokia yra):",
                                        "alredyHaveText": "Nuotraukas šiuo metu galima įkelti tik vėliau. Atsiprašome už nesklandumus",
                                        "loginLink":"Įkelti skelbimą!" */}


                                    <div>
                                        <label
                                        htmlFor="lastname"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                        Last Name
                                        </label>
                                        <input
                                        type="lastname"
                                        name="lastname"
                                        id="lastname"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Doe"
                                        required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                        Your email
                                        </label>
                                        <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@email.com"
                                        required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                        Password
                                        </label>
                                        <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                        htmlFor="confirm-password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                        Confirm password
                                        </label>
                                        <input
                                        type="confirm-password"
                                        name="confirm-password"
                                        id="confirm-password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                                <input
                                                id="terms"
                                                aria-describedby="terms"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-base">
                                            <label
                                                htmlFor="terms"
                                                className="text-text font-medium"
                                            >
                                                I accept the{" "}
                                                <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                                    Terms and Conditions
                                                </Link>
                                
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="border-[2px] border-main w-full shadow-md bg-subMain hover:text-black text-text bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Create an account
                                    </button>
                                    <p className="text-base text-text font-medium">
                                        Already have an account?{" "}
                                        <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                            Login here
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

export default Register
