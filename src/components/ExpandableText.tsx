import React, { ReactNode, useState } from "react";
import styled from "styled-components";

const Par = styled.p<{ $ofBool?: boolean }>`
  white-space: nowrap;
  overflow: ${(props) => (props.$ofBool ? "hidden" : "none")};
  text-overflow: ellipsis;
  max-width: 100px;
`;
interface Props {
  children: ReactNode;
}
const ExpandableText = ({ children }: Props) => {
  const [overFlow, setOverflow] = useState(true);

  const handleClick = () => {
    //setText();
  };
  return (
    <>
      <Par $ofBool={overFlow}>{children}</Par>
      <button onClick={() => setOverflow(!overFlow)}>Click me</button>
    </>
  );
};

export default ExpandableText;
