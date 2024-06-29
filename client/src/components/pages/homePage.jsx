import { useState, useEffect } from 'react'

import { Heading, Box } from '@chakra-ui/react'

import postData from '../../backend/postData'

import { heading, containerStyle } from '../others/style'

function HomePage() {
    let [user, setUser] = useState()

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