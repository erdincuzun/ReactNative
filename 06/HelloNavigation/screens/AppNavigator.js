import { createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Ekran2 from './Ekran2';
import Ekran3 from './Ekran3';
import Ekran4 from './Ekran4';
import Ekran5 from './Ekran5';
import Ekran6 from './Ekran6';
import Ekran7 from './Ekran7';

const AppNavigator = createStackNavigator({
   Home: { screen: Home },
   Ekran2: {screen: Ekran2},
   Ekran3: {screen: Ekran3},
   Ekran4: {screen: Ekran4},
   Ekran5: {screen: Ekran5},
   Ekran6: {screen: Ekran6},
   Ekran7: {screen: Ekran7}
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const App = createAppContainer(AppNavigator);

export default App;