import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalCancelButton1: {
        // backgroundColor: '#ccc',
        borderColor:'#0A62F1',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 34,
        borderRadius: 5,
    },

    modalCancelButtonText1: {
        fontSize: 15,
        fontWeight: '400',
        color: '#0A62F1',
    },
    errorTextDelete: {
        color: "red",
        paddingBottom: 10,
        width: "90%"
    },
    RolelistContainer: {
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '5%'
    },
    listContainer: {
        backgroundColor: "#fff",
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#A4CED8',
        width: "90%",
    },
    listHeader: {
        backgroundColor: '#E1F1FC',
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
        flexDirection: 'row',
        width: '100%',
        height: 44,
        alignItems: 'center'
    },
    sno: {
        width: '25%',
        color: "#404040",
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 19.95,
        paddingLeft: "5%"
    },
    RoleName: {
        width: '45%',
        color: "#404040",
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 19.95,
    },
    Action: {
        width: '30%',
        color: "#404040",
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 19.95,
        textAlign: 'center'
    },
    listcontent: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    listcontentsno: {
        width: '25%',
        paddingLeft: "7%",
    },
    listcontentRoleName: {
        width: '45%',
    },
    listcontentButtonview: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    listcontenteditbutton: {
        width: 26,
        height: 26,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#76B700",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F6E5'
    },
    listcontentdelbutton: {
        width: 26,
        height: 26,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#FF7676",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFE0E0'
    },
    Activeindicator: {
        height: 150
    },
    ModalerrorText: {
        color: "red",
        paddingTop: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTextHeading: {
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        color: "#000",
        paddingBottom: '10%',
    },
    Heading: {
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        color: "#000",
    },
    modalText: {
        marginBottom: 5,
        fontSize: 18,
        fontWeight: '600',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: '10%'
    },
    modalCancelButton: {
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 34,
        borderRadius: 5,
    },
    modalCancelButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    modalDeleteButton: {
        backgroundColor: '#0A62F1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 90,
        height: 34,
    },
    modalDeleteButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    modalSubmitButton: {
        backgroundColor: '#0A62F1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 90,
        height: 34,
    },
    modalSubmitButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    Reason: {
        marginBottom: "5%",
        borderRadius: 5,
        borderColor: '#515151',
        borderWidth: 1,
        paddingLeft: 20,
        height:42
    },
    modalInput: {
        paddingLeft: 20,
        borderRadius: 7,
        borderWidth: 0.5,
        borderColor: "#515151",
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: "5%",
        paddingLeft: "5%"

    },
    modalLabelText: {
        paddingTop: '5%',
        paddingBottom: '5%'
    },
})

export default styles;