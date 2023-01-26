import React from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl className="pagination">
        {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
            <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
            </PageSpan>
            </PageLi>
        ))}
        </PageUl>
      </nav>
    </div>
  );
};

const PageUl = styled.ul`
  margin : auto;
  width : 380px;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;
  background-color: white;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 50px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;


export default Pagination;