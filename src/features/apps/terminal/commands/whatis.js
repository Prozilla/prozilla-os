import { ANSI } from "../../../../config/apps/terminal.config.js";
import Command from "../command.js";
import CommandsManager from "../commands.js";

export const whatis = new Command()
	.setRequireArgs(true)
	.setManual({
		purpose: "Show information about a command"
	})
	.setExecute(function(args) {
		const commandName = args[0].toLowerCase();
		const command = CommandsManager.find(commandName);

		if (!command)
			return CommandsManager.formatError(this.name, `${commandName}: Command not found`);

		if (!command.manual?.purpose)
			return CommandsManager.formatError(this.name, `${commandName}: No information found`);

		return `${commandName} - ${ANSI.fg.green}${command.manual.purpose}`;
	});