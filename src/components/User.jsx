/* eslint-disable react/prop-types */

export default function User({ name, email, handleClick }) {


    return (
        <>
            <li className="user-list" onClick={()=>handleClick(name)}>
                <h3>{name}</h3>
                <p>{email}</p>
            </li>
        </>
    )
}