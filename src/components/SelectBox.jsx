import styled from "styled-components";
import PropTypes from "prop-types";

const Select = styled.select({
	outline: "none",
	padding: ".5rem 1rem",
	backgroundColor: "#1A1A2E",
	color: "#b0b0b0",
	border: "1px solid #0F3460",
	borderRadius: ".2rem",
});

const SelectBox = ({ handleSelectBox }) => {
	return (
		<section>
			<Select
				defaultValue=""
				onChange={(e) => handleSelectBox(e.target.value)}
			>
				<option disabled value="">
					Select an Option !
				</option>{" "}
				<option value="top250">Top 250 Movies</option>{" "}
				<option value="popular">Most Popular Movies</option>{" "}
				<option value="soon">Coming Soon</option>
			</Select>
		</section>
	);
};

SelectBox.propTypes = {
	handleSelectBox: PropTypes.func,
};

export default SelectBox;
