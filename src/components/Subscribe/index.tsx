
import api from '../../service/api';
// import { Form } from '@unform/web'
import { SubmitHandler, FormHandles, useField } from '@unform/core'
import { StyledForm, StyledInput, InputLabel } from './style'
import Button from 'react-bootstrap/Button'

import React, { useRef, useEffect } from 'react'



const Subscribe: React.FC = () => {

    let formRef = useRef<FormHandles>(null);


    const handleSubmit: SubmitHandler<FormData> = async data => {
        let request = { ...data };
        console.log("request", request);
        let response = await api.post("/students", request)
        console.log("response:", response.data)
    }



    return (
        <div>
            <h2 style={{ width: "90vw", margin: "10px auto" }}>Cadastre um novo Aluno</h2>
            <StyledForm ref={formRef} onSubmit={handleSubmit}>
                <InputLabel >name</InputLabel>
                <StyledInput placeholder={"insira seu nome"} name="name" />
                <InputLabel>email</InputLabel>
                <StyledInput placeholder={"insira seu email"} name="email" />
                <InputLabel>age</InputLabel>
                <StyledInput placeholder={"insira sua idade"} name="age" />
                <Button style={{ margin: "2px", display: "block" }} type={"submit"}>Enviar</Button>
            </StyledForm>
        </div>
    );
}

export default Subscribe;