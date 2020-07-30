import { Page } from './page';
const Index = (() => {
  const render = () => {
    Page.start();
  };
  return { render };
})();

Index.render();
