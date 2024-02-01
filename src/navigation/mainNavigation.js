// import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import Movie from '../Screens/movies';
import Search from '../Screens/search';
import TvShows from '../Screens/tvShows';
import MovieDetails from '../Screens/movieDetail';
import {createStackNavigator} from '@react-navigation/stack';

const TABS = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// const Tab1 = () => {
//     return (
//         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//             <Text>Movies</Text>
//         </View>
//     )
// }
// const Tab2 = () => {
//     return (
//         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//             <Text>Search Result</Text>
//         </View>
//     )
// }
// const Tab3 = () => {
//     return (
//         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//             <Text>TV Shows</Text>
//         </View>
//     )
// }


export const TabNavigation = () => {    
    return (
        <TABS.Navigator>
            <TABS.Screen name={Routes.Movies} component={Movie} />
            <TABS.Screen name={Routes.Search} component={Search} />
            <TABS.Screen name={Routes.TV} component={TvShows} />
        </TABS.Navigator>
    )
}

const MainNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{header: () => null, headerShown: false}}
        initialRouteName={Routes.Details}
        >
        <Stack.Screen name={Routes.Movies} component={TabNavigation} />
        <Stack.Screen name={Routes.Search} component={Search} />
        <Stack.Screen name={Routes.TV} component={TvShows} />
        <Stack.Screen name={Routes.Details} component={MovieDetails} />
      </Stack.Navigator>
    );
  };
  
  export default MainNavigation;