import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container: {
        // paddingTop:50
    },

    activityIndicator: {
        marginTop: '80%'
    },

    profileimage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "10%"
    },

    imageStyle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#0A60F1',
    },

    iconStyle: {
        width: 150,
        height: 150,
        borderRadius: 150,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#A4CED8",
        borderColor: "#0A60F1"
    },

    name: {
        fontSize: 22,
        fontWeight: '700',
        paddingTop: 10,
        lineHeight: 26.63,
        color: '#00275C',
    },

    Role: {
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        lineHeight: 21.28,
        color: '#3A3A3A',
    },

    employeeContainer: {
        alignItems: 'center',
    },

    employeeCard: {
        width: "90%",
        backgroundColor: '#F4FDFF',
        borderWidth: 1,
        borderColor: '#A4CED8',
        borderRadius: 16,
        marginTop: '5%'
    },

    cardheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        alignItems: 'center'
    },

    header: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 26.6,
        color: '#00275C',
        paddingVertical: '5%'
    },

    cardBody: {
        borderTopWidth: 1,
        borderColor: '#CBCBCB',
        marginHorizontal: '5%'
    },

    bodyline: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: '3%',
        width: '100%'
    },

    halfWidth: {
        width: '45%',
    },

    Editbutton: {
        backgroundColor: '#0A62F1',
        width: 110,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: '5%'
    },

    EditText: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 21.28,
        color: '#fff'
    }

})

export default styles;