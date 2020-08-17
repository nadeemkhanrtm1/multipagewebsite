import React from 'react'
import "./Card.css"
 const Card = (props) => {
    return( 
            <div className="card_">
                <div className="circle_on_logo">
                <a href="/">{props.logo}</a>
                </div>
                <h4>{props.name}</h4>
                <p className="para">Eu non col commodo accumsan ante mi. Commodo consectetur sed mi adipiscing accumsan ac nunc tincidunt lobortis.</p>
            </div>
        )
}
export default Card;