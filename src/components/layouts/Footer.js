import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className='page-footer #b71c1c red darken-4'>
        <div className='footer-copyright #b71c1c red darken-4'>
          <div className='container'>
            © 2020 Sri Sathya Sai Bhajan Search App{' '}
            <p className='grey-text text-lighten-4'>
              This site is a personal work, and the content is obtained from the
              website{' '}
              <a
                className='grey-text text-lighten-3'
                href='http://prasanthi-mandir-bhajan.net/'
              >
                Prashanthi Mandir Bhajans
              </a>
              {'.'} For details contact{' '}
              <a
                className='grey-text text-lighten-3'
                href='https://www.sainathramanathan.xyz/'
              >
                Website Administrator.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
