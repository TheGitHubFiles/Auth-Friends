import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFriend = {
    name: '',
    age: '',
    email: ''

}
const Friends = () => {
    const [list, setList] = useState([]);
    const [newFriend, setNewFriend] = useState(initialFriend)

    const getData = () => {
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const submit = (e) => {
        e.preventDefault()
        axiosWithAuth().post('/friends', newFriend)
            .then((res) => {
                setList(res.data)


            })
        setNewFriend(initialFriend)
    }

    const handleChange = e => {
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form onSubmit={submit}>
                <input
                    type='text'
                    name='name'
                    value={newFriend.name}
                    onChange={handleChange}
                    placeholder='name'
                >
                </input>
                <input
                    type='text'
                    name='age'
                    value={newFriend.age}
                    onChange={handleChange}
                    placeholder="age"
                >
                </input>
                <input
                    type='email'
                    name='email'
                    value={newFriend.email}
                    onChange={handleChange}
                    placeholder='email'
                >
                </input>
                <button>Submit</button>
            </form>
            {list.map((item) => {
                return (
                    <div>
                        <h2>{item.name}</h2>
                        <p>AGE: {item.age}</p>
                        <p>EMAIL: {item.email}</p>
                    </div>

                );
            })}
        </>
    )
};
export default Friends;
