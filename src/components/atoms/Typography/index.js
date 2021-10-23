import React from 'react';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Paragraph } from './styles';

const typographyPropTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,

  maxLines: PropTypes.number,

  className: PropTypes.string,

  variant: PropTypes.oneOf(['regular', 'subTitle', 'title']),
};

const typographyDefaultProps = {
  maxLines: null,
  className: null,
  variant: 'regular',
};

/** Typography displays words and characters at various sizes. */
function Typography({ children, maxLines, className, variant, ...rest }) {
  return (
    <Paragraph
      maxLines={maxLines}
      className={className}
      variant={variant}
      {...rest}
    >
      {children}
    </Paragraph>
  );
}

Typography.propTypes = typographyPropTypes;

Typography.defaultProps = typographyDefaultProps;

export { Typography };
