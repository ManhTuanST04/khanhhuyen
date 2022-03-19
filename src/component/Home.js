import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = (props) => {
    const fetchData = async () => {
        // const apiLink = 'http://localhost:4000/home';
        const apiLink = 'https://server-ticket-manager.herokuapp.com/home';

        try {
            const result = await axios.get(apiLink);
            console.log(result.data);

            return result.data;
        } catch (error) {
            console.error(error);
        }
    };

    const [userName, setUserName] = useState('');

    useEffect(() => {
        fetchData().then((res) => {
            console.log('dddd', res);
            setUserName(res.name);
        });
    }, []);

    return <div>Home Page {userName}</div>;
};

export default Home;
