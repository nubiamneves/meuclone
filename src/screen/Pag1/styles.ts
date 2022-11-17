import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 64,
        paddingHorizontal: 30
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center"
    },
    loginbottom:{
        color: 'black',
        fontSize: 16,
        marginTop: 20,
        textAlign: "center",
        fontWeight: "bold"
    },
    input:{
        marginTop: 30,
        marginVertical: 30,
        fontWeight: 'bold',
        paddingVertical: 5,
        borderBottomWidth: 0.3
    },
    localization: {
        marginTop: 30,
        color: 'black',
        fontSize: 16,
        borderBottomWidth: 0.3
    },
    button: {
        backgroundColor: 'black',
        padding: 13,
        alignItems: 'center',
        marginTop: 20
    },
    buttomText:{
        color:'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})