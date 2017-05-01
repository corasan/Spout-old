import { StyleSheet } from 'react-native'
import { MAIN, TEXT, LIGHT_TEXT } from '../lib/theme'

export default StyleSheet.create({
  feedContainer: {
    flex: 1,
    marginTop: 80,
  },
  // Styles for posts/post list
  postBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    flexDirection: 'row',
    marginBottom: 15,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timeAgoText: {
    fontSize: 12,
    color: LIGHT_TEXT,
  },
  usernameText: {
    color: MAIN,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 18,
  },
  postContentText: {
    color: TEXT,
    marginBottom: 15,
    marginTop: 10,
  },
  leftCol: {
    flex: 0.2,
    alignItems: 'center',
    marginLeft: -8,
  },
  rightCol: {
    flex: 0.8,
  },
  votes: {
    height: 32, width: 30,
  },
})
