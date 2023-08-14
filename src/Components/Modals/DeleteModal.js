import React from 'react'
import MainModal from './MainModal'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';

function DeleteModal({ modalOpen, setModalOpen, message, deletionLink }) {
    const DELETE_URL = deletionLink;
    const logout_URL="/api/v1/auth/logout";

    const privateAxios = useAxiosPrivate();
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await axios.post(logout_URL); // Send logout request using axios directly
          setAuth(false); // Update the auth state locally
        } catch (error) {
          console.error("Logout error:", error);
        }
    };

    async function handleDelete(e) {
        e.preventDefault();
        try{
            const response = await privateAxios.delete(DELETE_URL);
            
            console.log(response.data)
            if(response.status === 200){
                handleLogout();
                navigate('/');
            }
        }catch(err){
            console.log("YOU CANNOT DO THAT! " + message)
        }}
    
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block border border-border md:w-3/5 lg:w-2/5 align-middle p-1 overflow-y-auto h-4/5 lg:h-3/5 2xl:-2/5 bg-darkAccent text-white'>
            
                <p
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                >
                    <strong>{message}</strong>
                </p>
                <button onClick={() => setModalOpen(false)}>No</button>
                <button
                    onClick={(e) => {
                        setModalOpen(false)
                        handleDelete(e)
                    }}
                >
                    .... Y E S
                </button>
           
        </div>
    </MainModal>
  )
}

export default DeleteModal