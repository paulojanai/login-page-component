import styled from "styled-components";
import colors from "../../themes/theme";

export const Container = styled.div`
  .flex-column {
    min-height: 100vh;
  }

  .container {
    background-color: white;
  }

  .left {
    height: 100vh;
    padding-top: 6em;
    padding-left: 6em;
    padding-right: 3em;
    background-color: ${colors.White};
  }

  .right {
    color: ${colors.White};
    background: linear-gradient(
      45deg,
      ${colors.BlackBlue},
      ${colors.DarkBlackBlue}
    );
  }

  .logo {
    width: 48px;
  }

  .illustration {
    width: 32em;
  }

  .caption-illustration {
    margin-top: 4em;
  }

  p.title {
    margin-top: 20px;
    font-size: 32px;
    font-weight: 500;
  }

  p span.dark-turquoise {
    color: ${colors.DarkTurquoise};
  }

  p.subtitle {
    font-size: 14px;
    color: ${colors.Gray};
  }

  .form {
    margin-top: 2em;
  }

  .form-title {
    margin-bottom: 1.4em;
  }

  h1 {
    font-size: 30px;
  }

  .footer-text {
    font-size: 12px;
    color: ${colors.DimGray};
  }

  @media (max-width: 768px) {
    .right {
      display: none;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  .btn-facebook {
    width: 100%;
    text-transform: uppercase;
    font-size: 0.8em;
    padding-top: 1.2em;
    padding-bottom: 1.2em;
  }
`;
