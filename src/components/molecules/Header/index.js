import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { IconBack } from '../../../assets'
import { Gap } from '../../atoms'

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>

      {
        onBack && (
          <TouchableOpacity onPress={onBack} activeOpacity={0.5}>
            <View style={styles.back}>
              <IconBack />
            </View>
         </TouchableOpacity>
        )
      }

      <Gap width={26} />
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container : {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text : {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  back: {
    padding: 10,
  }
})