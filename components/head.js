import NextHead from 'next/head'
import PropTypes from 'prop-types';

/**
 * The Head component.
 *
 * @version 1.0.0
 * @author [Raffaele Filiberti](https://github.com/raffaele-filiberti)
 */

const Head = (props) => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head
