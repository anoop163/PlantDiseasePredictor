import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
const SecondScreen = ({route}) => {
let label = route.params.label
let culture = route.params.culture;
let resistance = route.params.resistance;
let chemicalcontrol = route.params.chemicalcontrol;
let sanitation = route.params.sanitation;
return (
<ScrollView>
<View style={styles.container}>
<View style={styles.tableRow}>
<Text style={styles.tableHeader2}>Information Name</Text>
<Text style={styles.tableHeader}>Details</Text>
</View>
<View style={styles.tableRow}>
<Text style={styles.tableCell2}>Disease Type</Text>
<Text style={styles.tableCell}>{label}</Text>
</View>
<View style={styles.tableRow}>
<Text style={styles.tableCell2}>Culture</Text>
<Text style={styles.tableCell}>{culture}</Text>
</View>
<View style={styles.tableRow}>
<Text style={styles.tableCell2}>Resistance</Text>
<Text style={styles.tableCell}>{resistance}</Text>
</View>
<View style={styles.tableRow}>
<Text style={styles.tableCell2}>Chemical Control</Text>
<Text style={styles.tableCell}>{chemicalcontrol}</Text>
</View>
<View style={styles.tableRow}>
<Text style={styles.tableCell2}>Sanitation</Text>
<Text style={styles.tableCell}>{sanitation}</Text>
</View>
</View>
</ScrollView>
36
);
};
const styles = StyleSheet.create({
container: {
borderWidth: 1,
borderColor: '#000',
borderRadius: 5,
overflow: 'hidden',
},
tableRow: {
flexDirection: 'row',
},
tableHeader: {
flex: 1,
backgroundColor: '#ccc',
padding: 10,
fontWeight: 'bold',
textAlign: 'justify',
},
tableHeader2: {
flex: 0.3,
backgroundColor: '#ccc',
padding: 10,
fontWeight: 'bold',
textAlign: 'justify',
},
tableCell: {
flex: 1,
padding: 10,
textAlign: 'justify',
},
tableCell2: {
flex: 0.3,
padding: 10,
textAlign: 'justify',
},
});
export default SecondScreen;
