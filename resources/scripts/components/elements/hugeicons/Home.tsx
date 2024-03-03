import * as React from 'react';
import { HugeIconProps } from './props';

const HugeIconsHome = (props: HugeIconProps) => {
    return (
        <svg
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21.6328 10.9887C21.8611 10.4595 21.7639 9.80273 21.2545 9.35692L15.395 4.2296C15.2791 4.12821 15.1612 4.02205 15.0409 3.91379C14.1767 3.1359 13.1924 2.25 11.9997 2.25C10.807 2.25 9.82272 3.13589 8.95847 3.91378C8.8382 4.02204 8.72025 4.1282 8.60439 4.22959L2.74491 9.35692C2.23543 9.80273 2.13831 10.4595 2.36662 10.9887C2.54339 11.3985 2.90593 11.718 3.36751 11.8355C3.57479 11.8883 3.67843 11.9147 3.72051 11.9686C3.76258 12.0225 3.76289 12.1089 3.76351 12.2818C3.76646 13.1014 3.77292 14.9211 3.77292 15.1392C3.7729 16.4846 3.77288 17.5762 3.89806 18.4362C4.02915 19.3368 4.31065 20.0912 4.95257 20.6841C5.58601 21.2691 6.37767 21.5185 7.32313 21.6359C8.24198 21.75 9.41323 21.75 10.88 21.75H13.1193C14.5861 21.75 15.7574 21.75 16.6762 21.6359C17.6217 21.5185 18.4134 21.2691 19.0468 20.6841C19.6887 20.0912 19.9702 19.3368 20.1013 18.4362C20.2265 17.5762 20.2265 16.4846 20.2265 15.1392C20.2265 14.9211 20.2329 13.1014 20.2359 12.2818C20.2365 12.1089 20.2368 12.0225 20.2789 11.9686C20.3209 11.9146 20.4246 11.8883 20.6319 11.8355C21.0934 11.718 21.456 11.3985 21.6328 10.9887ZM12 14.75C11.3096 14.75 10.75 15.3096 10.75 16C10.75 16.6904 11.3096 17.25 12 17.25H12.009C12.6993 17.25 13.259 16.6904 13.259 16C13.259 15.3096 12.6993 14.75 12.009 14.75H12Z'
                fill={props.fill}
            />
        </svg>
    );
};

export default HugeIconsHome;
