import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/flag.webp';
import img2 from '../assets/india gate.webp';
import img3 from '../assets/./book.jpeg';
import img4 from '../assets/./boy.jpeg';
import img5 from '../assets/./map.webp';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '80%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={["column" , "row"]}
         >
          <Image src={img5} h={['40', '400']}  filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
             Mains gives you an appropriate platform to showcase the knowledge you have gained. Even if your answer is not up to the mark, it is still evaluated. You can ask any aspirant, most of them, irrespective of whether they cleared the exam or not, will agree that Mains has some sort of certainty where marks are proportional to the efforts. You are neither rejected merely based on some 100 questions from multiple topics without any certainty of marks distribution, nor judged by a single conversation with experienced people having individual subjective perceptions. It is the Mains which gets your name into the list PT is just the rank and service decider.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      राष्ट्र सर्वोपरि
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
      वसुधैव कुटुम्बकम
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
      शून्य
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      “Poverty is the parent of crime.”
      </Heading>
    </Box>
  </Carousel>
);

export default Home;