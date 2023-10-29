import {
    Container,
    Flex,
    Group,
    Box,
    Text,
    Anchor
} from '@mantine/core'
import {AiOutlineShoppingCart as Cart} from 'react-icons/ai'
import classes from './Navbar.module.css'

function Navbar() {
  return (
    <Container fluid h={50} className={classes.navbar}>
      <div className={classes.links}>
        <Anchor href='/' c="white">TokoKami</Anchor>
        <Anchor className={classes.cart} c="white" size='lg'>{<Cart/>}</Anchor>
        <Anchor className={classes.signin} c="white">Sign In</Anchor>
      </div>
    </Container>
  )
}

export default Navbar