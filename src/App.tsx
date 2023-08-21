import {Grid, GridItem, Show} from "@chakra-ui/react"
import Navbar from "./component/Navbar";
import GameGrid from "./component/GameGrid";
import GenreList  from "./hooks/GenreList";


const App = () => {
  return (
    <div>
<Grid templateAreas={{
  base: `"nav" "main"`,
  lg: `"nav nav" "aside main"`
}}>
  <GridItem area = "nav">
    <Navbar />

  </GridItem>
  <Show>
  <GridItem area = "aside">
    <GenreList />
    
  </GridItem>
  </Show>
  <GridItem area = "main">
    <GameGrid />
  </GridItem>   
</Grid>
      </div>
  )
}

export default App;