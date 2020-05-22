import React from 'react'

import { RichEditor } from '@raketa-cms/raketa-mce'
import '@raketa-cms/raketa-mce/dist/index.css'

const App = () => {
  return (
    <div>
      <RichEditor
        label="Text"
        value="<p>Create React <img src='https://placehold.it/100x100' /> Library Example 😄</p>"
        customStyles={[
          { key: 'highlight', title: 'Highlight', inline: 'span', classes: 'highlight' },
          { key: 'small', title: 'Small', inline: 'span', classes: 'text-small' },
        ]}
        onChange={value => console.log(value)}
      />

      <RichEditor
        label="Content"
        value="<p>Another code</p>"
        onChange={value => console.log(value)}
      />
    </div>
  )
}

export default App
