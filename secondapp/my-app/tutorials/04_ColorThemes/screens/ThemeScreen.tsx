import { useState, useEffect } from 'react';
import { FlatList } from "react-native";

import { PostItem } from '../components/PostItem';

import { DATA, IUser } from '../datas/postItems';
import { items, ItemProp } from '../datas/items';
import { ComplexNavThemeProps } from "../datas/types";

import { Container, Header, ThemeButton, ThemeButtonText, TitleText } from '../theme/styles';

import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from '../theme/theme';

export default function ThemeScreen(props: ComplexNavThemeProps) {

  const { navigation } = props;

  const [theme, setTheme] = useState('light');
    const toggleTheme = async () => {
        const themeValue = theme === 'dark' ? 'light' : 'dark';
        setTheme(themeValue); 
    };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <Header>
          <TitleText /* fontSize='24px' */>Theme Screen</TitleText>
          <ThemeButton>
            <ThemeButtonText
              onPress={() => toggleTheme()}
            >{theme === 'dark' ? 'Light' : 'Dark'} Mode</ThemeButtonText>
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