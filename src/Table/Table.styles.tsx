import styled from "styled-components";

// here we can check if we have rem/em/px/%
export const Wrapper = styled.table<any>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  margin-bottom: 20px;
  caption-side: bottom;
  border-collapse: collapse;
  width: ${(props) => (props.width ? props.width : "100%")};
  ${(props) => ({
    ...(props.stripped && {
      "tr:nth-of-type(2n+1)": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    }),
  })}};
`;

export const Head = styled.thead`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  tr {
    background: none !important;
  }
`;

export const Body = styled.tbody`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
`;

export const Footer = styled.tfoot``;

export const Row = styled.tr`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
`;

export const Coltd = styled.td<any>`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-top: 1px solid rgb(229, 229, 229);
  padding: ${(props) => (props.size === "medium" ? "13px 4px" : "4px")};
  text-align: ${(props) => props.align};
`;

export const Colth = styled.th<any>`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  font-weight: 500;
  color: rgb(120, 120, 120);
  padding: ${(props) => (props.size === "medium" ? "13px 4px" : "4px")};
  text-align: ${(props) => props.align};
`;

export const Pagination = styled.div`
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: flex-end;
`;

export const RowsPerPageOptions = styled.div`
  span {
    margin: 0 0.15rem;
  }
`;

export const RowsPerPage = styled.div`
  margin-right: 1.5rem;
  select {
    border: none;
    cursor: pointer;
    margin-left: 5px;
    background-color: transparent;
    word-wrap: normal;
  }
`;

export const PageControls = styled.div`
  margin-left: 1.5rem;
  button {
    span {
      font-size: 1.25rem;
      color: black;
    }
  }
`;
