import React from 'react'
import SideBar from '../SideBar'
import { FaSearch } from 'react-icons/fa'
import Table from '../../../Components/Table'
import { posters } from '../../../Data/PosterData'

function SkelbimuList() {
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
               <button className='bg-main font-medium transitions hover:bg-subMain border border-text text-text py-3 px-6 rounded'>
                    Paieska
               </button>
            </div>
            <h3 className='text-md font-medium mt-6 text-border'>Mano Skelbimai</h3>
            <Table data={posters} admin={false} />
        </div>
    </SideBar>
  )
}

export default SkelbimuList