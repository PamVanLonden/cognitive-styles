// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Connection to the Facets collection on the MongoDB Atlas Cluster failed.' });
    } else  {
        console.log('Connection to the Facets Collection on the MongoDB Atlas Cluster was successful.');
    }
});



// SCHEMA for facets collection
const facetsSchema = mongoose.Schema({
    facetCategory:  {type: String, required: true },
    facetDesc: {type: String, required: true },
    personaName: { type: String, required: true },
    personaDesc: { type: String, required: true },
    personaImageURL: {type: String, required: false},
    rating: { type: Number, required: false}
});

// server changes it to 'Facets'
const Facet = mongoose.model("Facets", facetsSchema);


/* BEGIN the ART Inventory MODELS ************* */

// CREATE facet document
const createFacet = async (facetCategory, facetDesc, personaName, personaDesc, personaImageURL, rating) => {
    const facet = new Facet({
        facetCategory: facetCategory,
        facetDesc: facetDesc, 
        personaName: personaName,
        personaDesc: personaDesc,
        personaImageURL: personaImageURL,
        rating: rating
    });
    return facet.save();
}

// FIND / RETRIEVE works
const findFacet = async () => {
    const query = Facet.find();
    return query.exec();
}

// FIND by ID
const findFacetById = async (_id) => {
    const query = Facet.findById(_id);
    return query.exec();
}

// REPLACE
const replaceFacet = async (_id, facetCategory, facetDesc, personaName, personaDesc, personaImageURL, rating) => {
    const result = await Facet.replaceOne({ _id: _id }, {
        facetCategory: facetCategory,
        facetDesc: facetDesc, 
        personaName: personaName,
        personaDesc: personaDesc,
        personaImageURL: personaImageURL,
        rating: rating
    });
    return { 
        _id: _id, 
        facetCategory: facetCategory,
        facetDesc: facetDesc, 
        personaName: personaName,
        personaDesc: personaDesc,
        personaImageURL: personaImageURL,
        rating: rating
     }
}

// DELETE
const deleteFacetById = async (_id) => {
    const result = await Facet.deleteOne({ _id: _id });
    return result.deletedCount;
}


export { createFacet, findFacet, findFacetById, replaceFacet, deleteFacetById }