import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import api from '../../service/api'
import { IUser } from '../../store/modules/user/types'
import { useDispatch } from 'react-redux';
import { addNewUser, setAllUsers } from '../../store/modules/user/actions'
import { StudentCard, StudentField, PrettyInput, HomeTitle, PrettyForm } from './style'
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';

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
            {/* <button onClick={() => toast.success("ok")}>Toast</button> */}
            <div>
                <PrettyForm onSubmit={handleSubmit}>
                    <h2 style={{ color: "#f0f0f0", fontStyle: "italic" }}>Cadastre um aluno na accenture</h2>

                    <PrettyInput type={"text"} value={name} onChange={(e) => setName(e.target.value)} placeholder={"seu nome"} name="name" />
                    <PrettyInput type={"text"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"seu email"} name="email" />
                    <PrettyInput type={"number"} value={age} onChange={(e) => setAge(e.target.value)} placeholder={"sua idade"} name="age" />
                    <Button type="submit">Cadastrar</Button>
                </PrettyForm>

                <Table striped bordered hover style={{ width: "90vw", margin: "10px auto" }} >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>))}
                    </tbody>

                </Table>

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