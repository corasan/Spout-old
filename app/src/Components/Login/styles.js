import { StyleSheet } from 'react-native'
import { BACKGROUND_GRAY, MAIN, IOS_FONT, TINT } from '../lib/theme'

export default StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  loginBoxContainer: {
    marginTop: -30,
    justifyContent: 'center',
    width: 313,
    backgroundColor: '#FFF',
    paddingBottom: 15,
    borderRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000000',
    shadowOpacity: 0.27,
  },
  inputContainer: {
    paddingHorizontal: 32,
  },
  input: {
    height: 44,
    backgroundColor: BACKGROUND_GRAY,
    borderRadius: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
    fontFamily: IOS_FONT,
    color: TINT,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: 2,
    paddingRight: 32,
  },
  forgotText: {
    fontSize: 14,
    color: MAIN,
    fontFamily: IOS_FONT,
  },
  loginBtnContainer: {
    paddingHorizontal: 18,
    marginTop: 40,
  },
  loginBtn: {
    backgroundColor: MAIN,
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: 4,
  },
  loginBtnText: {
    color: '#FFF',
    fontFamily: IOS_FONT,
    fontSize: 20,
  },
  signupBtnText: {
    fontSize: 22,
    color: '#FFF',
    backgroundColor: 'transparent',
    fontFamily: IOS_FONT,
  },
})
