import React, { useState } from 'react'
import SideBar from '../SideBar'
import { FaSearch } from 'react-icons/fa'
import Table from '../../../Components/Table'
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';
import AxiosFetch from '../../../hooks/AxiosFetch';


function SkelbimuList() {
    const privateAxios = useAxiosPrivate();
    const {auth} = useAuth(); 
    const ALL_USER_POSTERS_URL = "api/v1/poster/get/"+auth.userId+"/all";

    const [errMsg, setErrMsg] = useState("");

    const [finalData, setFinalData] = useState([]);


    const [img, setImg] = useState(null);


    async function handleRefresh() {
        try {
            const response = await privateAxios.get(ALL_USER_POSTERS_URL, {
                
            });

            setImg(
                {label: "Image 1", alt: "image1", url: "/api/v1/images/poster/get/"+response?.data[0]?.posterId+"/" + `0`}
              ); 
            setFinalData(response?.data);
            
        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Problem 409"); //TODO reikia jog patikrintų ar toks vartotojas jau egzistuoja // cai tai padaro manau
            } else {
                setErrMsg("Table geting failed");
            }
            // errRef.current.focus();
        }
    }

    // useEffect(() => {
    //     handleRefresh();
    // }, [finalData]);


  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'>Skelbimu sarasas</h2>
               {/* search Form */}
               <div className="col-span-3">
                    <form  className="w-full border border-text text-sm bg-background rounded flex-btn gap-4">
                        <button 
                            type="submit" 
                            className="bg-subMain w-12 flex-colo h-12 rounded text-text"
                        >
                            <FaSearch />  
                        </button>
                        <input
                            type="text" 
                            placeholder="Ieskokite"
                            className="font-medium placeholder:text-text text-sm w-11/12 h-12 bg-transparent border-none px-2 text-text" 
                        />
                    </form>
                </div> 
               <button onClick={() => handleRefresh()} className='bg-main font-medium transitions hover:bg-subMain border border-text text-text py-3 px-6 rounded'>
                    Refresh
               </button>
            </div>
            <h3 className='text-md font-medium mt-6 text-border'>Mano Skelbimai</h3>
            <Table finalData={finalData} img={img} admin={false} />
        </div>
    </SideBar>
  )
}

export default SkelbimuList