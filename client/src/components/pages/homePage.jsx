import { Heading, Box } from '@chakra-ui/react'

import { heading, containerStyle } from '../others/style'

function HomePage() {
    return (
        <Box style={containerStyle(false)}>
            <Heading style={heading()}>
                HOME PAGE
            </Heading>
            welcome to home page<br/>
        </Box>
    )
}

export default HomePage