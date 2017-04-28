import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null,
    // justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 50,
  },
  input: {
    width: 266,
    height: 34,
    color: '#fff',
  },
  inputContainer: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    height: 34,
    marginTop: 30,
    paddingHorizontal: 5,
  },
  loginText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: 15,
  },
  forgotText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 14,
  },
  loginBtn: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingVertical: 10,
    width: 211,
  },
  loginBtnText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  signupBtnText: {
    color: '#16A085',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'center',
    marginBottom: 30,
  },
})

export default styles
