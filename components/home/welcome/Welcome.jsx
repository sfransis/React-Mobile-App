import {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'

import {icons, SIZES} from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-Time')

  return (
    <View>

      <View style = {styles.container}>
        <Text style = {styles.userName}> Hello Sisco</Text>
        <Text style = {styles.welcomeMessage}> Finnd your perfect job </Text>
      </View>

      {/* This section is just a search bar and a search button that the user can interact with */}
      <View style = {styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput
            style = {styles.searchInput}
            value = ""
            onChange={() => {}}
            placeholder="What are you looking for?"
            placeholderTextColor={"#83829A"}
          />
        </View>

        <TouchableOpacity style = {styles.searchBtn} onPress = {() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style = {styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style = {styles.tabsContainer}>
        {/* There is an error that happens with flast list being
            inside of a safeareview. Index.js is a while safe area view 
            and it is calling welcome which has this flat list. Also flat list work 
            by providing waht the data is then how the data is going to be rendered */}
        <FlatList 
          data = {jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style = {styles.tab(activeJobType, item)}
              onPress = {() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style = {styles.tabText(activeJobType, item)}> {item} </Text>
            </TouchableOpacity>
          )}

          keyExtractor={item => item}
          contentContainerStyle = {{columnGap: SIZES.small}}
          horizontal
        />
      </View>

    </View>
  )
}

export default Welcome