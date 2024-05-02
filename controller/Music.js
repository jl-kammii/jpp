const { error } = require("console");
const data = require("./../model/data.json");
const controllerMusic = {
    find: (req,res) => {
        if(req.query.search){
            const query = req.query.search;
            const result = data.filter(song => song.title.toLowerCase().includes(query.toLowerCase()));
            if(result.length === 0) {
                return res.status(404).json({error: "Not found"});
            } else {
                return res.status(200).json({result})
            }
        } else {
            res.status(200).json({result: data});
        }
    },

    create: (req,res)=>{
        console.log(req.body);
        res.status(201).json({message: "Votre musique a été ajoutée",data: req.body});
    },

    findById: (req,res) => {
        const id = req.params.id;
        if(isNaN(id)){
            res.status(405).json({error: "Param is not a number"});
        }
        if(id>data.length){
            res.status(404).json({error: "Music not found"});
        }
        res.status(200).json({result: data[id-1]});
    },

    //Créer la méthode pour renvoyer une musique au hasard
    random: (req,res) => {
        const music = data[Math.floor(Math.random()*data.length)];
        res.status(200).json({result: music});
    }
};

module.exports = controllerMusic;