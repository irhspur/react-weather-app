var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return(
//             <h3>About Component</h3>
//         )
//     }
// });

var About = (props) => {
    return(
        <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application build on React.</p>
        <p>Tools used:</p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
            </li>
            <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - Used this weather map API.
            </li>
        </ul>
        </div>
    )
};

module.exports = About;