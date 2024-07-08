const Data = require('../models/data');

const saveData = (req, res) => {
  const { heartRate, temperature } = req.body;

  const data = new Data({ heartRate, temperature });
  data.save()
    .then(() => res.status(200).send('Data saved'))
    .catch(err => res.status(500).send(err.message));
};

const checkThresholdAndNotify = (req, res) => {
  const { heartRate, temperature } = req.body;

  const THRESHOLD = 100;
  if (heartRate > THRESHOLD || temperature > THRESHOLD) {
    const message = {
      notification: {
        title: 'Health Alert',
        body: 'One of your health metrics has exceeded the threshold.'
      },
      topic: 'healthalerts'
    };

    admin.messaging().send(message)
      .then((response) => {
        console.log('Successfully sent message:', response);
      })
      .catch((error) => {
        console.log('Error sending message:', error);
      });
  }

  res.status(200).send('Data received');
};

module.exports = {
  saveData,
  checkThresholdAndNotify
};
