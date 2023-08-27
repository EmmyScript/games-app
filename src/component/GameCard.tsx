import React from 'react'
import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Text } from '@chakra-ui/react';
import {Image } from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from './services/image-url';

 
interface Props {
    game:Game;
}
const GameCard = ({game} : Props) => {
  return (
    <div>
        <Card width="300px" borderRadius={10} overflow={'hidden'}>
          
           <Image src= {(game.background_image)} /> 
          < CardBody> 
        
        <HStack justifyContent='space-between'>
         <PlatformiconList platforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score ={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
          </CardBody>
        </Card>
    </div> 
  )
}

export default GameCard