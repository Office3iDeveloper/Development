import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from '../style';
import DropdownIcon from "../../../../Assets/Icons/Dropdowndownarrow.svg";
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from "@react-navigation/native";
import DateTimePickerComponent from "../../../../Components/DateTimePicker";
import { useSelector } from "react-redux";
import LottieAlertSucess from "../../../../Assets/Alerts/Success";
import LottieAlertError from "../../../../Assets/Alerts/Error";
import LottieCatchError from "../../../../Assets/Alerts/Catch";
import axios from "axios";


const PostScreen = () => {
  const [text, onChangeText] = React.useState('');
  const [text1, onChangeText1] = React.useState('');
  const [showGender, setShowGender] = useState(false);
  const [selectededGender, setSelectedGender] = useState('');
  const [selectededGenderErr, setSelectedGenderErr] = useState('');
  const [selectedShiftError, setSelectedShiftError] = useState('');
  const [EmployeeError, setEmployeeError] = useState('');


  const [docFile, setDocFile] = useState(null);
  const [load, SetLoad] = useState(false);
  const [load1, SetLoad1] = useState(false);


  const { data } = useSelector((state) => state.login);

  const navigation = useNavigation()
  const toggleDropdownGender = () => {
    setShowGender(!showGender);
  };

  const selectGender = (value) => {
    setShowGender(false);
    setSelectedGender(value);
  };

  const handleDocumentSelection = async () => {

    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      res.forEach(file => {
        file.name = file.name.replace(/\s+/g, '_');
      });
      setDocFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Document picker is cancelled');
      } else {
        console.error('Error while picking the document:', err);
      }
    }
  };

  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDatePicker1, setShowDatePicker1] = useState(false);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatDate1 = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setStartDate(date);
    }
    setShowDatePicker(false);
  };

  const handleDateChange1 = (event, date) => {
    if (date !== undefined) {
      setStartDate1(date);
    }
    setShowDatePicker1(false);
  };



  const formattedStartDate = formatDate(startDate);
  const formattedStartDate1 = formatDate1(startDate1);
  const [inputs, setInputs] = useState(['']);

  // Function to add a new input
  const addInput = () => setInputs([...inputs, '']);

  // Function to remove the last input
  const removeInput = () => {
    if (inputs.length > 1) {
      setInputs(inputs.slice(0, -1));
    }
  };

  const [isAlertVisible, setAlertVisible] = useState(false);
  const [resMessage, setResMessage] = useState('');

  const handleShowAlert = (res) => {
    setAlertVisible(true);
    setResMessage(res.message)
    setTimeout(() => {
      setAlertVisible(false);
    }, 2500);
  };

  const [isAlertVisible1, setAlertVisible1] = useState(false);
  const [resMessageFail, setResMessageFail] = useState('');

  const handleShowAlert1 = (res) => {
    setAlertVisible1(true);
    setResMessageFail(res.message);
    setTimeout(() => {
      setAlertVisible1(false);
    }, 2500);
  };

  const [isAlertVisible2, setAlertVisible2] = useState(false);

  const handleShowAlert2 = () => {
    setAlertVisible2(true);
    setTimeout(() => {
      setAlertVisible2(false);
    }, 3000);
  };


  const validateFields = () => {
    let isValid = true;

    if (!text) {
      setSelectedShiftError('Select Title Name');
      isValid = false;
    } else {
      setSelectedShiftError('');
    }

    if (!docFile) {
      setEmployeeError('Select file');
      isValid = false;
    } else {
      setEmployeeError('');
    }

    return isValid;
  };

  const HandleSubmit = async () => {
    SetLoad(true);

    try {
      if (!validateFields()) {
        SetLoad(false);
        return;
      }

      const apiUrl = 'https://office3i.com/development/api/public/api/createPost';

      // Create a FormData object and append the document file
      const formData = new FormData();
      formData.append('post_type', selectededGender);
      formData.append('description', text);
      formData.append('user_emp_id', data.userempid);
      formData.append('created_by', data.userempid);


      // Append the file. Make sure to use the file's URI and type correctly
      if (docFile && docFile[0]) {
        formData.append('image', {
          uri: docFile[0].uri,
          name: docFile[0].name,
          type: docFile[0].type || 'application/octet-stream' // Fallback type if unavailable
        });
      }

      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${data.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === "success") {
        SetLoad(false);
        handleShowAlert(response.data);
        setTimeout(() => {
          // Handlerefresh();
        }, 2500);
      } else {
        handleShowAlert1(response.data);
        SetLoad(false);
      }
    } catch (error) {
      handleShowAlert2();
      console.error('Error during submit:', error);
      SetLoad(false);
    }
  };


  const HandleSubmit2 = async () => {
    SetLoad1(true);

    try {
      // if (!validateFields()) {
      //   SetLoad(false);
      //   return;
      // }

      const apiUrl = 'https://office3i.com/development/api/public/api/createPoll';

      // Create a FormData object and append the document file
      const formData = new FormData();
      formData.append('title', text1);
      formData.append('start_date', formattedStartDate);
      formData.append('end_date', formattedStartDate1);
      formData.append('user_emp_id', data.userempid);
      inputs.forEach((input, index) => {
        formData.append(`options[${index}]`, input);
      });


      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${data.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === "success") {
        SetLoad1(false);
        handleShowAlert(response.data);
        setTimeout(() => {
          // Handlerefresh();
        }, 2500);
      } else {
        handleShowAlert1(response.data);
        SetLoad1(false);
      }
    } catch (error) {
      handleShowAlert2();
      console.error('Error during submit:', error);
      SetLoad1(false);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#20DDFE', '#0468F5']}
        style={[
          styles.headerviews,
          { alignItems: 'center', justifyContent: 'flex-start' },
        ]}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image
            source={require('../../../../Assets/Image/angleleft.png')}
            style={{ height: 20, width: 20, tintColor: '#fff', marginLeft: 5 }}
          />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.bottomview}>
        <View style={[styles.header1, { width: '95%' }]}>
          <Image source={require('../../../../Assets/Image/officemember.png')} style={styles.profileImage} />
          <View style={styles.headerText}>
            <Text style={styles.name}>jarvis</Text>
            <Text style={styles.time}>HR Recruiter</Text>
          </View>
        </View>
        <TouchableOpacity onPress={toggleDropdownGender} style={styles.StatusTouchable}>
          <Image source={require('../../../../Assets/Image/img.png')} style={{ height: 20, width: 20 }} />
          <Text style={styles.StatusTouchableText}>{selectededGender || 'Select the Post'}</Text>
          <DropdownIcon width={14} height={14} color={'#0A62F1'} />

        </TouchableOpacity>
        <Text style={styles.errorText1}>
          {selectedShiftError}
        </Text>
        {showGender && (

          <View style={styles.dropdown}>

            <TouchableOpacity onPress={() => selectGender("Post")} style={styles.dropdownOption}>
              <Text style={styles.dropdownOptionText}>Post</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => selectGender("announcement")} style={styles.dropdownOption}>
              <Text style={styles.dropdownOptionText}>Create Announcement</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => selectGender("Polls")} style={styles.dropdownOption}>
              <Text style={styles.dropdownOptionText}>Polls</Text>
            </TouchableOpacity>

          </View>

        )}
        {selectededGender === 'Polls' &&
          <ScrollView contentContainerStyle={{flexGrow:1}}>
            <Text style={[styles.name, { marginLeft: 10 }]}>Question For Poll</Text>

            <TextInput
              style={{ marginVertical: 10, width: '96%', alignSelf: 'center', color: '#000', borderColor: '#0A62F1', borderWidth: 1, borderRadius: 5 }}
              // placeholder="Description"
              placeholderTextColor={'grey'}
              onChangeText={onChangeText1}
              value={text1}
            />


            {inputs.map((input, index) => (
              <View key={index} style={styles.inputContainer}>
                <TextInput
                  style={{ marginVertical: 10, height: 40, width: '85%', alignSelf: 'center', color: '#000', }}
                  placeholder={`Option ${index + 1}`}
                  value={input}
                  onChangeText={(text) => {
                    const newInputs = [...inputs];
                    newInputs[index] = text;
                    setInputs(newInputs);
                  }}
                />
                {index === inputs.length - 1 && (
                  <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={addInput}>
                      {/* <Icon name="add" size={24} color="#0A62F1" /> */}
                      <Text style={{ fontSize: 25, color: '#0A62F1' }}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removeInput}>
                      {/* <Icon name="remove" size={24} color="#FF0000" /> */}
                      <Text style={{ fontSize: 25, color: '#FF0000', marginLeft: 10 }}>--</Text>

                    </TouchableOpacity>
                  </View>
                )}
              </View>
            ))}

            <Text style={[styles.name, { marginLeft: 10 }]}>Start Date</Text>

            <View style={{ marginVertical: 10, width: '96%', color: '#000', borderWidth: 1, borderRadius: 5, borderColor: '#0A62F1', alignSelf: 'center', padding: 20 }} >

              <DateTimePickerComponent
                date={startDate}
                Picker={showDatePicker}
                formattedDate={formattedStartDate}
                handleDateChange={handleDateChange}
                setPicker={setShowDatePicker}
                setDate={setStartDate}
                mode={'date'}
              />
            </View>
            <Text style={[styles.name, { marginLeft: 10 }]}>End Date</Text>

            <View style={{ marginVertical: 10, width: '96%', color: '#000', borderWidth: 1, borderRadius: 5, borderColor: '#0A62F1', alignSelf: 'center', padding: 20 }} >

              <DateTimePickerComponent
                date={startDate1}
                Picker={showDatePicker1}
                formattedDate={formattedStartDate1}
                handleDateChange={handleDateChange1}
                setPicker={setShowDatePicker1}
                setDate={setStartDate1}
                mode={'date'}
              />
            </View>
            <TouchableOpacity onPress={HandleSubmit2}  style={[styles.submitbt, { marginVertical: 20, marginLeft: 10 }]}>
              <Text style={styles.subtext}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>}

        {selectededGender === 'Polls' ? null : <>
          <Text style={[styles.name, { marginLeft: 10 }]}>Description</Text>

          <TextInput
            style={{ marginVertical: 5, width: '93%', color: '#000', height: 150, borderColor: '#0A62F1', borderWidth: 1, alignSelf: 'center' }}
            // placeholder="Description"
            placeholderTextColor={'grey'}
            onChangeText={onChangeText}
            value={text}
            multiline={true}
            textAlignVertical="top"
          />
          <Text style={styles.errorText1}>
            {EmployeeError}
          </Text>
          <Text style={docFile ? [styles.DocFileName, { backgroundColor: '#0A62F1', color: '#fff' }] : [styles.DocFileNameHolder, { marginLeft: 10 }]}>
            {docFile ? docFile[0].name : 'Select The Document'}
          </Text>
          <TouchableOpacity onPress={handleDocumentSelection} style={{ flexDirection: 'row', marginLeft: 10, marginVertical: 5 }}>
            <Image source={require('../../../../Assets/Image/img.png')} style={{ height: 20, width: 20, tintColor: 'grey' }} />
            {/* <Image source={require('../../../../Assets/Image/smile.png')} style={{ height: 20, width: 20, marginHorizontal: 10 }} /> */}

          </TouchableOpacity>

          <TouchableOpacity onPress={HandleSubmit} style={[styles.submitbt, { marginVertical: 20, marginLeft: 10 }]}>
            <Text style={styles.subtext}>Submit</Text>
          </TouchableOpacity>
        </>}
      </View>

      <LottieAlertSucess
        visible={isAlertVisible}
        animationSource={require('../../../../Assets/Alerts/tick.json')}
        title={resMessage}
      />

      <LottieAlertError
        visible={isAlertVisible1}
        animationSource={require('../../../../Assets/Alerts/Close.json')}
        title={resMessageFail}
      />

      <LottieCatchError
        visible={isAlertVisible2}
        animationSource={require('../../../../Assets/Alerts/Catch.json')}
        title="Error While Fetching Data"
      />
    </SafeAreaView>
  )
}
export default PostScreen