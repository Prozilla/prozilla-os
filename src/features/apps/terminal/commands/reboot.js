import { reloadViewport } from "../../../_utils/browser.utils.js";
import Command from "../command.js";

export const reboot = new Command()
	.setManual({
		purpose: "Reboot the system"
	})
	.setExecute(() => {
		reloadViewport();
		return { blank: true };
	});