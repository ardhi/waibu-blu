async function factory (pkgName) {
  const me = this

  class WaibuBlu extends this.lib.Plugin {
    static alias = 'wblu'
    static dependencies = ['waibu-mpa', 'waibu-bootstrap']

    constructor () {
      super(pkgName, me.app)
      this.config = {
        waibu: {
          prefix: 'blu'
        }
      }
    }
  }

  return WaibuBlu
}

export default factory
