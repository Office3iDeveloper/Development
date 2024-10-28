import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';

// const DATAS = [
//   {
//     id: '1',
//     name: 'Tony Stark',
//     role: 'UX UI Designer',
//     date: 'Today',
//     image: require('../../../../Assets/Image/officemember.png'),
//   },
//   {
//     id: '2',
//     name: 'Catherine',
//     role: 'Front-End Developer',
//     date: '17 Oct, 2024',
//     image: require('../../../../Assets/Image/officemember.png'),
//   },
//   {
//     id: '3',
//     name: 'Jessie',
//     role: 'Back-End Developer',
//     date: '19 Oct, 2024',
//     image: require('../../../../Assets/Image/officemember.png'),
//   },
// ];

const Birthday = ({route, navigation}) => {
  const SpecId = route.params.Id;

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
      //   console.log('responseData', responseData?.work_anniversary_list);
      setbdayList(responseData);
    } catch (error) {
      console.error('Error fetching birthday data:', error);
    }
  };

  useEffect(() => {
    birthdaylist();
  }, [data]);

  const renderItem = ({item}) => {
    const profileimg = `https://office3i.com/development/api/storage/app/${item?.profile_img}`;
    return (
      <View style={styles.item}>
        <Image source={{uri: profileimg}} style={styles.image} />
        <View style={styles.info}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>{item?.first_name}</Text>
            <Text style={[styles.name, {marginLeft: 5}]}>
              {item?.last_name}
            </Text>
          </View>
          <Text style={styles.role}>{item?.department_name}</Text>
        </View>
        <Text style={styles.date}>{item?.formatted_date}</Text>
      </View>
    );
  };

  const renderItem2 = ({item}) => {
    const profileimg = `https://office3i.com/development/api/storage/app/${item?.profile_img}`;
    return (
      <View style={styles.item}>
        <Image source={{uri: profileimg}} style={styles.image} />
        <View style={styles.info}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>{item?.first_name}</Text>
            <Text style={[styles.name, {marginLeft: 5}]}>
              {item?.last_name}
            </Text>
          </View>
          <Text style={styles.role}>{item?.department_name}</Text>
        </View>
        <View>
          <Text style={styles.date}>{item?.formatted_date}</Text>
          <Text style={[styles.date, {textAlign: 'right'}]}>
            {item?.years_worked}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
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
        {SpecId == '1' ? (
          <Text style={styles.birthtext}>Birthday</Text>
        ) : (
          <Text style={styles.birthtext}>Work Anniversaries</Text>
        )}
      </LinearGradient>
      <Text style={styles.monthtext}>This Month</Text>

      {SpecId == '1' ? (
        <FlatList
          data={bdayList?.current_month_birthday_list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <FlatList
          data={bdayList?.work_anniversary_list}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
        />
      )}
      {bdayList?.current_month_birthday_list?.length < 0 && (
        <View
          style={{
            alignItems: 'center',
            height: '85%',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../../Assets/Image/cake.png')}
            style={{height: 120, width: 120}}
          />
          <Text style={styles.monthtext}>No Birthdays on this month</Text>
        </View>
      )}

      {bdayList?.work_anniversary_list?.length < 0 && (
        <View
          style={{
            alignItems: 'center',
            height: '85%',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../../Assets/Image/cake.png')}
            style={{height: 120, width: 120}}
          />
          <Text style={styles.monthtext}>
            No Work Anniversaries in this month
          </Text>
        </View>
      )}
    </View>
  );
};

export default Birthday;
