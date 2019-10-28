module.exports = {   
    index(req, res) {
        const array = [{'id':'DA6S5D1AS23D1', 'nome':'Teste1'}, {'id':'A195FGD1AS2AS', 'nome':'Teste2'}];

        return res.json(array);
    }
}