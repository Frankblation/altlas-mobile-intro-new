import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function addActivityScreen() {
  return (
    <View>
      <Text>AddActivityScreen</Text>
      <Link style={styles.button} href={"/"} replace>
        <Text style={styles.buttonText}>Go Back</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#a57865",
        padding: 16,
        width:"100%",
        textAlign: "center",
        borderRadius: 20,
        borderColor:"black",
        marginTop: "100%",
      },

    buttonText:{
        color:"white",
    },
})