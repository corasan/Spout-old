import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null,
    justifyContent: 'center',
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
    color: '#fff',
    fontSize: 14,
  },
  loginBtn: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 18,
  },
  signupBtnText: {
    color: '#16A085',
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default styles
