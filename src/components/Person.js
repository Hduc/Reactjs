import React from 'react'
const Person = (props) => {
    return (
        <>
            <p onClick={(e) =>props.click(e)}>this is a {props.name} props. I'm {props.age} year old.</p>
            {props.children}
            <input type='text' onChange={props.changed}></input>
        </>
    )
}

export default Person