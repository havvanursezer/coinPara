import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/mainPage'

export default function HeaderComponent() {
  return (
    <View style={styles.secHeaderCont}>
      <Text style={styles.secHeaderText}>Sembol</Text>
      <Text style={styles.secHeaderText}>Max.Para Ç.</Text>
      <Text style={styles.secHeaderText}>Min.Para Ç.</Text>
      <Text style={styles.secHeaderText}>Max.Mev.</Text>
      <Text style={styles.secHeaderText}>Min.Mev.</Text>
    </View>
  )
}