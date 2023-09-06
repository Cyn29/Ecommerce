/* eslint-disable no-undef */

import Footer from './Footer'
import {render, screen} from '@testing-library/react'

test('renders copyright', () => {
    render(<Footer />)
    const copyright = screen.getByText("© 2023 Copyright:")
    expect(copyright).toBeDefined()
})

test('renders web', () => {
    render(<Footer />)
    const webUrl = screen.getByText("www.atuspies.com")
    expect(webUrl).toBeDefined()
})

test('renders footer icons', () => {
    render(<Footer />)
    const footerIcons = screen.getAllByRole('button')
    expect(footerIcons).toBeDefined()
})
