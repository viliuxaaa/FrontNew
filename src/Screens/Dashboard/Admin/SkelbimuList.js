import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../SideBar';
import { FaSearch } from 'react-icons/fa';
import Table from '../../../Components/Table';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';
import axios from '../../../api/axios'
import { useTranslation } from "react-i18next";
import useTableContext from '../../../hooks/useTableContext';

function SkelbimuList() {
    const [t, i18n] = useTranslation("global");

    const id = useParams();
    const [errMsg, setErrMsg] = useState("");

    const [finalData, setFinalData] = useState([]);
    
    const getMyPosters_URL = "api/v1/poster/get/"+id.id+"/all";
    const getAllPosters_URL = "/api/v1/poster/get/search?";

    const {refresh, setRefresh} = useTableContext();
   

    useEffect(() =>{
        setFinalData(null);
        
        handleRefresh();
        setRefresh(false);
    }, [refresh])
    
       
    
    async function handleRefresh() {
        try {
            if ( id.id ){
                const response = await axios.get(getMyPosters_URL);
                setFinalData(response?.data);
            } else {
                const response = await axios.get(getAllPosters_URL);
                setFinalData(response?.data);
            }
        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Problem 409"); //TODO reikia jog patikrintų ar toks vartotojas jau egzistuoja 
            } else {
                setErrMsg("Table loading failed");
            }
        }
    }
        
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                {id.id ? 
                    <h2 className='text-xl font-bold'>{t("myPosters.posterListText")}</h2> 
                :
                    <h2 className='text-xl font-bold'>{t("allPosters.allPostersText")}</h2> 
                }
                <button onClick={() => handleRefresh()} className='bg-main font-medium transitions hover:bg-subMain border border-text text-text py-3 px-6 rounded'>
                {t("myPosters.refreshButton")}
                </button>
            </div>
            {finalData && 
                <Table t={t} poster={finalData} admin={false} />
            }
            {errMsg && <p>Connection to the server failed</p>}
        </div>
    </SideBar>
  )
}

export default SkelbimuList