
// i18n
import { t } from 'i18next';

// Styles
import * as S from './styles';

// Components
import { Header } from '@components/Header';
import { ListPokemons } from '@components/ListPokemons';

export function Home() {
  return (
    <S.Container> 
      <Header 
        title="Pokédex"
        subtitle={t('header.subtitle')}
      />
      
      <S.Content>
        <ListPokemons />
      </S.Content>
    </S.Container>
  );
}