import React from 'react'
const Person = (props) => {
    return (
        <>
            <p>this is a {props.name} props. I'm {props.age} year old.</p>
            {props.children}
        </>
    )
}

export default Person