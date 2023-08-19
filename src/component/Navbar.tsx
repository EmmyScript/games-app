
import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logs.jpg'
import ColorModeSwitch from './ColorModeSwitch';
//import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='navbars'>
    <HStack  >
      <Image src={logo} boxSize='50px' />
      
    
    <ColorModeSwitch />
    
    </HStack>
    </div>
  )
}

export default Navbar;