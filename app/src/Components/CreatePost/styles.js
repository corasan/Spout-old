import { StyleSheet } from 'react-native'
import { MAIN, TEXT } from '../lib/theme'

export default StyleSheet.create({
  createPostContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
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
  postTextContent: {
    borderColor: 'red',
    borderWidth: 2,
    height: 100,
    borderRadius: 6,
  },
})
