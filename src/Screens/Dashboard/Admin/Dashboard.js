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
        <h2 className='text-xl font-bold'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {
                DashboardData.map((data, index) => (
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

                ))
            }
        </div>
    </SideBar>
  )
}

export default Dashboard