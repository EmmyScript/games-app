import {Grid, GridItem, Show} from "@chakra-ui/react"
import Navbar from "./component/Navbar";
import GameGrid from "./component/GameGrid";

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
    aside base
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