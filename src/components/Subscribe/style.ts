import { Form as Unform } from '@unform/web'

import Input from './Input'
import styled from 'styled-components'

export const StyledForm = styled(Unform)`
  width: 90vw;
  margin: 10px auto;
`

export const StyledInput = styled(Input)`
  display: inline-block;
  margin: 10px;
`
export const InputLabel = styled.p`
  margin: 10px;
  font-weight: bold;
`
