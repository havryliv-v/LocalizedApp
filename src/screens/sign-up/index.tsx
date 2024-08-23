import React, {useEffect, useState} from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  I18nManager,
  Platform,
} from 'react-native'
import {MainStackTypeParamList} from '../../../App'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useTranslation} from 'react-i18next'
import styles from './styles'
import i18next from 'i18next'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import RNRestart from 'react-native-restart'

type Props = NativeStackScreenProps<MainStackTypeParamList, 'SIGNUP_SCREEN'>

export const SignUp = ({navigation}: Props) => {
  const [rtl, setRTL] = useState(I18nManager.isRTL)

  const {t} = useTranslation()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [languageLoaded, setLanguageLoaded] = useState(false)

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language')
      const languageToSet = savedLanguage || 'en-US'
      await i18next.changeLanguage(languageToSet)
      setLanguageLoaded(false)
    }
    loadLanguage()
  }, [])
  console.log('render', I18nManager.isRTL)
  const changeLanguage = async (lang: string) => {
    setLanguageLoaded(false)

    await AsyncStorage.setItem('language', lang)
    await i18next.changeLanguage(lang)
    if (lang === 'he-IL') {
      I18nManager.forceRTL(true)
    } else {
      I18nManager.forceRTL(false)
    }
    RNRestart.Restart()
  }

  const onLogin = async () => {
    try {
      navigation.navigate('MAIN_SCREEN')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        console.error(error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('signUp.create')}</Text>
      <Text style={styles.justText}>{t('signUp.description')}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>{t('signUp.accountExists')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SIGNIN_SCREEN')}>
          <Text style={[styles.subTitle, styles.titleLink]}>
            {t('signUp.login')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={t('signUp.email')}
          placeholderTextColor="#8D8391"
          value={userName}
          onChangeText={setUserName}
          style={styles.input}
        />
        <TextInput
          placeholder={t('signUp.password')}
          placeholderTextColor="#8D8391"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>{t('signUp.continue')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => changeLanguage('en-US')}>
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('he-IL')}>
          <Text style={styles.languageText}>Hebrew</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}
