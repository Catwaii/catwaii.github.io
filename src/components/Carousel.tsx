import * as React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';

interface breadCrumbTitlesInterface {
  [key: string]: string | undefined;
}

const breadCrumbTitles: breadCrumbTitlesInterface = {
  '': 'Home',
  'about': 'About',
  'contacts/1': 'Contact',
  'contacts/2': 'Another Contact',
};

const CarouselItem: React.FC = () => {
  const match = useLocation();
  const path =
    match.pathname!.length > 1 && match.pathname![match.pathname!.length - 1] === '/'
      ? match.pathname!.slice(0, -1)
      : match.pathname;

  const title = breadCrumbTitles[path!.split('/').slice(-1)[0]];
  const to = title === undefined ? '/' : path;

  return (
    <span>
      <Link to={to}>{title || 'Page Not Found'}</Link>
      {!matchPath(`{title}`,match.pathname) && title && ' / '}
      {title && (
        <Link
          to={`${match.pathname === '/' ? '' : match.pathname}/:path`}
        ></Link>
      )}
    </span>
  );
};

export const Carousel: React.FC = () => (
  <CarouselItem/>
);
