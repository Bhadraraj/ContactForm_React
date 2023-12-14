import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import user from '../Images/user.png'

const ContactCard = (props) => {
    const { index, name, email } = props.contact;
    return (
        <div>
            <div className="contactList">
                <div className='userInfo' key={index}>
                    <div className="userLogo"> <img src={user} alt="" /></div>
                    <div className="details"><div className="contactName">{name}</div>
                        <div className="contactName">{email}</div>
                    </div>
                </div>
                <div className="icon">   <span onClick={()=> props.clickHandler(id)}> <FaRegTrashCan /></span></div>
            </div>
        </div>
    )
}

export default ContactCard
