# Changelog

## [2.0.0] - 2025-01-XX

### Changed

- **BREAKING CHANGE**: Removed dependency on `json-server` and `axios`
- Modified `js/main.js` to load data directly from `assets/json/database.json` using native `fetch()` API
- Updated `index.html` to remove axios CDN script
- Updated `package.json` to remove unnecessary dependencies
- Added better error handling for JSON loading with fallback paths

### Added

- New `loadData()` function that loads JSON data directly from file
- New `initApp()` function to properly initialize the application
- Better error handling and logging for data loading failures
- Test file (`test.html`) to verify JSON loading functionality

### Removed

- `axios` dependency from package.json
- `json-server` dependency from package.json
- All axios HTTP requests to localhost:3000
- Manual server setup requirement

### Technical Details

- The application now uses the native `fetch()` API instead of axios
- Data is loaded once at startup and cached in the `appData` global variable
- All functions now access data from the cached object instead of making HTTP requests
- The application can now run without any server setup - just open `index.html` in a browser

### Migration Guide

1. No more need to run `json-server assets/json/database.json`
2. Simply open `index.html` in a web browser
3. For development, you can use any local server (live-server, python -m http.server, etc.)
4. The application will automatically load data from the JSON file

### Benefits

- Simplified setup and deployment
- No server dependencies required
- Faster loading (no HTTP requests)
- Better offline support
- Reduced bundle size
