import { rest } from "msw";

export const handlers = [
    rest.get("http://localhost:3000/products", (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    name: "NIKE AIR MAX 1",
                    description:
                        "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
                    fulldescription:
                        "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
                    price: "100",
                    img: "../src/assets/images/nike/nike6.jpg",
                    id: 1,
                },
            ])
        );
    }),
];
