import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  margin: 0;

  ${props => {
    if (props.maxLines)
      return css`
        word-break: break-word;

        @supports (-webkit-line-clamp: ${props.maxLines}) {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: initial;
          display: -webkit-box;
          -webkit-line-clamp: ${props.maxLines};
          -webkit-box-orient: vertical;
        }
      `;
  }}

  ${props => {
    switch (props.variant) {
      case 'title':
        return css`
          font-size: 24px;
          color: #484b4d;
          font-weight: bold;
        `;

      case 'subTitle':
        return css`
          font-size: 16px;
          color: #4c4f51;
          font-weight: bold;
        `;
      case 'regular':
        return css`
          font-size: 16px;
          color: #4c4f51;
          font-weight: regular;
        `;

      default:
        break;
    }
  }}
`;
