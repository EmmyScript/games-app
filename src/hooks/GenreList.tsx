import { Button, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import useGenres, { Genre } from "./useGenres";
import getCroppedImageUrl from "../component/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre} : Props) => {
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
      <Button  fontWeight={genre.id=== selectedGenre?.id ? 'bold': 'normal'}  onClick={() => onSelectGenre(genre)} fontSize='lg' variant="link">{genre.name}</Button>

    </HStack>
  </ListItem>)}

</List>
    
      
  
  )
}

export default GenreList;
