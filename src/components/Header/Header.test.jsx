/* eslint-disable no-undef */

import Header from './Header'
import {render, screen} from '@testing-library/react'

test('renders logo', () => {
    render(<Header />)
    const logo = screen.getByRole('img', {name: "logo"})
    expect(logo).toBeDefined();
})

test('renders add icon', () => {
    render(<Header />)
    const addIcon = screen.getByTitle('Add product')
    expect(addIcon).toBeDefined();
})

test('renders products item', () => {
    render(<Header/>)
    const products = screen.getByText("Products")
    expect(products).toBeDefined();
})

test('renders contact item', () => {
    render(<Header/>)
    const contact = screen.getByText("Contact")
    expect(contact).toBeDefined();
})

test('renders logout icon', () => {
    render(<Header/>)
    const logoutIcon = screen.getByTitle("Logout")
    expect(logoutIcon).toBeDefined()
})
