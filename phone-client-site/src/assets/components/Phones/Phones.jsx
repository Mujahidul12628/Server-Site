import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Phones = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>

            <h1>All phones here {phones.length}</h1>
            {
                phones.map(phone => <li key={phone.div
                }> <Link to={`/phone/${phone.div}`}> {phone.name}</Link></li>
                )
            }
        </div>
    );
};

export default Phones;