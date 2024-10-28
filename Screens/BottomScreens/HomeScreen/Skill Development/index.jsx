import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import RNFetchBlob from 'react-native-blob-util';
import FS from 'react-native-fs';
// const DATAS = [
//   {
//     id: '1',
//     name: 'Tony Stark',
//     status: 'Inprogress',
//     role: 'UX UI Designer',
//     date: 'Today',
//     image: require('../../../../Assets/Image/officemember.png'),
//   },
//   {
//     id: '2',
//     name: 'Upcoming',
//     status: 'Upcoming',
//     role: 'Front-End Developer',
//     date: '17 Oct, 2024',
//     image: require('../../../../Assets/Image/officemember.png'),
//   },
//   {
//     id: '3',
//     name: 'Jessie',
//     status: 'Completed',
//     role: 'Back-End Developer',
//     date: '19 Oct, 2024',
//     image: require('../../../../Assets/Image/officemember.png'),
//   },
// ];

const SkillDevelopment = () => {
  const navigation = useNavigation();
  const [bdayList, setbdayList] = useState('');

  const {data} = useSelector(state => state.login);

  const SkillDevelopment = async () => {
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
      console.log('responseData', responseData?.skill_dev_training);
      setbdayList(responseData);
    } catch (error) {
      console.error('Error fetching birthday data:', error);
    }
  };

  useEffect(() => {
    SkillDevelopment();
  }, [data]);
  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Needed',
            message: 'This app needs the storage permission to download files.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const downloadPDF = async () => {
    const pdfUrl =
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    const {config, fs} = RNFetchBlob;
    let dir = fs.dirs.DownloadDir;

    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: `${dir}/sample.pdf`,
        description: 'PDF file',
      },
    })
      .fetch('GET', pdfUrl)
      .then(res => {
        console.log('The file saved to ', res.path());
        alert('Download Complete!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.info}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.name, {color: '#0A60F1'}]}>
              {item.event_name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                requestStoragePermission(), downloadPDF();
              }}>
              <Image
                source={require('../../../../Assets/Image/download.png')}
                style={{height: 18, width: 18, marginLeft: 10}}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.date, {color: '#00275C'}]}>{item.day}</Text>
          {/* <Text style={styles.date}>{item.date}</Text> */}
        </View>
        <View style={styles.inprogress}>
          <Text style={[styles.date, {marginLeft: 5, marginRight: 5}]}>
            {item.status}
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
        <Text style={styles.birthtext}>Skill Development / Training</Text>
      </LinearGradient>
      <View
        style={{
          // borderWidth: 1,
          backgroundColor: '#D4E4FF',
          flexDirection: 'row',
          width: 150,
          padding: 10,
          marginLeft:20,
          marginVertical:10,
          borderRadius:10
        }}>
        <View
          style={{
            backgroundColor: '#0A62F1',
            height: 20,
            width: 20,
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              textAlign: 'center',
              color: '#fff',
            }}>
            +
          </Text>
        </View>
        <Text>Add New Skill</Text>
      </View>
      <FlatList
        data={bdayList?.skill_dev_training}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {/* <View
        style={{alignItems: 'center', height: '85%', justifyContent: 'center'}}>
        <Image
          source={require('../../../../Assets/Image/Workspace.png')}
          style={{height: 150, width: 150}}
        />
          <Text style={[styles.birthtext,{color:'#004A78'}]}>Stay Tuned!!!</Text>
        <Text style={[styles.monthtext, {textAlign: 'center'}]}>
          Exciting skill-building programs{'\n'}are on the way
        </Text>
      </View> */}
    </View>
  );
};

export default SkillDevelopment;
