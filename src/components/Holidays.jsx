import React from 'react'

const Holidays = () => {
    const holidays = [
        { id: 0, date: "1 Jan, Mon 2025", greeting: "New year's Day" },
        { id: 1, date: "1 Jan, Mon 2025", greeting: "New year's Day" },
        { id: 2, date: "1 Jan, Mon 2025", greeting: "New year's Day" },
        { id: 3, date: "1 Jan, Mon 2025", greeting: "New year's Day" },
    ]
    return (
        <div className='w-full h-auto'>
            <div className='flex justify-around md:space-x-8 px-2'>
                <span className='text-lg font-medium'>Upcoming Holidays</span>
                <span className='underline font-medium text-md'>View All</span>
            </div>
            <div className=' md:mt-8 px-3'>
                {holidays.map(item => (
                    <div key={item.id} className='flex justify-between px-1 py-6 border-b-2 md:text-md lg:text-sm'>
                        <span >{item.date}</span>
                        <span className='text-[#64748B] md:text-md lg:text-[0.8rem]'>{item.greeting}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Holidays