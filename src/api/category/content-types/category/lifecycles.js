const axios = require("axios");
const vercelWebhook = strapi.config.get("custom.vercelWebhook");

module.exports = {
  afterUpdate(event) {
    const { result, params } = event;

    vercelWebhook && axios.default.post(vercelWebhook);
  },
  afterCreate(event) {
    const { result, params } = event;

    vercelWebhook && axios.default.post(vercelWebhook);
  },
};
