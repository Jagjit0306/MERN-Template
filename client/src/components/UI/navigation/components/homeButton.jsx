import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function HomeButton(props) {

    const homeButtonStyle = {
        border: '2px solid black',
        backgroundColor: 'white',
        borderRadius: '100%',
        height: '10vh',
        width: '10vh',
        userSelect: 'none',
        cursor: 'pointer',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        transform: props.mobile ? 'translateY(-2vh)':'',
    }

    return (
        <>
            <Link to='/home'>
                <Box style={homeButtonStyle}>
                    <Text color='black'>
                        Logo
                    </Text>
                </Box>
            </Link>
        </>
    )
}

export default HomeButton