import { styled } from "@stitches/react";

export const BaseButton = styled('button', {
    all: 'unset',
    border: 0,
    backgroundColor: '#00B37E',
    cursor: 'pointer',
    padding: '0 1rem',
    height: 38,
    borderRadius: '4px',
    marginRight: '0.5rem',

    transition: 'all 300ms ease-out',


    '&:hover': {
        backgroundColor: '#00875F'
    }
})