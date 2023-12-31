
import { HStack, Image, Text,} from '@chakra-ui/react'
import john from '../assets/john.png'
import tale from '../assets/tale.jpg'
import ColorModeSwitch from './ColorModeSwitch';
import Logo from './Logo'
import SearchInput from './SearchInput';
interface Props {
  onSearch: (searchText: string) => void;

}

const Navbar = ({onSearch} : Props) =>{
  return (
    <div className='navbars'>
    <HStack  justifyContent="space-between">   
      <h1>talented hero</h1>
      <Image src={tale} boxSize='80px' margin={5} borderRadius={5}/>
     
      <SearchInput  onSearch={onSearch}/>
      
      
    <ColorModeSwitch />
    </HStack>
    </div>
  )
}

export default Navbar;