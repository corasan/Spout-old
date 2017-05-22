import { StyleSheet } from 'react-native'
import { MAIN, TEXT, LIGHT_TEXT } from '../lib/theme'

export default StyleSheet.create({
  feedContainer: {
    flex: 1,
    marginTop: 70,
  },
  // Styles for posts/post list
  postBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 4,
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
    marginLeft: -15,
  },
  rightCol: {
    flex: 0.8,
  },
  votes: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: 'bold',
    color: MAIN,
  },
  postRow: {
    flex: 1,
    flexDirection: 'row',
  },
  likeAndCommentText: {
    color: MAIN,
    fontWeight: 'bold',
    fontSize: 15,
  },
  commentsCount: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 11,
    right: 92,
    fontSize: 11,
    color: MAIN,
  },
  icons: {
    marginRight: 6,
  },
})
