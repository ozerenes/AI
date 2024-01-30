import React from 'react';

declare module 'react' {
    interface JSXIntrinsicElements {
        ai: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
}
