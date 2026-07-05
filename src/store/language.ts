export type Language = 'en' | 'de'

const SET_LANGUAGE = 'language/set' as const

interface SetLanguageAction {
  type: typeof SET_LANGUAGE
  payload: Language
}

export type LanguageAction = SetLanguageAction

export function setLanguage(language: Language): LanguageAction {
  return { type: SET_LANGUAGE, payload: language }
}

export interface LanguageState {
  current: Language
}

const initialState: LanguageState = {
  current: 'en',
}

export function languageReducer(state: LanguageState = initialState, action: LanguageAction): LanguageState {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, current: action.payload }
    default:
      return state
  }
}
