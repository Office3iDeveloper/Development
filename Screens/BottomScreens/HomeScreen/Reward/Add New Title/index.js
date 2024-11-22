import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, StatusBar, TextInput, ScrollView, FlatList, ActivityIndicator, Modal } from 'react-native';
import styles from "../../style";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerComponent from "../../../../../Components/DateTimePicker";
import DocumentPicker from 'react-native-document-picker';
import EditIcon from '../../../../../Assets/Icons/Edit.svg';
import DeleteIcon from "../../../../../Assets/Icons/Delete.svg";
import LottieAlertSucess from "../../../../../Assets/Alerts/Success";
import LottieAlertError from "../../../../../Assets/Alerts/Error";
import LottieCatchError from "../../../../../Assets/Alerts/Catch";
import axios from "axios";
import { useSelector } from "react-redux";
import ViewIcon from "../../../../../Assets/Icons/eyeopen.svg";



const AddNewTile = () => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    const [docFile, setDocFile] = useState();
    const [docFile1, setDocFile1] = useState();
    const [selectedShiftError, setSelectedShiftError] = useState('');
    const [EmployeeError, setEmployeeError] = useState('');
    const [EmployeeError1, setEmployeeError1] = useState('');
    const [load, SetLoad] = useState(false);


    const datas = [
        { id: 1, title: 'Item 1', startDate: '2023-11-01', endDate: '2023-11-02', },
        { id: 2, title: 'Item 2', startDate: '2023-11-03', endDate: '2023-11-04', },
        { id: 3, title: 'Item 3', startDate: '2023-11-05', endDate: '2023-11-06', },
        // Add more items as needed
    ];

    const { data } = useSelector((state) => state.login);
    const [bdayList, setbdayList] = useState('');
    const [loadData, setLoadData] = useState(false);

    const birthdaylist = async () => {
        setLoadData(true)
        try {
            const apiUrl =
                'https://office3i.com/development/api/public/api/get_reward_recognition_name';
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                    'Registered-Email': data.useremailOfficial,
                },
            });
            setLoadData(false)
            const responseData = response.data;

            setbdayList(responseData.data);
            // console.log('bdayList', bdayList);
        } catch (error) {
            setLoadData(false)
            console.error('Error fetching birthday data:', error);
        }
    };

    useEffect(() => {
        birthdaylist();
    }, []);

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
    const [modalVisible1, setModalVisible1] = useState(false);


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


    const handleDocumentSelection = async () => {

        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            res.forEach(file => {
                file.name = file.name.replace(/\s+/g, '_');
            });
            setDocFile(res);
            // console.log('docfilr',docFile)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Document picker is cancelled');
            } else {
                console.error('Error while picking the document:', err);
            }
        }
    };

    const handleDocument = async () => {

        try {
            const resp = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            resp.forEach(file => {
                file.name = file.name.replace(/\s+/g, '_');
            });
            setDocFile1(resp);
            // console.log('docfilr',docFile1)
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
        if (!docFile1) {
            setEmployeeError1('Select file');
            isValid = false;
        } else {
            setEmployeeError1('');
        }


        return isValid;
    };


    const Handlerefresh = () => {
        onChangeText('')
        setDocFile('')
        setEmployeeError('');
        setEmployeeError1('');
        setSelectedShiftError('');
    }
    const HandleSubmit = async () => {
        SetLoad(true);

        try {
            if (!validateFields()) {
                SetLoad(false);
                return;
            }

            const apiUrl = 'https://office3i.com/development/api/public/api/insert_reward_recognition_name';

            // Create a FormData object and append the document file
            const formData = new FormData();
            formData.append('event_name', text);
            formData.append('user_emp_id', data.userempid);

            // Append the file. Make sure to use the file's URI and type correctly
            if (docFile && docFile[0]) {
                formData.append('image', {
                    uri: docFile[0].uri,
                    name: docFile[0].name,
                    type: docFile[0].type || 'application/octet-stream' // Fallback type if unavailable
                });
            }
            if (docFile1 && docFile1[0]) {
                formData.append('template_img', {
                    uri: docFile1[0].uri,
                    name: docFile1[0].name,
                    type: docFile1[0].type || 'application/octet-stream' // Fallback type if unavailable
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
                    Handlerefresh();
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

    const renderItem = ({ item, index }) => (
        <View style={[styles.row, { justifyContent: 'space-around', marginRight: 10 ,width:'100%'}]}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{item.event_name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                <TouchableOpacity style={[styles.listcontenteditbutton, { backgroundColor: '#E7E0FC', borderWidth: 1, borderColor: "#8056FF", }]}
                    onPress={() => navigation.navigate('Viewimg',{image:item.image})}
                >
                    <ViewIcon width={14} height={14} color={"#000"} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.listcontenteditbutton, { backgroundColor: '#E7E0FC', borderWidth: 1, borderColor: "#8056FF", }]}
                          onPress={() => navigation.navigate('Viewimg',{template:item.template})}
                >
                    <ViewIcon width={14} height={14} color={"#000"} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.listcontenteditbutton}
                    onPress={() => navigation.navigate('EditrewardTile', { Id: item.id })}
                >
                    <EditIcon width={14} height={14} color={"#000"} />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.listcontentdelbutton}
                    onPress={() => null}
                >
                    <DeleteIcon width={14} height={14} color={"#000"} />
                </TouchableOpacity> */}
            </View>

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
                <Text style={styles.birthtext}>Add New title</Text>
            </LinearGradient>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.titlecard}>
                    <Text style={styles.titletext}>Title Name</Text>
                    <TextInput
                        style={{
                            width: '100%',
                            alignSelf: 'center',
                            margin: 12,
                            borderWidth: 1,
                            borderColor: 'grey',
                            padding: 10,
                            borderRadius: 5
                        }}
                        placeholder="Title Name"
                        placeholderTextColor={'grey'}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <Text style={styles.errorText1}>
                        {selectedShiftError}
                    </Text>
                    <Text style={styles.titletext}>Select Icon</Text>

                    <Text style={docFile ? styles.DocFileName : styles.DocFileNameHolder}>
                        {docFile ? docFile[0].name : 'Select The Icon'}
                    </Text>

                    <TouchableOpacity onPress={handleDocumentSelection} style={styles.buttonview}>
                        <Text style={styles.filetext}>Choose File</Text>
                    </TouchableOpacity>
                    <Text style={styles.errorText1}>
                        {EmployeeError}
                    </Text>

                    <Text style={styles.titletext}>Select Template</Text>

                    <Text style={docFile1 ? styles.DocFileName1 : styles.DocFileNameHolder1}>
                        {docFile1 ? docFile1[0].name : 'Select The Template'}
                    </Text>

                    <TouchableOpacity onPress={handleDocument} style={styles.buttonview}>
                        <Text style={styles.filetext}>Choose Template</Text>
                    </TouchableOpacity>
                    <Text style={styles.errorText1}>
                        {EmployeeError1}
                    </Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TouchableOpacity onPress={HandleSubmit} style={styles.submitbt}>
                            {
                                load ?
                                    <ActivityIndicator size={"small"} color={"#fff"} /> :
                                    <Text style={styles.subtext}>
                                        Submit
                                    </Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Handlerefresh} style={[styles.submitbt, { backgroundColor: '#fff', borderColor: '#0A62F1', borderWidth: 1, marginLeft: 10 }]}>
                            <Text style={[styles.subtext, { color: '#0A62F1' }]}>Cancel</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={[styles.container]}>
                        {loadData ? (
                            <ActivityIndicator size="small" color="#20DDFE" style={styles.Activeindicator} />
                        ) : (
                            <>
                                {/* Header Row */}
                                <View style={{ flexDirection: 'row', backgroundColor: '#E1F1FC', justifyContent: 'space-around', alignItems: 'center' ,width:'100%'}}>
                                    <Text style={styles.headerCell}>S.No.</Text>
                                    <Text style={styles.headerCell}>Title Name</Text>
                                    <Text style={styles.headerCell}>Icon</Text>
                                    <Text style={styles.headerCell}>Template</Text>
                                    <Text style={styles.headerCell}>Action</Text>
                                </View>

                                {/* Data Rows */}
                                {bdayList.length === 0 ? (
                                    <Text style={{ textAlign: 'center', paddingVertical: 10, color: '#000' }}>No data available</Text>
                                ) : (
                                    <FlatList
                                        data={bdayList}
                                        renderItem={renderItem}
                                        keyExtractor={(item) => item.id}
                                        scrollEnabled={false} // Disable vertical scrolling within FlatList
                                    />)}
                            </>)}
                    </View>
                   
                </ScrollView>
            </ScrollView>
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
export default AddNewTile;