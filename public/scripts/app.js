'use strict';

console.log('App.js is running or not!');

var app = {
    title: 'User Registration',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        render();
    }
};

var appRoot1 = document.getElementById('app');

var render = function render() {

    var templateTwo = React.createElement(
        'div',
        null,
        app.options.values,
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                ' Add '
            )
        )
    );

    ReactDOM.render(templateTwo, appRoot1);
};

render();
