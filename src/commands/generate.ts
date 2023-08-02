import {Command, Flags} from '@oclif/core'

const moment = require('moment')
const fs = require('fs')

const date = new Date()
let dateString = `${date.getUTCMonth()}/${date.getUTCDate()}/${date.getFullYear()}`
if (dateString.length < 10) {
    dateString = 0 + dateString
}

export default class Generate extends Command {
    static description = 'Helper command for generating events.'

    public async run(): Promise<void> {
        console.log("This command doesn't generate events; instead, it contains helper methods for subcommands.")
        console.log("Please include a valid event type after the generate command to use it properly; 'mystique generate <eventType>'. Valid event types:")
        const validEventTypes = ['event1', 'event2', 'event3']
        for (const eventType of validEventTypes) {
            console.log(eventType)
        }
    }

    eventConfig(env: string, platform: string): Record<string, any> {
        const config = fs.readFileSync(`./config/${env}/${platform}.json`)
        const parsedConfig = JSON.parse(config)
        return parsedConfig
    }

    generateEvent(event: string): string {
        let generatedEvent = fs.readFileSync(`./config/event_templates/${event}.json`)
        generatedEvent = JSON.stringify(generatedEvent)
        return generatedEvent
    }

    validateFlags(flags: Record<string, string>, platform: string): [boolean, Record<string, string>] {
        if (!this.validateEnv(flags.env)) {
            this.exit
            return [false, flags]
        }

        if (!this.validateDate(flags.date)) {
            this.exit
            return [false, flags]
        }

        if (!this.validateSection(flags.section, this.eventConfig(flags.env, platform))) {
            this.exit
            return [false, flags]
        }
        return[true, flags]
    }

    validateEnv(env: string): boolean {
        if (!(env === 'prod' || env === 'qastg')) {
            console.log('Invalid environment; pelase use either prod or qastg')
            return false
        }
        return true
    }

    validateDate(date: string): boolean {
        const validDate = moment(date, 'MM/DD/YYYY')
        return validDate.isValid()
    }

    validateSection(section: string, config: Record<string, any>): [boolean, Record<string, any>] {
        const validSection = config.sections // search sections for where 'section xid' = 'section'
        if (!validSection) {
            console.log('Invalid section XID - please use a valid section XID.')
            return [false, validSection]
        }
        return [true, validSection]
    }
}