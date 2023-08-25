import {Grid, GridItem, HStack, Show} from "@chakra-ui/react"
import Navbar from "./component/Navbar";
import GameGrid from "./component/GameGrid";
import GenreList  from "./hooks/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./component/SortSelector";

 export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
 const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
 
  return (
    <div>
<Grid templateAreas={{
  base: `"nav" "main"`,
  lg: `"nav nav" "aside main"`
}}
templateColumns={{
  base: '1fr',
  lg: '200px 1fr'
}}
>
  <GridItem area = "nav">
    <Navbar />

  </GridItem>
  <Show>
  <GridItem area = "aside" paddingX='5px'>
    <GenreList selectedGenre ={gameQuery.genre} onSelectGenre={(genre) =>
      setGameQuery({...gameQuery, genre}) }/>
        
  </GridItem>
  </Show>
  <GridItem area = "main">
    <HStack spacing={5} padding-left={3} marginBottom={5}>
    <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform) =>  setGameQuery({...gameQuery, platform})}/>
    <SortSelector />
      </HStack>
    <GameGrid gameQuery ={gameQuery} />
    <SortSelector />
  </GridItem>   
</Grid>
      </div>
  )  
}

export default App;