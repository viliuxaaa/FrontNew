import React, { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GoEye } from 'react-icons/go'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { computerAEnum as catA,
    allBCategoriesMix
  } from '../enums/AllEnumArrays';
import  useTableContext  from '../hooks/useTableContext'

const Head = "text-xs text-left text-text font-semibold px-6 py-2 uppercase"
const Text = 'text-sm text-text text-left leading-6 whitespace-nowrap px-5 py-2'

// rows
const Rows = (poster, t ) => {
    const { setRefresh } = useTableContext()

    const { auth } = useAuth();
    const privateAxios = useAxiosPrivate();
    const posterDeleteURL = `api/v1/poster/` + auth?.userId + `/delete/`+ poster.posterId;
    const posterDeleteAdminURL = "api/v1/admin/get/" + poster?.posterId + "/delete-poster"
    const [img, setImg] = useState(null);
    const [catADisplay, setCatADisplay] = useState('');
    const [catBDisplay, setCatBDisplay] = useState('');

    const deletePost = () => {
        const controller = new AbortController();
    
        const deleteThing = async () => {
          try{
            if(auth?.roles === "ADMIN"){
                await privateAxios.delete(
                    posterDeleteAdminURL,
                    {
                        signal: controller.signal
                    }
                );
            } else {
                await privateAxios.delete(
                    posterDeleteURL,
                    {
                        signal: controller.signal
                    }
                );
            }
            setRefresh(true);
          } catch (err) {
            console.log(err);
          }
        }
        deleteThing();
    }

    useEffect(() =>{
        setImg(
            {label: "Image 1", alt: "image1", url: "/api/v1/images/poster/get/"+poster?.posterId+"/" + 0}
        );
        translateCategories(); 
    }, [])

    function translateCategories(){
        //LOOK AT ALL CATA ENUM VALUES TO FIND MATCH THEN DISPLAY TRANSLATABLE STRING
        for( let i = 0; i < catA.length; i++ ){
            if( catA[i] === poster?.categoryA ){
                setCatADisplay(t("computerCategoryA."+ i))
            }
        }
        translateBCategories();
        
    }
    function translateBCategories(){
        for(let j=0 ;j<allBCategoriesMix.length; j++){
            if ( allBCategoriesMix[j] === poster?.categoryB ){
                setCatBDisplay(t("allCategoryBMix."+j))
                // console.log(poster.categoryB)
            }
        }
    }

    // mazinam title teksta
    let shortTitle = poster?.postName.substring(0, 40);
    const lastSp = shortTitle?.lastIndexOf(" ");

    if (lastSp !== -1) {
        shortTitle = shortTitle?.substring(0, lastSp) + "..";
    } else {
        shortTitle = shortTitle + "..";
    }
    ///////////////////////////
    
    return ( 
        <tr key={poster?.postName}>
            <td className={`${Text}`}>
                <div className='w-12 p-1 bg-dry border border-text h-12 rounded overflow-hidden'>
                {img && <img 
                    className='h-full w-full object-cover'
                    src={img?.url}
                    alt={poster?.name}
                />}
                </div>
            </td>
            <td className={`${Text} truncate`}>{shortTitle}</td>
            <td className={`${Text}`}>{catADisplay}</td>
            <td className={`${Text}`}>{catBDisplay}</td>
            <td className={`${Text}`}>{poster?.status}</td>
            <td className={`${Text}`}>{poster?.price}{' '}€</td>
            <td className={`${Text} float-right flex items-center justify-center gap-2`}>
                {
                    auth.roles === "ADMIN" ? (
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
function Table({t, poster}) {
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
                    {poster && poster.map((poster) => Rows(poster, t))}
                </tbody>
            </table>
        </div>
    )
}

export default Table