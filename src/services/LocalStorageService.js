/**
 * LocalStorageService
 * @type {{removeItem(string): void, clearAllItems(): void, getItem(string, *): *, setItem(string, *=): void}}
 */
export const LocalStorageService = {
  /**
   * Get an item from LocalStorage
   * @param {string} key
   * @param {any} fallback
   * @returns {any}
   */
  getItem(key, fallback) {
    try {
      let item = window.localStorage.getItem(key);
      return item ? window.JSON.parse(item) : fallback;
    } catch (err) {
      return fallback;
    }
  },

  /**
   * Set item by its key
   * @param {string} key
   * @param {any} value
   */
  setItem(key, value = {}) {
    window.localStorage.setItem(key, window.JSON.stringify(value));
  },

  /**
   * Remove item by its key
   * @param {string} key
   */
  removeItem(key) {
    window.localStorage.removeItem(key);
  },

  /**
   * Removes all items from storage
   */
  clearAllItems() {
    window.localStorage.clear();
  }
};
