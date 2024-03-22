import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParams } from '../types';
import Home from '../views/Home';
import Detail from '../views/Detail';


const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: '#071a5d',
    },
    headerTitleStyle: {
        color: '#FFF',
    },
    headerShown: false
};

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={routeScreenDefaultOptions} />
            <Stack.Screen name='Detail' component={Detail} options={routeScreenDefaultOptions} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;