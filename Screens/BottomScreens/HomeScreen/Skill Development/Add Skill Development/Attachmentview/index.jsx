import React from "react";
import { View, Text,Image,SafeAreaView,TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "../../../style";
import { useNavigation } from "@react-navigation/native";


const Attachmentview = ({route}) => {
    const {image} = route.params
    // const {template} = route.params
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1,}}>
            <LinearGradient
                colors={['#20DDFE', '#0468F5']}
                style={[
                    styles.headerviews,
                    { alignItems: 'center', justifyContent: 'flex-start' },
                ]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../../../../Assets/Image/angleleft.png')}
                        style={{ height: 20, width: 20, tintColor: '#fff', marginLeft: 5 }}
                    />
                </TouchableOpacity>
                {/* <Text style={styles.birthtext}>Add New title</Text> */}
            </LinearGradient>
            <View style={{flex:1,alignItems:'center',justifyContent:'center' }}>
        <Image source={{uri:`https://office3i.com/development/api/storage/app/${image}`}} style={{height:250,width:250,borderRadius:10}}/>
            {/* <Image source={{uri:`https://office3i.com/development/api/storage/app/${template}`}} style={{height:250,width:250,borderRadius:10}}/>} */}
            </View>
        </SafeAreaView>
    )
}
export default Attachmentview