const CouplesMem = () => {
    const rowClass = "border text-center font-normal py-4"
    const headClass = "border bg-gray-600 text-white font-semibold text-center md:text-base poppins"
    return (
        <div className="md:py-16 py-9">
            <div className="mx-auto w-[90%]">
                {/* heading */}
                <div className='mb-7 py-3 border border-gray-300'>
                    <p className='text-center font-bold text-[#ebc270] md:text-3xl'>COUPLES MEMBERSHIP</p>
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
                                <th className={`${rowClass}`}>3 MONTH</th>
                                <th className={`${rowClass}`}>BDT. 40000</th>
                                <th className={`${rowClass}`}>BDT. 8K OFF 32000</th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th className={`${rowClass}`}>6 MONTH</th>
                                <th className={`${rowClass}`}>BDT. 72000</th>
                                <th className={`${rowClass}`}>BDT. 20K OFF 52000</th>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th className={`${rowClass}`}>1 YEAR</th>
                                <th className={`${rowClass}`}>BDT. 120000</th>
                                <th className={`${rowClass}`}>BDT. 30K OFF 90000</th>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

                <p className="text-center font-semibold text-lg mt-5 text-gray-600">Note: Prices do not include VAT</p>
            </div>
        </div>
    );
};

export default CouplesMem;