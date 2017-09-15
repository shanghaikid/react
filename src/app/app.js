const App = {};

App.init = () => {
    return 'app start';
}
App.render = function(node, text) {
    node.innerHTML = text;
};

export default App;