import { Calendar } from 'lucide-react';
import React from 'react';

const ProfileSummary = () => {

    const details = [
        { id: 1, name: "October", svg: <Calendar />, count: null },
        { id: 2, name: "Present Day", svg: null, count: "15" },
        { id: 3, name: "Total Leave Balance", svg: null, count: "02" },
        { id: 4, name: "Outstanding Anomalies", svg: null, count: "03" },
        { id: 5, name: "Avg. Working Hours", svg: null, count: "9hrs 30min" },
    ]

    return (
        <div className="flex justify-between items-center bg-white h-auto md:h-[6rem] border-t-[1px]">
            {details.map((item) => (
                <div
                    key={item.id}
                    className={`flex border-r-[1px] h-full  mx-auto px-2 md:p-0 text-center max-md:items-center
                        ${item.id === 1 ? "flex-col md:flex-row gap-4 items-center justify-center" : 
                            "flex-col gap-2 items-start justify-center content-center flex-wrap"}`}
                    style={{
                        width: `${100 / details.length}%`
                    }}
                >
                    <span className='text-textGray  md:text-lg max-md:text-[0.8rem]'>{item.name}</span>
                    <span>{item?.svg}</span>
                    <span className='text-textbg font-semibold text-2xl '>{item?.count}</span>
                </div>
            ))}
        </div>
    );
};

export default ProfileSummary;
