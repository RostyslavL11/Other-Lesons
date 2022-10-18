// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// };

class Animal {
    static type = 'ANIMAL';

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
        
    }

    voice() {
        console.log('I am Animal!');
    }
}

// const animal = new Animal({
//     name: 'Animal',
//     age: 5, 
//     hasTail: true
// });

class Cat extends Animal {
    static type = 'CAT';

    constructor(options) {
        super(options);
        this.color = options.color;
    }

    voice() {
        super.voice();
        console.log('I am cat');
    }

    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7, 
    hasTail: true,
    color: 'black'
});
//////////////////////////////////
// практика з класами

// $el - зазвичай називаються елементи які мають в собі якусь DOM ноду 
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }
    
    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1', 
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2', 
    size: 120,
    color: 'blue'
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
})


////
// my practice
class Element {
    constructor(selector) {
        this.item = document.querySelector(selector)
    }

}

class Color extends Element {
    constructor(options) {
        super(options.selector)
        this.item.style.width = options.width + 'px'
        this.item.style.height = options.height + 'px'
        this.item.style.background = options.color
        this.item.style.borderRadius = '50%'
    }
}

const item = new Color({
    selector: '.newItem',
    width: 50,
    height: 50,
    color: 'yellow'
})

/////////

class Element2 {
    constructor() {
        this.item = document.querySelector(selector)
        this.item.style.width = options.width + 'px'
        this.item.style.height = options.height + 'px'
        this.item.style.background = options.color
        this.item.style.borderRadius = '50%'
    }

}

const item2 = new Color({
    selector: '.newItem2',
    width: 50,
    height: 50,
    color: 'orange'
})
///////////////////


class Element3 {
    constructor(selector, width, height, color) {
        this.selector = selector;
        this.width = width;
        this.height = height;
        this.color = color; 
    }

    createStyle() {
        this.width.style.width = this.width + '';
        this.height.style.height = this.height + '';
        this.color.style.color = this.color;
    }
}

const element3 = new Element3()
