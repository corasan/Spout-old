import { StyleSheet } from 'react-native'
import { BACKGROUND_GRAY, IOS_FONT, MAIN, TINT } from '../lib/theme'

export default StyleSheet.create({
  signupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  signupBoxContainer: {
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
  signupBtnContainer: {
    paddingHorizontal: 18,
    marginTop: 40,
  },
  signupBtn: {
    backgroundColor: MAIN,
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: 4,
  },
  signupBtnText: {
    color: '#FFF',
    fontFamily: IOS_FONT,
    fontSize: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginBtnText: {
    fontSize: 22,
    color: '#FFF',
    backgroundColor: 'transparent',
    fontFamily: IOS_FONT,
  },
})
