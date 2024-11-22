import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },

  topcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '90%',
    marginTop: "10%",
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 2,
  },

  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },

  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: "5%",
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
  },

  datetime: {
    fontSize: 16,
    lineHeight: 21.28,
    fontWeight: '600',
    color: "#000",
  },

  button: {
    borderRadius: 140,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "5%",
    elevation: 8,
  },

  buttontext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: "5%"
  },

  clockcontainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    // marginTop: 20,
    // borderWidth:1
  },

  clockCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
    // width: '33.3%',
    // borderWidth:1,
    // padding: 2,
  },

  timetext: {
    fontWeight: '400',
    color: "#000",
    fontSize: 14,
    // paddingTop: "5%",
    lineHeight: 18.62,
    // paddingBottom: "5%",
  },

  timenumbertext: {
    fontWeight: '500',
    color: "#000",
    fontSize: 14
  },

  CountContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },

  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: "1%",
  },

  CountContainerWidth: {
    width: '49%'
  },

  counterCards: {
    borderRadius: 5,
    marginTop: "1%",
    gap: 5,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: "center",
    elevation: 5,
    height: 78
  },

  fontStyle: {
    fontWeight: '400',
    fontSize: 16
  },

  numbers: {
    fontWeight: '700',
    fontSize: 24,
    color: "#000",
    lineHeight: 31.92,
  },

  EmployeeModeBoard: {
    width: "90%",
    paddingTop: "5%",
    paddingBottom: "5%",
    borderRadius: 19,
    backgroundColor: '#F4FDFF',
    alignItems: 'center',
  },

  EmployeeModeBoardContainer: {
    paddingTop: "5%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: "5%",
  },

  EmployeeModeBoardTitle: {
    color: '#00275C',
    fontWeight: '800',
    fontSize: 18,
    lineHeight: 23.94,
  },

  border: {
    borderBottomColor: "#A2CCD6",
    borderBottomWidth: 1,
    width: "80%",
    paddingTop: "5%",
  },

  textview: {
    alignItems: 'flex-start',
    // width: "65%",
  },

  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.62,
    color: "#000",
    paddingTop: "5%",
  },

  Emo: {
    flexDirection: 'row',
    // paddingTop: "5%",
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: "65%",
  },

  buttonContainer: {
    flexDirection: 'row',
    paddingTop: "5%",
  },

  buttonSubmit: {
    backgroundColor: "#1772FF",
    width: 94,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  buttonCancel: {
    backgroundColor: '#F4FDFF',
    width: 94,
    height: 31,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  EmployeeModeBoardbuttonSubmitText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.94,
  },

  EmployeeModeBoardbuttonCancelText: {
    color: '#1772FF',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.94,
  },

  EmployeeModeBoardListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: "5%",
  },

  EmployeeListModeBoard: {
    width: "90%",
    paddingVertical: '5%',
    borderRadius: 19,
    backgroundColor: '#F4FDFF',
    alignItems: 'center',
  },

  EmoCheck: {
    flexDirection: 'row',
    paddingTop: "5%",
    // paddingHorizontal: '5%',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },

  MoodBoardText: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 19.95,
  },

  EmoCheckList: {
    paddingTop: '5%',
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  viewMore: {
    color: '#0A60F1',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21.28,
  },

  viewMoreContainer: {
    paddingTop: '5%',
    alignItems: 'center'
  },

  AnnounceMentContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: "5%",
  },

  AnnounceMent: {
    // width: "90%",
    marginHorizontal: '5%',
    paddingTop: "5%",
    paddingBottom: "5%",
    borderRadius: 19,
    backgroundColor: '#F4FDFF',
    alignItems: 'center',
  },

  tittle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%'
  },

  tittleText: {
    color: '#00275C',
    lineHeight: 21.28,
    fontSize: 16,
    fontWeight: '700',
  },

  addbutton: {
    borderColor: '#0A60F1',
    borderWidth: 2,
    borderRadius: 5,
    width: 72,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addbuttonText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.62,
  },

  emojiButton: {
    padding: 5,
    borderRadius: 20,
    margin: 5,
  },

  selectedEmoji: {
    backgroundColor: '#D0F6FF',
  },

  option: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },

  selectedOption: {
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },

  AnnouncementData: {
    backgroundColor: '#E1F3F8',
    marginHorizontal: '7%',
    paddingTop: '5%',
    borderRadius: 7,
    marginTop: '5%'
  },

  AnnouncementDataHeadr: {
    paddingHorizontal: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  AnnouncementDataHeadrTitle: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18.62,
    width: '55%',
    // backgroundColor:'red',
  },

  AnnouncementDataHeadrWhen: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 19.95,
    width: '35%',
    // backgroundColor:'red',
    textAlign: 'right'
  },

  ModalerrorText: {
    color: "red",
    paddingTop: 10,
  },

  errorText: {
    color: "red",
    paddingBottom: '5%',
    width: "90%"
  },
  errorText1: {
    color: "red",
    // paddingBottom: '5%',
    width: "90%"
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

  modalCancelButton1: {
    // backgroundColor: '#ccc',
    borderColor: '#0A62F1',
    borderWidth: 1,
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
  },

  modalInput: {
    paddingLeft: 20,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "#515151",
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginVertical: '5%'
  },

  modalInput1: {
    paddingLeft: 20,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "#515151",
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginVertical: '5%'
  },

  inputs: {
    borderWidth: 0.5,
    borderColor: '#515151',
    marginVertical: '5%',
    // width: '90%',
    height: 50,
    borderRadius: 7,
    paddingHorizontal: '5%',
    marginBottom: '3%',
    justifyContent: 'center',
  },

  modalLabelText: {
    paddingTop: '5%',
    paddingBottom: '5%'
  },

  Activeindicator: {
    height: 100,
  },
  progressbarview: {
    padding: 10,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
  },
  datetext: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0A62F1',
    marginVertical: 5,
  },
  shifttext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3A3A3A',
    // textAlign: 'center',
    marginVertical: 5,
  },
  checkin: {
    width: '45%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#C5D5F0',
    alignSelf: 'center',
    padding: 7,
    borderRadius: 5,
  },
  checkintext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7089B2',
    textAlign: 'center',
  },
  buttonview: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  boardview: {
    // borderWidth:0.5,
    width: '100%',
    // flexDirection:'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  boardtextview: {
    borderBottomWidth: 0.3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  boardtext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00275C',
    textAlign: 'center',
  },
  emojiHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginVertical: 10,
    // borderWidth:1
  },
  card1: {
    backgroundColor: '#CBDEF4',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00275C'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  holidayDetails: {
    alignItems: 'center',
  },
  holidayName: {
    color: '#0A62F1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  holidayDate: {
    color: '#757575',
    fontSize: 14,
  },
  whatsmind: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  whatsmindview: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  plusview: {
    height: 25,
    width: 25,
    backgroundColor: '#0A62F1',
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotview: {
    // height: 50,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    // borderWidth:1
  },
  dotview2: {
    // borderWidth:1,
    // height: 40,
    width: '70%',
    backgroundColor: '#0A62F1',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postview: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
    // borderWidth:1,
  },
  allbutton: {
    width: '15%',
    borderWidth: 1,
    borderColor: '#0A62F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 3,
  },
  alltext: {
    fontSize: 16,
    fontWeight: '400',
    color: '#0A62F1',
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  headerRow: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
   headerRow2: {
    width: '92%',
    // borderWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  role: {
    color: 'gray',
    fontSize: 12,
  },
  time: {
    color: 'grey',
    fontSize: 12,
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
    color:'#000'
  },
  postImage: {
    width: '100%',
    height: 350,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  likesContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  likeText: {
    fontSize: 14,
    color: 'gray',
  },
  reactionsContainer: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginBottom: 10,
  },
  reaction: {
    fontSize: 14,
    color: '#3b5998',
  },
  activeReaction: {
    fontWeight: 'bold',
    color: '#1DA1F2',
  },
  iconview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    height: '30%',
    width: '100%',
    padding: 25,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  modalContainer1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText1: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: '600',
    color: '#3A3A3A'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000'
  },
  role: {
    fontSize: 14,
    color: 'grey',
  },
  date: {
    fontSize: 14,
    color: '#0A62F1',
    fontWeight: '500'
  },
  birthtext: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 15
  },

  monthtext: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B6B6B',
    marginLeft: 15,
    marginVertical: 10
  },
  headerviews: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#20DDFE',
    padding: 20
  },
  inprogress: {
    backgroundColor: '#D9F4FF',
    padding: 4,
    borderRadius: 5,

  },
  titlecard: {
    // borderWidth:1,
    width: '93%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10
  },
  titletext: {
    fontSize: 15,
    fontWeight: '500',
    color:'#3F3F3F'
  },
  input: {
    // height: 40
    width: '100%',
    alignSelf: 'center',
    margin: 12,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    borderRadius: 5
  },
  buttonview: {
    width: '100%',
    backgroundColor: '#D4E7EB',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10
  },
  filetext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center'
  },
  StatDateText: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 21.28,
    paddingBottom: "3%",
    width: "90%",
    color: '#2C2C2C',
  },
  inputs: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    // height: 52,
    borderRadius: 7,
    paddingHorizontal: '5%',
    marginBottom: '3%',
    justifyContent: 'center',
    color: '#000',
    padding: 15,

  },
  submitbt: {
    width: '30%',
    backgroundColor: '#0A62F1',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    // borderWidth:1
  },
  submitbt2: {
    width: '30%',
    borderColor: '#0A62F1',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 10
  },
  subtext: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center'
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginLeft: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D4E7EB',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#E1F1FC',
  },
  headerCell: {
    // width: 100,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'grey',
       marginLeft: 10,
    // borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor:'#20DDFE',
    borderRadius: 5,
    borderColor: 'grey'
  },
  cell: {
    width: 100,
    padding: 10,
    textAlign: 'center',
    borderColor: '#ccc',
    // borderWidth: 1,
  },
  DocFileName: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21.28,
    // marginBottom: '5%',
    marginVertical: 10,
    marginHorizontal: '5%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: '3%',
    width: '95%',
    backgroundColor: '#D4E7EB',
    color:'#000'
  },
  DocFileName1: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21.28,
    // marginBottom: '5%',
    marginVertical: 10,
    marginHorizontal: '5%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: '3%',
    width: '95%',
    backgroundColor: '#D4E7EB',
    color:'#000'
  },

  DocFileNameHolder: {
    width: '90%',
    lineHeight: 21.28,
    marginVertical: 10,
    fontSize: 14,
    color:'#000'
    // marginBottom: '5%',
  },
  DocFileNameHolder1: {
    width: '90%',
    lineHeight: 21.28,
    marginVertical: 10,
    fontSize: 14,
    color:'#000'
    // marginBottom: '5%',
  },
  listcontenteditbutton: {
    width: 26,
    height: 26,
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 10,
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
  bottomview: {
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
    padding: 10
  },
  dropdownOptionText: {
    fontSize: 16,
  },
  dropdown: {
    width: 250,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#ccc",
    marginLeft: 10,marginBottom:7

  },
  StatusTouchableText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.95,
    color: '#00275C',
  },
  dropdownOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  StatusTouchable: {
    width: 250,
    height: 52,
    // backgroundColor: '#F3FCFF',
    borderWidth: 1,
    borderColor: '#0A62F1',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginLeft: 10,
    borderRadius: 5

  },
  inputContainer: {
    // height:40,
    width:'95%',
    alignSelf:'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginVertical:10,
    borderColor: '#0A62F1',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 150,
    color: '#000',
    borderColor: '#0A62F1',
    padding: 10,
    textAlignVertical: 'top',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: '5%'
},

Button: {
    width: 136,
    height: 41,
    borderRadius: 5,
    backgroundColor: '#0A62F1',
    alignItems: 'center',
    justifyContent: 'center',
},

ButtonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 16
},

InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    borderWidth: 1,
    borderColor: '#A4CED8',
    marginVertical: '5%',
    borderRadius: 6,
    justifyContent: 'space-between',
    height: 50
},

Input: {
    width: "80%",
    paddingLeft: "5%"
},
progressContainer: {
  position: 'relative', // Allows stacking Text on top of Progress.Bar
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
},
progressText: {
  position: 'absolute',
  fontSize: 16,
  fontWeight: 'bold',
  color: 'grey', // Use white text for better contrast
},
});

export default styles;

