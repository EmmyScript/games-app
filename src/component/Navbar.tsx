
import { HStack, Image,} from '@chakra-ui/react'
import logo from '../assets/logs.jpg'
import ColorModeSwitch from './ColorModeSwitch';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='navbars'>
    <HStack  justifyContent="space-between">
      <Image src={logo} boxSize='50px' />
      <Logo />
      
    <ColorModeSwitch />
    </HStack>
    </div>
  )
}

export default Navbar;