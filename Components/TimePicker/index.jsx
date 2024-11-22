import React from "react";
import { Text } from "react-native";
import DatePicker from 'react-native-date-picker';
import { format } from "date-fns";

const TimePickerComponent = ({ date, formattedDate, Picker, setPicker, setDate }) => {
    return (
        <>
            <Text
                onPress={() => setPicker(true)}
                style={{ color: date ? "black" : "gray" }}  // Set the color conditionally
            >
                {date ? formattedDate : "Select Time"} &nbsp;
            </Text>
            <DatePicker
                modal
                open={Picker}
                date={date || new Date()}
                mode="time"
                onConfirm={(date) => {
                    setPicker(false);
                    setDate(format(date, 'HH:mm:ss'));
                }}
                onCancel={() => {
                    setPicker(false);
                }}
            />
        </>
    );
};

export default TimePickerComponent;