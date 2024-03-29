// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: '"Roboto Mono for Powerline","Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
//"Roboto Mono for Powerline",
    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 0,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(249,38,114,0.8)',
    

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#f9d226',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#000',

    // terminal selection color
    selectionColor: 'rgba(248,28,229,0.3)',

    // border color (window, tabs)
    borderColor: '#000',

    // custom CSS to embed in the main window
    css: `
    .terms_19b1ydh {
    margin-top: 20px;
    }
    .header_windowHeader {
    display: none;
    }
    .tabs_nav {
    top: 0;
    }
    .terms_terms {
    margin-top: 0;
    }
    .terms_termsShifted {
    margin-top: 30px;
    }
    `,

    // custom CSS to embed in the terminal window
    termCSS: `
    `,
    //x-screen x-row { font-variant-ligatures: initial; }
    //

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '0px 0px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#C51E14',
      green: '#C7A329',
      yellow: '#1DC121',
      blue: '#068FF4',
      magenta: '#F92672',
      cyan: '#20C5C6',
      white: '#FFFFFF',
      lightBlack: '#777777',
      lightRed: '#FD6F6B',
      lightGreen: '#67F86F',
      lightYellow: '#FFFA72',
      lightBlue: '#6A76FB',
      lightMagenta: '#FD7CFC',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF',
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`

    // win cmd for installing plugins
    // shell: '',
    // shellArgs: ['--login'],

    // linux for using
    shell: 'wsl.exe', //'C:\\Windows\\System32\\bash.exe',
    shellArgs: [],

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    // quickEdit: true,

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
    hyperPostprocessing: {
      // defaults to `${HOME}/.hyper-postprocessing.js`
      // entry: 'C:\\Users\\amun\\hyper-postprocessing\\examples\\effects\\space-travel\\index.js',
      entry: 'C:\\Users\\amun\\hyper-postprocessing\\examples\\effects\\postprocessing-demo\\index.js',
      // entry: 'C:\\Users\\amun\\hyper-postprocessing\\postprocess\\src\\effects\\BloomEffect.js',
    },
    hyperStatusLine: {
      dirtyColor: 'salmon',
      aheadColor: 'ivory',
      footerTransparent: false,
    },
    // hyperSpotify: {
    //   position: 'top', // or 'bottom'
    //   margin: 'default', // or 'double' or custom value
    //   controlsPosition: 'default', // or 'left' or 'right'
    // },
    hyperTransparent: {
      backgroundColor: '#000',
      opacity: 0.55, //.83?
      vibrancy: 'ultra-dark' // ['', 'dark', 'medium-light', 'ultra-dark']
    },
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    // `hyperterm-material-dark`, // 'hyper-tabs-enhanced',
  `hyperpower`, 
  // `hyper-tab-icons`, // `hyperterm-visor`,
  // "hyper-snazzy",
  `hyperminimal`, 
  // "hyperline",
  // 'hyper-match', 
  "hyperterm-themed-scrollbar",
  'hyper-postprocessing',
  // "hyperterm-gruvbox-dark",
  // "hyperterm-monokai",
  // "hyperterm-firewatch",
  'gitrocket',
  'space-pull',
  'hyper-transparent',
  'hyper-blink',
  'hyperterm-alternatescroll',
  // 'hyper-ligatures',
  // 'hyper-font-ligatures',
  // 'hyper-statusline', 
], //, 

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
