import styled from "styled-components";
import WeatherCard from "./WeatherCard.js";
import RightImg from "../assets/right.png";
import LeftImg from "../assets/left.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 911px;
`;

const Image = styled.img``;
const ArrowButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  border: 1px;
  background-color: #ffffff;
  angle: 180 deg;
  box-shadow: 0px 1px 2px 0px #0000000d;
  border: 1px solid #d1d5db;
  text-align: center;
`;

function RightButton({ date, setDate }) {
  return (
    <ArrowButton
      onClick={() => {
        setDate(date < 10 ? date + 5 : date);
      }}
    >
      <Image src={RightImg} />
    </ArrowButton>
  );
}
function LeftButton({ date, setDate }) {
  return (
    <ArrowButton
      onClick={() => {
        setDate(date - 5);
      }}
    >
      <Image src={LeftImg} />
    </ArrowButton>
  );
}

const Slider = ({ city, dateRange, setDateRange }) => {

  return (
    <Container>
      <LeftButton date={dateRange} setDate={setDateRange} />
      <WeatherCard city={city} dateRange={dateRange} />
      <RightButton date={dateRange} setDate={setDateRange} />
    </Container>
  );
};
export default Slider;
