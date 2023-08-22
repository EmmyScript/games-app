import { HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import useGenres from "./useGenres";
import getCroppedImageUrl from "../component/services/image-url";

const GenreList = () => {
  const {data, isLoading } = useGenres();
  if(isLoading) return <Spinner />
  return (
    
<List>
  
  {data.map(genre => <ListItem key={genre.id} paddingY='6px'>
    <HStack>
      <Image boxSize="30px" borderRadius={5} 
      //inside src {getCroppedImageurl} when i add url
      src={(genre.image_background)} 
      />
      <Text fontSize='lg'>{genre.name}</Text>

    </HStack>
  </ListItem>)}

</List>
    
      
  
  )
}

export default GenreList;
