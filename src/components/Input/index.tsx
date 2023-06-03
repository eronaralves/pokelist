import { TextInputProps } from 'react-native'

// Styles
import * as S from './styles';

// Interfaces
interface InputProps extends TextInputProps {}

export function Input({ ...rest }: InputProps) {
  return (
    <S.Container >
      <S.Icon />
      <S.Input {...rest} />
    </S.Container>
  );
}