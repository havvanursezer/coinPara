import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#40896b",
  },
  headerText:{
    color:"#b7e4c7",
    fontSize:20
  },
  secHeaderCont:{
    flex:0.2,
    flexDirection:"row",
    justifyContent:"space-evenly",
    borderBottomWidth:1,
    backgroundColor:"#0b3866"
  },
  secHeaderText:{
    color:"#b7e4c7",
  },
  pageCont: {
    flex: 8,
    flexDirection:"row",
    backgroundColor:"#b7e4c7"
  },
  tableCont: {
    flexDirection: "row"
  },
  topCont:{
    flexDirection:"row"
  },
  columnButtons:{
    flexDirection:"row", 
    justifyContent:"space-around", 
    borderBottomWidth:1
  }
});

export default styles;
