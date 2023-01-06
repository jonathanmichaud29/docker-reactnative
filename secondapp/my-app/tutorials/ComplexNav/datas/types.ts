import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import type { DrawerNavigationProp } from '@react-navigation/drawer'
import type { NavigatorScreenParams } from '@react-navigation/native';

export type ComplexNavParamList = {
  Home: undefined;
  Listing: NavigatorScreenParams<ComplexStackParamList>;
  Tabs: undefined;
  
}
export type ComplexNavHomeProps = DrawerNavigationProp<ComplexNavParamList, 'Home'>;
export type ComplexNavListingProps = DrawerNavigationProp<ComplexNavParamList, 'Listing'>;
export type ComplexNavTabsProps = DrawerNavigationProp<ComplexNavParamList, 'Tabs'>;

export const DrawerNavAssetNames = {
  Home: { 
    icon: "home",
    label: 'Home'
  },
  Listing: { 
    icon: "list",
    label: 'Listing'
  },
  Tabs: { 
    icon: "albums-outline",
    label: 'Tabs'
  },
};


export type ComplexTabsParamList = {
  TabA: undefined;
  TabB: undefined;
  TabC: undefined;
}
export type ComplexTabAScreenProps = BottomTabNavigationProp<ComplexTabsParamList, 'TabA'>;
export type ComplexTabBScreenProps = BottomTabNavigationProp<ComplexTabsParamList, 'TabB'>;
export type ComplexTabCScreenProps = BottomTabNavigationProp<ComplexTabsParamList, 'TabC'>;

export const TabsNavAssetNames = {
  TabA: { 
    icon: "add",
    label: 'Tab A'
  },
  TabB: { 
    icon: "add-circle",
    label: 'Tab B'
  },
  TabC: { 
    icon: "add-circle-outline",
    label: 'Tab C'
  },
};

export type ComplexStackParamList = {
  StackListing: undefined;
  ListItem: {
    id:number
  };
}
export type ComplexStackListingScreenProps = NativeStackScreenProps<ComplexStackParamList, 'StackListing'>;
export type ComplexStackListItemScreenProps = NativeStackScreenProps<ComplexStackParamList, 'ListItem'>;