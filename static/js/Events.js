const EVENT_DISPLAY_ERROR_MESSAGE = "display-errormessage";

export function dispatchDisplayErrorMessage(message) {
	window.dispatchEvent(
		new CustomEvent(EVENT_DISPLAY_ERROR_MESSAGE, {
			detail: message,
		})
	);
}

export function listenForDisplayErrorMessage(fn) {
	window.addEventListener(EVENT_DISPLAY_ERROR_MESSAGE, fn);
}

export function removeDisplayErrorMessageListener(fn) {
	window.removeEventListener(EVENT_DISPLAY_ERROR_MESSAGE, fn);
}
