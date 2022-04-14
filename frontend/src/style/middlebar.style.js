import styled from 'styled-components'

const MiddleContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Grape+Nuts&display=swap');
    /* padding-left: 5%; */
    height: 15vh;
    width: 90%;
    display: flex;
    align-items: center;
    border: 1px solid black;
    font-family: 'Grape Nuts', cursive;
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 15px;
    div{
        display: flex;
        column-gap: 20px;
        align-items: center;
            
        div{
            h5{
                
                padding: 0%;
                margin: 0%;
            }
            p{
                padding: 0%;
                margin: 0%;
            }

            display: flex;
            flex-direction: column;
            

        }
    }
    

`

export default MiddleContainer;