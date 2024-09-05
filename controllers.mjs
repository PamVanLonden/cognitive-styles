// This controller uses REST rather than Express style.
import 'dotenv/config';
import express from 'express';
import * as facets from './models.mjs';

const PORT = process.env.PORT;
const app = express();

// REST needs JSON MIME type.
app.use(express.json());


// CREATE facet document
app.post('/facets', (req, res) => {
    facets.createFacet(
        req.body.facetCategory, 
        req.body.facetDesc, 
        req.body.personaName, 
        req.body.personaDesc, 
        req.body.personaImageURL, 
        req.body.rating 
    )
        .then(facet => {
            console.log(`"${facet.facetCategory}" was added to the collection.`);
            res.status(201).json(facet);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Creation of a Facet document failed due to invalid syntax.' });
        });
});

// RETRIEVE all facet documents
app.get('/facets', (req, res) => {
    facets.findFacet()
    .then(facet => { 
        if (facet !== null) {
            console.log(`All facets were retrieved from the collection.`);
            res.json(facet);
        } else {
            res.status(404).json({ Error: 'That Facet document was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Your request to retrieve the Facet documents failed.' });
    });

});

// RETRIEVE by ID controller
app.get('/facets/:_id', (req, res) => {
    facets.findFacetById(req.params._id)
    .then(facet => { 
        if (facet !== null) {
            console.log(`"${facet.facetCategory}" was retrieved, based on its ID.`);
            res.json(facet);
        } else {
            res.status(404).json({ Error: 'That Facet could not be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'That Facet could not be found.' });
    });

});

// UPDATE facet
 app.put('/facets/:_id', (req, res) => {
     // Notice use of params.id
     facets.replaceFacet(
        req.params._id, 
        req.body.facetCategory, 
        req.body.facetDesc, 
        req.body.personaName, 
        req.body.personaDesc, 
        req.body.personaImageURL, 
        req.body.rating 
        )
        .then(facet => {
            console.log(`"${facet.facetCategory}" was updated.`);
            res.json(facet);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Your request to replace a Facet document failed.' });
        });
});

// DELETE facet
 app.delete('/facets/:_id', (req, res) => {
    facets.deleteFacetById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} was deleted.`);
                res.status(200).send();
            } else {
                res.status(404).json({ Error: 'That Facet document does not exist.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.send(`Error: 'Your request to delete by ${facets._id} failed.`);
        });
});

// REST and Express listen to the port noted above.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});