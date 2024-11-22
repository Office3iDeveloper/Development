import React, { useState ,useEffect} from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import DropdownIcon from "../../../../../Assets/Icons/Dropdowndownarrow.svg";
import DateTimePickerComponent from "../../../../../Components/DateTimePicker";
import axios from 'axios';
import { useSelector } from 'react-redux';


const AddNewReward = () => {
    const { data } = useSelector((state) => state.login);

    const [showDepartmentNameDropdown, setShowDepartmentNameDropdown] = useState(false);
    const [showDepartmentNameDropdown1, setShowDepartmentNameDropdown1] = useState(false);
    const [showDepartmentNameDropdown2, setShowDepartmentNameDropdown2] = useState(false);
    const [showDepartmentNameDropdown3, setShowDepartmentNameDropdown3] = useState(false);
    const [departmentNameDropdown, setDepartmentNameDropdown] = useState([]);

    const [startDate, setStartDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const formatDate = (date) => {
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

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const formattedStartDate = formatDate(startDate);

    const navigation = useNavigation()
    const updateEmployeeFields = (updatedFields) => ({
        type: 'UPDATE_EMPLOYEE_FIELDS',
        payload: updatedFields
    });

    const handleFieldsChange = (fieldName, value) => {
        dispatch(updateEmployeeFields({ [fieldName]: value }));
    };
    const handleSelectDepartment = (departmentName) => {
        handleFieldsChange('userRole', departmentName.role_name);
        handleFieldsChange('selectedRoleId', departmentName.id);
        setShowDepartmentNameDropdown(false);
    };

    useEffect(() => {

        const apiUrl = 'https://office3i.com/development/api/public/api/get_reward_recognition_list';

        const fetchData = async () => {

            try {
                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${data.token}`
                    }
                });

                const responseData = response.data.data;
console.log('run--->',responseData)
                setDepartmentNameDropdown(responseData);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    return (
        <SafeAreaView style={styles.container}>
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
                <Text style={styles.birthtext}>Add New Reward</Text>
            </LinearGradient>

            <View style={styles.rewardview}>
                <TouchableOpacity onPress={() => navigation.navigate('AddNewTile')}
                    style={styles.rewardbutton}>
                    <View
                        style={styles.buttonrow}>
                        <Text
                            style={styles.rewardtext}>
                            +
                        </Text>
                    </View>
                    <Text style={{ color: '#0A62F1', fontSize: 16, fontWeight: '500' }}>Add New Title</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Select Month & Year</Text>

                <View style={styles.inputs} >

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
                {/* Text Inputs */}
                <Text style={styles.title}>Title</Text>
                <TouchableOpacity
                    onPress={() => setShowDepartmentNameDropdown(!showDepartmentNameDropdown)}
                    style={styles.StatusTouchable}>

                    <Text style={styles.StatusTouchableText}>
                        Select Title
                    </Text>
                    <DropdownIcon width={14} height={14} color={"#000"} />

                </TouchableOpacity>

                {showDepartmentNameDropdown && (
                    <View style={styles.dropdown}>
                        <ScrollView>
                            {departmentNameDropdown.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.dropdownOption}
                                    onPress={() => departmentNameDropdown}
                                >
                                    <Text>{item.title_name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}<Text style={styles.title}>Department</Text>
                <TouchableOpacity
                    onPress={() => setShowDepartmentNameDropdown3(!showDepartmentNameDropdown3)}
                    style={styles.StatusTouchable}>

                    <Text style={styles.StatusTouchableText}>
                        Select Department
                    </Text>
                    <DropdownIcon width={14} height={14} color={"#000"} />

                </TouchableOpacity>

                {showDepartmentNameDropdown3 && (
                    <View style={styles.dropdown}>
                        <ScrollView>
                            {/* {departmentNameDropdown.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.dropdownOption}
                                    onPress={() => handleSelectDepartment(item.company_title, item.id)}
                                >
                                    <Text>{item.company_title}</Text>
                                </TouchableOpacity>
                            ))} */}
                        </ScrollView>
                    </View>
                )}
                <Text style={styles.title}>Team</Text>
                <TouchableOpacity
                    onPress={() => setShowDepartmentNameDropdown1(!showDepartmentNameDropdown1)}
                    style={styles.StatusTouchable}>

                    <Text style={styles.StatusTouchableText}>
                        Select Team
                    </Text>
                    <DropdownIcon width={14} height={14} color={"#000"} />

                </TouchableOpacity>

                {showDepartmentNameDropdown1 && (
                    <View style={styles.dropdown}>
                        <ScrollView>
                            {/* {departmentNameDropdown.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.dropdownOption}
                                    onPress={() => handleSelectDepartment(item.company_title, item.id)}
                                >
                                    <Text>{item.company_title}</Text>
                                </TouchableOpacity>
                            ))} */}
                        </ScrollView>
                    </View>
                )}
                <Text style={styles.title}>Member</Text>
                <TouchableOpacity
                    onPress={() => setShowDepartmentNameDropdown2(!showDepartmentNameDropdown2)}
                    style={styles.StatusTouchable}>

                    <Text style={styles.StatusTouchableText}>
                        Select Member
                    </Text>
                    <DropdownIcon width={14} height={14} color={"#000"} />

                </TouchableOpacity>

                {showDepartmentNameDropdown2 && (
                    <View style={styles.dropdown}>
                        <ScrollView>
                            {/* {departmentNameDropdown.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.dropdownOption}
                                    onPress={() => handleSelectDepartment(item.company_title, item.id)}
                                >
                                    <Text>{item.company_title}</Text>
                                </TouchableOpacity>
                            ))} */}
                        </ScrollView>
                    </View>
                )}
                <TouchableOpacity style={styles.submitbt}>
                    <Text style={styles.subtext}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    datePickerStyle: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#A9CAFF',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
        width: '93%',
        alignSelf: 'center'
    },
    dropdown: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        color:'#3F3F3F',
        marginBottom: 5,
        marginLeft: 13
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
    submitbt: {
        width: '30%',
        backgroundColor: '#0A62F1',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        marginLeft: 13
    },
    subtext: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    },
    rewardbutton: {
        backgroundColor: '#D4E4FF',
        flexDirection: 'row',
        width: 150,
        padding: 10,
        marginLeft: 13,
        marginVertical: 15,
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
    },
    StatusTouchable: {
        width: "93%",
        padding: 12,
        // backgroundColor: '#F3FCFF',
        borderWidth: 1,
        borderColor: '#A9CAFF',
        borderRadius: 7,
        marginBottom: 20,

        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    StatusTouchableText: {
        fontSize: 15,
        fontWeight: '400',
        color: 'grey',
    },
    inputs: {
        borderWidth: 1,
        borderColor: '#A9CAFF',
        width: '93%',
        height: 52,
        borderRadius: 7,
        paddingHorizontal: '5%',
        alignSelf: 'center',
        marginBottom: '3%',
        justifyContent: 'center',
        color: '#000'
    },
    dropdown: {
        width: "93%",
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: '#A9CAFF',
        marginBottom: 10
    },

});

export default AddNewReward;
