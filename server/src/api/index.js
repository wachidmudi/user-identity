const express = require('express');

const emojis = require('./emojis');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

router.post('/identity', (req, res) => {
  // const userIdentity1 = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   phone: req.body.phone,
  //   birth_date: req.body.birth_date,
  // };

  // const userIdentity2 = {
  //   province: req.body.province,
  //   district: req.body.district,
  //   subdistrict: req.body.subdistrict,
  //   address: req.body.address,
  // };

  // const userIdentity3 = {
  //   password: req.body.password,
  //   password_confirmation: req.body.password_confirmation,
  //   favourites_language: req.body.favourites_language,
  // };

  // const userIdentity4 = {
  //   is_terms_and_conditions: req.body.is_terms_and_conditions,
  // };

  setTimeout(() => {
    res
      .json({
        message: 'Successfully submitted identity',
      })
      .status(201);
  }, 3000);
});

router.get('/favourites-language', (req, res) => {
  setTimeout(() => {
    res
      .json({
        data: [
          {
            id: 1,
            name: 'JavaScript',
          },
          {
            id: 2,
            name: 'Java',
          },
          {
            id: 3,
            name: 'Ruby',
          },
          {
            id: 4,
            name: 'Python',
          },
        ],
        message: 'Successfully',
      })
      .status(200);
  }, 1500);
});

module.exports = router;
