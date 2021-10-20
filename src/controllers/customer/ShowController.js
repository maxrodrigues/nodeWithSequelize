const show = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send({
        message: `Listar o cliente de ID: ${id}`,
    });
};

module.exports = show;
