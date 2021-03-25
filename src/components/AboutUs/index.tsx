import React from 'react';
import { useSelector } from 'react-redux'
import { IGlobalState } from '../../store/modules/user/types'
import Table from 'react-bootstrap/Table';
import { AboutTitle } from './style';

const AboutUs: React.FC = () => {
    const state = useSelector((state: IGlobalState) => state.users);

    console.log(state)

    return (
        <div>
            <AboutTitle>
                <h1 style={{ margin: "10px" }}>Matriculados, Accenture 2.1</h1>

            </AboutTitle>
            <>

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
                        {state.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        </div>
    )

}

export default AboutUs;