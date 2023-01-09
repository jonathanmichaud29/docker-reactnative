import Ionicons from '@expo/vector-icons/Ionicons';

type NavAssetProps = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}

export const fallbackAsset: NavAssetProps = {
  name:'Default', 
  icon:'apps', 
  label:'Default Page'
};

export const drawerAssets: Array<NavAssetProps> = [
  {name:'Home', icon:'home', label:'Home Page'},
  {name:'Listing', icon:'list', label:'Listing Page'},
  {name:'Tabs', icon:'albums-outline', label:'Tabs Page'},
];


export const tabAssetNames: Array<NavAssetProps> = [
  {name:'TabA', icon:'add', label:'Tab Alpha'},
  {name:'TabB', icon:'add-circle', label:'Tab Beta'},
  {name:'TabC', icon:'add-circle-outline', label:'Tab Charlie'},
];