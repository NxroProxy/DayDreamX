class Windowing {
    constructor(dataApi) {
        this.dataApi = dataApi;
    }

    newWindow() {
        const currentUrl = location.href;

        window.open(currentUrl, '_blank', 'noopener,noreferrer');
    }

    aboutBlankWindow() {
        if (window === window.top) {
            const aboutBlankTab = window.open("about:blank");
            const iframe = document.createElement("iframe");
            iframe.src = location.href;
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            iframe.style.frameborder = "0";
            iframe.style.marginwidth = "0";
            iframe.style.position = "fixed";
            iframe.style.inset = "0px";
            iframe.style.outline = "none";
            iframe.style.scrolling = "auto";
            aboutBlankTab.document.title = document.title;
            const link = aboutBlankTab.document.createElement("link");
            link.rel = "icon";
            link.type = "image/x-icon";
            link.href = localStorage.getItem("favicon") || window.location.href + "/assets/imgs/icons/default.ico";
            aboutBlankTab.document.head.appendChild(link);
            aboutBlankTab.document.body.appendChild(iframe);

            window.location.href = this.dataApi.settingsApi.getItem("redirectUrl") || "https://google.com";
        } else {
            this.dataApi.logger.createLog("Already in About:Blank or site is in iframe");
        }
    }

    BlobWindow() {
        if (window === window.top) {
            const htmlContent = `
              <!DOCTYPE html>
              <html>
              <head>
                  <style>
                      body, html {
                          margin: 0;
                          padding: 0;
                          height: 100%;
                          overflow: hidden;
                      }
                      iframe {
                          width: 100%;
                          height: 100%;
                          border: none;
                      }
                  </style>
              </head>
              <body>
                  <iframe src="${location.href}" frameborder="0"></iframe>
              </body>
              </html>
          `;

            const blob = new Blob([htmlContent], { type: "text/html" });
            const blobUrl = URL.createObjectURL(blob);

            window.open(blobUrl, "_blank");
        } else {
            console.log("already in blob or iframe");
            alert("already in blob or iframe");
        }
    }
}

