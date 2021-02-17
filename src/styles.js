import styled from "styled-components";
import { motion } from "framer-motion";

export const GS_Section = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const GS_Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h1 {
    font-weight: lighter;
  }
`;

export const GS_Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const GS_Hide = styled.div`
  overflow: hidden;
`;
