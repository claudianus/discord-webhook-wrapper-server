'use strict'

const hook = require('../../../discord-webhook')

class WebhookController {
  async execute({request, params}) {
    const payload = request.post()
    hook.send({
      id: params.id,
      token: params.token
    }, payload)
  }

  async executeSlack({request, params}) {
    const payload = request.post()
    hook.send({
      id: params.id,
      token: params.token,
      compatible: 'slack'
    }, payload)
  }

  async executeGithub({request, params}) {
    const payload = request.post()
    hook.send({
      id: params.id,
      token: params.token,
      compatible: 'github'
    }, payload)
  }
}

module.exports = WebhookController
