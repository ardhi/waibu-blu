/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * WaibuBlu class
   *
   * @class
   */
  class WaibuBlu extends this.app.baseClass.Base {
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
