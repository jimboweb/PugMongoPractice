document.addEventListener("DOMContentLoaded", function () {
    setFormsRoute();
});

const paramsToRoute=function(route, ...params) {
    const routeParams = '/' + params.join('/');
    const finalRoute = route + routeParams;
    return finalRoute;
}

const formActionToParams=function(form) {
    const routeParams = form.dataset.submit.split(('/'));
    const params = routeParams.map(p=>form.children
                    .filter(e=>e.name===p))
                    .reduce(function(acc,cur){acc.push(cur)},[]);
    var route = form.action;
    const url = paramsToRoute(route, ...params);
    form.action = url;
    form.submit();
}

const setFormsRoute = function () {
    const forms = document.getElementsByTagName('form');
    forms.map(form=>formActionToParams(form));
}