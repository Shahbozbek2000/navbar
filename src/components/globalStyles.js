import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'Josefin Sans', sans-serif;
}
`
export const Container = styled.div`
    z-index:1; 
    width:100%;
    padding:0px 15px;
    margin-right:auto;
    margin-left:auto;
    

@media screen and (max-width:992px){
    padding:0px 30px;
}
`