import React, { useCallback, useEffect, useState } from 'react';
import api from '../../service/api'
import { IUser } from '../../store/modules/user/types'
import { useDispatch } from 'react-redux';
import { addNewUser } from '../../store/modules/user/actions'
import { StudentCard, StudentField, StudentData, AddButton, HomeTitle } from './style'
import ListGroup from 'react-bootstrap/ListGroup'


const Home: React.FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        api.get("/students").then((res) => { setUsers(res.data) })
    }, [])

    const handleUsers = useCallback((user: IUser) => {
        dispatch(addNewUser(user))
    }, [dispatch])


    return (
        <div>
            <HomeTitle>
                <h3 style={{ margin: "10px" }}>Alunos cadastrados em nosso sistema</h3>
            </HomeTitle>
            <div>

                {users.map((user) =>
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
                )}
            </div>
        </div >
    )

}

export default Home;