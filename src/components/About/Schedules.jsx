import React from 'react';

const Schedules = () => {
    const rowClass = "border text-center font-normal py-6"
    const headClass = "border bg-red-600 text-white font-semibold text-center text-base poppins"
    return (
        // remove my-96 after compliting workd
        <div className='screen my-96'>

            {/* heading */}
            <div className='mb-7 py-3 border'>
                <p className='text-center font-bold text-red-600 text-3xl'>HOURS OF OPERATION</p>
            </div>

            {/* table  for boyz */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th  className={`${headClass}`}>Saturday</th>
                            <th  className={`${headClass}`}>Sunday</th>
                            <th  className={`${headClass}`}>Monday</th>
                            <th  className={`${headClass}`}>Tuesday</th>
                            <th  className={`${headClass}`}>Wednesday</th>
                            <th  className={`${headClass}`}>Thursday</th>
                            <th  className={`${headClass}`}>Friday</th>
                            
                        </tr>
                    </thead>
                    <tbody className='border'>
                        {/* row 1 */}
                        <tr>
                            <th  className={`${rowClass}`}>7am - 11pm</th>
                            <th  className={`${rowClass}`}>7am - 11pm</th>
                            <th  className={`${rowClass}`}>7am - 11pm</th>
                            <th  className={`${rowClass}`}>7am - 11pm</th>
                            <th  className={`${rowClass}`}>7am - 11pm</th>
                            <th  className={`${rowClass}`}>7am - 11pm</th>
                            <th  className={`${rowClass}`}>3:30 - 10:30pm</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Schedules;