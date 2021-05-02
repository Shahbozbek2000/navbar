import styled from 'styled-components'
import { Container } from './globalStyles'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
background:#47588F;
position:sticky;
display:flex;
justify-content:center;
align-items:center;
height:80px;
font-family:'Poppins', sans-serif;
top:0;
width: 100%;
z-index:999;
`
export const NavbarContainer = styled(Container)`
display:flex;
justify-content:space-between;
height:80px;
${Container};
`
export const NavLogo = styled(Link)`
display:flex;
justify-content:flex-start;
align-items:center;
left:0;
color:#000!important;
text-decoration:none;
font-size:1rem;
cursor:pointer;
&:hover{
    text-decoration:none;
}
`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:960px){
display:block;
position:absolute;
top:16px;
right:20px;
transform:translate(-100%, 60%);
font-size:1.8rem;
cursor:pointer;
transition:all .5s linear;
}
`
export const NavMenu = styled.ul`
display:flex !important;
justify-content:center !important;
align-items:center !important;
text-align:center;

@media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    position:absolute;
    width: calc(100% - 40px);
    height:90vh;
    top:60px;
    left: ${({click}) => (click ? 0 : '-110%')};
    opacity:1;
    transition: all 0.5s ease;
    background:#47588F;   
    padding-right:0px;
}
`
export const NavItem = styled.li`
    padding-top:15px;
    list-style:none;
    height:80px;
    border-bottom:2px solid transparent;


@media screen and (max-width:960px){
    border:none;
}
`
export const NavLinks = styled(Link)`
    display:flex;
    align-items:center;
    color:black !important;
    text-decoration:none;
    padding:1rem 1rem;
    height:100%;

@media screen and (max-width:960px){
    text-align:center;
    padding:2rem;
    width:100%;
    display:table;
}
  &:hover{
    text-decoration:none;
    border-bottom:none;
    transition:all 0.3s ease;
  }
`
export const Form = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;

   &:hover{
       border-bottom:none;
   }
`

export const FormGroup = styled.div`
 padding-top:15px;
 margin-right:40px;
  width:350px;
 
`
export const Input = styled.input`
border-top-right-radius:0;
border-bottom-right-radius:0;
 width:350px;
 padding:10px 20px;
 &:hover{
     border-bottom:none;
 }

`
export const Button = styled.button`
 border-top-right-radius: 4px;
 border-bottom-right-radius:4px;
 position:relative;
 top:-38px;
 padding:7px 11px;
 left:100%;
 display:inline-block;
 border:none;
 outline:none;
 background:gold;
`