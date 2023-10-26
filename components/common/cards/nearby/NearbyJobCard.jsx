import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './nearbyjobcard.style'

import {checkImageURL} from '../../../../utils';

const NearbyJobCard = ({job, handleNavigate}) => {

  return (
    <TouchableOpacity
      style = {styles.container}
      onPress = {handleNavigate}
    >

      <TouchableOpacity style = {styles.logoContainer}> 
        <Image
        // the following is meant to use the checkIURL function to put a default image one things that don't
        // have a logo but for now it just puts a logo on the wrong jobs so it's something to fix later  job.employer_logo
        // checkImageURL(item?.employer_logo) ? item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          source = {{uri: checkImageURL(job.employer_logo) ? job.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}}
          resizeMode = "contain"
          style = {styles.logoImage}
        />
      </TouchableOpacity>

      <View style = {styles.textContainer}>
        <Text style = {styles.jobName} numberOfLines = {1}>
          {job.job_title}
        </Text>
        <Text style = {styles.jobType}>
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard