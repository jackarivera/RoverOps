export default class TeleopPlugin {
    load() {
      // Logic to initialize the plugin
      console.log('Teleop Plugin Loaded');
    }
    getName() {
      return "Teleop";
    }
    getIcon() {
      return "keyboard icon";
    }
    getHref() {
      return "#teleop";
    }
    getSidebarElement() {
        return true;
    }
}