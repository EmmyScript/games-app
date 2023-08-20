import React from 'react'
import { Game } from './hooks/useGames';
import { Card, CardBody, HStack, Heading, Text } from '@chakra-ui/react';
import {Image } from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList';
import CriticScore from './CriticScore';


interface Props {
    game:Game;
}
const GameCard = ({game} : Props) => {
  return (
    <div>
        <Card border-borderRadius={10} overflow={'hidden'}>
          
           <Image src ={game.background_image} /> 
          < CardBody> 
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
         <PlatformiconList platforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score ={game.metacritic} />
        </HStack>
          </CardBody>
        </Card>
    </div> 
  )
}

export default GameCard