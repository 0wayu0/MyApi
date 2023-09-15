"use client"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import {
    useDisclosure
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
const NavBar = () => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Menu isLazy>
            <MenuButton>Menu</MenuButton>
            <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem><Link to="/">Hero</Link></MenuItem>
                <MenuItem><Link to="/weapon">Weapon</Link></MenuItem>
            </MenuList>
        </Menu>
    )
}

export default NavBar;