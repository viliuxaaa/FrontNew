import SideBar from '../SideBar'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'

function Dashboard() {
    const DashboardData = [
        {
            bg:'bg-orange-500',
            icon:FaRegListAlt,
            title:"Total Movies",
            total:256,
        },
        {
            bg:'bg-blue-700',
            icon:HiViewGridAdd,
            title:"Total Categories",
            total:13,
        },
        {
            bg:'bg-green-600',
            icon:FaUser,
            title:"Total Users",
            total:13356,
        },
    ]
  return (
    <SideBar admin={false}>
        <h2 className='text-xl font-bold'>Mano Profilis</h2>
            {/* ////////////////////////////////// Sita ideti i admin dashboard kad matyt statistika ///////////// */}
            {/* {DashboardData.map((data, index) => (
                    <div 
                        key={index}
                        className='p-4 rounded bg-main border-text grid grid-cols-4 gap-2'
                    >
                        <div className={`col-span-1 rounded-full h-12 w-12 flex-xolo ${data.bg}`}>
                            <data.icon />
                        </div>
                        <div className='col-span-3'>
                            <h2>{data.title}</h2>
                            <p className='mt-2 font-bold'>{data.total}</p>
                        </div>
                    </div>

                ))} */}
                    <div className="p-8 bg-main bg-opacity-85 shadow mt-24 md:mt-14">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 md:pb-16 text-center order-last md:order-first mt-20 md:mt-0">
                        </div>
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                {/* SVG yra default user img jai user img = null svg is displayed, else user img */}
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-24 w-24"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                                />
                            </svg> */}
                            <img class="w-48 h-48 rounded-full object-cover" src="/images/profile5.jpg" alt=""></img>
                            </div>
                        </div>
                        </div>
                        <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">
                        <span className="font-light text-gray-600">Sveiki,</span> Jessica Jones 
                        </h1>
                        <p className="font-normal text-gray-600 mt-3">Jusu Role yra <span className="font-bold text-gray-600">ADMIN</span></p>
                        <p className="font-normal text-gray-600 mt-3">Profilis Atnaujintas <span className="font-bold text-gray-600">Data 1</span></p>
                        <p className="font-normal text-gray-600 mt-3">Profilis Sukurtas <span className="font-bold text-gray-600">Data 2</span></p>
                        </div>
                        <div className='text-right pt-2'>
                            <div className="flex flex-col sm:flex-row gap-5 justify-between mt-10 md:justify-center">
                                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    Atnaujinti Informacija
                                </button>
                                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    Profilio Nuotrauka
                                </button>
                                <button className="text-white py-2 px-4 uppercase rounded bg-red-600 hover:bg-red-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    Istrinti Paskyra
                                </button>
                            </div>
                        </div>
                    </div>
    </SideBar>
  )
}

export default Dashboard