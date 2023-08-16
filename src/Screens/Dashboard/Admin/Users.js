import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import SideBar from '../SideBar';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import UserTable from '../../../Components/UserTable';

const Users = () => {
    const getAllUsers_URL = "api/v1/admin/get/users";
    const [t, i18n] = useTranslation("global");
    const [errMsg, setErrMsg] = useState("");

    const privateAxios=useAxiosPrivate();
    const [finalData, setFinalData] = useState([]);

    useEffect(() =>{
        handleRefresh();
    }, [])
    
    async function handleRefresh() {
        setFinalData(null);
        try {
            const response = await privateAxios.get(getAllUsers_URL);
            setFinalData(response?.data);
            console.log(response.data)
        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Problem 409"); //TODO reikia jog patikrintų ar toks vartotojas jau egzistuoja // cai tai padaro manau
            } else {
                setErrMsg("Table loading failed");
            }
        }
    }
    return (
        <SideBar>
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Vartotojų sąrašas</h2>
                <button onClick={() => handleRefresh()} className='bg-main font-medium transitions hover:bg-subMain border border-text text-text py-3 px-6 rounded'>
                {t("myPosters.refreshButton")}
                </button>
                </div>
                <UserTable t={t} users={finalData}  />
            </div>
        </SideBar>
    )
}

export default Users