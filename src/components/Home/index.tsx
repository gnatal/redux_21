import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import api from '../../service/api'
import { IUser } from '../../store/modules/user/types'
import { useDispatch } from 'react-redux';
import { addNewUser, setAllUsers } from '../../store/modules/user/actions'
import { StudentCard, StudentField, StudentData, AddButton, HomeTitle } from './style'
import ListGroup from 'react-bootstrap/ListGroup'
import { ToastContainer, toast } from 'react-toastify';

const Home: React.FC = () => {

    // const [users, setUsers] = useState<IUser[]>([]);
    const [allUsers, setAllUsers] = useState<IUser[]>(() => {
        const usersStorage = localStorage.getItem("@tester");
        if (usersStorage) {
            console.log("userStora", JSON.parse(usersStorage))
            return JSON.parse(usersStorage);
        }

        return [];
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        allUsers.map(user => (dispatch(addNewUser(user))))
        // dispatch(setAllUsers(allUsers));
    }, [])


    // useEffect(() => {
    //     api.get("/students").then((res) => { setUsers(res.data) })
    // }, [])

    const handleUsers = useCallback((user: IUser) => {
        dispatch(addNewUser(user))
    }, [dispatch])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        toast.success("form accionado");

        const Data = {
            name,
            email,
            age
        }
        localStorage.setItem("@tester", JSON.stringify([...allUsers, Data]));
        setAllUsers([...allUsers, Data])
    }


    return (
        <div>
            <HomeTitle>
                <h3 style={{ margin: "10px" }}>Alunos cadastrados em nosso sistema</h3>
            </HomeTitle>
            {/* <button onClick={() => toast.success("ok")}>Toast</button> */}
            <div>
                <form onSubmit={handleSubmit}>
                    <input type={"text"} value={name} onChange={(e) => setName(e.target.value)} placeholder={"seu nome"} name="name"></input>
                    <input type={"text"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"seu email"} name="email"></input>
                    <input type={"number"} value={age} onChange={(e) => setAge(e.target.value)} placeholder={"sua idade"} name="age"></input>
                    <button type="submit">Cadastrar</button>
                </form>

                <div>
                    {allUsers.map((user, index) => (
                        <div key={index}>
                            <h2>{user.name}</h2>
                        </div>
                    ))}
                </div>

                {/* {users.map((user) =>
                (
                    <div key={user.id}>
                        <StudentCard>
                            <ListGroup>
                                <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                <ListGroup.Item>Age: {user.age}</ListGroup.Item>
                            </ListGroup>
                            <AddButton onClick={() => handleUsers(user)}>Matricular </AddButton>
                        </StudentCard>
                    </div>
                )
                )} */}
            </div>
        </div >
    )

}

export default Home;