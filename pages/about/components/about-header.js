import React from 'react';
import { TextContainer } from 'idyll-components';

const formatTitle = (title) => {
  return title.reduce((memo, str, i) => {
    if (i < title.length - 1) {
      return memo.concat([<span key={str}>{str}</span>, <br key={i} />]);
    }
    return memo.concat([<span key={str}>{str}</span>]);
  }, [])
}
class Header extends React.PureComponent {
  render() {
    const {longTitle, headerImage, ...props} = this.props;
    return (
      <div className={'article-header'} style={{marginTop: 0}}>
        <div className="parametric-header-text">
          <div className="parametric-header-hed" style={{position: 'relative', zIndex: 2}}>
            <TextContainer {...props}>
              <div style={{position: 'relative', width: 720}}>
                <div className="parametric-header-hed-text" style={{width: 720, maxWidth: 720, fontSize: '12px', lineHeight: '20px'}}>
                  <div>
                    <div className="parametric-long-title" >
                      {formatTitle(this.props.longTitle)}
                    </div>
                    <div style={{fontSize: 16, fontWeight: 'bold', marginTop: 0, marginBottom: '2em'}}>
                      {props.date}
                    </div>
                  </div>
                </div>
              </div>
            </TextContainer>
          </div>
        </div>
        <TextContainer {...props}>
          <div className="parametric-article-dek" style={{fontFamily: 'Graphik Web', fontWeight: 500}}>
            {this.props.dek}
          </div>
        </TextContainer>
      </div>
    );
  }
}

Header._idyll = {
  name: "Header",
  tagType: "closed",
  props: [{
    name: "title",
    type: "string",
    example: '"Article Title"'
  }, {
    name: 'subtitle',
    type: 'string',
    example: '"Article subtitle."'
  }, {
    name: 'author',
    type: 'string',
    example: '"Author Name"'
  }, {
    name: 'authorLink',
    type: 'string',
    example: '"author.website"'
  }]
}

export default Header;
