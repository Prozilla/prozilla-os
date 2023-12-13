import Command from "./command.js";
import { blow } from "./commands/blow.js";
import { cat } from "./commands/cat.js";
import { cd } from "./commands/cd.js";
import { clear } from "./commands/clear.js";
import { compgen } from "./commands/compgen.js";
import { cowsay } from "./commands/cowsay.js";
import { dir } from "./commands/dir.js";
import { echo } from "./commands/echo.js";
import { exit } from "./commands/exit.js";
import { fortune } from "./commands/fortune.js";
import { hostname } from "./commands/hostname.js";
import { ls } from "./commands/ls.js";
import { make } from "./commands/make.js";
import { man } from "./commands/man.js";
import { mkdir } from "./commands/mkdir.js";
import { neofetch } from "./commands/neofetch.js";
import { nice } from "./commands/nice.js";
import { pwd } from "./commands/pwd.js";
import { reboot } from "./commands/reboot.js";
import { rm } from "./commands/rm.js";
import { rmdir } from "./commands/rmdir.js";
import { touch } from "./commands/touch.js";
import { whatis } from "./commands/whatis.js";
import { whoami } from "./commands/whoami.js";
import { world } from "./commands/world.js";

export default class CommandsManager {
	/**
	 * @param {string} name 
	 * @returns {Command}
	 */
	static find(name) {
		let matchCommand = null;

		this.COMMANDS.forEach((command) => {
			if (command.name === name) {
				matchCommand = command;
				return;
			}
		});

		return matchCommand;
	}

	/**
	 * @param {string} pattern 
	 * @returns {Command[]}
	 */
	static search(pattern) {
		const matches = this.COMMANDS.filter((command) => command.name.match(pattern));
		return matches;
	}

	static COMMANDS = [
		echo,
		clear,
		ls,
		cd,
		dir,
		pwd,
		touch,
		mkdir,
		rm,
		rmdir,
		hostname,
		neofetch,
		fortune,
		cowsay,
		world,
		nice,
		blow,
		make,
		cat,
		man,
		reboot,
		compgen,
		whoami,
		whatis,
		exit,
	];
}