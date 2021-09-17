import { en } from './en'
import { zh } from './zh'

export const translations = { en, zh }

export const SUPPORTED_LANGUAGES = ['en', 'zh'] as const
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]
