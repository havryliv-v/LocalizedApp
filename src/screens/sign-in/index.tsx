import React, {useState} from 'react'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'
import {MainStackTypeParamList} from '../../../App'
import i18next from 'i18next'
import {useTranslation} from 'react-i18next'
import {styles} from './styles'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<MainStackTypeParamList, 'SIGNIN_SCREEN'>

export const SignIn = ({navigation}: Props) => {
  const {t} = useTranslation()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const onLogin = async () => {
    try {
      // const user = await signIn(userName, password)
      navigation.navigate('MAIN_SCREEN')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('login.title')}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>{t('login.noAccount')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SIGNUP_SCREEN')}>
          <Text style={[styles.subTitle, styles.titleLink]}>
            {t('login.signUp')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={t('login.email')}
          placeholderTextColor="#8D8391"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder={t('login.password')}
          placeholderTextColor="#8D8391"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>{t('login.login')}</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}
