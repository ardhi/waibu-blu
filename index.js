async function factory (pkgName) {
  const me = this

  return class WaibuBlu extends this.lib.BajoPlugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'wblu'
      this.dependencies = ['waibu-mpa', 'waibu-bootstrap']
      this.config = {
        waibu: {
          prefix: 'blu'
        }
      }
    }
  }
}

export default factory
