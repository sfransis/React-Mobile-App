import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './popularjobcard.style'

import {checkImageURL} from '../../../../utils';

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {

  return (
    <TouchableOpacity
      style = {styles.container(selectedJob, item)}
      onPress = {() => handleCardPress(item)}
    >

      <TouchableOpacity style = {styles.logoContainer(selectedJob, item)}> 
        <Image
        // the following is meant to use the checkIURL function to put a default image one things that don't
        // have a logo but for now it just puts a logo on the wrong jobs so it's something to fix later
        // checkImageURL(item?.employer_logo) ? item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          source = {{uri: item.employer_logo}}
          resizeMode = "contain"
          style = {styles.logoImage}
        />
      </TouchableOpacity>
      <Text style = {styles.companyName} numberOfLines = {1}>
        {item.employer_name}
      </Text>

      <View style = {styles.infoContainer}>
        <Text style = {styles.jobName(selectedJob, item)} numberOfLines = {1}>
          {item.job_title}
        </Text>
        <Text style = {styles.location}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard