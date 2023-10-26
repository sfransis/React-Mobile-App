import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch';

const Popularjobs = ({handleClick}) => {

  const router = useRouter();
  const {data, isLoading, error} = useFetch('search', {query: 'React developer', page: 1, num_pages: 1})

  const [selectedJobs, setSelectedJobs] = useState()
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJobs(item.job_id)
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}> Popular Jobs </Text>
        <TouchableOpacity onPress = {handleClick}>
          <Text style = {styles.headerBtn}> Show All</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size = "large" colors = {COLORS.primary}/>
        ) : error ? (
          <Text> Something Went Wrong </Text>
        ) : (
          <FlatList 
            data = {data}
            renderItem = {({item}) => (
              <PopularJobCard
                item = {item} 
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor = {item => item?.job_id}
            contentContainerStyle = {{columnGap: SIZES.small}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs