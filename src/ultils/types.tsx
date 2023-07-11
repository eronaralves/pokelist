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
  Lightning
} from 'phosphor-react-native';

// Interfaces
interface TypeProps {
  background: string;
  color: string;
  icon: any
};

interface Types {
  Poison: TypeProps;
  Grass: TypeProps;
  Fire: TypeProps;
  Water: TypeProps;
  Normal: TypeProps;
  Bug: TypeProps;
  Ground: TypeProps;
  Fighting: TypeProps;
  Fairy: TypeProps;
  Electric: TypeProps;
};


export const POKEMON_TYPES = {
  Poison: {
    background: '#9F6E97',
    color: '#A552CC',
    icon: <Skull color='#fff' weight='fill' /> 
  },
  Grass: {
    background: '#8BBE8A',
    color: '#62B957',
    icon: <Leaf color='#fff' weight='fill' />
  },
  Fire: {
    background: '#FFA756',
    color: '#FD7D24',
    icon: <Fire color='#fff' weight='fill' />
  },
  Water: {
    background: '#58ABF6',
    color: '#4A90DA',
    icon: <Drop color='#fff' weight='fill' />
  },
  Normal: {
    background: '#B5B9C4',
    color: '#9DA0AA',
    icon: <Circle color='#fff' weight='fill' />
  },
  Bug: {
    background: '#8BD674',
    color: '#8CB230',
    icon: <BugBeetle color='#fff' weight='fill' />
  },
  Ground: {
    background: '#F78551',
    color: '#DD7748',
    icon: <Mountains color='#fff' weight='fill' />
  },
  Fighting: {
    background: '#EB4971',
    color: '#D04164',
    icon: <HandGrabbing color='#fff' weight='fill' />
  },
  Fairy: {
    background: '#EBA8C3',
    color: '#ED6EC7',
    icon: <Sparkle color='#fff' weight='fill' />
  },
  Electric : {
    background: '#F2CB55',
    color: '#EED535',
    icon: <Lightning color='#fff' weight='fill' />
  }
} as Types