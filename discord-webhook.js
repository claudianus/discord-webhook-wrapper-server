const axios = require('axios')
const api = 'https://discordapp.com/api/webhooks'

class DiscordWebhook {
  static send(option, payload) {
    if (!payload) {
      throw new Error('you must give payload')
    }

    axios.post(`${api}/${option.id}/${option.token}${option.compatible ? `/${option.compatible}` : ''}`, payload)
    .catch(err => {
      if(!err.response) {
        this.send(option, payload)
        return
      }

      if(err.response.data.retry_after)
        setTimeout(() => this.send(option, payload), Number(err.response.data.retry_after)+100)
    })
  }
}

module.exports = DiscordWebhook