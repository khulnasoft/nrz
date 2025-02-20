import { RegistryClient } from '@nrz/registry-client'
import { commandUsage } from '../config/usage.ts'
import {
  type CommandFnResultOnly,
  type CommandUsage,
  type Views,
} from '../types.ts'
import { type JSONField } from '@nrz/types'

export const usage: CommandUsage = () =>
  commandUsage({
    command: 'whoami',
    usage: [''],
    description: `Look up the username for the currently active token,
                  when logged into a registry.`,
  })

type CommandResult = {
  username?: JSONField
}

export const views: Views<CommandResult> = {
  defaultView: 'human',
  views: {
    human: r => r.username,
    json: r => r,
  },
}

export const command: CommandFnResultOnly<
  CommandResult
> = async conf => {
  const rc = new RegistryClient(conf.options)
  const response = await rc.request(
    new URL('-/whoami', conf.options.registry),
    { cache: false },
  )
  const { username } = response.json()
  return {
    result: { username },
  }
}
