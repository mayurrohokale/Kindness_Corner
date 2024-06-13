import React, { useState, useEffect } from 'react';
import { getVolunteers } from '../../api/user';

export default function Allvolunteers() {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        const fetchVolunteers = async () => {
            const data = await getVolunteers();
            if (data) {
                setVolunteers(data);
            }
        };

        fetchVolunteers();
    }, []);

    return (
        <div className="volunteers-container">
            <h1>All Volunteers</h1>
            <ul className="volunteers-list">
                {volunteers.map((volunteer, index) => (
                    <li key={index} className="volunteer-item">
                        <span className="volunteer-name">{volunteer.name}</span>
                        <span className="volunteer-email">{volunteer.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
