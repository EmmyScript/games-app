import {SimpleGrid, Skeleton, Text } from "@chakra-ui/react"
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "../hooks/useGenres";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery; 
  
}
const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading} =useGames(gameQuery);
    const Skeletons = [1, 2, 3, 4, 5, 6];

    
  return (
    <>
    {error && <text>{error}</text>}
    <SimpleGrid columns = {{sm:1, md: 2, lg: 3, xl: 5}} padding={'10px'} 
    spacing={10}>
      {isLoading && Skeletons.map(Skeleton => <GameCardSkeleton key={Skeleton}/>)}
        {data.map((game) => ( 
        <GameCard key={game.id} game={game} />
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid