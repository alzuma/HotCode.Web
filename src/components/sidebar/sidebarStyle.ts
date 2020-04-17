﻿import {
    blackColor,
    defaultFont,
    hexToRgb,
    infoColor,
    whiteColor,
} from '../../assests/dashboard';
import { createStyles, Theme } from '@material-ui/core/styles';

const sidebarStyle = (theme: Theme) =>
    createStyles({
        itemLink: {
            width: 'auto',
            transition: 'all 300ms linear',
            margin: '10px 15px 0',
            borderRadius: '3px',
            position: 'relative',
            display: 'block',
            padding: '10px 15px',
            backgroundColor: 'transparent',
            ...defaultFont,
        },
        list: {
            marginTop: '20px',
            paddingLeft: '0',
            paddingTop: '0',
            paddingBottom: '0',
            marginBottom: '0',
            listStyle: 'none',
            position: 'unset',
        },
        item: {
            position: 'relative',
            display: 'block',
            textDecoration: 'none',
            '&:hover,&:focus,&:visited,&': {
                color: whiteColor,
            },
        },
        itemIcon: {
            width: '24px',
            height: '30px',
            fontSize: '24px',
            lineHeight: '30px',
            float: 'left',
            marginRight: '15px',
            textAlign: 'center',
            verticalAlign: 'middle',
            color: 'rgba(' + hexToRgb(whiteColor) + ', 0.8)',
        },
        itemText: {
            ...defaultFont,
            margin: '0',
            lineHeight: '30px',
            fontSize: '14px',
            color: whiteColor,
        },
        background: {
            position: 'absolute',
            zIndex: 1,
            height: '100%',
            width: '100%',
            display: 'block',
            top: '0',
            left: '0',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            '&:after': {
                position: 'absolute',
                zIndex: '3',
                width: '100%',
                height: '100%',
                content: '""',
                display: 'block',
                background: blackColor,
                opacity: '.8',
            },
        },
        sidebarWrapper: {
            position: 'relative',
            height: 'calc(100vh - 75px)',
            overflow: 'auto',
            width: '260px',
            zIndex: 4,
            overflowScrolling: 'touch',
        },
        blue: {
            backgroundColor: infoColor[0],
            boxShadow:
                '0 12px 20px -10px rgba(' +
                hexToRgb(infoColor[0]) +
                ',.28), 0 4px 20px 0 rgba(' +
                hexToRgb(blackColor) +
                ',.12), 0 7px 8px -5px rgba(' +
                hexToRgb(infoColor[0]) +
                ',.2)',
            '&:hover,&:focus': {
                backgroundColor: infoColor[0],
                boxShadow:
                    '0 12px 20px -10px rgba(' +
                    hexToRgb(infoColor[0]) +
                    ',.28), 0 4px 20px 0 rgba(' +
                    hexToRgb(blackColor) +
                    ',.12), 0 7px 8px -5px rgba(' +
                    hexToRgb(infoColor[0]) +
                    ',.2)',
            },
        },
    });

export default sidebarStyle;
