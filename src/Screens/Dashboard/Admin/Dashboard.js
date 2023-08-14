import SideBar from '../SideBar'
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
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
    const privateAxios = useAxiosPrivate();
    const {auth} = useAuth(); 
    const USER_DETAILS_URL = "api/v1/user/get/"+auth.userId+"/profile";
    const GET_USER_IMG_URL = "api/v1/user/get/"+auth.userId+"/image";
    const POST_USER_IMG_URL = "api/v1/user/"+auth.userId+"/image-upload";

    // get all user info load
    const [userData, setUserData] = useState();
    async function handleRefresh(){
        try{
            const response = await privateAxios.get(USER_DETAILS_URL);
            setUserData(response.data);
        }catch (error) {
            console.error('Failed to get user info: ' + error); 
        }
        
    }
    // get user img load
    const [img, setImg] = useState();
    async function handleImg(){
        try{
            const response = await privateAxios.get(GET_USER_IMG_URL);
            setImg(response.data);
        }catch (error) {
            console.error('Add user img to get one: ' + error); 
        }
        
    }
    // post user img 
    const [selectedFile1, setSelectedFile1] = useState(null);
    const handleInputChange1 = (e) => {
        setSelectedFile1(e.target.file);
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


    const inputFIeld = ( handleInputChange, selectedFile, setSelectedFile ) => {
        return(
        <div className="flex items-center justify-center w-full">  
            <label
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                { selectedFile ? 
                (
                <>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6  ">
                    <button onClick={() => {
                        setSelectedFile(null)
                    }}>
                        <img
                            src={ URL.createObjectURL(selectedFile) }
                            alt="Selected File Preview"
                            className=" object-contain rounded-lg h-[90px]"
                        />
                        <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                            {/* <span className="font-semibold" >{t("uploadPosterFrame.removeImage")}</span>  */}
                        </p>
                    </button>
                    </div>
                </>
                ) : (
                <>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6  ">
                    <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                        {/* <span className="font-semibold">{t("uploadPosterFrame.uploadImageIconText")}</span> */}
                        <br/>
                        {/* <span className="font-semibold">{t("uploadPosterFrame.max2Mb")}</span>  */}
                    </p>
                     <input type="file" className="hidden" onChange={handleInputChange} accept="image/png, image/webp, image/jpeg" />
                    </div>
                </>)}
            </label>
        </div>);
    }


  return (
    <SideBar admin={false}>
        <PictureUploadModal
          modalOpen={modalOpen} 
          setModalOpen={setModalOpen} 
           
        />
        <h2 className='text-xl font-bold'>Mano Profilis</h2>
                    <div className="p-2 md:p-8 bg-main bg-opacity-85 shadow mt-24 md:mt-14">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 md:pb-16 text-center order-last md:order-first mt-20 md:mt-0">
                        </div>
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            { !img ?
                            <>
                                <img class="w-48 h-48 rounded-full object-cover" src="/images/profile5.jpg" alt=""></img>
                            </>
                            :
                            <>
                              <img 
                                    className="w-48 h-48 rounded-full object-cover" 
                                    src={GET_USER_IMG_URL}
                                    alt="img"
                                ></img>
                                
                            </>  
                            }
                            </div>
                            <p className={ img ? "hidden" : "block mb-2 text-sm font-medium text-gray-900 dark:text-white"} >
                            Įkelkite nuotraukas
                                </p>
                                { !img && <p className="grid grid-cols-3 gap-2">
                                Kraunama...
                                    </p>}
                                <div>   
                                <div className=  { img ? "hidden": "grid grid-cols-3 gap-2"} >
                                    {/* handleInputChange,  selectedFile,  setSelectedFile  */}
                                    {inputFIeld( handleInputChange1, selectedFile1, setSelectedFile1 )}
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