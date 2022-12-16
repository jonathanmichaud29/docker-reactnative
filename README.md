# docker-reactnative

## Change the Metro IP address for mobile access to your computer

Detect your hostname IP address by using the CLI : hostname -I
  It should display all IP addresses on your machine, pick the first one
Edit docker-compose file to change the IP address of the environment variable REACT_NATIVE_PACKAGER_HOSTNAME 

## Build the image and validate access to your app
docker-compose up -d --build

Open web browser and go to http://localhost:19006

Use your Android "Expo Go" app and scan the QR code, available in your docker container logs

## 
npm install -g expo-cli

nvm use v16.15.0
cd reactapp/my-app
npx -y create-expo-app my-app --template tabs
