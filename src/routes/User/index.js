import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'user',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    console.log('get ')
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const User = require('./containers/UserContainer').default
      const user = require('./modules/user').default

      /*  Add the reducer to the store on key 'counter'  */
      console.log('user ', user)
      injectReducer(store, { key: 'user', user })

      /*  Return getComponent   */
      cb(null, User)

    /* Webpack named bundle   */
    }, 'user')
  }
})
