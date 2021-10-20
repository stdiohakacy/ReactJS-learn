import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

// class Directory extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             sections: [
//                 {
//                     title: 'hats',
//                     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                     id: 1,
//                     linkUrl: 'hats'
//                 },
//                 {
//                     title: 'jackets',
//                     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                     id: 2,
//                     linkUrl: 'jackets'
//                 },
//                 {
//                     title: 'sneakers',
//                     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                     id: 3,
//                     linkUrl: 'sneakers',
//                 },
//                 {
//                     title: 'womens',
//                     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                     size: 'large',
//                     id: 4,
//                     linkUrl: 'womens',
//                 },
//                 {
//                     title: 'mens',
//                     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                     size: 'large',
//                     id: 5,
//                     linkUrl: 'mens',
//                 }
//             ]
//         }
//     }

//     render() {
//         return 
//     }
// }

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)