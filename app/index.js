import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {useState} from 'react';
import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

// just soo yoou know if there are any other problems the first View in the
// return used to be a SafeAreaView but using flat lisst with this causes some errors
const Home = () => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options = {{
                    headerStyle: {backgroundColor: COLORS.lightWhite}, 
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%"/>
                    ),
                    headerTitle: ""
                }}  
            />

            <ScrollView showsVerticalScrollIndicator = {false}>
                <View
                    style = {{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome 
                        searchTerm = {searchTerm}
                        setSearchTerm = {setSearchTerm}
                        handleClick = {() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs/>
                    <Nearbyjobs/>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;