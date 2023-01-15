// Severity rating, 1-5, 5 being the most severe
// Show the list of patients based upon the priority (which is determined by severity rating and wait time)
// John

import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import db from '../../config/firebase';

const Doctor = ({ navigation }) => {
    const docRef = doc(db, 'mcmaster-health', 'doctors');
    const docSnap = getDoc(docRef);

    const [firstRun, setFirstRun] = useState(true);
    const [names, setNames] = useState([]);
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        if (firstRun) {
            docSnap
                .then(doc => {
                    if (doc.exists) {
                        const data = doc.data();
                        for (const field in data) {
                            setNames(names.concat(field));
                            setDataList(dataList.concat(data[field]));
                        }
                    } else {
                        console.log("No such document!");
                    }
                })
                .catch(error => {
                    console.log("Error getting document:", error);
                });

                setFirstRun(false);
            }
    }, [])

    return (
        <>
            <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.welcomeText]}>Select Profile</Text>
            <FlatList
                contentContainerStyle={styles.listContent}
                data={dataList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Severity', {
                            name: item.name,
                            field: item.field,
                            patients: item.patients
                        });
                    }} style={styles.listButton} activeOpacity={0.8}>
                        <Text style={[{fontFamily: 'Outfit_600SemiBold'}, styles.listTextTitle]}>{item.name}</Text>
                        <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextDescription]}>{item.field}</Text>
                    </TouchableOpacity>
                )}
            />
    
        </>
    );
};

export default Doctor;

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 32,
        textAlign: 'center',
        margin: 10,
        marginTop: 50,
        color: "#ffffff"
    },
    listButton: {
        marginBottom: 10,
        backgroundColor: '#334155',
        padding: 15,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1,
        elevation: 1,
    },
    listContent: {
        margin: 10,
        marginStart: 50,
        marginEnd: 50
    },
    listTextTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
        color: "#fff"
    },
    listTextDescription: {
        textTransform: 'capitalize',
        textAlign: "center",
        margin: 5,
        fontSize: 18,
        color: "#fff"
    }
});
  