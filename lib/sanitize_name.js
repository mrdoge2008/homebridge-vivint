// sanitize_name.js
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
