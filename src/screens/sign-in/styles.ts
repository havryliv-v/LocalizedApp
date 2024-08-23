// import {DefaultTheme} from '@react-navigation/native'
import {I18nManager, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    marginTop: '40%',
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    marginRight: 3,
  },
  titleLink: {
    color: '#6f5afb',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  inputContainer: {
    width: '100%',

    marginTop: 40,
    alignItems: 'center',
  },
  input: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    width: '90%',
    backgroundColor: '#BFBFBF',
    borderWidth: 0,
    paddingLeft: 15,
    height: 50,
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    margin: 5,
    padding: 5,
  },
  button: {
    backgroundColor: '#6f5afb',
    width: '90%',
    height: 60,
    padding: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  languageText: {color: 'black', fontSize: 18},
  errorText: {
    color: 'red',
  },
})
