import styled, { createGlobalStyle, css } from 'styled-components';
import Constants from 'expo-constants';
import { SafeAreaView, View, Text, Pressable } from 'react-native';


export const Container = styled(SafeAreaView)`
    background-color: ${(props) => props.theme.colors.primary};
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
    padding-top: ${Constants.statusBarHeight + 'px'};
`;
export const Header = styled(View)`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;
export const ThemeButton = styled(Pressable)`
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.button};
`;
export const ThemeButtonText = styled(Text)`
    font-size: 16px;
    color: ${(props) => props.theme.colors.button};
`;
export const TitleText = styled(Text)`
    font-weight: 600;
    font-size: ${(props) => props.fontSize || '18px'};
    color: ${(props) => props.theme.colors.title};
`;
export const PostContainer = styled(View)`
    padding: 10px 20px;
    width: 100%;
`;
export const PostText = styled(Text)`
    color: ${(props) => props.theme.colors.secondary};
    font-size: 16px;
    padding: 10px 0 0;
    font-weight: ${(props) => props.fontWeight || '400'};
`;