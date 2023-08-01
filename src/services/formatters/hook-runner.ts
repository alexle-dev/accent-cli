// Vendor
import chalk from 'chalk'

export default class HookRunnerFomatter {
  public log(name: string, commands: string[]) {
    const operation = name;
    console.log(chalk.yellow('➤ '), chalk.bold(chalk.yellow(`${operation}:`)))
    commands.forEach(command => {
      console.log('  ', chalk.yellow(command))
    })
    console.log('')
  }
}
