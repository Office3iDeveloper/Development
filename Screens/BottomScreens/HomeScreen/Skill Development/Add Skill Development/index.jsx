import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, StatusBar, TextInput, ScrollView, FlatList, ActivityIndicator,Modal } from 'react-native';
import styles from "../../style";
import LinearGradient from "react-native-linear-gradient";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import DateTimePickerComponent from "../../../../../Components/DateTimePicker";
import DocumentPicker from 'react-native-document-picker';
import EditIcon from '../../../../../Assets/Icons/Edit.svg';
import { useSelector } from "react-redux";
import LottieAlertSucess from "../../../../../Assets/Alerts/Success";
import LottieAlertError from "../../../../../Assets/Alerts/Error";
import LottieCatchError from "../../../../../Assets/Alerts/Catch";
import axios from "axios";
import ViewIcon from "../../../../../Assets/Icons/eyeopen.svg";
import DeleteIcon from "../../../../../Assets/Icons/Delete.svg";




const AddSkilldevelopment = () => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showDatePicker1, setShowDatePicker1] = useState(false);
    const [dateTime, setDateTime] = useState(null);
    const [dateTime1, setDateTime1] = useState(null);
    const [docFile, setDocFile] = useState();
    const [load, SetLoad] = useState(false);
    const [selectedShiftError, setSelectedShiftError] = useState('');
    const [EmployeeError, setEmployeeError] = useState('');
    const [slotError, setSlotError] = useState('');
    const [WeekoffError, setWeekoffError] = useState('');
    const [selectedDepartments, setSelectedDepartments] = useState([]);


    const { data } = useSelector((state) => state.login);

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

        if (!dateTime) {
            setSlotError('Select Start Date');
            isValid = false;
        } else {
            setSlotError('');
        }

        if (!dateTime) {
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

    //         const apiUrl = 'https://office3i.com/development/api/public/api/insert_skill_dev';

    //         const response = await axios.post(apiUrl, {
    //             event_name: text,
    //             from_date: formattedDateTime,
    //             to_date: formattedDateTime1,
    //             user_emp_id: data.userempid,
    //             attachment: docFile[0].name

    //         }, {
    //             headers: {
    //                 Authorization: `Bearer ${data.token}`
    //             },
    //         });

    //         if (response.data.status === "success") {
    //             SetLoad(false);
    //             handleShowAlert(response.data);
    //             setTimeout(() => {
    //                 // fetchData();
    //                 Handlerefresh();
    //             }, 2500);
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
    // console.log('data.userempid', docFile?.[0].name)
    const HandleSubmit = async () => {
        SetLoad(true);

        try {
            if (!validateFields()) {
                SetLoad(false);
                return;
            }

            const apiUrl = 'https://office3i.com/development/api/public/api/insert_skill_dev';

            // Create a FormData object and append the document file
            const formData = new FormData();
            formData.append('event_name', text);
            formData.append('from_date', formattedDateTime);
            formData.append('to_date', formattedDateTime1);
            formData.append('user_emp_id', data.userempid);

            // Append the file. Make sure to use the file's URI and type correctly
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


    const formattedDateTime = dateTime
        ? `${dateTime.getFullYear()}-${String(dateTime.getMonth() + 1).padStart(2, '0')}-${String(dateTime.getDate()).padStart(2, '0')} ${String(dateTime.getHours()).padStart(2, '0')}:${String(dateTime.getMinutes()).padStart(2, '0')}`
        : "";

    const formattedDateTime1 = dateTime1
        ? `${dateTime1.getFullYear()}-${String(dateTime1.getMonth() + 1).padStart(2, '0')}-${String(dateTime1.getDate()).padStart(2, '0')} ${String(dateTime1.getHours()).padStart(2, '0')}:${String(dateTime1.getMinutes()).padStart(2, '0')}`
        : "";

    const handleDateChange = (event, selectedDate) => {
        if (event.type === "set" && selectedDate) {
            setDateTime(selectedDate);
        }
        setShowDatePicker(false);
    };
    const handleDateChange1 = (event, selectedDates) => {
        if (event.type === "set" && selectedDates) {
            setDateTime1(selectedDates);
        }
        setShowDatePicker1(false);
    };


    const Handlerefresh = () => {
        setDateTime('');
        setDateTime1('');
        setWeekoffError('');
        onChangeText('')
        setDocFile('')
        setSlotError('');
        setEmployeeError('');
        setSelectedShiftError('');
    }


    const datas = [
        { id: 1, title: 'Item 1', startDate: '2023-11-01', endDate: '2023-11-02', },
        { id: 2, title: 'Item 2', startDate: '2023-11-03', endDate: '2023-11-04', },
        { id: 3, title: 'Item 3', startDate: '2023-11-05', endDate: '2023-11-06', },
        // Add more items as needed
    ];


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
    const [datalist, setDatalist] = useState([]);
    const [loadData, setLoadData] = useState(false);


    const fetchData = async () => {
        setLoadData(true)
        try {
            const apiUrl = 'https://office3i.com/development/api/public/api/list_skill_dev';
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${data.token}`
                }
            });
            setLoadData(false)
            const responseData = response.data;
            setDatalist(responseData);
            // console.log('data==.', datalist)
        } catch (error) {
            setLoadData(false)
            console.error('Error fetching data:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [])
    );

    const [modalVisible, setModalVisible] = useState(false);
    const [ReasonError, setReasonError] = useState('')
    const [Reason, setReason] = useState('');
    const [DelData, setDelData] = useState(false);
    const [slotToDelete, setSlotToDelete] = useState(null);

    const HandleDelete = (slotId) => {
        setSlotToDelete(slotId);
        setModalVisible(true);
    }

    const cancelDelete = () => {
        setSlotToDelete(null);
        setModalVisible(false);
        setReasonError('');
        setReason('');
        setDelData(false);
    }

    const confirmDelete = async () => {

        setDelData(true)

        if (slotToDelete) {

            try {

                if (!Reason) {
                    setReasonError('Reason Required');
                    setDelData(false);
                    return;
                } else {
                    setReasonError('');
                    setReason('');
                }

                const apiUrl = `https://office3i.com/development/api/public/api/delete_skill_dev`;

                const response = await axios.post(apiUrl, {
                    id: slotToDelete,
                    user_emp_id: data.userempid,
                    comment: Reason,
                }, {
                    headers: {
                        Authorization: `Bearer ${data.token}`
                    }
                });

                if (response.data.status === "success") {
                    const updatedDataList = datalist.skill_dev_list.filter(slot => slot.id !== slotToDelete);
                    setDatalist(updatedDataList);
                    setDelData(false);
                    // Alert.alert("Deleted", "Deleted Successfully");
                    handleShowAlert(response.data);
                } else {
                    // Alert.alert("Failed", "Failed to delete shift slot");
                    handleShowAlert1(response.data);
                    setDelData(false)
                }
            } catch (error) {
                // Alert.alert("Error", "Error while deleting shift slot");
                handleShowAlert2();
                console.error('Error deleting shift slot:', error);
                setDelData(false)
            }
            setSlotToDelete(null);
            setModalVisible(false);
        }
    }

    const renderItem = ({ item, index }) => (

        <View style={[styles.row]}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{item.event_name}</Text>
            <Text style={styles.cell}>{item.from_date}</Text>
            <Text style={styles.cell}>{item.to_date}</Text>

            <TouchableOpacity style={[styles.listcontenteditbutton, { backgroundColor: '#E7E0FC', borderWidth: 1, borderColor: "#8056FF", }]}
                onPress={() => navigation.navigate('Attachmentview', { image: item.attachment })}>
                <ViewIcon width={14} height={14} color={"#000"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listcontenteditbutton}
                onPress={() => navigation.navigate('EditSkilldevelopment', { Id: item.id })}
            >
                <EditIcon width={14} height={14} color={"#000"} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listcontenteditbutton, { borderColor: "#FF7676", backgroundColor: '#FFE0E0' }]}
                onPress={() => HandleDelete(item.id)}
            >
                <DeleteIcon width={14} height={14} color={"#000"} />
            </TouchableOpacity>
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
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Image
                        source={require('../../../../../Assets/Image/angleleft.png')}
                        style={{ height: 20, width: 20, tintColor: '#fff', marginLeft: 5 }}
                    />
                </TouchableOpacity>
                <Text style={styles.birthtext}>Add Skill Development / Training</Text>
            </LinearGradient>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.titlecard}>
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
                        {docFile ? docFile[0].name : 'Select The Document'}
                    </Text>
                    <TouchableOpacity onPress={handleDocumentSelection} style={styles.buttonview}>
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
                            date={dateTime}
                            mode='datetime'
                            formattedDate={formattedDateTime}
                            Picker={showDatePicker}
                            handleDateChange={handleDateChange}
                            setPicker={setShowDatePicker}
                            setDate={setDateTime}
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
                            date={dateTime1}
                            mode='datetime'
                            formattedDate={formattedDateTime1}
                            Picker={showDatePicker1}
                            handleDateChange={handleDateChange1}
                            setPicker={setShowDatePicker1}
                            setDate={setDateTime1}
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
                                        Submit
                                    </Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Handlerefresh} style={styles.submitbt2}>
                            <Text style={[styles.subtext, { color: '#0A62F1' }]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.container}>
                        {loadData ? (
                            <ActivityIndicator size="small" color="#20DDFE" style={styles.Activeindicator} />
                        ) : (
                            <>
                                {/* Header Row */}
                                <View style={{ flexDirection: 'row', backgroundColor: '#E1F1FC', }}>
                                    <Text style={styles.headerCell}>S.No.</Text>
                                    <Text style={styles.headerCell}>Title</Text>
                                    <Text style={styles.headerCell}>Start Date</Text>
                                    <Text style={styles.headerCell}>End Date</Text>
                                    <Text style={styles.headerCell}>Attachment</Text>
                                    <Text style={styles.headerCell}>Action</Text>
                                </View>

                                {/* Data Rows */}
                                {datalist.length === 0 ? (
                                    <Text style={{ textAlign: 'center', paddingVertical: 10, color: '#000' }}>No data available</Text>
                                ) : (
                                    <FlatList
                                        data={datalist?.skill_dev_list}
                                        renderItem={renderItem}
                                        keyExtractor={(item, index) => `${item.id}-${index}`}
                                        scrollEnabled={false} // Disable vertical scrolling within FlatList
                                    />
                                )}
                            </>

                        )}
                    </View>
                </ScrollView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTextHeading}>Are You Sure You Want To Delete This !</Text>
                            <Text style={styles.modalText}>Reason:</Text>
                            <TextInput
                                value={Reason}
                                onChangeText={(text) => setReason(text)}
                                style={styles.Reason}
                            />
                            <Text style={styles.errorTextDelete}>
                                {ReasonError}
                            </Text>
                            <View style={styles.modalButtonContainer}>
                                <TouchableOpacity style={styles.modalCancelButton1} onPress={cancelDelete}>
                                    <Text style={styles.modalCancelButtonText1}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalDeleteButton} onPress={confirmDelete}>


                                    {
                                        DelData ?
                                            <ActivityIndicator size={"small"} color={"#fff"} /> :
                                            <Text style={styles.modalDeleteButtonText}>Delete</Text>
                                    }


                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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
export default AddSkilldevelopment;