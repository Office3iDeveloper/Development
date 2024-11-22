import React, { useState ,useEffect} from 'react';
import { View, Text, Image, FlatList, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import axios from 'axios';

const RewardRecongition = () => {
    const navigation = useNavigation()
    // const datas = [
    //     {
    //         id: '1',
    //         imageUrl: require('../../../../../Assets/Image/cup.png'), // replace with actual image URL
    //         title: 'Employee Of The Month',
    //         description: '1',
    //     },
    //     {
    //         id: '2',
    //         imageUrl: require('../../../../../Assets/Image/brain.png'),
    //         title: 'Innovative Minds',
    //         description: '2',
    //     },
    //     {
    //         id: '2',
    //         imageUrl: require('../../../../../Assets/Image/cup.png'),
    //         title: 'Attendance Champions',
    //         description: '3',
    //     },
    //     {
    //         id: '2',
    //         imageUrl: require('../../../../../Assets/Image/brain.png'),
    //         title: 'Rising Stars',
    //         description: '4',
    //     },
    //     // Add more items as needed
    // ];
    const [bdayList, setbdayList] = useState('');

    const {data} = useSelector(state => state.login);
  
    const birthdaylist = async () => {
      try {
        const apiUrl =
          'https://office3i.com/development/api/public/api/adminIndexTodayCount';
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${data.token}`,
            'Registered-Email': data.useremailOfficial,
          },
        });
  
        const responseData = response.data;
        //   console.log('responseData', responseData);
        setbdayList(responseData);
      } catch (error) {
        console.error('Error fetching birthday data:', error);
      }
    };
  
    useEffect(() => {
      birthdaylist();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('RewardPerson',{id:item})} style={styles.itemContainer}>
            <Image source={{ uri: `https://office3i.com/development/api/storage/app/${item.image}`,}} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.count}</Text>
            </View>
        </TouchableOpacity>
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
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Image
                        source={require('../../../../../Assets/Image/angleleft.png')}
                        style={{ height: 20, width: 20, tintColor: '#fff', marginLeft: 5 }}
                    />
                </TouchableOpacity>
                <Text style={styles.birthtext}>Reward & Recongition</Text>
            </LinearGradient>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.rewardview}>
                <TouchableOpacity onPress={() => navigation.navigate('AddNewReward')}
                    style={styles.rewardbutton}>
                    <View
                        style={styles.buttonrow}>
                        <Text
                            style={styles.rewardtext}>
                            +
                        </Text>
                    </View>
                    <Text style={{ color: '#0A62F1', fontSize: 16, fontWeight: '500' }}>Add New Reward</Text>
                </TouchableOpacity>
                <FlatList
                    data={bdayList.rewards_recognition}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}

                />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '90%',
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: '#A9CAFF',
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: 'center',
        
    },
    image: {
        height: 64,
        width: 64,
        borderRadius: 5,
        marginRight: 10,
        borderWidth:10
    },
    textContainer: {
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
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

export default RewardRecongition;
