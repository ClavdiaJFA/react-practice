import React from 'react'
import '../App.css'

export const Edad = (props) => {
    return (
        <>{/* React.Fragment */}
            <p className='Juan'> tengo {props.edad} años</p>
            <Edad edad= {Juan}/>
        </>
    )
}
