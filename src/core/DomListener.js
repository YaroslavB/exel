export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root for DomListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    console.log(this.listeners)
    this.listeners.forEach(listener =>{
      console.log(listener)
    })
  }
  removeDomListeners() {}
}
