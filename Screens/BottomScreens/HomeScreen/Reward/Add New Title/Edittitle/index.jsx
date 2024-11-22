import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, StatusBar, TextInput, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import styles from "../../../style";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import DocumentPicker from 'react-native-document-picker';
import axios from "axios";
import { useSelector } from "react-redux";
import LottieAlertSucess from "../../../../../../Assets/Alerts/Success";
import LottieAlertError from "../../../../../../Assets/Alerts/Error";
import LottieCatchError from "../../../../../../Assets/Alerts/Catch";




const EditrewardTile = ({ route }) => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    const [docFile, setDocFile] = useState();
    const [selectedShiftError, setSelectedShiftError] = useState('');
    const [EmployeeError, setEmployeeError] = useState('');
    const [load, SetLoad] = useState(false);
    const [fileName, setFileName] = useState('');
    const [fileName1, setFileName1] = useState('');

    const [docFile1, setDocFile1] = useState();
    const [EmployeeError1, setEmployeeError1] = useState('');


    const { Id } = route.params;

    const datas = [
        { id: 1, title: 'Item 1', startDate: '2023-11-01', endDate: '2023-11-02', },
        { id: 2, title: 'Item 2', startDate: '2023-11-03', endDate: '2023-11-04', },
        { id: 3, title: 'Item 3', startDate: '2023-11-05', endDate: '2023-11-06', },
        // Add more items as needed
    ];

    const { data } = useSelector((state) => state.login);
    const [loadData, setLoadData] = useState(false);
    const [datalist, setDatalist] = useState([]);

    const fetchData = async () => {
        setLoadData(true)
        try {
            const apiUrl = `https://office3i.com/development/api/public/api/edit_reward_recognition_name/${Id}`;
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${data.token}`
                }
            });
            setLoadData(false)
            const responseData = response.data.data
            // console.log('res==>edit',responseData)
            onChangeText(responseData.event_name)
            setDatalist(responseData);
            
        } catch (error) {
            setLoadData(false)
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        const fileName = datalist?.image;

        if (fileName) {
            setFileName(fileName.split('/').pop());
        } else {
            setFileName(null); // or set a default value if needed
        }
    }, [datalist]);

    useEffect(() => {
        const fileName1 = datalist?.template;

        if (fileName1) {
            setFileName1(fileName1.split('/').pop());
        } else {
            setFileName1(null); // or set a default value if needed
        }
    }, [datalist]);

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
        setEmployeeError1('')
        setEmployeeError('');
        setSelectedShiftError('');
    }
    const HandleSubmit = async () => {
        SetLoad(true);

        try {
            if (!validateFields()) {
                SetLoad(false);
                return;
            }

            const apiUrl = 'https://office3i.com/development/api/public/api/update_reward_recognition_name';

            // Create a FormData object and append the document file
            const formData = new FormData();
            formData.append('event_name', text);
            formData.append('user_emp_id', data.userempid);
            formData.append('id', Id);
            // Append the file. Make sure to use the file's URI and type correctly
            if (docFile && docFile[0]) {
                formData.append('image', {
                    uri: docFile[0].uri,
                    name: docFile[0].name,
                    type: docFile[0].type || 'application/octet-stream' // Fallback type if unavailable
                });
            }
            if (docFile1&& docFile1[0]) {
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
                        source={require('../../../../../../Assets/Image/angleleft.png')}
                        style={{ height: 20, width: 20, tintColor: '#fff', marginLeft: 5 }}
                    />
                </TouchableOpacity>
                <Text style={styles.birthtext}>Edit New title</Text>
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
                        {docFile ? docFile[0].name : fileName}
                    </Text>

                    <TouchableOpacity onPress={handleDocumentSelection} style={styles.buttonview}>
                        <Text style={styles.filetext}>Choose File</Text>
                    </TouchableOpacity>
                    <Text style={styles.errorText1}>
                        {EmployeeError}
                    </Text>

                    <Text style={styles.titletext}>Select Template</Text>

                    <Text style={docFile1 ? styles.DocFileName1 : styles.DocFileNameHolder1}>
                        {docFile1 ? docFile1[0].name : fileName1}
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
                                        Update
                                    </Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Handlerefresh} style={[styles.submitbt, { backgroundColor: '#fff', borderColor: '#0A62F1', borderWidth: 1, marginLeft: 10 }]}>
                            <Text style={[styles.subtext, { color: '#0A62F1' }]}>Cancel</Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </ScrollView>
            <LottieAlertSucess
                visible={isAlertVisible}
                animationSource={require('../../../../../../Assets/Alerts/tick.json')}
                title={resMessage}
            />

            <LottieAlertError
                visible={isAlertVisible1}
                animationSource={require('../../../../../../Assets/Alerts/Close.json')}
                title={resMessageFail}
            />

            <LottieCatchError
                visible={isAlertVisible2}
                animationSource={require('../../../../../../Assets/Alerts/Catch.json')}
                title="Error While Fetching Data"
            />
        </SafeAreaView>
    )
}
export default EditrewardTile;