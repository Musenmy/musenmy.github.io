window.onload = function () {
  setTimeout(function () {
    const userLocale = navigator.language || navigator.userLanguage;
    const currentUrl = window.location.href;
    console.log(userLocale, currentUrl);
    if (!userLocale.match(/ja/) && !currentUrl.match(/en/)) {
      //日本で英語見てるとき出す
      const messageElement = document.getElementById("message");
      const localeView = document.getElementById("localeView");
      const redirectLink = document.getElementById("redirect-link");
      let englishUrl;
      if (currentUrl.match(/\/ja\//))
        englishUrl = currentUrl.replace(/\/ja\//, "/en/");
      else englishUrl = "en/index.html";
      redirectLink.href = englishUrl;
      localeView.innerHTML = `Your locale is ${userLocale}.`;
      messageElement.style.display = "block";
    }
    if (userLocale.match(/ja/) && currentUrl.match(/en/)) {
      //英語で日本見てるとき出す
      const messageElement = document.getElementById("message");
      const localeView = document.getElementById("localeView");
      const redirectLink = document.getElementById("redirect-link");
      let japaneseUrl;
      if (currentUrl.match(/\/en\//))
        japaneseUrl = currentUrl.replace(/\/en\//, "/ja/");
      else japaneseUrl = "index.html";
      redirectLink.href = japaneseUrl;
      localeView.innerHTML = `Your locale is ${userLocale}.`;
      messageElement.style.display = "block";
    }
  },500);
};
