import React, { createContext, FC, useContext, useMemo, useReducer } from 'react'
import { ThemeProvider } from 'next-themes'

export interface State {
  displayDashboardSidebar: boolean
  displayDropdown: boolean
}

const initialState = {
  displayDashboardSidebar: false,
  displayDropdown: false,
  AuthView: 'ACCOUNT_VIEW',
}

type Action =
  | {
      type: 'OPEN_DASHBOARD_SIDEBAR'
    }
  | {
      type: 'CLOSE_DASHBOARD_SIDEBAR'
    }
  | {
      type: 'OPEN_DROPDOWN'
    }
  | {
      type: 'CLOSE_DROPDOWN'
    }
  | {
      type: 'SET_AUTH_VIEW'
      view: AUTH_VIEWS
    }

type AUTH_VIEWS = 'ACCOUNT_VIEW' | 'LOGIN_VIEW' | 'FORGOT_VIEW'

export const UIContext = createContext<State | unknown>(initialState)
UIContext.displayName = 'UIContext'

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_DASHBOARD_SIDEBAR':
      return {
        ...state,
        displayDashboardSidebar: true,
      }

    case 'CLOSE_DASHBOARD_SIDEBAR':
      return {
        ...state,
        displayDashboardSidebar: false,
      }

    case 'OPEN_DROPDOWN':
      return {
        ...state,
        displayDropdown: true,
      }

    case 'CLOSE_DROPDOWN':
      return {
        ...state,
        displayDropdown: false,
      }

    case 'SET_AUTH_VIEW': {
      return {
        ...state,
        AuthView: action.view,
      }
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openDashboardSidebar = () => dispatch({ type: 'OPEN_DASHBOARD_SIDEBAR' })
  const closeDashboardSidebar = () => dispatch({ type: 'CLOSE_DASHBOARD_SIDEBAR' })
  const toggleDashboardSidebar = () =>
    state.displayDashboardSidebar
      ? dispatch({ type: 'CLOSE_DASHBOARD_SIDEBAR' })
      : dispatch({ type: 'OPEN_DASHBOARD_SIDEBAR' })

  const openDropdown = () => dispatch({ type: 'OPEN_DROPDOWN' })
  const closeDropdown = () => dispatch({ type: 'CLOSE_DROPDOWN' })
  const toggleDropdown = () =>
    state.displayDropdown ? dispatch({ type: 'CLOSE_DROPDOWN' }) : dispatch({ type: 'OPEN_DROPDOWN' })
  const setAuthView = (view: AUTH_VIEWS) => dispatch({ type: 'SET_AUTH_VIEW', view })

  const value = useMemo(
    () => ({
      ...state,
      openDashboardSidebar,
      closeDashboardSidebar,
      toggleDashboardSidebar,
      openDropdown,
      closeDropdown,
      toggleDropdown,
      setAuthView,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state],
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </UIProvider>
)
