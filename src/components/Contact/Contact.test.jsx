/* eslint-disable no-undef */

import Contact from "./Contact";
import { render, screen } from "@testing-library/react";

test("renders copyright", () => {
    render(<Contact />);
    const copyright = screen.getByText("© 2023 Copyright:");
    expect(copyright).toBeDefined();
});

test("renders web", () => {
    render(<Contact />);
    const webUrl = screen.getByText("www.atuspies.com");
    expect(webUrl).toBeDefined();
});

test("renders footer icons", () => {
    render(<Contact />);
    const footerIcons = screen.getAllByRole("button");
    expect(footerIcons).toBeDefined();
});
