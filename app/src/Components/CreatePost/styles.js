import { StyleSheet } from 'react-native'
import { MAIN, BACKGROUND_GRAY, IOS_FONT_BOLD, TINT, IOS_FONT } from '../lib/theme'

export default StyleSheet.create({
  createPostContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 100,
  },
  closeModalIcon: {
    height: 30,
    width: 30,
  },
  closeModalBtn: {
    zIndex: 10,
    position: 'absolute',
    right: 15,
    top: 32,
  },
  postInput: {
    height: 110,
    borderRadius: 6,
    padding: 6,
    fontSize: 16,
    maxHeight: 200,
    backgroundColor: BACKGROUND_GRAY,
  },
  tellTheWorld: {
    fontSize: 30,
    color: TINT,
    fontFamily: IOS_FONT_BOLD,
    marginBottom: 60,
    textAlign: 'center',
  },
  charsLeft: {
    fontFamily: IOS_FONT,
    backgroundColor: 'transparent',
  },
  sendPostBtnContainer: {
    paddingHorizontal: 18,
    marginTop: 10,
  },
  senPostBtn: {
    backgroundColor: MAIN,
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  sendPostText: {
    color: '#FFF',
    fontFamily: IOS_FONT,
    fontSize: 16,
  },
})
