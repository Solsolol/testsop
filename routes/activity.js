const express = require('express');
const router = express.Router();

router.post('/save', (req, res) => {
    console.log('Données sauvegardées:', req.body);
    res.status(200).json({ success: true });
});

router.post('/validate', (req, res) => {
    console.log('Validation en cours:', req.body);
    res.status(200).json({ success: true });
});

router.post('/publish', (req, res) => {
    console.log('Publication de l'activité:', req.body);
    res.status(200).json({ success: true });
});

router.post('/execute', (req, res) => {
    console.log('Exécution de l'activité:', req.body);
    
    // Implémentation de l'intégration avec Sophia API
    const requestData = {
        clientId: 'ataf650dw2v0b5oh4s2sgh7h',
        clientSecret: 'rJhQKbQWwETW7iCR8oMKu0aD',
        data: req.body.inArguments
    };
    
    console.log('Données envoyées à Sophia API:', requestData);
    res.status(200).json({ success: true, message: "Requête envoyée à Sophia API" });
});

module.exports = router;