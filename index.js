'use strict'
const fs = require('fs')

/**
 * Checks for the presence of /run/.containerenv, which is present within Podman containers, but within Docker containers 
 * @returns {boolean} 
 */
const hasContainerEnv = () => {
    try {
        fs.statSync('/run/.containerenv')
        return true
    } catch (_) {
        return false
    }
}

const isPodman = () => {
    return hasContainerEnv()
}

module.exports = isPodman