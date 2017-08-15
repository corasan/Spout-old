import { StyleSheet } from 'react-native'
import { MAIN, TINT, LIGHT_TEXT, IOS_FONT, IOS_FONT_BOLD } from '../ui/theme'

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
    fontFamily: IOS_FONT,
  },
  usernameText: {
    color: MAIN,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16,
    fontFamily: IOS_FONT,
  },
  postContentText: {
    color: TINT,
    marginBottom: 15,
    marginTop: 5,
    fontFamily: IOS_FONT,
  },
  leftCol: {
    flex: 0.2,
    alignItems: 'center',
    marginLeft: -15,
  },
  rightCol: {
    flex: 0.8,
  },
  postRow: {
    flex: 1,
    flexDirection: 'row',
  },
  agreeAndDisagreeButton: {
    color: '#a7a7a7',
    fontSize: 12,
    fontFamily: IOS_FONT_BOLD,
  },
  commentsCount: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 8,
    right: 85,
    fontSize: 11,
    color: MAIN,
    fontFamily: IOS_FONT,
  },
  icons: {
    marginRight: 6,
  },
  agreeAndDisagreeText: {
    fontSize: 11,
    color: LIGHT_TEXT,
  },
  lineDivide: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: LIGHT_TEXT,
    marginTop: 4,
  },
})
