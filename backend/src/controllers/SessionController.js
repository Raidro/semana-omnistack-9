// index, show, store, update, destroy;
// index = lista todas as sessões;
// show = lista uma unica sessão;
// store = criar uma sessão;
// update = alterar uma sessão;
//destory = remover uma sessão;

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        // as chaves são uma função do js chamada desestruturação;

        let user = await User.findOne({ email });

        if (!user) {
            const user = await User.create({ email });
        }

        return res.json(user);

    }
};