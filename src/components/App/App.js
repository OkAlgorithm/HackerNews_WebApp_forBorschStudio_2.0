import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from 'components/List';
import Loader from 'components/Loader';

import { colorsDark } from 'styles/palette';

import { Wrapper, Title, TitleWrapper } from './styles';

class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    this.setBodyBackgroundColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor() {
    document.body.style = `background-color: ${colorsDark.background};`;
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, hasMoreStores } = this.props;
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <TitleWrapper>
              <Title>
                <div>{'Hacker News Web App for Borsch Studio'}</div>
              </Title>
            </TitleWrapper>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStores}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible',
              }}
            >
              {<List stories={stories} />}
            </InfiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
