// frontend-spa/src/utils/auth.js
//file này để tạo tiện ích giữ token
const TOKEN_CHANGE_EVENT = 'tokenChange'

export function saveToken(token) {
  localStorage.setItem('token', token)
  // Dispatch custom event
  window.dispatchEvent(new CustomEvent(TOKEN_CHANGE_EVENT, { detail: token }))
}

export function getToken() {
  return localStorage.getItem('token')
}

export function removeToken() {
  localStorage.removeItem('token')
  // Dispatch custom event
  window.dispatchEvent(new CustomEvent(TOKEN_CHANGE_EVENT, { detail: null }))
}

export const TOKEN_CHANGE_EVENT_NAME = TOKEN_CHANGE_EVENT
