import SideBar from '../SideBar'
import axios from '../../../api/axios';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import PictureUploadModal from "../../../Components/Modals/PictureUploadModal";

function Dashboard() {
    const [modalOpen, setModalOpen ] = useState(false)

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
    const privateAxios = useAxiosPrivate();
    const USER_DETAILS_URL = "api/v1/user/get/"+auth.userId+"/profile";
    const GET_USER_IMG_URL = "api/v1/user/get/"+auth.userId+"/image";
    

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
    // get user img load
    const [img, setImg] = useState();
    async function handleImg(){
        try{
            const response = await axios.get(GET_USER_IMG_URL);
            setImg(response.data);
        }catch (error) {
            console.error('Add user img to get one: ' + error); 
        }
        
    }
    

    const [imgNew, setImgNew] = useState();
    async function handleImg(){
        try{
            const response = await privateAxios.post(POST_USER_IMG_URL, {
                image: imgNew,
            });
            setImg(response.data);
        }catch (error) {
            console.error('Img is too large: ' + error); 
        }
        
    }

    useEffect(() =>{
        handleImg();
        handleRefresh();
    }, [])

  return (
    <SideBar admin={false}>
        <PictureUploadModal
            modalOpen={modalOpen} 
            setModalOpen={setModalOpen} 
            userData={userData}
        />
        <h2 className='text-xl font-bold'>Mano Profilis</h2>
                    <div className="p-2 md:p-8 bg-main bg-opacity-85 shadow mt-24 md:mt-14">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 md:pb-16 text-center order-last md:order-first mt-20 md:mt-0">
                        </div>
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            { !userData?.havePicture ?
                            <>
                                <img class="w-48 h-48 rounded-full object-cover" src="/images/profile5.jpg" alt=""></img>
                            </>
                            :
                            <>
                                <img 
                                    className="w-48 h-48 rounded-full object-cover" 
                                    src={GET_USER_IMG_URL}
                                    alt="img"
                                />
                                
                            </>  
                            }
                            </div>
                            <div>   
                            <div className=  { img ? "hidden": "grid grid-cols-3 gap-2"} >
                                {/* handleInputChange,  selectedFile,  setSelectedFile  */}
                                {/* {inputFIeld( handleInputChange1, selectedFile1, setSelectedFile1 )} */}
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* first name / last name */}
                        <div className='font-bold text-gray-800 text-lg flex items-center justify-center pt-14'>{userData?.firstname}<span className="text-lg  pl-2 font-bold text-gray-800">{userData?.lastname}</span></div>
                        <div className="mt-10 text-center border-b border-gray-600 pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">
                            {/* username */}
                        <span className="font-light text-gray-600">Sveiki,</span> {userData?.username}
                        </h1>
                        {/* role / update date / create date */}
                        <p className="font-normal text-gray-600 mt-10">Jusu El-pastas yra <span className="font-bold text-gray-600">{userData?.email}</span></p>
                        <p className="font-normal text-gray-600 mt-3">Jusu Role yra <span className="font-bold text-gray-600">{userData?.role}</span></p>
                        {
                            userData?.updatedAt && 
                            <p className="font-normal text-gray-600 mt-3">
                                Profilis Atnaujintas <span className="font-bold text-gray-600">{formatTimestamp(userData?.updatedAt)}</span></p>
                        }
                        <p className="font-normal text-gray-600 mt-3">
                            Profilis Sukurtas{" "}
                        <span className="font-bold text-gray-600">
                            {formatTimestamp(userData?.createdAt)}
                        </span>
                        </p>
                        </div>
                        <div className='text-right py-2'>
                            <div className="flex flex-col sm:flex-row gap-5 justify-between mt-10 md:justify-center">
                                {/* update info / update img / delete */}
                                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    Atnaujinti Informacija
                                </button>
                                <button onClick={() => setModalOpen(true)} className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    Įkelti Profilio Nuotrauka
                                </button>
                                <button className="text-white py-2 px-4 uppercase rounded bg-red-600 hover:bg-red-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    Istrinti Paskyra
                                </button>
                            </div>
                        </div>
                    </div>
                        <div className='h-[50px]'></div>
    </SideBar>
  )
}

export default Dashboard