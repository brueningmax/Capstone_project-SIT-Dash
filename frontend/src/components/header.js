import logo from '../assets/logo.png'
import HeaderContainer from '../style/header.style';

const Header = () => {

  return (
    <HeaderContainer className='header'>
      <div >
        Header
        <img className="logo" src={logo}/>
      </div>
    </HeaderContainer>
) 
}

export default Header;