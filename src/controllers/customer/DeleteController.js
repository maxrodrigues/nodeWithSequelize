const del = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send({
        message: `Remover o cliente ${id}`,
    });
};

module.exports = del;
