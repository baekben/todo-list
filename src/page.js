const Page = (() => {
  const body = document.body;
  const content = document.createElement('div');
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  const loadPage = () => {
    content.appendChild(main);
    content.appendChild(footer);
    body.appendChild(content);
  };

  const setStyle = () => {
    body.id = 'site-body';
    content.id = 'content';
    main.id = 'site-main';
    footer.id = 'site-footer';
  };

  const start = () => {
    loadPage();
    setStyle();
  };

  return { start };
})();

export { Page };
