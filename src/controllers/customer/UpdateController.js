const update = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send({
        message: `Alterar os dados do cliente ${id}`,
        data: req.body,
    });
};

module.exports = update;
