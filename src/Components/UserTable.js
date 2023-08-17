import React, { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md'
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import  useTableContext  from '../hooks/useTableContext'

const Head = "text-xs text-left text-text font-semibold px-6 py-2 uppercase"
const Text = 'text-sm text-text text-left leading-6 whitespace-nowrap px-5 py-2'

const Rows = (user, i) => {
  const { setRefresh } = useTableContext()
  const privateAxios = useAxiosPrivate();
  const userDeleteURL = "api/v1/admin/get/"+ user.id+"/delete";
  const userLockURL = "api/v1/admin/get/"+ user.id+"/change-lock"
  const [img, setImg] = useState(null);
  const [userLocked, setUserLocked] = useState(false);

  const lockUser = (isLocked) => {
    const lockUser = async () => {
      try{
        const response = await privateAxios.put(userLockURL);
        setUserLocked(isLocked);
        console.log(response.data)
      }catch(err){
        console.log("error locking or unlocking a user")
      }
    }
    
    const toggleLock = () => {
      const newLockState = !userLocked;
      lockUser(newLockState);
    };

    toggleLock();
  }

  const deleteUser = () => {
  
      const deleteThing = async () => {
        try{
          await privateAxios.delete(userDeleteURL)
          console.log("user: " + user?.username + " was deleted")
          setRefresh(true);
        } catch (err) {
          console.log(err);
        }
      }
      deleteThing();
  }
  useEffect(() =>{
    // console.log(refresh)
    if ( user.havePicture ){
      setImg(
          {label: "Image 1", alt: "user image", url: "api/v1/user/get/"+user?.id+"/image"}
      ); 
    } else {
      setImg(
        {label: "Image 1", alt: "user image", url: "/images/profile5.jpg"}
      )
    }
  }, [])

  return (
      <tr key={i}>
          <td className={`${Text}`}>
              <div className='w-12 p-1 bg-dry border border-text h-12 rounded overflow-hidden'>
              {img && <img 
                  className='h-full w-full object-cover'
                  src={img?.url}
                  alt={user?.username}
              />}
              </div>
          </td>
          <td className={`${Text} truncate`}>{user?.username}</td>
          <td className={`${Text}`}>{user?.firstname}</td>
          <td className={`${Text}`}>{user?.lastname}</td>
          <td className={`${Text}`}>{user?.email}</td>
          <td className={`${Text}`}>{user?.role}</td>
          <td className={`${Text} float-right flex items-center justify-center gap-2`}>    
          <>
              
              { user.role !== "ADMIN" &&
              <>
              <button 
                className='bg-subMain hover:bg-green-400 border border-text text-text rounded flex-colo w-7 h-7'
                onClick={() => lockUser(!userLocked)}
              >
                  {!userLocked ? <AiOutlineUnlock /> : <AiOutlineLock className='text-red-700'/>}
              </button>
              <button
                  className='bg-subMain hover:bg-red-500 border border-text text-text rounded flex-colo w-7 h-7'
                  onClick={() => deleteUser()}
              >
                  <MdDelete />
              </button>
              </>}
          </>
          </td>
      </tr>
  )
}

// table
function UserTable({t, users}) {
  const { auth } = useAuth();
  
return (
  <div className='overflow-x-scroll overflow-hidden relative w-full'>
      <table className='w-full table-auto border border-text divide-y divide-border'>
          <thead>
              <tr className='bg-accent'>
                  <th scope='col' className={`${Head}`}>
                  {t("table.img")}
                  </th>
                  <th scope='col' className={`${Head}`}>
                  {t("userTable.username")}
                  </th>
                  <th scope='col' className={`${Head}`}>
                  {t("userTable.firstName")}
                  </th>
                  <th scope='col' className={`${Head}`}>
                  {t("userTable.lastName")}
                  </th>
                  <th scope='col' className={`${Head}`}>
                  {t("userTable.email")}
                  </th>
                  <th scope='col' className={`${Head}`}>
                  {t("userTable.role")}
                  </th>
                  <th scope='col' className={`${Head} text-end`}>
                  {t("table.actions")}
                  </th>
              </tr>
          </thead>
          <tbody className='bg-main border-t border-text divide-y divide-gray-800'>
              
              {users && users
              .filter( (user) => user.id.toString() !== auth.userId)
              .map((user, i) => Rows(user, i))}
          </tbody>
      </table>
  </div>
)
}

export default UserTable