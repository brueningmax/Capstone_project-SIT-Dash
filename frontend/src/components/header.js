import logo from '../assets/logo.png'
// import HeaderContainer from '../style/header.style';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  return (
    // <HeaderContainer className='header'>
      <div className='bg-blue-500'>
        <img className="logo" src={logo} onClick={() => { navigate('/') }}/>
      </div>
    // </HeaderContainer>
) 
}

export default Header;