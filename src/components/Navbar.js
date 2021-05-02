import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
    Nav, NavbarContainer, NavLogo,
    MobileIcon, NavMenu, NavItem,
    NavLinks
} from './NavbarElements'
import Snowfall from 'react-snowfall'
import { IconContext } from 'react-icons/lib'
import './Header.css'


export default function Header(props) {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [navbar, setNavbar] = useState(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
    const handleClick = () => setClick(!click)

   const changeBackground = () => {
       console.log(window.scrollY)
       if(window.scrollY >= 80) {
           setNavbar(true)
       } else {
           setNavbar(false)
       }
   }

   window.addEventListener('scroll', changeBackground)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav expand='lg' className={navbar ? 'navbar active' : 'navbar'}>
                    <NavbarContainer>
                        <NavLogo to='/bosh_sahifa'>
                            <h4 style={{ fontWeight: 'bold' }}>
                                Smart<span style={{ color: 'gold' }}>House</span>
                            </h4>
                           
                            <Snowfall snowflakeCount={27} style={{ width: '170px' }} />
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/bosh_sahifa'  
                                style={{
                                    color: '#fff', textDecoration: 'none', position: 'relative', top: '-26px',
                                    padding: '17px'
                                }}>
                                    <i className='fas fa-home' style={{ margin: '0 5px' }}></i>
                                     Bosh Sahifa
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services' 
                                style={{
                                    color: '#fff', textDecoration: 'none', position: 'relative', top: '-26px',
                                    padding: '17px'
                                }}>
                                    Xizmatlar
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <a href='#footer' className='link-gold'
                                    style={{
                                        color: 'black', textDecoration: 'none', position: 'relative', top: '20px',
                                        padding: '17px'
                                    }}>
                                    <i className='fas fa-phone'></i> Biz bilan aloqa</a>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </nav>
            </IconContext.Provider>
        </>
    )
}

