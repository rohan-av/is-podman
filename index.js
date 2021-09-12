'use strict'
const fs = require('fs')

let isPodman

function hasContainerEnv() {
    try {
        fs.statSync('/run/.containerenv')
        return true
    } catch (_) {
        return false
    }
}

module.exports = () => {
    if (isPodman === undefined) {
        isPodman = hasContainerEnv()
    }

    return isPodman
}
