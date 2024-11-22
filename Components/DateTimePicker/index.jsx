// import React from "react";
// import { Modal, Platform, Text, TouchableOpacity, View } from "react-native";
// import DatePicker from 'react-native-date-picker';

// const DateTimePickerComponent = ({ date, formattedDate, Picker, setPicker, setDate }) => {
//     return (
//         <>
//             <Text onPress={() => setPicker(true)}>
//                 {date ? formattedDate : "Select Date"} &nbsp;
//             </Text>
//             <DatePicker
//                 modal
//                 open={Picker}
//                 date={date || new Date()}
//                 mode="date"
//                 onConfirm={(date) => {
//                     setPicker(false)
//                     setDate(date)
//                 }}
//                 onCancel={() => {
//                     setPicker(false)
//                 }}
//             />
//         </>
//     );
// };

// export default DateTimePickerComponent;

import React from "react";
import { Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import DatePicker from 'react-native-date-picker';

const DateTimePickerComponent = ({ date, formattedDate, Picker, setPicker, setDate ,mode}) => {
    return (
        <>
            <Text
                onPress={() => setPicker(true)}
                style={{ color: date ? "black" : "gray" }}  // Change color here
            >
                {date ? formattedDate : "Select Date"} &nbsp;
            </Text>
            <DatePicker
                modal
                open={Picker}
                date={date || new Date()}
                mode={mode}
                onConfirm={(date) => {
                    setPicker(false);
                    setDate(date);
                }}
                onCancel={() => {
                    setPicker(false);
                }}
            />
        </>
    );
};

export default DateTimePickerComponent;
