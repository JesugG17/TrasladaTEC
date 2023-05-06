
// ESTO ES SOLO UN EJEMPLO
const obtenerTraslados = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        nombre,
        edad
    });
}


module.exports = {
    obtenerTraslados,
}