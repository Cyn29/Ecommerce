/* eslint-disable no-undef */

import Products from "./Products";
import { render, screen } from "@testing-library/react";


/*vi.mock("../Context/DataContext.jsx", async () => {
    const actual = await vi.importActual("../Context/DataContext.jsx")
    return {
      ...actual,
      
    },
  })*/

/*vi.mock("../Context/DataContext.jsx", () => ({
    
    useContext: vi.fn(() => ({
        DataContext: vi.fn(()=>( {
            name: "NIKE AIR MAX 1",
            description:
                "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
            fulldescription:
                "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
            price: "100",
            img: "../src/assets/images/nike/nike6.jpg",
            id: 1,
        })),
})),
}));*/

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
