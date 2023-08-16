import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'
import { useTranslation } from "react-i18next";

function NotFound() {
  const [t, i18n] = useTranslation("global");
  return (
      <div className='flatzoom flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
        <img 
          className='w-full h-96 object-contain' 
          src='/images/404.jpg'
          alt='notfound'
        />
        <h1 className='text-lg text-text md:text-2xl lg:text-4xl font-bold'>{t("pageNotFound.pageNotFoundText")}</h1>
        <p className='font-medium text-gray-700 text-border italic leading-6'>
        {t("pageNotFound.doesNotExistText")}
        </p>
        <Link 
          to='/'
          className='bg-subMain border border-text transitions text-text flex items-center gap-4 font-medium py-3 px-4 rounded-md hover:text-red-600'
        >
         <BiHomeAlt /> {t("pageNotFound.backHome")}
        </Link>
      </div>
  )
}

export default NotFound