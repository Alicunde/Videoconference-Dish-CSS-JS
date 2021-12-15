class Controls {

    // items to append
    _dish = false
    _scenary = false
    _controls = []
    _videos = true

    // contruct the controls
    constructor(dish, scenary) {

        // space of cameras
        this._dish = dish;

        // place to add controls
        this._scenary = scenary;

        // create controllers
        this.controllers();

        // run videos (demo)
        this.videos(100);

    }

    controllers() {
        // create add button
        this.button(false, 'plus', () => {
            this._dish.add();
            if (this._videos) {
                this.videos();
            }

        })

        // create remove button
        this.button(false, 'trash', () => {
            this._dish.delete();
        })

        // create video button
        this.button(false, 'tv', (element) => {

            // add active class
            element.classList.toggle('active');

            // set status of videos (totally for demo)
            this._videos = !this._videos;
            // generate videos
            this.videos(0, !this._videos);

        }, true)

        this.button(false, 'expand', () => {
            this._dish.expand();
        })
        this.button(false, 'tachometer-alt', () => {
            this.performance()
        })

        this.ratios()

        // github link
        this.link()
    }

    // create a button
    button(title = false, icon = false, callback, active) {

        // create div element
        let element = document.createElement('div');
        element.className = 'Button';

        // active class (by default creation)
        if (active) {
            element.classList.add('active');
        }

        // create icon with font line awesome
        if (icon) {

            let iconElement = document.createElement('i');
            iconElement.className = 'las la-' + icon;
            element.appendChild(iconElement);

        }

        // create title:
        if (title) {

            element.appendChild(document.createTextNode(title))

        }

        // event of button
        element.addEventListener("click", () => {
            callback(element);
        });

        // return to append later
        this.add(element)
        return element;
    }

    // function to create the link to github
    link() {

        // create link
        let element = document.createElement('a')
        element.href = 'https://github.com/Alicunde/Videoconference-Dish-CSS-JS'
        element.className = 'Link';
        element.innerHTML = 'Github'

        // add icon github
        let icon = document.createElement('i');
        icon.className = 'lab la-github';
        element.appendChild(icon);

        this.add(element)
    }

    // add controller to the array of controllers
    add(element) {
        if (element)
            this._controls.push(element)
        else
            console.log('element not found')
    }

    // render controllers in scenary
    append() {

        // create div of controllers
        let Controls = document.createElement('div');
        Controls.className = 'Controls';

        // render all buttons at the same time
        for (let i = 0; i < this._controls.length; i++) {
            Controls.appendChild(this._controls[i]);
        }

        // append into scenary
        this._scenary.appendChild(Controls);
    }

    // execute random videos (demo)
    videos(delay = 0, hide = false) {
        // get number of cameras
        let cameras = this._dish.cameras();

        // add or delete video per n camera
        let i = 0;
        while (i < cameras) {

            // timeout to make nice animation
            setTimeout((that, camera) => {

                // add or remove video
                that._dish.video(camera, (element) => {

                    // random current time of video (to make nice demo)
                    element.currentTime = Math.floor(Math.random() * 30);

                    // remove class loading (animation by CSS)
                    setTimeout(() => {
                        element.classList.remove('loading');
                    }, 100);

                }, hide);

            }, delay * i, this, i);

            i++;
        }
    }

    // execute 10 videos at the same time to check performance
    performance() {

        // number of videos to create
        var videos = 10;

        // interval (demo animation)
        var interval = 100;

        for (var i = 0; i < videos; i++) {
            setTimeout(function (that) {

                // add new camera
                that._dish.add();
                if (that._videos) {
                    that.videos();
                }

            }, i * interval, this)
        }


    }

    // aspect ratio buttons
    ratios() {

        // save the buttons to remove "active" class
        let buttons = [];

        // get ratios from Dish class
        let ratios = this._dish.ratios();

        // create 1 button per ratio
        for (let i = 0; i < ratios.length; i++) {

            let button = this.button(ratios[i], 'ratio', (element) => {

                // remove all actives on ratio
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].classList.remove('active');
                }
                element.classList.add('active');

                // edit aspect ratio
                this._dish.aspect(i);

            }, i === 0 ? true : false)

            // save in buttons
            buttons.push(button);
        }

    }
}