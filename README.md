# @raketa-cms/raketa-mce

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@raketa-cms/raketa-mce.svg)](https://www.npmjs.com/package/@raketa-cms/raketa-mce) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @raketa-cms/raketa-mce
```

## Usage

```jsx
import React from 'react'

import { RichText } from '@raketa-cms/raketa-mce'

const App = () => {
  return (
    <RichText
      label="Text"
      value="<p>Create React <img src='https://placehold.it/100x100' /> Library Example 😄</p>"
      customStyles={[
        { key: 'highlight', title: 'Highlight', inline: 'span', classes: 'highlight' },
        { key: 'small', title: 'Small', inline: 'span', classes: 'text-small' },
      ]}
      onChange={value => console.log(value)}
    />
  )
}

export default App

```

## License

MIT © [studioraketa](https://github.com/studioraketa)
