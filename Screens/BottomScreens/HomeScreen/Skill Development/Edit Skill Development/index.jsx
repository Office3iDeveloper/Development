import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, StatusBar, TextInput, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import styles from "../../style";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerComponent from "../../../../../Components/DateTimePicker";
import axios from "axios";
import { useSelector } from "react-redux";
import LottieAlertSucess from "../../../../../Assets/Alerts/Success";
import LottieAlertError from "../../../../../Assets/Alerts/Error";
import LottieCatchError from "../../../../../Assets/Alerts/Catch";
import DocumentPicker from 'react-native-document-picker';


const EditSkilldevelopment = ({ route }) => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [startDate1, setStartDate1] = useState(new Date());
    const [showDatePicker1, setShowDatePicker1] = useState(false);
    const [load, SetLoad] = useState(false);
    const [docFile, setDocFile] = useState();
    const [selectedShiftError, setSelectedShiftError] = useState('');
    const [EmployeeError, setEmployeeError] = useState('');
    const [slotError, setSlotError] = useState('');
    const [WeekoffError, setWeekoffError] = useState('');
    const [fileName, setFileName] = useState('');


    const { Id } = route.params;

  

    const formattedStartDate = startDate
        ? `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')} ${String(startDate.getHours()).padStart(2, '0')}:${String(startDate.getMinutes()).padStart(2, '0')}`
        : "";

    const formattedStartDate1 = startDate1
        ? `${startDate1.getFullYear()}-${String(startDate1.getMonth() + 1).padStart(2, '0')}-${String(startDate1.getDate()).padStart(2, '0')} ${String(startDate1.getHours()).padStart(2, '0')}:${String(startDate1.getMinutes()).padStart(2, '0')}`
        : "";
    const handleDateChange = (event, date) => {
        if (event.type === "set" && date) {
            setStartDate(date);
        }
        setShowDatePicker(false);
    };
    const handleDateChange1 = (event, date) => {
        if (event.type === "set" && date) {
            setStartDate1(date);
        }
        setShowDatePicker1(false);
    };

    const [datalist, setDatalist] = useState([]);
    const [loadData, setLoadData] = useState(false);
    const { data } = useSelector((state) => state.login);
    const [selectedID, setSelectedID] = useState();

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
    const fetchData = async () => {
        setLoadData(true)
        try {
            const apiUrl = `https://office3i.com/development/api/public/api/edit_skill_dev/${Id}`;
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${data.token}`
                }
            });
            setLoadData(false)
            const responseData = response.data?.skill_dev_details;
            // console.log('res==>edit',responseData)
            onChangeText(responseData.event_name)
            setStartDate(new Date(responseData.from_date))
            setStartDate1(new Date(responseData.to_date))
            // setSelectedID(datalist.skill_dev_details.id)
            setDatalist(responseData);
        } catch (error) {
            setLoadData(false)
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        const fileName = datalist?.attachment;
    
        if (fileName) {
            setFileName(fileName.split('/').pop());
        } else {
            setFileName(null); // or set a default value if needed
        }
    }, [datalist]);
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

        if (!startDate) {
            setSlotError('Select Start Date');
            isValid = false;
        } else {
            setSlotError('');
        }

        if (!startDate1) {
            setWeekoffError('Select End Date');
            isValid = false;
        } else {
            setWeekoffError('');
        }


        return isValid;
    };
    // const HandleSubmit = async () => {

    //     SetLoad(true);

    //     try {

    //         if (!validateFields()) {
    //             SetLoad(false);
    //             return;
    //         }

    //         const apiUrl = 'https://office3i.com/development/api/public/api/update_skill_dev';

    //         const formData = new FormData();
    //         formData.append('event_name', text);
    //         formData.append('from_date', formattedStartDate);
    //         formData.append('to_date', formattedStartDate1);
    //         formData.append('id',Id) ;
    //         formData.append('user_emp_id', data.userempid);

    //         // Append the file. Make sure to use the file's URI and type correctly
    //         if (docFile && docFile[0]) {
    //             formData.append('attachment', {
    //                 uri: docFile[0].uri,
    //                 name: docFile[0].name,
    //                 type: docFile[0].type || 'application/octet-stream' // Fallback type if unavailable
    //             });
    //         }

    //         const response = await axios.post(apiUrl, 
    //             formData,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${data.token}`
    //             },
    //         });

    //         if (response.data.status === "success") {
    //             SetLoad(false);
    //             handleShowAlert(response.data);
    //         } else {
    //             handleShowAlert1(response.data);
    //             SetLoad(false);
    //         }
    //     } catch (error) {
    //         handleShowAlert2();
    //         console.error('Error during submit:', error);
    //         SetLoad(false);
    //     }

    // }
    const HandleSubmit = async () => {
        SetLoad(true);

        try {
            if (!validateFields()) {
                SetLoad(false);
                return;
            }

            const apiUrl = 'https://office3i.com/development/api/public/api/update_skill_dev';

            const formData = new FormData();
            formData.append('event_name', text);
            formData.append('from_date', formattedStartDate);
            formData.append('to_date', formattedStartDate1);
            formData.append('id', Id);
            formData.append('user_emp_id', data.userempid);

            if (docFile && docFile[0]) {
                formData.append('attachment', {
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
                timeout: 10000, // 10-second timeout
            });

            if (response.data.status === "success") {
                SetLoad(false);
                handleShowAlert(response.data);
            } else {
                handleShowAlert1(response.data);
                SetLoad(false);
            }
        } catch (error) {
            console.error('Network error during submit:', error);

            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Response error data:', error.response.data);
                console.error('Response status:', error.response.status);
            } else if (error.request) {
                // Request was made but no response received
                console.error('Request error:', error.request);
            } else {
                // Something else caused the error
                console.error('Error message:', error.message);
            }

            handleShowAlert2();
            SetLoad(false);
        }
    };

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
                <Text style={styles.birthtext}>Edit Skill Development / Training</Text>
            </LinearGradient>

            <View style={[styles.titlecard, { marginVertical: 10 }]}>
                <Text style={styles.titletext}>Title</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 10, borderRadius: 5, borderColor: 'grey', marginVertical: 10 }}
                    placeholder="Title"
                    placeholderTextColor={'grey'}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Text style={styles.errorText1}>
                    {selectedShiftError}
                </Text>
                <Text style={styles.titletext}>Attachment</Text>
                <Text style={docFile ? styles.DocFileName : styles.DocFileNameHolder}>
                    {docFile ? docFile[0].name : fileName}
                </Text>
                <TouchableOpacity onPress={() => handleDocumentSelection()} style={styles.buttonview}>
                    <Text style={styles.filetext}>Choose File</Text>
                </TouchableOpacity>
                <Text style={styles.errorText1}>
                    {EmployeeError}
                </Text>
                <Text style={styles.StatDateText}>
                    Start Date
                </Text>

                <View style={styles.inputs} >
                    <DateTimePickerComponent
                        date={startDate}
                        formattedDate={formattedStartDate}
                        Picker={showDatePicker}
                        handleDateChange={handleDateChange}
                        setPicker={setShowDatePicker}
                        setDate={setStartDate}
                    />
                </View>
                <Text style={styles.errorText1}>
                    {slotError}
                </Text>
                <Text style={styles.StatDateText}>
                    End Date
                </Text>

                <View style={styles.inputs} >
                    <DateTimePickerComponent
                        date={startDate1}
                        formattedDate={formattedStartDate1}
                        Picker={showDatePicker1}
                        handleDateChange={handleDateChange1}
                        setPicker={setShowDatePicker1}
                        setDate={setStartDate1}
                    />
                </View>
                <Text style={styles.errorText1}>
                    {WeekoffError}
                </Text>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <TouchableOpacity onPress={HandleSubmit} style={styles.submitbt}>
                        {
                            load ?
                                <ActivityIndicator size={"small"} color={"#fff"} /> :
                                <Text style={styles.subtext}>
                                    Update
                                </Text>
                        }
                        {/* <Text style={styles.subtext}>Update</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitbt2}>
                        <Text style={[styles.subtext, { color: '#0A62F1' }]}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <LottieAlertSucess
                visible={isAlertVisible}
                animationSource={require('../../../../../Assets/Alerts/tick.json')}
                title={resMessage}
            />

            <LottieAlertError
                visible={isAlertVisible1}
                animationSource={require('../../../../../Assets/Alerts/Close.json')}
                title={resMessageFail}
            />

            <LottieCatchError
                visible={isAlertVisible2}
                animationSource={require('../../../../../Assets/Alerts/Catch.json')}
                title="Error While Fetching Data"
            />
        </SafeAreaView>
    )
}
export default EditSkilldevelopment;