'use strict'
const fs = require('fs')

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