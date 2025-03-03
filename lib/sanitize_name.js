// sanitize_name.js
/**
 * Sanitizes a device name by removing invalid characters, trimming whitespace,
 * and ensuring it starts and ends with alphanumeric characters or spaces.
 * If the name is empty or becomes empty after sanitization, it returns a default
 * "Unnamed device" message with the device ID.
 *
 * @param {string} name - The device name to sanitize.
 * @param {string} deviceId - The device ID to include in the default message.
 * @returns {string} The sanitized device name or a default message.
 */
function sanitizeDeviceName(name, deviceId) {
    if (!name) return "Unnamed device ID " + deviceId
    let cleanedName = name.replace(/[^a-zA-Z0-9\s']/g, '')
    cleanedName = cleanedName.trim().replace(/\s+/g, ' ')
    if (cleanedName.length > 0) {
        if (!/^[a-zA-Z0-9\s]/.test(cleanedName[0])) {
            cleanedName = cleanedName.substring(1)
        }
        if (!/[a-zA-Z0-9]$/.test(cleanedName[cleanedName.length - 1])) {
            cleanedName = cleanedName.substring(0, cleanedName.length - 1)
        }
    }
    return cleanedName || "Unnamed device ID " + deviceId
}

module.exports = {
    sanitizeDeviceName: sanitizeDeviceName
}
