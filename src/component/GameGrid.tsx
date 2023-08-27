import {SimpleGrid, Skeleton, Text } from "@chakra-ui/react"
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "../hooks/useGenres";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import john from '../assets/john.png'

interface Props {  
  gameQuery: GameQuery; 
  
}
const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading} =useGames(gameQuery);
    const Skeletons = [1, 2, 3, 4, 5, 6];

    
  return (
    <>
    {error && <text>{error}</text>}
    <SimpleGrid columns = {{sm:1, md: 2, lg: 3, xl: 4}} padding={'10px'} 
    spacing={3}>
      {isLoading && Skeletons.map(Skeleton => <GameCardSkeleton key={Skeleton}/>)}
        {data.map((game) => ( 
        <GameCard key={game.id} game={game} />
        
        ))}
      <h2>Just For Funny. it contained all existing game</h2>
   <p> used the search box for any game. </p>
   <p> search for ur name. </p>
   <p> ipole card game @ymme.</p>
    </SimpleGrid>
    </>
  )
}

export default GameGrid