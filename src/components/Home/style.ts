import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export const HomeTitle = styled.div`
  width: 90vw;
  font-size: 1.2em;
  margin: 10px auto;
  text-align: center;
`

export const StudentCard = styled.div`
  width: 90vw;
  margin: 10px auto;
  border: solid 1px #222;
`
export const StudentData = styled.p`
  padding-left: 10px;
  display: inline-block;
`
export const StudentField = styled.span`
  padding-left: 10px;
  font-weight: bold;
`
export const AddButton = styled(Button)`
  display: block;
  margin: 10px;
`

export const PrettyInput = styled.input`
  width: 80vw;
  height: 56px;
  text-align: center;
  position: relative;
  margin: 10px auto;
  padding: 0px 16px;
  border: none;
  border-radius: 4px;
  font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;

  color: #fff;
  opacity: 0.8;
  display: block;
  outline: none;
  box-shadow: 0px 4px 20px 0px rgba(10, 10, 10, 0.3);
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
    0.1s padding ease-in-out;
  -webkit-appearance: none;
`

export const PrettyForm = styled.form`
  width: 90vw;
  background: #50c878;
  background-color: #3bb78f;
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
  border-radius: 10px;
  margin: 10px auto;
  text-align: center;
  padding: 20px;
`
