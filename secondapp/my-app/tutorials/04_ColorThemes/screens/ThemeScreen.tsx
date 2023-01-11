import { useState } from 'react';
import { FlatList } from "react-native";

import { PostItem } from '../components/PostItem';

import { items } from '../datas/items';
import { ComplexNavThemeProps } from "../datas/types";

import { Container, Header, ThemeButton, ThemeButtonText, TitleText } from '../theme/styles';

import { ThemeProvider } from 'styled-components/native';
import { defaultTheme, lightTheme } from '../theme/theme';

export default function ThemeScreen(props: ComplexNavThemeProps) {

  const { navigation } = props;

  const [theme, setTheme] = useState(defaultTheme);
    const toggleTheme = async () => {
      const newTheme = theme === defaultTheme ? lightTheme : defaultTheme;
      setTheme(newTheme); 
    };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <TitleText /* fontSize='24px' */>Styled Components</TitleText>
          <ThemeButton>
            <ThemeButtonText
              onPress={() => toggleTheme()}
            >{theme === defaultTheme ? "Light" : "Dark" } Mode</ThemeButtonText>
          </ThemeButton>
        </Header>
        <FlatList 
          data={items} 
          renderItem={PostItem} 
          keyExtractor={(item) => `item-${item.id}`}  
        />

      </Container>
    </ThemeProvider>
  );
}