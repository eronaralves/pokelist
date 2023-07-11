import {
  Skull,
  Drop,
  Fire,
  Leaf,
  Circle,
  BugBeetle,
  Mountains,
  HandGrabbing,
  Sparkle,
  Lightning,
  Butterfly
} from 'phosphor-react-native';

// Interfaces
interface TypeProps {
  background: string;
  color: string;
  icon: any
};


export interface Types {
  poison: TypeProps;
  grass: TypeProps;
  fire: TypeProps;
  water: TypeProps;
  normal: TypeProps;
  bug: TypeProps;
  ground: TypeProps;
  fighting: TypeProps;
  fairy: TypeProps;
  electric: TypeProps;
};


export const POKEMON_TYPES = {
  poison: {
    background: '#9F6E97',
    color: '#A552CC',
    icon: <Skull color='#fff' weight='fill' /> 
  },
  grass: {
    background: '#8BBE8A',
    color: '#62B957',
    icon: <Leaf color='#fff' weight='fill' />
  },
  fire: {
    background: '#FFA756',
    color: '#FD7D24',
    icon: <Fire color='#fff' weight='fill' />
  },
  water: {
    background: '#58ABF6',
    color: '#4A90DA',
    icon: <Drop color='#fff' weight='fill' />
  },
  normal: {
    background: '#B5B9C4',
    color: '#9DA0AA',
    icon: <Circle color='#fff' weight='fill' />
  },
  bug: {
    background: '#8BD674',
    color: '#8CB230',
    icon: <BugBeetle color='#fff' weight='fill' />
  },
  ground: {
    background: '#F78551',
    color: '#DD7748',
    icon: <Mountains color='#fff' weight='fill' />
  },
  fighting: {
    background: '#EB4971',
    color: '#D04164',
    icon: <HandGrabbing color='#fff' weight='fill' />
  },
  fairy: {
    background: '#EBA8C3',
    color: '#ED6EC7',
    icon: <Sparkle color='#fff' weight='fill' />
  },
  electric : {
    background: '#F2CB55',
    color: '#EED535',
    icon: <Lightning color='#fff' weight='fill' />
  },
  flying: {
    background: '#5e7298',
    color: '#748FC9',
    icon: <Butterfly color='#fff' weight='fill' />
  }
} as Types