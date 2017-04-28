import { StyleSheet } from 'react-native'
import { MAIN, TEXT } from '../lib/theme'

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 50,
    paddingTop: 40,
  },
  signupText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: MAIN,
  },
  input: {
    width: 266,
    height: 34,
    color: TEXT,
  },
  inputContainer: {
    borderBottomColor: MAIN,
    borderBottomWidth: 1,
    height: 34,
    marginTop: 30,
    paddingHorizontal: 5,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'center',
    marginBottom: 20,
  },
  signupBtn: {
    paddingVertical: 10,
    backgroundColor: MAIN,
    width: 211,
    borderWidth: 0,
  },
  signupBtnText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
})

export default styles
