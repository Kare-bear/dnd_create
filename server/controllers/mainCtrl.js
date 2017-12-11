const axios =require("axios");

let name = "";
let classes = [];
let races = [];
let skills = [];

const getSkill = (req, res, next) => {
    axios
    .get("http://dnd5eapi.co/api/skills")
    .then(response => {
        console.log(response.data)
        res.status(200).json(response.data)
    }).catch(err => console.log(err))
};
const addSkill = (req, res, next) => {
    skills.push(req.body);
    res.json(skills)
};
const updateSkill = (req ,res, next) => {
    const { id } =req.params;
    skills[id] = Object.assign({}, skills[id], { name: req.body.name});
    res.json(skills);
};


const getRace = (req, res, next) => {
    axios
    .get("http://dnd5eapi.co/api/races")
    .then(response => {
        console.log(response.data)
        res.status(200).json(response.data)
    }).catch(err => console.log(err))
};
const addRace = (req, res, next) => {
    race.push(req.body);
    res.json(races)
};
const updateRace = (req ,res, next) => {
    const { id } =req.params;
    races[id] = Object.assign({}, races[id], { name: req.body.name});
    res.json(races);
};


const getClass = (req, res, next) =>  {  
        axios
        .get("http://dnd5eapi.co/api/classes")
        .then(response => {
            console.log(response.data)
           res.status(200).json(response.data)
        }).catch(err => console.log(err));
};
const addClass = (req, res, next) => {
    classes.push(req.body);
    res.json(classes)
};
const updateClass = (req ,res, next) => {
    const { id } =req.params;
    classses[id] = Object.assign({}, classes[id], { name: req.body.name});
    res.json(classes);
};


const charDeath = (req, res, next) => {
    const {id} =req.params;
    races.splice(id,1);
    res.json(races);
    classes.splice(id, 1);
    res.json(classes);
};
module.exports = {
    getSkill,
    addSkill,
    updateSkill,
    getRace,
    addRace,
    updateRace,
    getClass,
    addClass,
    updateClass,
    charDeath
};