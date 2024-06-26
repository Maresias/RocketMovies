import { createGlobalStyle } from 'styled-components' 


export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothings:grayscale;
        -moz-font-smoothings:antialiased;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 3px;  

        
    }


    

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-family: "Roboto", sans-serif;
    }

    a {
        text-decoration: none;
    }

    input{
        font-weight: 300;
        font-family: "Roboto", sans-serif;
    }

    input:focus{
        outline: none;
        box-shadow: 0px -20px 56px -28px inset ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    textarea:focus{
        box-shadow: 0px -20px 236px -28px inset ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
`