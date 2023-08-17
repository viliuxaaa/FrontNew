import React, { useEffect, useState } from 'react'
import MainModal from './MainModal'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';


function PictureUploadModal({ modalOpen, setModalOpen }) {
    const {auth} = useAuth();
    const privateAxios = useAxiosPrivate();
    const POST_USER_IMG_URL = "api/v1/user/"+auth.userId+"/image-upload";
    const [selectedFile, setSelectedFile] = useState(null)
    const image = new FormData();

    async function handleSubmit(e) {
        // e.preventDefault()
        console.log(image)
        console.log(selectedFile)
        console.log(POST_USER_IMG_URL)
        if ( selectedFile ){
        image.append('image', selectedFile);
        try{
            console.log(image)
            const response = await privateAxios.post(POST_USER_IMG_URL, image, {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            setSelectedFile(null)
            console.log(response.data)
            
        }catch(err){
            console.log("picture upload did not work")
        }}
    
    }

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block border border-border rounded-md align-middle p-1 overflow-y-auto bg-darkAccent text-white'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                >
                    Upload file
                </label>
                <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300 pb-3"
                    id="file_input_help"
                >
                    SVG, PNG, JPG.
                </p>
                <button 
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none"
                    onClick={() => setModalOpen(false)}
                >
                    Įkelti nuotrauką
                </button>
            </form>  
        </div>
    </MainModal>
  )
}

export default PictureUploadModal