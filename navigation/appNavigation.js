import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}