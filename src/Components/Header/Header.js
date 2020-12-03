import React from 'react';
import './Header.css' ;
import {Link} from 'react-router-dom';

class Header extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
    return (
        <div className="header">
            <ul className='list'>
                <div id='icon'>HN</div>
                <Link to='/top'><li>Top</li></Link>
                <Link to='/new'><li>New</li></Link>
                <Link to='/show'><li>Show</li></Link>
                <Link to='/ask'><li>Ask</li></Link>
                <Link to='/job'><li>Job</li></Link>
            </ul>
        </div>
        );
    }  
}

export default Header;