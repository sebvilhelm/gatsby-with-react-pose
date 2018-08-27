import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'

const List = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
})

const Item = posed.li({
  enter: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
})

const SecondPage = () => (
  <section>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <List>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 4</Item>
      <Item>Item 5</Item>
      <Item>Item 6</Item>
      <Item>Item 7</Item>
      <Item>Item 8</Item>
      <Item>Item 9</Item>
      <Item>Item 10</Item>
    </List>
    <Link to="/">Go back to the homepage</Link>
  </section>
)

export default SecondPage
