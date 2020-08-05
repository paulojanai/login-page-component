import styled from "styled-components";
import colors from "../../../themes/theme";

export const Container = styled.div`
  .btn {
    font-size: 0.8em;
    padding-top: 1.2em;
    padding-bottom: 1.2em;
  }

  .btn-primary {
    font-weight: 500;
    background-color: ${colors.DarkTurquoise};
    border: none;
    &:hover {
      box-shadow: 0em 0.3em 1.2em 0em ${colors.BoxTurquoise};
    }
    &:active {
      background-color: ${colors.Turquoise} !important;
      box-shadow: none !important;
    }
    &:focus {
      box-shadow: none !important;
    }
  }

  .btn-link {
    margin: 0;
    padding: 0;
    font-size: 12px;
    text-align: right;
    color: ${colors.DimGray};
  }

  .form-icons {
    position: relative;
    color: ${colors.Gray};
    top: 2em;
    left: 1.2em;
  }

  .focus-visible {
    border-color: ${colors.BlackBlue};
    box-shadow: none;
  }

  .form-group {
    margin-top: -1.6em;
  }

  input[type="password"],
  input[type="email"] {
    margin-top: -0.4em;
    border-color: ${colors.Gainsboro};
    font-size: 0.8em;
    padding-top: 2em;
    padding-bottom: 2em;
    padding-left: 3.8em;
  }
`;
