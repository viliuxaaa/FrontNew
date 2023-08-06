import React from 'react'
import MainModal from './MainModal'

function PosterImgModal({ modalOpen, setModalOpen}) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 align-middle p-1 overflow-y-auto h-full bg-darkAccent text-white'>
                <div className='flex flex-col pb-1 gap-1'>
                        <img 
                            src="/images/2.jpg"
                            alt="name" 
                            className='w-full h-full object-cover rounded-2xl'
                        />
                </div>
        </div>
    </MainModal>
  )
}

export default PosterImgModal