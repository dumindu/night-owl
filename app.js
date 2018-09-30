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
      toolbar_field_border_focus: "#424242",

      button_background_active: "#424242",
      button_background_hover: "#424242",
      icons_attention: "#a98e5c",

      popup: "#363636",
      popup_text: "#8f8f8f",
      popup_border: "#333333",
      popup_highlight: "#424242",
      popup_highlight_text: "#8f8f8f",

      sidebar: "#363636",
      sidebar_text: "#8f8f8f",
      sidebar_border: "#333333",
      sidebar_highlight: "#424242",
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
      toolbar_field_border_focus: "#e6e8e3",

      button_background_active: "#e6e8e3",
      button_background_hover: "#e6e8e3",

      popup: "#fcfbf9",
      popup_text: "#545351",
      popup_border: "#c5c4c2",
      popup_highlight: "#e6e8e3",
      popup_highlight_text: "#545351",

      sidebar: "#fcfbf9",
      sidebar_text: "#545351",
      sidebar_border: "#c5c4c2",
      sidebar_highlight: "#e6e8e3",
      sidebar_highlight_text: "#545351",
    }
  }
};

function updateTheme(theme) {
  if (!theme) {
    theme = "dark";
  }
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
  let currentTheme = browser.storage.local.get("theme");
  if (currentTheme === "dark") {
    updateTheme("light");
  } else {
    updateTheme("dark");
  }
}

browser.browserAction.onClicked.addListener(toggleTheme);

const storedSettings = browser.storage.local.get();
storedSettings.then(storedSettings.theme ? updateTheme(storedSettings.theme) : updateTheme());
