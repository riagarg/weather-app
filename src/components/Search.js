import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

const Input = styled.input`
  width: 253px;
  height: 22px;
  background-image: url("searchicon.png");
  padding: 9px 13px 9px 41px;
  border-radius: 6px;
  border: 1px;
  opacity: 0px;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px 0px #0000000d;
  &::placeholder {
    color: #71717a;
    font-size: 16px;
  }
`;
export const Button = styled.button`
  width: 88px;
  height: 42px;
  padding: 9px 17px 9px 17px;
  border-radius: 6px;
  border: 1px;
  opacity: 0px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  margin-left: 4px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #374151;
  box-shadow: 0px 1px 2px 0px #0000000d;
`;
export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 120px;
`;

function SearchBar({ setCity, setDateRange }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(search);
    setSearch("");
    setDateRange(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <IconContext.Provider value={{ color: "gray" }}>
        <div
          style={{
            position: "absolute",
            marginLeft: "13px",
            marginTop: "12px",
          }}
        >
          <FaSearch />
        </div>
      </IconContext.Provider>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search another location"
        leftIcon={<FaSearch />}
      />

      <Button type="submit">Search</Button>
    </Form>
  );
}

export default SearchBar;
