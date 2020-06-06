# Tracks-Server
Tracks App with TracksServer 

This React Native application was created throughout the course 
"The Complete React Native + Hooks Course [2020 Edition]" by Stephen Grider.

The goal of the App is to be a Tracker that records locations from a given phone, then displays a list of trackings to the user
For that, we used Expo, Expo-Location, MongoDB, Ngrok, React Navigation, React Native Elements and other dependencies.

Currently, some depencies suggested in his course were deprecated, and I am working on adapting it to make it work on the
lastest version of React.
Specifically the Authentication proccess was affect.

If you wish to run this application in your local machine, you'll need to 

1 - Have a MongoDB Cluster, create yours at https://www.mongodb.com/

2 - Connect your own cluster to this application on /src/index.js , substituting "USERNAME" and "PASSWORD" to your own.

3 - Run the Mongo instance in your Terminal with

  .../TrackerApp:~$ npm run dev

3 - Stablish a Ngrok temporary server by opening running:
  
  .../TrackerApp:~$ ngrok http 3000 

4- Insert the temporary URL given by Ngrok on TrackerApp/tracks/src/api/Index.js at "INSERT_YOUR_URL"

5 - A .mockLocation file was inserted to simulate a list of tracking points while developing the app. Insert there your current
location, so the Map doesn't jump between the real location captured in your phone and the one used in mockLocation.

6 - Finally, run 
.../TrackerApp/tracks:~$ npm start
open the Expo App in your phone, and read the QR code from your computer.

7 - To access the screens, go to "Sign In", then "Shortcut to TrackList" button.

8 - Allow Expo to access your location when opening 'TrackCreate'.



