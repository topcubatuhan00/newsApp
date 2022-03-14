/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 5,
        marginBottom: 50,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        paddingBottom: 5,
    },
    description: {
        fontSize: 15,
    },
    author: {
        textAlign: 'right',
        fontStyle: 'italic',
        paddingTop: 5,
        opacity: 0.6,
    },
    innerContainer: {
        padding: 10,
    },
});
