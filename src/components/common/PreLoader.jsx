import styled from "styled-components";

const PreLoaderContainer = styled.section({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	paddingBottom: "4rem",
	width: "100%",
});

const PreLoaderInner = styled.section({
	width: "15rem",
	height: "15rem",
	borderRadius: "50%",
	borderRight: "4px solid #fff",
	borderLeft: "4px solid #fff",
	position: "relative",
	animation: `animatePreLoader 0.3s infinite alternate`,
	"@keyframes animatePreLoader": {
		"0%": {
			transform: "rotate(0)",
		},
		"100%": {
			transform: " rotate(360deg)",
		},
	},
});

const PreLoader = ({ isLoading }) => {
	if (!isLoading) return null;
	return (
		<PreLoaderContainer>
			<PreLoaderInner />
		</PreLoaderContainer>
	);
};

export default PreLoader;
