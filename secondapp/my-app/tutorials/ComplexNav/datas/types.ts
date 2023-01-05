import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NavigatorScreenParams } from '@react-navigation/native';

export type ComplexNavParamList = {
  Home: undefined;
  Listing: NavigatorScreenParams<ComplexStackParamList>;
  Tabs: undefined;
  
}
export type ComplexNavHomeProps = NativeStackScreenProps<ComplexNavParamList, 'Home'>;
export type ComplexNavListingProps = NativeStackScreenProps<ComplexNavParamList, 'Listing'>;
export type ComplexNavTabsProps = NativeStackScreenProps<ComplexNavParamList, 'Tabs'>;

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
export type ComplexTabAScreenProps = NativeStackScreenProps<ComplexTabsParamList, 'TabA'>;
export type ComplexTabBScreenProps = NativeStackScreenProps<ComplexTabsParamList, 'TabB'>;
export type ComplexTabCScreenProps = NativeStackScreenProps<ComplexTabsParamList, 'TabC'>;

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