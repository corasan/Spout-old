import React, { Component, PropTypes } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { MAIN, LIGHT_TEXT, TINT } from '../ui/theme'

export default class TabBar extends Component {
  static propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.arrayOf(PropTypes.string),
    style: PropTypes.objectOf(PropTypes.string),
  }

  static defaultProps = {
    tabs: [],
    activeTab: 0,
    style: {},
    goToPage: null,
  }

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                name={tab}
                size={25}
                color={this.props.activeTab === i ? MAIN : LIGHT_TEXT}
                ref={(icon) => { this.props.tabs[i] = icon }}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  tabs: {
    height: 46,
    flexDirection: 'row',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.08)',
    backgroundColor: '#FFFFFF',
  },
  btnContainer: {
    height: 58,
    width: 58,
    borderRadius: 100,
    backgroundColor: TINT,
    position: 'absolute',
    bottom: 3,
    left: 180,
    zIndex: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.27,
  },
  btn: {
    height: 58,
    width: 58,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

