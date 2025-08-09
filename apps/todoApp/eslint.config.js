//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

import { defineConfig } from 'eslint/config'
import baseEslintConfigs from '../../eslint.config'

export default defineConfig([...baseEslintConfigs, ...tanstackConfig])
