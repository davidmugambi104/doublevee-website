import React from 'react'

export default function Banner({ children , title , subtitle  }) {
    return (
        <div className="banner">
            <h1>{title}</h1>  
            <div/>
            <p>Delux Rooms at 1500ksh</p>
            {children}
        </div>
    )
}
