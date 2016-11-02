import React from 'react'
import classes from './Zen.scss'

export const autoFetchZen = (fetchZen) => {
  setTimeout(fetchZen, 10000)
}
export const Zen = (props) => (
  <div>
    <div>
      <h2 className={classes.zenHeader}>
        {props.zen ? props.zen.value : ''}
      </h2>
      <div>
        <input id='zenInput' type='textarea' />
        <button className='btn btn-default' onClick={props.addZen}>
          Add Zen
        </button>
      </div>
      <button className='btn btn-default' onClick={autoFetchZen(props.fetchZen)}>
        Auto-Fetch wisdoms
      </button>
      <button className='btn btn-default' onClick={props.fetchZen}>
        Fetch a wisdom
      </button>
      {' '}
      <button className='btn btn-default' onClick={props.saveCurrentZen}>
        Save
      </button>
      <div>
        <input id='emojiInput' type='textarea' />
        <button className='btn btn-default' onClick={props.fetchEmoji}>
          Add emoji
        </button>
      </div>
    </div>
    <div>
      <img src={props.emoji} />
    </div>
    {props.saved.length
      ? <div className={classes.savedWisdoms}>
        <h3>
          Saved wisdoms
        </h3>
        <ul>
          {props.saved.map(zen =>
            <li key={zen.id}>
              {zen.value}
            </li>
          )}
        </ul>
      </div>
      : null
    }
  </div>
)

Zen.propTypes = {
  zen: React.PropTypes.object,
  addZen: React.PropTypes.func.isRequired,
  saved: React.PropTypes.array.isRequired,
  fetchZen: React.PropTypes.func.isRequired,
  fetchEmoji: React.PropTypes.func.isRequired,
  emoji: React.PropTypes.string,
  saveCurrentZen: React.PropTypes.func.isRequired
}

export default Zen
