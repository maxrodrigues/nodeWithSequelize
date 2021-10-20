const get = (req, res, next) => {
    res.status(200).send({
        message: "aqui mano",
    });
};

module.exports = get;
