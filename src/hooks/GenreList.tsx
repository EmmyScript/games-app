import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
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
    <>
    <Heading fontSize= '2xl' marginBottom={3}>Emmy Genres</Heading>
<List>
  
  {data.map(genre => <ListItem key={genre.id} paddingY='6px'>
    <HStack>
      <Image boxSize="35px" 
      borderRadius={8} 
      objectFit='cover'
      //inside src {getCroppedImageurl} when i add url
      src={(genre.image_background)} 
      />
      <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id=== selectedGenre?.id ? 'bold': 'normal'} 
       onClick={() => onSelectGenre(genre)} fontSize='lg' variant="link">{genre.name}</Button>

    </HStack>
  </ListItem>)}

</List>
    </>
      
  
  )
}

export default GenreList;
