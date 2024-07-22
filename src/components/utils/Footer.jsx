import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

const pages = [
    "Home",
    "Memebership",
    "Write",
    "Pricing"
]

const Footer = () => {
    return (
        <div className="center">
            <ButtonGroup variant="text" aria-label="text button group" sx={{ marginTop: "3rem", color: "#444746" }}>
                {
                    pages.map((page, index) => (
                        <Button key={index} sx={{ textTransform: "capitalize", color: "#444746" }}>{page}</Button>
                    ))
                }
            </ButtonGroup>
        </div>
    )
}

export default Footer