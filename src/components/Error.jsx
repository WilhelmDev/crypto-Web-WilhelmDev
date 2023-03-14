import styled from '@emotion/styled'
import React from 'react'
const Text = styled.div`
    background-color: #e41818;
    color: white;
    max-width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    padding: 9px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    text-align: center;
    border-radius: 6px;
`
const Error = ({children}) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default Error