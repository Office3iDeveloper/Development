import React from "react";
import {View,Text,TouchableOpacity,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from '../style';
const PostScreen = () => {
    return(
       <View style={{flex:1}}>
        <LinearGradient
        colors={['#20DDFE', '#0468F5']}
        style={[
          styles.headerviews,
          {alignItems: 'center', justifyContent: 'flex-start'},
        ]}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image
            source={require('../../../../Assets/Image/angleleft.png')}
            style={{height: 20, width: 20, tintColor: '#fff', marginLeft: 5}}
          />
        </TouchableOpacity>
      </LinearGradient>
       </View>
    )
}
export default  PostScreen