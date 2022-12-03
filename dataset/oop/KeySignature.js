class KeySignature {
    // Define Fields
    constructor(id, name, name_long, scale) {
        this.id = id;
        this.name = name;
        this.name_long = name_long;
        this.scale = scale;
    }

    // Define Methods
    getName() {
        return this.name;
    }

    getKey() {
        return `Key of ${this.name}`
    }
}


module.export = KeySignature;