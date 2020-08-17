import React from 'react'
import "./Grid.css"
const Grid = (props) => {
    const style={"border-radius":"10px"};
        return(
            <React.Fragment>
                <div className="grid">
                <img src={process.env.PUBLIC_URL + props.path} className="img_grid" style={style} alt="Grid"></img>
                <h5>{props.name}</h5>
                <p>Eget mi ac magna cep lobortis faucibus accumsan enim lacinia adipiscing metus urna adipiscing cep commodo id. Ac quis arcu amet. Arcu nascetur lorem adipiscing non faucibus odio nullam arcu lobortis. Aliquet ante feugiat. Turpis aliquet ac posuere volutpat lorem arcu aliquam lorem.</p>
                <button>LEARN MORE</button>
                </div>
            </React.Fragment>
        )
}
export default Grid;
