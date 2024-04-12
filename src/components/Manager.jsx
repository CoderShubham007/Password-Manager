import React from 'react'

const Manager = () => {
    return (
        <>
            {/* Form */}
            <div className="container px-8 py-2">
                <form action="" className='w-[600px] mx-auto'>
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Password Manager OP</h1>
                    </div>
                    <label className="input input-bordered flex items-center mb-5">
                        Site URL
                        <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center mb-5">
                        Username
                        <input type="text" className="grow" placeholder="daisy@site.com" />
                    </label>
                    <label className="input input-bordered flex items-center mb-5">
                        Password
                        <input type="text" className="grow" placeholder="daisy@site.com" />
                    </label>
                    <div>
                        <button className="btn bg-green-500 text-white w-full">Success</button>
                    </div>
                </form>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Manager
