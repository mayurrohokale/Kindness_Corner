import React, { useState, useEffect } from 'react';
import { getVolunteers } from '../../api/user';

export default function Allvolunteers() {
    const [volunteers, setVolunteers] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVolunteers = async () => {
            try {
                const data = await getVolunteers();
                if (data) {
                    setVolunteers(data);
                } else {
                    setError('No data found');
                }
            } catch (error) {
                setError('Failed to fetch volunteers');
            }
        };

        fetchVolunteers();
    }, []);

    const filteredVolunteers = volunteers.filter(volunteer =>
        volunteer.name.toLowerCase().includes(search.toLowerCase()) ||
        volunteer.email.toLowerCase().includes(search.toLowerCase()) ||
        volunteer.phone.toLowerCase().includes(search.toLowerCase()) ||
        volunteer.city.toLowerCase().includes(search.toLowerCase()) ||
        volunteer.state.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-8">
            <h1 className='font-bold font-monserrat text-2xl md:text-4xl'>All <span className='text-[#E91E63]'>Volunteer's</span></h1>
            <div className="max-w-md mx-auto my-4">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Volunteers..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                {error ? (
                    <div className="text-center py-4">
                        <h2 className="text-xl font-semibold">{error}</h2>
                    </div>
                ) : (
                    filteredVolunteers.length > 0 ? (
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">No</th>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th className="py-2 px-4 border-b">Email</th>
                                    <th className="py-2 px-4 border-b">Phone</th>
                                    <th className="py-2 px-4 border-b">PinCode</th>
                                    <th className="py-2 px-4 border-b">City</th>
                                    <th className="py-2 px-4 border-b">State</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredVolunteers.map((volunteer, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="py-2 px-4 border-b">{index + 1}</td>
                                        <td className="py-2 px-4 border-b">{volunteer.name}</td>
                                        <td className="py-2 px-4 border-b">{volunteer.email}</td>
                                        <td className="py-2 px-4 border-b">{volunteer.phone}</td>
                                        <td className="py-2 px-4 border-b">{volunteer.pincode}</td>
                                        <td className="py-2 px-4 border-b">{volunteer.city}</td>
                                        <td className="py-2 px-4 border-b">{volunteer.state}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="text-center py-4">
                            <h2 className="text-xl font-semibold">No volunteers found</h2>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
