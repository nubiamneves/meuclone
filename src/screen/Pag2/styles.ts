import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 64,
        paddingHorizontal: 20
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingBottom: 20
    },
    description: {
        fontSize: 13,
        backgroundColor: '#add8e6',
        color: 'black',
        paddingHorizontal: 10
    },
    date: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 12,
        color: 'black',
        textAlign: 'left'
    },
    situacao:{
        color: 'grey',
        textAlign: 'right',
        paddingBottom: 20
    },
    subtitle:{
        color: 'black',
        fontSize: 16,
        marginTop: 20,
        textAlign: "center",
        fontWeight: "bold"
    },
    image:{
        height: 130,
        width: 100
    },
    label:{    
        paddingBottom: 10, 
        borderBottomWidth: 0.3,
        color: 'grey'
    },
})