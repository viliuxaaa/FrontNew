import React, { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GoEye } from 'react-icons/go'
import { FiSettings } from 'react-icons/fi'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useTranslation } from "react-i18next";


const Head = "text-xs text-left text-text font-semibold px-6 py-2 uppercase"
const Text = 'text-sm text-text text-left leading-6 whitespace-nowrap px-5 py-2'

// rows
const Rows = (poster, i, admin) => {
    const { auth } = useAuth();
    const privateAxios = useAxiosPrivate();
    const posterDeleteURL = `api/v1/poster/` + auth?.userId + `/delete/`+ poster.posterId;

    const [img, setImg] = useState(null);

    const deletePost = () => {
        const controller = new AbortController();
    
        const deleteThing = async () => {
          console.log(posterDeleteURL)
          try{
            await privateAxios.delete(
              posterDeleteURL,
              {
                signal: controller.signal
              }
            );
            console.log("poster: " + poster.postName + " was deleted")
          } catch (err) {
            console.log(err);
          }
        }
        deleteThing();
    }
    
    useEffect(() =>{
        setImg(
            {label: "Image 1", alt: "image1", url: "/api/v1/images/poster/get/"+poster.posterId+"/" + `0`}
        ); 
    }, [])
    
    return (
        <tr key={i}>
            <td className={`${Text}`}>
                <div className='w-12 p-1 bg-dry border border-text h-12 rounded overflow-hidden'>
                {img && <img 
                    className='h-full w-full object-cover'
                    src={img.url}
                    alt={poster?.name}
                />}
                </div>
            </td>
            <td className={`${Text} truncate`}>{poster.postName}</td>
            <td className={`${Text}`}>{poster.categoryA}</td>
            <td className={`${Text}`}>{poster.categoryB}</td>
            <td className={`${Text}`}>{poster.status}</td>
            <td className={`${Text}`}>{poster.price}{' '}€</td>
            <td className={`${Text} float-right flex items-center justify-center gap-2`}>
                {
                    admin ? (
                        <>
                            {/* <button className='bg-subMain hover:bg-green-400 border border-text text-text rounded flex-colo w-7 h-7'>
                                <FiSettings />
                            </button> */}
                            <button 
                                className='bg-subMain hover:bg-red-500 border border-text text-text rounded flex-colo w-7 h-7'
                                onClick={() => deletePost()}
                            >
                                <MdDelete />
                            </button>
                            <Link 
                                to={`/skelbimas/${poster?.name}`} 
                                className='bg-subMain border hover:bg-purple-400 border-text text-text rounded flex-colo w-7 h-7'
                            >
                                <GoEye />
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* <button className='bg-subMain hover:bg-green-400 border border-text text-text rounded flex-colo w-7 h-7'>
                                <FiSettings />
                            </button> */}
                            <button
                                className='bg-subMain hover:bg-red-500 border border-text text-text rounded flex-colo w-7 h-7'
                                onClick={() => deletePost()}
                            >
                                <MdDelete />
                            </button>
                            <Link 
                                to={`/skelbimas/${poster?.posterId}`} 
                                className='bg-subMain border hover:bg-purple-400 border-text text-text rounded flex-colo w-7 h-7'
                            >
                                <GoEye />
                            </Link>
                        </>
                    )//http://localhost:3006/skelbimas/4
                }
            </td>
        </tr>
    )
}

// table
function Table({t, poster, img, admin}) {
  
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
        <table className='w-full table-auto border border-text divide-y divide-border'>
            <thead>
                <tr className='bg-accent'>
                    <th scope='col' className={`${Head}`}>
                    {t("table.img")}
                    </th>
                    <th scope='col' className={`${Head}`}>
                    {t("table.name")}
                    </th>
                    <th scope='col' className={`${Head}`}>
                    {t("table.cat")}
                    </th>
                    <th scope='col' className={`${Head}`}>
                    {t("table.subcat")}
                    </th>
                    <th scope='col' className={`${Head}`}>
                    {t("table.status")}
                    </th>
                    <th scope='col' className={`${Head}`}>
                    {t("table.price")}
                    </th>
                    <th scope='col' className={`${Head} text-end`}>
                    {t("table.actions")}
                    </th>
                </tr>
            </thead>
            <tbody className='bg-main border-t border-text divide-y divide-gray-800'>
                {poster && poster.map((poster, i) => Rows(poster, i, img, admin))}
            </tbody>
        </table>
    </div>
  )
}

export default Table