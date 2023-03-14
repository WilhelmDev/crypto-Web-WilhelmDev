import styled from '@emotion/styled'
import {useEffect, useState} from 'react'

const Label = styled.label`
    color: white;
    display: block ;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 5%;
`
const Select = styled.select`
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    border-radius: 5px;
    padding: 10px;
`
const useSelectCoin = (label, options) => {
    const [state, setState] = useState('')
    
    

    const SelectCoin = () => (
        <>
            <Label htmlFor=""> {label} </Label>
            <Select name="" id="" value={state} onChange={(e) => setState(e.target.value)} >
                <option value=""> Seleccione </option>
                {options.map((x) => (
                    <option value={x.id} key={x.id} > {x.name} ({x.id}) </option>
                ))}

            </Select>
        
        </>
    )
    return [ state, SelectCoin ]
}

export default useSelectCoin