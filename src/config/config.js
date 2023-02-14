const constants = require('../constants/index');
module.exports = {
  credentials: {
    BBVA: {
      ALIAS: process.env.ALIAS_BBVA,
      CBU: process.env.CBU_BBVA,
    },
    BRUBANK: {
      ALIAS: process.env.ALIAS_BRUBANK,
      CBU: process.env.CBU_BRUBANK,
    },
    MP: {
      ALIAS: process.env.ALIAS_MP,
      CBU: process.env.CBU_MP,
    },
    EMAIL: process.env.MY_EMAIL,
    PRESENTATION: constants.presentation,
  },
  information: {
    portfolio: constants.portfolio,
    linkedin: constants.linkedinProfile,
  },
};
