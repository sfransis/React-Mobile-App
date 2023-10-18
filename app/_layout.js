import {Stack} from 'expo-router';

// these impoort and splashscreen as here so that yoou can use custom fonts 
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// when the app first loads this will make the splash screen visible
SplashScreen.preventAutoHideAsync();

const Layout = () => {

    /*const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        //only show the page if the fonts have been loaded
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout = {onLayoutRootView} />;*/

    return <Stack/>;
}

export default Layout;