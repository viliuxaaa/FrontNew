import SideBar from '../SideBar'
import axios, { axiosPrivate } from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import PictureUploadModal from "../../../Components/Modals/PictureUploadModal";
import DeleteUserModal from "../../../Components/Modals/DeleteUserModal"
import UpdateUserInfoModal from '../../../Components/Modals/UpdateUserInfoModal';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

function Dashboard() {
    const [t, i18n] = useTranslation("global");
    

    const [modal1Open, setModal1Open ] = useState(false)
    const [modal2Open, setModal2Open ] = useState(false)
    const [modal3Open, setModal3Open ] = useState(false)

// method to handle date formating ++++++++++++++++
    function formatTimestamp(timestamp) {
        const options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        };
      
        const formattedDate = new Date(timestamp).toLocaleString("en-US", options);
        return formattedDate;
      }
// finish handle date method ===================
    
    const {auth} = useAuth(); 
    const USER_DETAILS_URL = "api/v1/user/get/"+auth.userId+"/profile";
    const GET_USER_IMG_URL = "api/v1/user/get/"+auth.userId+"/image";
    const DELETE_IMG_URL = "api/v1/user/"+auth.userId+"/image-delete";
    

    // get all user info load
    const [userData, setUserData] = useState();
    async function handleRefresh(){
        try{
            const response = await axios.get(USER_DETAILS_URL);
            setUserData(response.data);
            
        }catch (error) {
            console.error('Failed to get user info: ' + error); 
        }
        
    }
    useEffect(() =>{
        handleRefresh();
    }, [])
// delete user img 
const [imageDeleted, setImageDeleted] = useState(false);
async function handleDeleteImage(){
    try{
        await axiosPrivate.delete(DELETE_IMG_URL);
        setImageDeleted(true);
    }catch (error) {
        console.error('Failed to delete img [try refresh page]: ' + error); 
    }
    
}
const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <SideBar admin={auth?.roles === "ADMIN"}>
        <PictureUploadModal
            modalOpen={modal1Open} 
            setModalOpen={setModal1Open} 
        />
        <DeleteUserModal
            modalOpen={modal2Open} 
            setModalOpen={setModal2Open}
        />
        <UpdateUserInfoModal
            modalOpen={modal3Open}
            setModalOpen={setModal3Open}
            user={userData}
        />
        <h2 className='text-xl font-bold'>{t("myProfile.myProfileText")}</h2>
            <div className="p-2 md:p-8 bg-main bg-opacity-85 shadow mt-24 md:mt-14">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Next Div keeps profile image centered */}
                <div className="grid grid-cols-3 md:pb-16 text-center order-last md:order-first mt-20 md:mt-0">
                </div>
                <div className="relative">
                    <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                    { !userData?.havePicture ?
                    <img 
                        className="w-48 h-48 rounded-full object-cover" 
                        src="/images/profile5.jpg" 
                        alt="placeholder img"
                    />
                    : 
                    <img 
                        className="w-48 h-48 rounded-full object-cover" 
                        src={imageDeleted || !userData?.havePicture ? "/images/profile5.jpg" : GET_USER_IMG_URL}
                        alt="profile img"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />  
                    }
                    {hovered && !imageDeleted && (
                        <button
                        onClick={() => handleDeleteImage()}
                        className="absolute bottom-7 right-7 p-1 bg-red-600 rounded-full text-white"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                        <FaTimes />
                        </button>
                    )}
                    </div>
                </div>
                </div>
                {/* first name / last name */}
                <div className='font-bold text-gray-800 text-lg flex items-center justify-center pt-14'>
                    {userData?.firstname}
                    <span className="text-lg  pl-2 font-bold text-gray-800">
                        {userData?.lastname}
                    </span>
                </div>
                <div className="mt-10 text-center border-b border-gray-600 pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">
                        {/* username */}
                        <span className="font-light text-gray-600">
                        {t("myProfile.helloText")}{" "}
                        </span>
                        {userData?.username}
                    </h1>
                    {/* role / update date / create date */}
                    <p className="font-normal text-gray-600 mt-10">
                    {t("myProfile.emailText")}{" "}
                        <span className="font-bold text-gray-600">
                            {userData?.email}
                        </span>
                    </p>
                    <p className="font-normal text-gray-600 mt-3">
                    {t("myProfile.roleText")}{" "} 
                        <span className="font-bold text-gray-600">
                            {userData?.role}
                        </span>
                    </p>
                    {userData?.updatedAt && 
                        <p className="font-normal text-gray-600 mt-3">
                            {t("myProfile.profileUpdatedText")}{" "} 
                            <span className="font-bold text-gray-600">
                                {formatTimestamp(userData?.updatedAt)}
                            </span>
                        </p>
                    }
                    <p className="font-normal text-gray-600 mt-3">
                    {t("myProfile.profileCreatedText")}{" "}
                        <span className="font-bold text-gray-600">
                        {formatTimestamp(userData?.createdAt)}
                        </span>
                    </p>
                </div>
                <div className='text-right py-2'>
                    <div className="flex flex-col sm:flex-row gap-5 justify-between mt-10 md:justify-center">
                        {/* update info / update img / delete */}
                        <button
                            onClick={() => setModal3Open(true)} 
                            className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800
                            shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                            {t("myProfile.updateInfoButton")}
                        </button>
                        <button 
                            onClick={() => setModal1Open(true)} 
                            className="text-white py-2 px-4 uppercase rounded
                            bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                            {t("myProfile.updateFotoButton")}
                        </button>
                        <button
                            onClick={() => setModal2Open(true)} 
                            className="text-white py-2 px-4 uppercase rounded bg-red-600 hover:bg-red-700 shadow 
                            hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                           {t("myProfile.deleteProfileButton")}
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-[50px]'></div>
    </SideBar>
  )
}

export default Dashboard