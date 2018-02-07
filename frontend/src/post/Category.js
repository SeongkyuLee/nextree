import React from 'react';

export function Category({category}) {
    return (
        <div className={Category}>
            <hr/>
            {category}
            <hr/>
        </div>
    )
}
