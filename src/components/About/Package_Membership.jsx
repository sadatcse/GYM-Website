import React from 'react';
const Package_Membership = () => {
    const rowClass = "border text-center font-normal py-4"
    const headClass = "border bg-red-600 text-white font-semibold text-center text-base poppins"
    return (
        <div className='py-16'>
            <div className='screen'>
                <p className='text-6xl font-extrabold text-center text-[#ebc270] mb-10'>MEMBERSHIP PLAN</p>

                {/* heading */}
                <div className='mb-7 py-3 border'>
                    <p className='text-center font-bold text-red-600 text-3xl'>SINGLE MEMBERSHIP</p>
                </div>

                {/* table*/}
                <div className="overflow-x-auto shadow">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className={`${headClass}`}>DURATION</th>
                                <th className={`${headClass}`}>REGULAR PRICE</th>
                                <th className={`${headClass}`}>PROMO/INTRO PRICE</th>
                            </tr>
                        </thead>
                        <tbody className='border'>
                            {/* row 2 */}
                            <tr>
                                <th className={`${rowClass}`}>WEEKLY</th>
                                <th className={`${rowClass}`}>BDT. 4000</th>
                                <th className={`${rowClass}`}>BDT. 1K OFF 3000</th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th className={`${rowClass}`}>MONTHLY</th>
                                <th className={`${rowClass}`}>BDT. 8000</th>
                                <th className={`${rowClass}`}>BDT. 2K OFF 6000</th>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th className={`${rowClass}`}>3 MONTH</th>
                                <th className={`${rowClass}`}>BDT. 21000</th>
                                <th className={`${rowClass}`}>BDT. 4K OFF 17000</th>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                <th className={`${rowClass}`}>6 MONTH</th>
                                <th className={`${rowClass}`}>BDT. 38000</th>
                                <th className={`${rowClass}`}>BDT. 10K OFF 28000</th>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                <th className={`${rowClass}`}>1 YEAR</th>
                                <th className={`${rowClass}`}>BDT. 70000</th>
                                <th className={`${rowClass}`}>BDT. 20K OFF 50000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Package_Membership;