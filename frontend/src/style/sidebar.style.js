import styled from 'styled-components' 

const SideContainer = styled.main`
    margin: 10px;
    padding: 10px;
    width: 10vw;
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(5, 50px);
    grid-template-columns: 1fr;
    align-self: center;
    justify-self: center;
    overflow: auto;
    
`;



export default SideContainer;