// msw.js

import { rest } from "msw";

export const handlers = [
    rest.get("/api/products", (req, res, ctx) => {
        // Simula una respuesta con datos de productos
        return res(
            ctx.json({
                products: [
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
                    {
                        name: "PUMA",
                        description:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
                        fulldescription:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
                        price: "150",
                        img: "../src/assets/images/puma/puma1.jpg",
                        id: 2,
                    },
                    {
                        name: "ADIDAS BOOST 3",
                        description:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
                        fulldescription:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
                        price: "700",
                        img: "../src/assets/images/adidas/adidas1.jpg",
                        id: 3,
                    },
                    {
                        name: "NIKE Running 4",
                        description:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
                        fulldescription:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
                        price: "1200",
                        img: "../src/assets/images/nike/nike2.jpg",
                        id: 4,
                    },
                    {
                        name: "NIKE Air Jordan retro",
                        description:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
                        fulldescription:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
                        price: "100",
                        img: "../src/assets/images/nike/nike9.jpg",
                        id: 5,
                    },
                    {
                        name: "NIKE AIR FORCE 1 X CARHARTT",
                        description:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
                        fulldescription:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
                        price: "150",
                        img: "../src/assets/images/nike/nike7.jpg",
                        id: 6,
                    },
                    {
                        name: "ADIDAS Special Edition",
                        description:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
                        fulldescription:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
                        price: "90",
                        img: "../src/assets/images/adidas/adidas4.jpg",
                        id: 7,
                    },
                    {
                        name: "NIKE AIR FORCE 1",
                        description:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
                        fulldescription:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
                        price: "70",
                        img: "../src/assets/images/nike/nike8.jpg",
                        id: 8,
                    },
                    {
                        name: "NIKE Dunk low",
                        description:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos.",
                        fulldescription:
                            "Con una pisada fluida para cualquier carrera, el modelo de Pegasus perfecto para ti vuelve para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma reactividad y sujeción neutra que tanto te gusta, pero con más comodidad en las zonas sensibles del pie, como el puente y los dedos. Da igual si estás en una maratón, haciendo sesiones de velocidad antes del amanecer o corriendo cuando te apetece",
                        price: "70",
                        img: "../src/assets/images/nike/nike10.jpg",
                        id: 9,
                    },
                ],
            })
        );
    }),
];
