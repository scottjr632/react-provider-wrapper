import React from 'react'
import ReactDOM from 'react-dom'

import WrapProviders from '../reactWrapperProvider'
import providers from '../__mocks__/providers'
import App from '../__mocks__/application.mock'

describe('React wrapper provider', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WrapProviders providers={providers}>
      <App />
    </WrapProviders>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})