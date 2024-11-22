import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';




const RewardPerson = ({route}) => {
    const {id} = route.params
    // console.log('id====>',id)

    const navigation = useNavigation()
   

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{uri:`https://office3i.com/development/api/storage/app/${item?.profile_img}`}} style={styles.image} /> 
            <Text style={styles.title}>{item?.first_name}</Text>
        </View>
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar StatusBarStyle={'light-content'} backgroundColor={'#20DDFE'} />
            <LinearGradient
                colors={['#20DDFE', '#0468F5']}
                style={[
                    styles.headerviews,
                    { alignItems: 'center', justifyContent: 'flex-start' },
                ]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../../../Assets/Image/angleleft.png')}
                        style={{ height: 20, width: 20, tintColor: '#fff', marginLeft: 5 }}
                    />
                </TouchableOpacity>
                <Text style={styles.birthtext}>Reward & Recongition</Text>
            </LinearGradient>
            <View style={styles.rewardview}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    alignSelf: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey'
                }}>
                    <Image source={{uri:`https://office3i.com/development/api/storage/app/${id.image}`}} style={[styles.image,{marginVertical:10}]} />
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#000' }}>{id.title}</Text>
                </View>
                <FlatList
                    data={id.employee_details}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}

                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        // height:200,
        width: '90%',
        flexDirection: 'row',
        // padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        alignItems:'center'

    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 30,
        marginRight: 10,
        marginLeft:10,
        // marginVertical:10
        // borderWidth:1
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4F4F4F'
    },

    birthtext: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 15
    },
    headerviews: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#20DDFE',
        padding: 20
    },
    rewardview: {
        width: '93%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 10
    },
    rewardbutton: {
        backgroundColor: '#D4E4FF',
        flexDirection: 'row',
        width: 180,
        padding: 10,
        marginLeft: 20,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    buttonrow: {
        backgroundColor: '#0A62F1',
        height: 20,
        width: 20,
        justifyContent: 'center',
        borderRadius: 5,
    },
    rewardtext: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: '#fff',
    }

});

export default RewardPerson;
