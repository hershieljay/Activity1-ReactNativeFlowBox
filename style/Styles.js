import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1
      
    },
    container2: {
        flex: 0,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        marginTop: 20,
        alignItems: 'center'
        
    },
    mainheader: {
        width: 370,
        height: 230,
        marginTop: 40,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    },
    subheader: {
        width: 370,
        height: 80,
        marginTop: 10,
        backgroundColor: '#F0EEED',
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'

    },
    name: {
        color: 'white',
    },
    contentmargin: {
        marginLeft: 15,
        marginTop: 30
    },
    subtext: {
        color: 'black' ,
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 25,
        marginTop: 25,
    
    },
    subtxt2: {
        fontSize: 13,
        marginRight: 40,
        marginTop: 23 
    }
  });
