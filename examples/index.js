import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import './styles.css'

const components = [
  'scroll',
  'parallax',
  'transitions',
  'nativespring',
  'areas',
  'trails',
  'reveals',
  'gestures',
  'timing',
  'spring',
  'tree',
  'grid',
  'morph',
  'sunburst',
  'onrest',
  'treeview',
  'keyframes',
  'script',
  'auto',
  'router',
].map(path =>
  Loadable({
    loader: () => import('./demos/' + path),
    loading: () => <div />,
  })
)

const DEBUG = false
const DebugComponent = components[5]

ReactDOM.render(
  DEBUG ? (
    <DebugComponent />
  ) : (
    <div className="app-container">
      {components.map((Component, i) => <Component key={i} />)}
    </div>
  ),
  document.getElementById('root')
)
