#!/usr/bin/env node
'use strict'
const isPodman = require('.')

process.exitCode = isPodman() ? 0 : 2
