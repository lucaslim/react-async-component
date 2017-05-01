# React Component Async

## Installation

```  
$ yarn add react-component-async
```

## Usage

```jsx
// using ES6 modules

import AsyncComponent from 'react-component-async';

export const Header = ({ children }) =>
  <header className={'container'}>
    <AsyncComponent getComponent={async () => {
      const component = await import('components/menu');
      const Menu = component.default;

      return <Menu someProps={...} />;
    }} />
  </header>
```