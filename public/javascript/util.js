/**
 * Stuff I need to do on load
 */
document.addEventListener("DOMContentLoaded", function () {
    setFormsRoute();
});

/**
 * set the parameters as a route
 * @param route - original form action
 * @param params - the parameters in order by form's route data
 * @returns {string} [route]/[param0]/[param1]...
 */
const paramsToRoute=function(route, ...params) {
    const routeParams = '/' + params.join('/');
    const finalRoute = route + routeParams;
    return finalRoute;
}

/**
 * set form action to route with params
 * from [url]?param1&param2 to [url]/param1/param2
 * This will be the onsubmit of every form
 * @param form the form that's submitting
 */
const formActionToParams=function(form) {
    const routeParams = form.dataset.route.split(('/'))
        .filter(p=>p.length>0);
    const params = Array.from(form.children)
        .filter(p=>routeParams.includes(p.name))
        .map(function(e){
            e.setAttribute('disabled','disabled');
            return e.value;
        });
    var route = form.action;
    const url = paramsToRoute(route, ...params);
    form.action = url;
    window.location.assign(route);
    // form.submit(); //this works but leaves trailing '?' which is ugly
}

/**
 * Set each form to use the formActionToParams method on submit
 */
const setFormsRoute = function () {
    const forms = document.getElementsByTagName('form');
    const submitTagForms = Array.from(forms).filter(form=>form.dataset.route); //!=null?
    submitTagForms.map(form=>form.addEventListener('submit',function(){formActionToParams(form)}));
}