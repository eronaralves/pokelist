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
  Butterfly,
  HandEye
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
  psychic: TypeProps;
  rock: TypeProps;
};


export const POKEMON_TYPES = {
  poison: {
    background: '#9F6E97',
    color: '#A552CC',
    icon: <Skull size={18} color='#fff' weight='fill' /> 
  },
  grass: {
    background: '#8BBE8A',
    color: '#62B957',
    icon: <Leaf size={18} color='#fff' weight='fill' />
  },
  fire: {
    background: '#FFA756',
    color: '#FD7D24',
    icon: <Fire size={18} color='#fff' weight='fill' />
  },
  water: {
    background: '#58ABF6',
    color: '#4A90DA',
    icon: <Drop size={18} color='#fff' weight='fill' />
  },
  normal: {
    background: '#B5B9C4',
    color: '#9DA0AA',
    icon: <Circle size={18} color='#fff' weight='fill' />
  },
  bug: {
    background: '#8BD674',
    color: '#8CB230',
    icon: <BugBeetle size={18} color='#fff' weight='fill' />
  },
  ground: {
    background: '#F78551',
    color: '#DD7748',
    icon: <Mountains size={18} color='#fff' weight='fill' />
  },
  fighting: {
    background: '#EB4971',
    color: '#D04164',
    icon: <HandGrabbing size={18} color='#fff' weight='fill' />
  },
  fairy: {
    background: '#EBA8C3',
    color: '#ED6EC7',
    icon: <Sparkle size={18} color='#fff' weight='fill' />
  },
  electric : {
    background: '#F2CB55',
    color: '#EED535',
    icon: <Lightning size={18} color='#fff' weight='fill' />
  },
  flying: {
    background: '#5e7298',
    color: '#748FC9',
    icon: <Butterfly size={18} color='#fff' weight='fill' />
  },
  psychic: {
    background: '#c94871',
    color: '#F15688',
    icon: <HandEye size={18} color='#fff' weight='fill' />
  },
  rock: {
    background: '#B8A038',
    color: '#d6bb42',
    icon: <HandEye size={18} color='#fff' weight='fill'  />
  }
} as Types