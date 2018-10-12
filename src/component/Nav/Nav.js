import React from 'react';
import {Link} from 'react-router-dom';
import home from '../../assets/home_logo.png';
import form from '../../assets/new_logo.png';
import shutDown from '../../assets/shut_down.png';
import './Nav.css';
import {connect} from 'react-redux';
import {updateUsername,updatePicture} from '../../ducks/reducer';



export function Nav(){
    return(
        <div className="nav">
           <Link to='/dashboard'><img src={home} alt=''/></Link>
           <Link to='/new'><img src={form} alt=''/></Link>
           <Link to='/'><img src={shutDown} alt=''/></Link>
        </div>
    )
}

function mapStateToProps(state){
    const {username,picture}=state
 return{
     username,
     picture
 }
}

export default connect(
    mapStateToProps,{updateUsername, updatePicture}

)(Nav)