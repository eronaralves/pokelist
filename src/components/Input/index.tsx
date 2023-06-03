import { TextInputProps } from 'react-native'

// Styles
import * as S from './styles';

export function Input({ ...rest }: TextInputProps) {
  return (
    <S.Container >
      <S.Icon />
      <S.Input {...rest} />
    </S.Container>
  );
}