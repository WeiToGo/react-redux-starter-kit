import {
  UPLOAD_IMAGE,
  uploadImage,
  default as loginReducer
} from 'routes/Login/modules/counter'

describe('(Redux Module) Login', () => {
  it('Should export a constant UPLOAD_IMAGE.', () => {
    expect(UPLOAD_IMAGE).to.equal('UPLOAD_IMAGE')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(loginReducer).to.be.a('function')
    })

    it('Should initialize with a state of null.', () => {
      expect(loginReducer(undefined, {})).to.equal(null)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = loginReducer(undefined, {});
      expect(state).to.equal(null);
      state = loginReducer(state, { type: '@@@@@@@' });
      expect(state).to.equal(null);
      state = loginReducer(state, uploadImage('blabla'));
      expect(state).to.equal('blabla');
      state = loginReducer(state, { type: '@@@@@@@' });
      expect(state).to.equal('blabla');
    })
  })

  describe('(Action Creator) uploadImage', () => {
    it('Should be exported as a function.', () => {
      expect(uploadImage).to.be.a('function')
    })

    it('Should return an action with type "UPLOAD_IMAGE".', () => {
      expect(uploadImage()).to.have.property('type', UPLOAD_IMAGE)
    })

    it('Should assign the first argument to the "imageUrl" property.', () => {
      expect(uploadImage('image')).to.have.property('imageUrl', 'image');
    })

    it('Should default the "imageUrl" property to null if not provided.', () => {
      expect(uploadImage()).to.have.property('imageUrl', null)
    })
  })
})
