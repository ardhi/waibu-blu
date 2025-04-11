async function theme (ctx) {
  return {
    name: 'blu',
    css: ['$waibuBlu.asset:/css/blu.css'],
    framework: 'bootstrap'
  }
}

export default theme
