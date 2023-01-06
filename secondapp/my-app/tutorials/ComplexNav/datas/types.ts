import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import type { DrawerScreenProps } from '@react-navigation/drawer'
import type { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';

export type ComplexNavParamList = {
  Home: undefined;
  Listing: NavigatorScreenParams<ComplexStackParamList>;
  Tabs: NavigatorScreenParams<ComplexTabsParamList>; 
}

export type ComplexNavHomeProps = DrawerScreenProps<ComplexNavParamList, 'Home'>;
export type ComplexNavListingProps = DrawerScreenProps<ComplexNavParamList, 'Listing'>;
export type ComplexNavTabsProps = DrawerScreenProps<ComplexNavParamList, 'Tabs'>;

export type ComplexTabsParamList = {
  TabA: undefined;
  TabB: undefined;
  TabC: undefined;
}
export type ComplexTabAScreenProps = CompositeScreenProps<
  BottomTabScreenProps<ComplexTabsParamList, 'TabA'>,
  DrawerScreenProps<ComplexNavParamList>
  >;
export type ComplexTabBScreenProps = CompositeScreenProps<
  BottomTabScreenProps<ComplexTabsParamList, 'TabB'>,
  DrawerScreenProps<ComplexNavParamList>
  >;
export type ComplexTabCScreenProps = CompositeScreenProps<
  BottomTabScreenProps<ComplexTabsParamList, 'TabC'>,
  DrawerScreenProps<ComplexNavParamList>
  >;

export type ComplexStackParamList = {
  StackListing: undefined;
  ListItem: {
    id:number;
  };
}
export type ComplexStackListingScreenProps = NativeStackScreenProps<ComplexStackParamList, 'StackListing'>;
export type ComplexStackListItemScreenProps = NativeStackScreenProps<ComplexStackParamList, 'ListItem'>;