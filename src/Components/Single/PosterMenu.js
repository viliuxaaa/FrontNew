import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import {Link, useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';

function PosterMenu( id ) {

  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuth();
  const privateAxios = useAxiosPrivate();
  const posterDeleteURL = `api/v1/poster/` + auth?.userId + `/delete/`+ id.id

  const deletePost = () => {

    const deleteThing = async () => {
      console.log(posterDeleteURL)
      try{
        await privateAxios.delete( posterDeleteURL );
        navigate("/", {
          state: {from: location},
          replace: true
        })
      } catch (err) {
        console.log(err);
      }
    }
    deleteThing();
  }

  return (
    <div className="flex items-center space-x-4 ">
      
      {/* Edit Button */}
      <Link to={`/edit/${id.id}`}
        className="p-2 border border-gray-500 rounded-lg hover:bg-gray-100"
        title="Edit Poster"
      >
        
        <AiOutlineEdit size={26} />
      </Link>

      {/* Delete Button */}
      <button
        className="p-2 border border-red-500 rounded-lg hover:bg-red-100"
        onClick={() => {
          deletePost();
        }}
        title="Delete Poster"
      >
        <AiOutlineDelete size={26} />
      </button>
    </div>
  );
}

export default PosterMenu;
