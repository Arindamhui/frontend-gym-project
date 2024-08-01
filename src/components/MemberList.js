import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentForm from './PaymentForm';

const MemberList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/registrations');
                setMembers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMembers();
    }, []);

    return (
        <div>
            <h2>Members List</h2>
            <ul>
                {members.map(member => (
                    <li key={member._id}>
                        {member.member_name} - {member.email}
                        <PaymentForm memberId={member._id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MemberList;
