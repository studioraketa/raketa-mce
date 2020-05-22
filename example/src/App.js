import React from 'react'

import { ReactMCE } from '@raketa-cms/raketa-mce'
import '@raketa-cms/raketa-mce/dist/index.css'

const App = () => {
  return (
    <div>
      <ReactMCE
        label="Text"
        value="<p>Create React <img src='https://placehold.it/100x100' /> Library Example 😄</p>"
        customStyles={[
          { key: 'highlight', title: 'Highlight', inline: 'span', classes: 'highlight' },
          { key: 'small', title: 'Small', inline: 'span', classes: 'text-small' },
        ]}
        onChange={value => console.log(value)}
      />
      <ReactMCE
        label="Content"
        value="<p>Another code</p>"
        customStyles={[
          { key: 'highlight', title: 'Highlight', inline: 'span', classes: 'highlight' },
          { key: 'small', title: 'Small', inline: 'span', classes: 'text-small' },
        ]}
        onChange={value => console.log(value)}
      />
    </div>
  )
}

export default App
