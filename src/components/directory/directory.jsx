import React from 'react';
import './directory.scss'

import MenuItem from '../menu-item/menu-item';
import { useSelector } from 'react-redux';




const Directory = ()=>{

  const sections = useSelector(state=> state.directory.sections)
 
        return ( 
            <div className="directory-menu">
            {
                sections.map(({id,...otherProps})=>(
                    <MenuItem key={id} {...otherProps}/>
                ))
            }
        </div>
         )
    
}
 
export default Directory

