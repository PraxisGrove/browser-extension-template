export default defineContentScript({
  matches: ['https://example.com/*'],
  main() {
    console.log('Content script loaded.');
  },
});
