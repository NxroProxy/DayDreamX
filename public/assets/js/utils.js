class Utils {
  constructor(items) {}

  setFavicon(tabElement, iframe) {
    iframe.addEventListener("load", () => {
      try {
        if (!iframe.contentDocument) {
          console.error(
            "Unable to access iframe content due to cross-origin restrictions.",
          );
          return;
        }

        let favicon = null;
        const nodeList =
          iframe.contentDocument.querySelectorAll("link[rel~='icon']");

        for (let i = 0; i < nodeList.length; i++) {
          const relAttr = nodeList[i].getAttribute("rel");
          if (relAttr.includes("icon")) {
            favicon = nodeList[i];
            break;
          }
        }

        if (favicon) {
          const faviconUrl = favicon.href || favicon.getAttribute("href");
          const faviconImage = tabElement.querySelector(".tab-favicon");

          if (faviconUrl && faviconImage) {
            faviconImage.style.backgroundImage = `url('${faviconUrl}')`;
          } else {
            console.error("Favicon URL or favicon element is missing.");
          }
        } else {
          console.error(
            "No favicon link element found within the iframe document.",
          );
        }
      } catch (error) {
        console.error("An error occurred while setting the favicon:", error);
      }
    });
  }

  async getFavicon(url) {
    try {
      var googleFaviconUrl = `/internal/icons/${encodeURIComponent(url)}`;
      return googleFaviconUrl;
    } catch (error) {
      console.error("Error fetching favicon as data URL:", error);
      return null;
    }
  }

  processUrl(url) {
    let js = "";
    if (url.startsWith("daydream://")) {
      const path = url.replace("daydream://", "");
      return `/internal/${path}.html`;
    } else if (
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("/") ||
      url.startsWith("data:")
    ) {
      return url;
    } else if (url.startsWith("javascript:")) {
      js = url.replace("javascript:", "");
      document.querySelector("iframe.active").contentWindow.eval(js);
    } else {
      return `/internal/${url}.html`;
    }
  }

  getInternalURL(url) {
    if (url.startsWith("/internal/")) {
      const path = url.replace("/internal/", "");
      return `daydream://${path}`;
    } else if (
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("daydream://") ||
      url.startsWith("data:") ||
      url.startsWith("javascript:")
    ) {
      return url;
    } else {
      return `daydream://${url}`;
    }
  }

  navigate(url) {
    const processedUrl = this.processUrl(url);
    const iframe = items.iframeContainer.querySelector("iframe.active");
    if (iframe) {
      iframe.src = processedUrl;
    }
  }

  closest(value, array) {
    let closest = Infinity;
    let closestIndex = -1;

    array.forEach((v, i) => {
      if (Math.abs(value - v) < closest) {
        closest = Math.abs(value - v);
        closestIndex = i;
      }
    });

    return closestIndex;
  }
}
