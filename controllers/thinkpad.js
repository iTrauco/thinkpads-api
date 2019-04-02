//POST/Create
function create(req, res) {

    res.json({messge: "You created"});
}
//GET/Retrieve
function retrieveAll(req, res) {
    res.json({messge: "You retrieved all"});
}
//PUT/
function update(req, res) {
    res.json({message: "You updated"});
}
//DELETE/
function deleteOne(req, res) {
    res.json({ message: "You deleted!"});
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleteOne
};