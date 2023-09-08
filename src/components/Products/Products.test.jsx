/* eslint-disable no-undef */

import Products from "./Products";
import { render, screen } from "@testing-library/react";

test("renders product image", async () => {
    render(<Products />);
    const image = await screen.findAllByRole("img");
    expect(image).toBeDefined();
});

test("renders price", async () => {
    render(<Products />);
    const price = await screen.getByText("€");
    expect(price).toBeDefined();
});

test("renders cards buttons", async () => {
    render(<Products />);
    const cardsButtons = await screen.getAllByRole("button");
    expect(cardsButtons).toBeDefined();
});
