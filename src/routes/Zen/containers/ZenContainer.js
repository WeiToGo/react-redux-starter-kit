import { connect } from 'react-redux'
import { fetchZen, saveCurrentZen, addZen, fetchEmoji } from '../modules/zen'

import Zen from '../components/Zen'

const mapDispatchToProps = {
  fetchZen,
  saveCurrentZen,
  addZen,
  fetchEmoji
}

const mapStateToProps = (state) => ({
  zen: state.zen.zens.find(zen => zen.id === state.zen.current),
  saved: state.zen.zens.filter(zen => state.zen.saved.indexOf(zen.id) !== -1),
  emoji: state.zen.emoji
})

export default connect(mapStateToProps, mapDispatchToProps)(Zen)
