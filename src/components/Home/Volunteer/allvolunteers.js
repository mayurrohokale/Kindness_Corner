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
        volunteer.city.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-8">
            <h1 className='font-bold font-monserrat text-2xl md:text-4xl'>All <span className='text-[#E91E63]'>Volunteer's</span></h1>
            <input
                type="text"
                placeholder="Search Volunteers....."
                className="my-4 p-2 border rounded w-[200px] md:w-[320px] hover:border-[#128AED] shadow-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
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
