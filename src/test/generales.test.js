describe("Probando Jest", () => {
    test ("Prueba de objetos iguales", () => {
        const datos1 = {
            nombre: "Angel Bryan Gallegos Guzman",
            edad: 23
        };

        const datos2 = {
            nombre: "Angel Bryan Gallegos Guzman",
            edad: 23
        };

        expect(datos1).toEqual(datos2);
    })
});