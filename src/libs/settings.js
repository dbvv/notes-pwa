export const defaultSettings = {
  theme: {
    options: [
      'light',
      'dark',
    ],
    selected: 'dark',
    type: 'select',
    label: 'Theme',
  },
  password: {
    type: 'password',
    label: 'Password',
    confirmForSave: true,
  },
  wrongPassword: {
    type: 'password',
    label: 'Wrong password',
    confirmForSave: true,
  },
}

export const getSettings = function () {
  let settings = {
    password: localStorage.getItem('setting.password'),
    wrongPassword: localStorage.getItem('setting.wrongPassword'),
  }

  if (localStorage.getItem('setting.theme')) {
    settings.theme = localStorage.getItem('setting.theme')
  } else {
    settings.theme = defaultSettings.theme.selected
  }
  return settings;
}
