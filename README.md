# Char Shuffling for React

`npm i shuffle-char -S`

## usage

```jsx
<h1>
  <Shu on={running} charset='a-zA-Z_' escape='()' idle={80}>Hack(FDU)</Shu>
</h1>
<h2>
  <Shu on={running} charset='0-9' idle={80}>150</Shu>+ teams, 
  <Shu on={running} charset='0-9' idle={80}>500</Shu>+ participants
</h2>
```

Result (`running := true -> false`):

![screenshot](screenshot.gif)
