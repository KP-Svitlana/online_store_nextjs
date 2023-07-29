// import { StyledButton } from "./Button.styled";

export default function Button ({ text, handleLoadMore }) {
    return(
        <button onClick={handleLoadMore} type="submit">{text}</button>

    )
}


