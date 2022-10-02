import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  headerCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: "#40896b",
    flexDirection:"row",
  },
  pageCont: {
    flex: 8,
    alignItems:"center",
    padding: width*3/100,
    backgroundColor:"#b7e4c7"
  },
  listCont:{
    flexDirection:"row",
  },
  secHeaderCont:{
    justifyContent:"center",
    marginRight:width*1/100,
    width: width*25/100,
    justifyContent:"space-around"
  },
  textInputCont:{
  },
  textInput: {
    width: width*70/100,
    height: width*1/10,
    borderWidth:2,
    borderRadius:5,
    borderColor:"#0b3866",
    padding:5,
    marginVertical: width*2/100,
    backgroundColor: "#dddddd"
  },
  buttonCont:{
    width: width,
    paddingRight:8,
    paddingTop:10,
    alignItems:"flex-end",
  },
  saveButton:{
    width: width*15/100,
    height: width*7/100,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    backgroundColor:"#0b3866",
  },
  buttonText:{
    color: "#dddddd"
  }
});

export default styles;
