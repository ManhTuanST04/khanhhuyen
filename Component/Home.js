import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = (props) => {
    const [listUser, setListUser] = useState([]);

    const fetchData = async () => {
        // const apiLink = 'http://localhost:4000/home';
        const apiLink = `${process.env.REACT_APP_API}/home`;

        try {
            const result = await axios.get(apiLink);
            console.log(result.data);

            return result.data;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData().then((res) => {
            console.log('list user: ', res);
            setListUser(res);
        });
    }, []);

    return (
        <div>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                </tr>
                {listUser &&
                    listUser.map((item) => (
                        <tr>
                            <th>{item.id}</th>
                            <th>{item.userName}</th>
                            <th>{item.password}</th>
                        </tr>
                    ))}
            </table>
        </div>
    );
};

export default Home;
