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
  {name:'User', icon:'list', label:'User'},
];

export const drawerPrivateAssets: Array<NavAssetProps> = [
  {name:'Welcome', icon:'home', label:'Welcome'},
  {name:'Logout', icon:'log-out', label:'Log out'},
];
