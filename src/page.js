const Page = () => {
  const content = document.createElement('div');
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  const loadPage = () => {
    content.appendChild(main);
    content.appendChild(footer);
  };

  const setStyle = () => {
    content.id = 'content';
    main.id = 'site-main';
    footer.id = 'site-footer';
  };

  const start = () => {
    loadPage();
    setStyle();
  };

  return { start };
};

export { Page };
