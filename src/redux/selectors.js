export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getUserEmail = state => state.auth.user.email;

export const getRefreshing = state => state.auth.isRefreshing;

export const getModalOpen = state => state.auth.isModalOpen

