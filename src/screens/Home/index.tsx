import { View } from "react-native";

// Styles
import {
  Container,
  Heading,
  Subtitle
} from './styles'

// components
import { Header } from "@components/Header";

export function Home() {
  return (
    <Container>
      <Header />
    </Container>
  )
}