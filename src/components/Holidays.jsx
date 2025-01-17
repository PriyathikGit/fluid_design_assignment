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
            <div className='flex justify-around'>
                <span className='font-semibold'>Upcoming Holidays</span>
                <span className='underline'>View All</span>
            </div>
            <div className=' md:mt-12'>
                {holidays.map(item => (
                    <div key={item.id} className='flex justify-between px-4 py-6 border-b-2'>
                        <span >{item.date}</span>
                        <span >{item.greeting}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Holidays