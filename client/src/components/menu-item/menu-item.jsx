import React from 'react';
import { useHistory ,useRouteMatch} from 'react-router-dom';
import './menu-item.scss'

const MenuItem = ({title,imageUrl,size,linkUrl}) => {

    let history = useHistory();
    let match = useRouteMatch();

    function handleClick(){
        history.push(`${match.url}${linkUrl}`)
    }
    return (
        <div className ={`${size} menu-item`} onClick={handleClick}>

            <div 
                className="background-image" 
                style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
      );
}
 
export default MenuItem;