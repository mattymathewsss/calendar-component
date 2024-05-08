import styled from "styled-components";

const fireRed = "#db3d44";

export const CalendarWrapper = styled.div`
  // background: red;
  label {
    display: block;
  }
  position: relative;
  input {
    padding: 8px;
    border: 1px solid gainsboro;
  }
`;

export const DatePicker = styled.div`
  position: absolute;
  background: #fff;
  z-index: 1000;
  margin-top: 5px;
  min-height: 150px;

  .days-container,
  .dates-container {
    display: grid;
    grid-template-columns: repeat(7, 32px);
    gap: 15px;
    padding: 15px;
    color: black;
  }

  .month-container {
    display: grid;
    grid-template-columns: repeat(4, 50px);
    gap: 15px;
    padding: 15px;
    color: black;
    button {
      aspect-ratio: 1;
      font-size: 1rem;
      border-radius: 50%;
      border: none;
      background: transparent;
      color: black;
      cursor: pointer;

      &:hover {
        background: ${fireRed};
        color: #fff;
      }
    }
  }

  .days-container {
    span {
      font-weight: 600;
      text-align: center;
    }
  }

  .dates-container {
    button {
      aspect-ratio: 1;
      background: transparent;
      color: black;
      border: none;
      cursor: pointer;
      border-radius: 50%;

      &.is-today {
        color: ${fireRed};
        font-weight: bold;
        font-size: 1rem;
      }

      &.is-selected {
        background: ${fireRed};
        color: #fff;
      }

      &.disabled {
        cursor: not-allowed;
        opacity: 30%;
      }

      &:hover {
        background: red;
        color: #fff;
      }
    }
  }

  // .month-container {
  //   background: blue;
  //   // display: flex;
  //   // display: grid;
  //   // grid-template-columns: repeat(4, 1fr);
  // }
`;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 20px 0 10px;
  button {
    cursor: pointer;
  }
  .arrow {
    background: transparent;
    border-radius: 50%;
    border: none;
    color: black;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${fireRed};
    }
  }
`;
