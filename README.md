# react-lordicon

> Lordicon library animated icons to React

[![NPM](https://img.shields.io/npm/v/react-lordicon.svg)](https://www.npmjs.com/package/react-lordicon)

## Install

```bash
npm install --save react-lordicon
```
or

```bash
yarn add react-lordicon
```

## Usage

```tsx
import React, { Component } from 'react'

import Lordicon from 'react-lordicon'

const App: React.FC = () => {
  return <Lordicon  
      colors={{
        primary: '#fff',
        secondary: '#222',
      }}
      icon="addCard"
      size={100}
      delay={1000}
      trigger='loop'  
  />
}


```

## License

MIT © [pprograminha](https://github.com/pprograminha)
