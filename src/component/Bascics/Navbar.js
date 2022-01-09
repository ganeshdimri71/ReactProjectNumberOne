import React from 'react'
import './style.css'

const Navbar = ({filterItem,menuList}) => {
    return (
        <>
         <nav className="navbar">
            <div className="btn-group">
                {
                    menuList.map((curElm)=>{
                        return (
                            <button 
                            onClick={()=>filterItem(curElm)}
                            className="btn-group__item">{curElm }</button>
                        )
                    })
                }
            </div>
        </nav> 
        </>
    )
}

export default Navbar
