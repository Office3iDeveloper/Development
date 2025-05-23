import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';
import styles from "../AddRelievingLetter/style";
import { useSelector } from "react-redux";
import LottieAlertSucess from "../../../../../../Assets/Alerts/Success";
import LottieAlertError from "../../../../../../Assets/Alerts/Error";
import LottieCatchError from "../../../../../../Assets/Alerts/Catch";
import DropdownIcon from "../../../../../../Assets/Icons/Dropdowndownarrow.svg";
import axios from "axios";



const EditRelievingLetter = ({ route, navigation }) => {

    // route

    const SpecId = route.params.Id;
    console.log(SpecId, "SpecId")

    // data from redux store 

    const { data } = useSelector((state) => state.login);

    // 

    const [load, SetLoad] = useState(false);

    // 

    const [empName, setEmpName] = useState('');
    const [designation, setDesignation] = useState('');
    const [cName, setCName] = useState('');
    const [aPName, setAPName] = useState('');
    const [aPDesignation, setAPDesignation] = useState('');

    const [empNameErr, setEmpNameErr] = useState('');
    const [designationErr, setDesignationErr] = useState('');
    const [cNameErr, setCNameErr] = useState('');
    const [aPNameErr, setAPNameErr] = useState('');
    const [aPDesignationErr, setAPDesignationErr] = useState('');

    // 

    // const [docFile, setDocFile] = useState();
    const [docFileErr, setDocFileErr] = useState();
    // const [docFile1, setDocFile1] = useState();
    const [docFileErr1, setDocFileErr1] = useState();

    const [EdocFile, setEdocFile] = useState([]);
    const [EdocFile1, setEdocFile1] = useState([]);
    console.log(EdocFile, "EdocFile")

    const [EditedocFile, seteditedocFile] = useState([]);
    const [EditedocFile1, seteditedocFile1] = useState([]);
    console.log(EditedocFile, "EditedocFile")

    const filePath = typeof EditedocFile === 'string' ? EditedocFile : '';
    const fileName = filePath.split('/').pop();
    console.log(fileName, "fileName")

    const filePath1 = typeof EditedocFile1 === 'string' ? EditedocFile1 : '';
    const fileName1 = filePath1.split('/').pop();
    console.log(fileName1, "fileName")

    const handleDocumentSelection = async () => {

        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setEdocFile(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Document picker is cancelled');
            } else {
                console.error('Error while picking the document:', err);
            }
        }
    };

    const handleDocumentSelection1 = async () => {

        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setEdocFile1(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Document picker is cancelled');
            } else {
                console.error('Error while picking the document:', err);
            }
        }
    };

    // 

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [startDateErr, setStartDateErr] = useState(null);
    const formattedStartDate = startDate ?
        `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}` :
        "";

    const [showDatePicker1, setShowDatePicker1] = useState(false);
    const [startDate1, setStartDate1] = useState(null);
    const [startDateErr1, setStartDateErr1] = useState(null);
    const formattedStartDate1 = startDate1 ?
        `${startDate1.getFullYear()}-${String(startDate1.getMonth() + 1).padStart(2, '0')}-${String(startDate1.getDate()).padStart(2, '0')}` :
        "";

    const [showDatePicker2, setShowDatePicker2] = useState(false);
    const [startDate2, setStartDate2] = useState(null);
    const [startDateErr2, setStartDateErr2] = useState(null);
    const formattedStartDate2 = startDate2 ?
        `${startDate2.getFullYear()}-${String(startDate2.getMonth() + 1).padStart(2, '0')}-${String(startDate2.getDate()).padStart(2, '0')}` :
        "";

    const formatDate = (date) => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleDateChange = (event, date) => {
        if (event.type === "set" && date) {
            setStartDate(date);
        }
        setShowDatePicker(false);
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const handleDateChange1 = (event, date) => {
        if (event.type === "set" && date) {
            setStartDate1(date);
        }
        setShowDatePicker1(false);
    };

    const showDatepicker1 = () => {
        setShowDatePicker1(true);
    };

    const handleDateChange2 = (event, date) => {
        if (event.type === "set" && date) {
            setStartDate2(date);
        }
        setShowDatePicker2(false);
    };

    const showDatepicker2 = () => {
        setShowDatePicker2(true);
    };

    // 

    const Handlerefresh = () => {
        navigation.goBack()
    }

    // 

    // 

    const [departmentNameDropdown, setDepartmentNameDropdown] = useState([]);
    const [showDepartmentNameDropdown, setShowDepartmentNameDropdown] = useState(false);
    const [selectedDepartments, setSelectedDepartments] = useState('');
    const [selectedDepartmentsErr, setSelectedDepartmentsErr] = useState('');
    const [selectedDepartmentsId, setSelectedDepartmentsId] = useState('');

    useEffect(() => {
        const apiUrl = 'https://office3i.com/development/api/public/api/headerFooter_templatelist';

        const fetchData = async () => {

            try {
                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${data.token}`
                    }
                });

                const responseData = response.data.data;

                setDepartmentNameDropdown(responseData);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    const handleSelectDepartment = (item, id) => {
        setSelectedDepartments(item);
        setSelectedDepartmentsId(id);
        setShowDepartmentNameDropdown(false);
    };

    // 

    useEffect(() => {
        setStartDate(new Date(SpecId.date));
        setEmpName(SpecId.employee_name);
        setDesignation(SpecId.designation);
        setCName(SpecId.company_name);
        setStartDate1(new Date(SpecId.joining_date));
        setStartDate2(new Date(SpecId.last_working_day));
        setAPName(SpecId.authorised_person_name);
        setAPDesignation(SpecId.authorised_person_designation);
        seteditedocFile(SpecId.header_attachment);
        seteditedocFile1(SpecId.footer_attached);
        setSelectedDepartmentsId(SpecId.layout_id);
    }, [SpecId])

    useEffect(() => {
        if (SpecId.layout_id) {
            // Find the department that matches the layout_id
            const matchingDepartment = departmentNameDropdown.find(
                (item) => item.id === SpecId.layout_id
            );
    
            // If a match is found, set the selected department and ID
            if (matchingDepartment) {
                setSelectedDepartments(matchingDepartment.company_title);
                setSelectedDepartmentsId(matchingDepartment.id);
            }
        }
    }, [SpecId, departmentNameDropdown]);

    // 

    const validateFields = () => {

        let isValid = true;

        if (!EdocFile) {
            setDocFileErr('Header Attachment is required.');
            isValid = false;
        } else {
            setDocFileErr('');
        }

        if (!EdocFile1) {
            setDocFileErr1('Footer Attachment is required.');
            isValid = false;
        } else {
            setDocFileErr1('');
        }

        if (!cName) {
            setCNameErr('Enter Company Name');
            isValid = false;
        } else {
            setCNameErr('');
        }

        if (!empName) {
            setEmpNameErr('Enter Employee Name');
            isValid = false;
        } else {
            setEmpNameErr('');
        }

        if (!designation) {
            setDesignationErr('Enter Designation');
            isValid = false;
        } else {
            setDesignationErr('');
        }

        if (!startDate) {
            setStartDateErr('Select Date');
            isValid = false;
        } else {
            setStartDateErr('');
        }

        if (!startDate1) {
            setStartDateErr1('Select Joining Date');
            isValid = false;
        } else {
            setStartDateErr1('');
        }

        if (!startDate2) {
            setStartDateErr2('Select Last Working Date');
            isValid = false;
        } else {
            setStartDateErr2('');
        }

        if (!aPName) {
            setAPNameErr('Enter Authorised Person Name');
            isValid = false;
        } else {
            setAPNameErr('');
        }

        if (!aPDesignation) {
            setAPDesignationErr('Enter Authorised Person Designation');
            isValid = false;
        } else {
            setAPDesignationErr('');
        }

        return isValid;
    };

    // 

    const HandleSubmit = async () => {

        SetLoad(true);

        const formData = new FormData();

        if (!validateFields()) {
            SetLoad(false);
            return;
        }

        try {

            formData.append('id', SpecId.id);
            formData.append('date', formattedStartDate);
            formData.append('employee_name', empName);
            formData.append('designation', designation);
            formData.append('company_name', cName);
            formData.append('joining_date', formattedStartDate1);
            formData.append('last_working_day', formattedStartDate2);
            formData.append('authorised_person_name', aPName);
            formData.append('authorised_person_designation', aPDesignation);
            formData.append('updated_by', data.userempid);
            formData.append('header_oldpath', SpecId.header_attachment);
            formData.append('footer_oldpath', SpecId.footer_attached);
            formData.append('header_footer_layout_id', selectedDepartmentsId);

            if (EdocFile) {
                if (EdocFile.length > 0) {
                    EdocFile.map((item, index) => {
                        formData.append(`header_attach`, {
                            uri: item.uri,
                            name: item.name,
                            type: item.type,
                        });
                    });
                }
            } else {
                formData.append('header_attach', EdocFile);
            }

            if (EdocFile1) {
                if (EdocFile1.length > 0) {
                    EdocFile1.map((item, index) => {
                        formData.append(`footer_attached`, {
                            uri: item.uri,
                            name: item.name,
                            type: item.type,
                        });
                    });
                }
            } else {
                formData.append('footer_attached', EdocFile1);
            }

            const response = await fetch('https://office3i.com/development/api/public/api/update_relieving_letter', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${data.token}`
                },
                body: formData,
            });

            const responsedata = await response.json();
            console.log(responsedata, "responsedata")

            if (responsedata.status === "success") {
                SetLoad(false);
                handleShowAlert(responsedata.message);
            } else {
                handleShowAlert1(responsedata.message);
                SetLoad(false);
            }

        } catch (error) {
            handleShowAlert2();
            SetLoad(false);
        }
    }

    const [isAlertVisible, setAlertVisible] = useState(false);
    const [resMessage, setResMessage] = useState('');

    const handleShowAlert = (res) => {
        setAlertVisible(true);
        setResMessage(res)
        setTimeout(() => {
            setAlertVisible(false);
            navigation.navigate('Relieving Letter List')
        }, 2500);
    };

    const [isAlertVisible1, setAlertVisible1] = useState(false);
    const [resMessageFail, setResMessageFail] = useState('');

    const handleShowAlert1 = (res) => {
        setAlertVisible1(true);
        setResMessageFail(res);
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

    return (

        <ScrollView>

            <View style={styles.PolicyContainer}>

                <View style={styles.PolicyContainerTitleHeader}>
                    <Text style={styles.PolicyContainerTitleText}>Add Relieving Letter</Text>
                </View>

                <View style={styles.Inputcontainer}>

                    {/* <Text style={styles.StatDateText}>
                        Insert Header
                    </Text>

                    <View style={styles.fullWidth}>

                        <Text style={EdocFile ? styles.DocFileName : styles.DocFileNameHolder}>
                            {EdocFile.length > 0 && EdocFile[0]?.name ? EdocFile[0].name : fileName}
                        </Text>

                        <TouchableOpacity style={styles.UploadButton} onPress={handleDocumentSelection}>
                            <Text style={styles.UploadButtonText}>
                                Choose File
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.errorText}>
                        {docFileErr}
                    </Text>

                    <Text style={styles.StatDateText}>
                        Insert Footer
                    </Text>

                    <View style={styles.fullWidth}>

                        <Text style={EdocFile1 ? styles.DocFileName : styles.DocFileNameHolder}>
                            {EdocFile1.length > 0 && EdocFile1[0]?.name ? EdocFile1[0].name : fileName1}
                        </Text>

                        <TouchableOpacity style={styles.UploadButton} onPress={handleDocumentSelection1}>
                            <Text style={styles.UploadButtonText}>
                                Choose File
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.errorText}>
                        {docFileErr1}
                    </Text> */}

                    <Text style={styles.StatDateText}>
                        Select Layout
                    </Text>

                    <TouchableOpacity
                        onPress={() => setShowDepartmentNameDropdown(!showDepartmentNameDropdown)}
                        style={styles.StatusTouchable}>

                        <Text style={styles.StatusTouchableText}>
                            {selectedDepartments ? selectedDepartments : 'Select Department'}
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
                                        onPress={() => handleSelectDepartment(item.company_title, item.id)}
                                    >
                                        <Text>{item.company_title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    )}

                    <Text style={styles.errorText}>
                        {selectedDepartmentsErr}
                    </Text>

                    <Text style={styles.StatDateText}>
                        Date
                    </Text>

                    <View style={styles.inputs} >
                        <Text onPress={showDatepicker}>
                            {startDate ? formatDate(startDate) : "Select Date"} &nbsp;
                        </Text>
                        {showDatePicker && (
                            <DateTimePicker
                                value={startDate || new Date()}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                    </View>

                    <Text style={styles.errorText}>
                        {startDateErr}
                    </Text>

                    <Text style={styles.StatDateText}>
                        Employee Name
                    </Text>

                    <TextInput
                        value={empName}
                        onChangeText={(txt) => setEmpName(txt)}
                        style={styles.inputs}
                    />

                    <Text style={styles.errorText}>
                        {empNameErr}
                    </Text>

                    <Text style={styles.StatDateText}>
                        Designation
                    </Text>

                    <TextInput
                        value={designation}
                        onChangeText={(txt) => setDesignation(txt)}
                        style={styles.inputs}
                    />

                    <Text style={styles.errorText}>
                        {designationErr}
                    </Text>

                    <Text style={styles.StatDateText}>
                        Company Name
                    </Text>

                    <TextInput
                        value={cName}
                        onChangeText={(txt) => setCName(txt)}
                        style={styles.inputs}
                    />

                    <Text style={styles.errorText}>
                        {cNameErr}
                    </Text>

                    <Text style={styles.StatDateText}>
                        Joining Date
                    </Text>

                    <View style={styles.inputs} >
                        <Text onPress={showDatepicker1}>
                            {startDate1 ? formatDate(startDate1) : "Select Date"} &nbsp;
                        </Text>
                        {showDatePicker1 && (
                            <DateTimePicker
                                value={startDate1 || new Date()}
                                mode="date"
                                display="default"
                                onChange={handleDateChange1}
                                maximumDate={new Date()}
                            />
                        )}
                    </View>

                    <Text style={styles.errorText}>
                        {startDateErr1}
                    </Text>

                    <Text style={styles.StatDateText}>
                        Last Working Day
                    </Text>

                    <View style={styles.inputs} >
                        <Text onPress={showDatepicker2}>
                            {startDate2 ? formatDate(startDate2) : "Select Date"} &nbsp;
                        </Text>
                        {showDatePicker2 && (
                            <DateTimePicker
                                value={startDate2 || new Date()}
                                mode="date"
                                display="default"
                                onChange={handleDateChange2}
                                maximumDate={new Date()}
                            />
                        )}
                    </View>

                    <Text style={styles.errorText}>
                        {startDateErr2}
                    </Text>

                    <Text style={styles.StatDateText}>
                        Authorised Person Name
                    </Text>

                    <TextInput
                        value={aPName}
                        onChangeText={(txt) => setAPName(txt)}
                        style={styles.inputs}
                    />

                    <Text style={styles.errorText}>
                        {aPNameErr}
                    </Text>

                    <Text style={styles.StatDateText}>
                        Authorised Person Designation
                    </Text>

                    <TextInput
                        value={aPDesignation}
                        onChangeText={(txt) => setAPDesignation(txt)}
                        style={styles.inputs}
                    />

                    <Text style={styles.errorText}>
                        {aPDesignationErr}
                    </Text>

                </View>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: '5%' }}>
                <TouchableOpacity style={styles.HeaderButtonActive} onPress={HandleSubmit}>
                    {
                        load ?
                            <ActivityIndicator size={"small"} color={"#fff"} /> :
                            <Text style={styles.HeaderButtonTextActive}>
                                Update
                            </Text>
                    }
                </TouchableOpacity>

                <TouchableOpacity style={styles.HeaderButton} onPress={Handlerefresh}>
                    <Text style={styles.HeaderButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>

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

        </ScrollView>

    )

}

export default EditRelievingLetter;