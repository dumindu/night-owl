const themes = {
  "dark": {
    colors: {
      accentcolor: "#424242",
      tab_background_separator: "#424242",
      toolbar: "#363636",
      textcolor: "#8f8f8f",
      tab_line: "#363636",
      tab_loading: "#424242",

      toolbar_top_separator: "#333333",
      toolbar_vertical_separator: "#474747",
      toolbar_bottom_separator: "#333333",

      toolbar_field: "#363636",
      toolbar_field_text: "#8f8f8f",
      toolbar_field_border: "#333333",
      toolbar_field_separator: "#474747",

      toolbar_field_focus: "#363636",
      toolbar_field_text_focus: "#8f8f8f",
      toolbar_field_border_focus: "rgba(255, 255, 255, .07)",

      button_background_active: "rgba(255, 255, 255, .07)",
      button_background_hover: "rgba(255, 255, 255, .07)",
      icons_attention: "#a98e5c",

      ntp_background: "#363636",
      ntp_text: "#8f8f8f",

      popup: "#363636",
      popup_text: "#8f8f8f",
      popup_border: "#333333",
      popup_highlight: "rgba(255, 255, 255, .07)",
      popup_highlight_text: "#8f8f8f",

      sidebar: "#363636",
      sidebar_text: "#8f8f8f",
      sidebar_border: "#333333",
      sidebar_highlight: "rgba(255, 255, 255, .07)",
      sidebar_highlight_text: "#8f8f8f",
    }
  },
  "light": {
    colors: {
      accentcolor: "#e6e8e3",
      tab_background_separator: "#e6e8e3",
      toolbar: "#fcfbf9",
      textcolor: "#8e8e8c",
      tab_line: "#fcfbf9",
      tab_text: "#545351",
      tab_loading: "#e6e8e3",

      toolbar_top_separator: "#e6e8e3",
      toolbar_vertical_separator: "#e6e8e3",
      toolbar_bottom_separator: "#e6e8e3",

      toolbar_field: "#fcfbf9",
      toolbar_field_text: "#8e8e8c",
      toolbar_field_border: "#fcfbf9",
      toolbar_field_separator: "#e6e8e3",

      toolbar_field_focus: "#fcfbf9",
      toolbar_field_text_focus: "#8e8e8c",
      toolbar_field_border_focus: "rgba(30, 32, 28, .08)",

      button_background_active: "rgba(30, 32, 28, .08)",
      button_background_hover: "rgba(30, 32, 28, .08)",

      ntp_background: "#fcfbf9",
      ntp_text: "#545351",

      popup: "#fcfbf9",
      popup_text: "#545351",
      popup_border: "#c5c4c2",
      popup_highlight: "rgba(30, 32, 28, .08)",
      popup_highlight_text: "#545351",

      sidebar: "#fcfbf9",
      sidebar_text: "#545351",
      sidebar_border: "#c5c4c2",
      sidebar_highlight: "rgba(30, 32, 28, .08)",
      sidebar_highlight_text: "#545351",
    }
  }
};

let currentTheme;

function updateTheme(theme) {
  if (!theme) {
    theme = "dark";
  }
  currentTheme = theme;
  browser.storage.local.set({"theme": theme});
  browser.theme.update(themes[theme]);
  browser.browserAction.setIcon({
    path: "icons/" + theme + "-mode.svg"
  });
  browser.browserAction.setTitle({
    title: theme == "dark" ? 'Enable light theme ☀️' : 'Enable dark theme 🌑',
  });
}

function toggleTheme() {
  if (currentTheme === "dark") {
    updateTheme("light");
  } else {
    updateTheme("dark");
  }
}

browser.browserAction.onClicked.addListener(toggleTheme);

const setting = browser.storage.local.get();
setting.then(onGot);

function onGot(setting) {
  setting.theme ? updateTheme(setting.theme) : updateTheme()
}
storedSettings.then(onGot);
