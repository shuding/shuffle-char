# Char Shuffling for React

`npm i shuffle-char -S`

## usage

```js
import Shu from 'shuffle-char'
```

```jsx
<h1>
  <Shu on={running} charset='a-zA-Z_' escape='()' idle={80}>Hack(FDU)</Shu>
</h1>
<h2>
  <Shu on={running} charset='0-9' idle={80}>150</Shu>+ teams, 
  <Shu on={running} charset='0-9' idle={80}>500</Shu>+ participants
</h2>
```

## demo (`running := true -> false`):

![screenshot](screenshot.gif)

## api

Props supported:  
- `on`: boolean
    If `true` the animation will keep running, else it will keep as the default value.
- `charset`: string
    `'a-z'` / `'A-Z'` / `'0-9'` + any characters. e.g. `'a-zA-Z_'` includes all English letters and underscore.
- `escape`: string
    Characters excluded from the `charset` above. e.g. `charset='a-z'` and `escape='x'` includes all lowercase letters exclude `x`.
- `idle`: number
    Animation idle in ms.

## license 

The MIT license.

