import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory();
console.log(history)

export const goTo = (link) => () => {
  history.push(link, {});
};

