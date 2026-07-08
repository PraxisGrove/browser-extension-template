import { isExtensionMessage } from '@/lib/messaging/messages';

export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message) => {
    if (!isExtensionMessage(message)) {
      return undefined;
    }

    if (message.type === 'ping') {
      return Promise.resolve({
        ok: true,
        timestamp: Date.now(),
        extensionId: browser.runtime.id,
      });
    }

    return undefined;
  });
});
