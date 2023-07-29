import { StyledButton } from "./Button.styled";

export default function Button ({ text, handleLoadMore })  {
    return(
        <StyledButton onClick={handleLoadMore} type="submit">{text}</StyledButton>

    )
}


