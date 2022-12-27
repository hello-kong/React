import React, {memo} from 'react';
import Collapse from '../components/Collapse';

const content = [{
    title: 'Open Collapsible',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}, {
    title: 'Open Collapsible',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}, {
    title: 'Open Collapsible',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}, {
    title: 'Open Collapsible',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}, {
    title: 'Open Collapsible',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}]

const CollapseEx = memo(() => {
    return (
        <div>
            <h2>CollapseEx</h2>
            {/* content.map((v, i) => 
                <Collapse key={i} title={v.title} content={v.content} />
                보통은 아래처럼 구조분해해서 씀.
            )} */}
            {content.map(({title, content}, i) => 
            <Collapse key={i} title={title} content={content}/>)}
        </div>
    );
});

export default CollapseEx;